import { useState, useEffect, useCallback, useRef } from 'react';
import { Box, Typography, Container, IconButton, Chip, Fade, Tooltip } from '@mui/material';
import { ChevronLeft, ChevronRight, PlayArrow, Pause, FilterList } from '@mui/icons-material';
import { projects } from '../constants/projects';
import { colors } from '../theme/colors';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const sectionRef = useRef(null);

  // Get unique statuses for filtering
  const statuses = ['All', ...new Set(projects.map(p => p.status))];
  
  // Filter projects
  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(p => p.status === selectedFilter);

  // 3D Coverflow navigation
  const navigateCoverflow = useCallback((direction) => {
    if (direction === 'left') {
      setActiveIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
    } else {
      setActiveIndex((prev) => (prev + 1) % filteredProjects.length);
    }
  }, [filteredProjects.length]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      navigateCoverflow('right');
    }, 3500);

    return () => clearInterval(interval);
  }, [isAutoPlay, navigateCoverflow]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        navigateCoverflow('left');
      } else if (e.key === 'ArrowRight') {
        navigateCoverflow('right');
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsAutoPlay(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [navigateCoverflow]);

  // Reset active index when filter changes
  useEffect(() => {
    setActiveIndex(0);
  }, [selectedFilter]);

  // Auto-start auto-play when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAutoPlay(true);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    const current = sectionRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  // Get transform style for 3D coverflow
  const getCoverflowStyle = (index) => {
    const diff = index - activeIndex;
    const absPos = Math.abs(diff);
    
    if (absPos > 2) {
      return {
        opacity: 0,
        transform: 'translateX(0) translateZ(-400px) rotateY(0deg) scale(1)',
        zIndex: 0,
        pointerEvents: 'none',
      };
    }
    
    // Center card: straight forward, no rotation
    if (absPos === 0) {
      const scale = isHovered ? 1.05 : 1;
      return {
        opacity: 1,
        transform: `translateX(0) translateZ(0px) rotateY(0deg) scale(${scale})`,
        zIndex: 20,
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        filter: 'brightness(1.05)',
      };
    }
    
    // Side cards: tilted with 3D effect and more distance
    const side = diff < 0 ? -1 : 1;
    const rotation = side * 45;
    const translateX = diff * 300;
    const translateZ = -absPos * 450;
    const scale = isHovered ? 0.80 : 1;
    
    return {
      opacity: isHovered ? 0.4 : 0.6,
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotation}deg) scale(${scale})`,
      zIndex: 10 - absPos,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    };
  };

  return (
    <Box
      ref={sectionRef}
      id="projects"
      sx={{
        height: '100vh',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)',
        py: { xs: 2, md: 2 },
        position: 'relative',
        scrollMarginTop: '80px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Animated background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 80%, rgba(206, 17, 38, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 122, 61, 0.08) 0%, transparent 50%),
            linear-gradient(45deg, transparent 49%, rgba(206, 17, 38, 0.02) 50%, transparent 51%),
            linear-gradient(-45deg, transparent 49%, rgba(0, 122, 61, 0.02) 50%, transparent 51%)
          `,
          backgroundSize: '100% 100%, 100% 100%, 20px 20px, 20px 20px',
          animation: 'backgroundPulse 8s ease-in-out infinite',
          '@keyframes backgroundPulse': {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0.7 },
          },
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Header Section */}
        <Box
          sx={{
            mb: 1.5,
            textAlign: 'center',
            animation: 'fadeInDown 0.8s ease-out',
            '@keyframes fadeInDown': {
              '0%': { opacity: 0, transform: 'translateY(-30px)' },
              '100%': { opacity: 1, transform: 'translateY(0)' },
            },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '1.7rem', md: '2.1rem' },
              letterSpacing: '-0.02em',
              color: colors.softText,
              textShadow: `0 0 30px ${colors.softRed}20`,
            }}
          >
            My Projects
          </Typography>
        </Box>

        {/* Filter and Controls Bar */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
            mb: 1.5,
            flexWrap: 'wrap',
          }}
        >
          {/* Filter Toggle */}
          <Tooltip title="Toggle Filters" arrow>
            <IconButton
              onClick={() => setShowFilters(!showFilters)}
              sx={{
                bgcolor: showFilters ? colors.softRed : 'rgba(255, 255, 255, 0.95)',
                color: showFilters ? '#ffffff' : colors.softText,
                backdropFilter: 'blur(10px)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  bgcolor: colors.softRed,
                  color: '#ffffff',
                  transform: 'scale(1.05)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <FilterList />
            </IconButton>
          </Tooltip>

          {/* Auto-play Toggle */}
          <Tooltip title={isAutoPlay ? "Pause Auto-play" : "Start Auto-play"} arrow>
            <IconButton
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              sx={{
                bgcolor: isAutoPlay ? colors.softGreen : 'rgba(255, 255, 255, 0.95)',
                color: isAutoPlay ? '#ffffff' : colors.softText,
                backdropFilter: 'blur(10px)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  bgcolor: colors.softGreen,
                  color: '#ffffff',
                  transform: 'scale(1.05)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              {isAutoPlay ? <Pause /> : <PlayArrow />}
            </IconButton>
          </Tooltip>
        </Box>

        {/* Filter Chips */}
        <Fade in={showFilters}>
          <Box
            sx={{
              position: 'absolute',
              top: { xs: '120px', md: '100px' },
              left: '50%',
              transform: 'translateX(-50%)',
              display: showFilters ? 'flex' : 'none',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 1,
              flexWrap: 'wrap',
              zIndex: 50,
              p: 1,
              borderRadius: 2,
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
              animation: 'slideDown 0.3s ease-out',
              '@keyframes slideDown': {
                '0%': { opacity: 0, transform: 'translateX(-50%) translateY(-10px)' },
                '100%': { opacity: 1, transform: 'translateX(-50%) translateY(0)' },
              },
            }}
          >
            {statuses.map((status) => (
              <Chip
                key={status}
                label={status}
                onClick={() => setSelectedFilter(status)}
                sx={{
                  background: selectedFilter === status
                    ? `linear-gradient(135deg, ${colors.softRed} 0%, #ff6b6b 100%)`
                    : 'rgba(255, 255, 255, 0.95)',
                  color: selectedFilter === status ? '#ffffff' : colors.softText,
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  backdropFilter: 'blur(10px)',
                  border: selectedFilter === status
                    ? '2px solid rgba(255, 255, 255, 0.3)'
                    : '1px solid rgba(0, 0, 0, 0.1)',
                  boxShadow: selectedFilter === status
                    ? '0 4px 12px rgba(206, 17, 38, 0.3)'
                    : '0 2px 8px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-2px) scale(1.05)',
                    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
                  },
                }}
              />
            ))}
          </Box>
        </Fade>

        {/* 3D View Container */}
        <Box
          sx={{
            flex: 1,
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Left Arrow */}
          <IconButton
            onClick={() => navigateCoverflow('left')}
            sx={{
              position: 'absolute',
              left: 16,
              zIndex: 100,
              bgcolor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              '&:hover': {
                bgcolor: colors.softRed,
                color: '#ffffff',
                transform: 'scale(1.1)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <ChevronLeft />
          </IconButton>

          {/* 3D Container */}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              perspective: '2000px',
              perspectiveOrigin: '50% 50%',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: '400px',
                height: '500px',
                transformStyle: 'preserve-3d',
              }}
            >
              {filteredProjects.map((project, index) => (
                <Box
                  key={project.title}
                  onClick={() => {
                    setActiveIndex(index);
                    setIsAutoPlay(false);
                  }}
                  onMouseEnter={() => index === activeIndex && setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  sx={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    marginLeft: '-180px',
                    marginTop: '-250px',
                    cursor: 'pointer',
                    ...getCoverflowStyle(index),
                  }}
                >
                  <ProjectCard 
                    project={project} 
                    index={index}
                    isDragging={false}
                    isActive={index === activeIndex}
                  />
                </Box>
              ))}
            </Box>
          </Box>

          {/* Right Arrow */}
          <IconButton
            onClick={() => navigateCoverflow('right')}
            sx={{
              position: 'absolute',
              right: 16,
              zIndex: 100,
              bgcolor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              '&:hover': {
                bgcolor: colors.softGreen,
                color: '#ffffff',
                transform: 'scale(1.1)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <ChevronRight />
          </IconButton>
        </Box>

        {/* Project Indicators */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1,
            mt: 1,
            animation: 'fadeIn 1s ease-out 0.5s both',
            '@keyframes fadeIn': {
              '0%': { opacity: 0 },
              '100%': { opacity: 1 },
            },
          }}
        >
          {filteredProjects.map((_, index) => (
            <Box
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setIsAutoPlay(false);
              }}
              sx={{
                width: index === activeIndex ? 32 : 8,
                height: 8,
                borderRadius: 4,
                background: index === activeIndex
                  ? `linear-gradient(135deg, ${colors.softRed} 0%, ${colors.softGreen} 100%)`
                  : 'rgba(0, 0, 0, 0.2)',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: index === activeIndex
                  ? '0 2px 8px rgba(206, 17, 38, 0.4)'
                  : 'none',
                '&:hover': {
                  background: index === activeIndex
                    ? `linear-gradient(135deg, ${colors.softRed} 0%, ${colors.softGreen} 100%)`
                    : 'rgba(0, 0, 0, 0.4)',
                  transform: 'scale(1.2)',
                },
              }}
            />
          ))}
        </Box>

        {/* Hint */}
        <Box
          sx={{
            textAlign: 'center',
            mt: 1,
            animation: 'fadeIn 1s ease-out 1s both',
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(0, 0, 0, 0.5)',
              fontSize: '0.85rem',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              flexWrap: 'wrap',
            }}
          >
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                animation: 'rotate3D 3s ease-in-out infinite',
                '@keyframes rotate3D': {
                  '0%, 100%': { transform: 'rotateY(-15deg)' },
                  '50%': { transform: 'rotateY(15deg)' },
                },
              }}
            >
              🎭
            </Box>
            Click cards • Use arrows or keyboard • Press Space for auto-play
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsSection;
