import { Box, IconButton } from '@mui/material';
import { PlayArrow, Pause } from '@mui/icons-material';
import { useState, useEffect, useRef } from 'react';

const AudioControl = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Lazy load audio after a short delay
    const timer = setTimeout(() => {
      const audio = new Audio('/audio/background-music.mp3');
      audio.volume = 0.5;
      audio.loop = false;
      audioRef.current = audio;

      // Audio event listeners
      const handleCanPlay = () => {
        setAudioLoaded(true);
        attemptAutoplay();
      };
      const handlePlay = () => {
        setIsPlaying(true);
        setAutoplayBlocked(false);
      };
      const handlePause = () => setIsPlaying(false);
      const handleEnded = () => {};
      const handleError = (error) => {
        setAudioLoaded(false);
      };

      audio.addEventListener('canplay', handleCanPlay);
      audio.addEventListener('play', handlePlay);
      audio.addEventListener('pause', handlePause);
      audio.addEventListener('ended', handleEnded);
      audio.addEventListener('error', handleError);

      // Function to attempt autoplay
      const attemptAutoplay = async () => {
        try {
          await audio.play();
          setIsPlaying(true);
          setAutoplayBlocked(false);
        } catch (error) {
          setAutoplayBlocked(true);
        }
      };

      // Try autoplay on mount
      attemptAutoplay();

      // Add click listener to document for autoplay unlock
      const handleDocumentClick = () => {
        if (autoplayBlocked && audioRef.current) {
          audioRef.current.play().then(() => {
            setIsPlaying(true);
            setAutoplayBlocked(false);
          }).catch(() => {});
          document.removeEventListener('click', handleDocumentClick);
        }
      };
      document.addEventListener('click', handleDocumentClick);

      // Cleanup
      return () => {
        audio.removeEventListener('canplay', handleCanPlay);
        audio.removeEventListener('play', handlePlay);
        audio.removeEventListener('pause', handlePause);
        audio.removeEventListener('ended', handleEnded);
        audio.removeEventListener('error', handleError);
        document.removeEventListener('click', handleDocumentClick);
        audio.pause();
      };
    }, 1500); // 2 second delay

    return () => clearTimeout(timer);
  }, [autoplayBlocked]);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 20,
        right: 20,
        zIndex: 1000,
      }}
    >
      <IconButton
        onClick={toggleAudio}
        sx={{
          backgroundColor: autoplayBlocked ? 'rgba(255, 193, 7, 0.9)' : 'rgba(255,255,255,0.9)',
          backdropFilter: 'blur(10px)',
          border: autoplayBlocked ? '1px solid rgba(255, 193, 7, 0.3)' : '1px solid rgba(255,255,255,0.2)',
          color: autoplayBlocked ? '#f57c00' : '#CE1126',
          width: 50,
          height: 50,
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          '&:hover': {
            backgroundColor: autoplayBlocked ? 'rgba(255, 193, 7, 0.95)' : 'rgba(255,255,255,0.95)',
            transform: 'scale(1.05)',
          },
          transition: 'all 0.2s ease',
        }}
        title={autoplayBlocked ? 'Click to start audio' : (isPlaying ? 'Pause audio' : 'Play audio')}
      >
        {isPlaying ? <Pause /> : <PlayArrow />}
      </IconButton>
    </Box>
  );
};

export default AudioControl; 