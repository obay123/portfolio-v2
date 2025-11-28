'use client';

import { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import AudioControl from './components/AudioControl';
import ProfilePhoto from './components/ProfilePhoto';
import HeroContent from './components/HeroContent';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Fab, Zoom } from '@mui/material';

export default function Home() {
  // Generate random left positions for beams on client only
  const [beamPositions, setBeamPositions] = useState(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const vw = window.innerWidth;
      const min = vw * 0.10;
      const max = vw * 0.80;
      const beamCount = 5;
      const minGap = vw * 0.10;
      let positions = [];
      for (let i = 0; i < beamCount; i++) {
        let pos;
        let tries = 0;
        do {
          pos = Math.floor(Math.random() * (max - min)) + min;
          tries++;
        } while (positions.some(p => Math.abs(p - pos) < minGap) && tries < 10);
        positions.push(pos);
      }
      setBeamPositions(positions);
    }
  }, []);

  // Add scroll handler for smooth scroll to skills
  const handleScrollToSkills = () => {
    const section = document.getElementById('skills');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Add scroll handler for smooth scroll to projects
  const handleScrollToProjects = () => {
    const section = document.getElementById('projects');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [showUpArrow, setShowUpArrow] = useState(false);
  const [showDownArrow, setShowDownArrow] = useState(true);
  const scrollContainerRef = useRef(null);

  // Show up arrow when not at the top, down arrow when not at the bottom
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const scrollTop = container.scrollTop;
        const scrollHeight = container.scrollHeight;
        const clientHeight = container.clientHeight;
        const isAtBottom = scrollHeight - scrollTop - clientHeight < 50;
        
        setShowUpArrow(scrollTop > 50);
        setShowDownArrow(!isAtBottom);
      }
    };
    const ref = scrollContainerRef.current;
    if (ref) {
      ref.addEventListener('scroll', handleScroll);
      // Initial check
      handleScroll();
      // Prevent mouse wheel scroll
      const preventWheel = (e) => {
        e.preventDefault();
      };
      ref.addEventListener('wheel', preventWheel, { passive: false });
      return () => {
        ref.removeEventListener('scroll', handleScroll);
        ref.removeEventListener('wheel', preventWheel);
      };
    }
    return () => {};
  }, []);

  const handleScrollToPrevious = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollTop = container.scrollTop;
      
      // Determine which section we're in and scroll to the previous one
      const skillsSection = document.getElementById('skills');
      const projectsSection = document.getElementById('projects');
      
      if (skillsSection && projectsSection) {
        const skillsTop = skillsSection.offsetTop;
        const projectsTop = projectsSection.offsetTop;
        
        // If we're in projects section, go to skills
        if (scrollTop >= projectsTop - 100) {
          handleScrollToSkills();
        }
        // If we're in skills section, go to hero (top)
        else if (scrollTop >= skillsTop - 100) {
          container.scrollTo({ top: 0, behavior: 'smooth' });
        }
        // If we're at hero or before, just scroll to top
        else {
          container.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }
  };

  const handleScrollToNext = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollTop = container.scrollTop;
      const viewportHeight = container.clientHeight;
      
      // Determine which section we're in and scroll to the next one
      const skillsSection = document.getElementById('skills');
      const projectsSection = document.getElementById('projects');
      
      if (skillsSection && projectsSection) {
        const skillsTop = skillsSection.offsetTop;
        const projectsTop = projectsSection.offsetTop;
        
        // If we're in hero section (before skills), go to skills
        if (scrollTop < skillsTop - 100) {
          handleScrollToSkills();
        }
        // If we're in skills section, go to projects
        else if (scrollTop >= skillsTop - 100 && scrollTop < projectsTop - 100) {
          handleScrollToProjects();
        }
        // If we're at projects or beyond, just scroll down by viewport
        else {
          container.scrollBy({ top: viewportHeight, behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        minWidth: '100vw',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      {/* Audio Control */}
      <AudioControl />

      {/* Main scrollable sections */}
      <Box
        ref={scrollContainerRef}
        sx={{
          height: '100vh',
          width: '100vw',
          overflowY: 'auto',
          scrollSnapType: 'y mandatory',
          // Hide scrollbar for all browsers
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none', // IE 10+
          '&::-webkit-scrollbar': { display: 'none' }, // Chrome/Safari
        }}
      >
      {/* Hero/Profile Section */}
      <Box
        sx={{
          height: '100vh',
          width: '100vw',
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          overflow: 'hidden',
            scrollSnapAlign: 'start',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 20% 80%, rgba(206, 17, 38, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(0, 122, 61, 0.05) 0%, transparent 50%),
              linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 100%)
            `,
            zIndex: 0,
          },
        }}
      >
        {/* Animated green and red beams background */}
        {beamPositions && beamPositions.map((leftPx, i) => (
          <Box
            key={i}
            sx={{
              position: 'absolute',
              bottom: '-100vh',
              left: leftPx,
              width: { xs: 12, sm: 18, md: 22 },
              height: { xs: '60vh', sm: '70vh', md: '80vh' },
              background:
                i % 2 === 0
                  ? 'linear-gradient(180deg, rgba(0,255,128,0.18) 0%, rgba(0,255,128,0.06) 100%)'
                  : 'linear-gradient(180deg, rgba(206,17,38,0.18) 0%, rgba(206,17,38,0.06) 100%)',
              filter: 'blur(8px)',
              borderRadius: 8,
              zIndex: 0,
              opacity: 1,
              animation: `beamUp 5s linear ${i * 1.2}s infinite`,
              '@keyframes beamUp': {
                '0%': { transform: 'translateY(0)', opacity: 1 },
                '80%': { opacity: 1 },
                '100%': { transform: 'translateY(-120vh)', opacity: 0 },
              },
            }}
          />
        ))}
        {/* Animated background elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: 'linear-gradient(45deg, rgba(206, 17, 38, 0.03), rgba(0, 122, 61, 0.03))',
            animation: 'float 6s ease-in-out infinite',
            zIndex: 0,
            '@keyframes float': {
              '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
              '50%': { transform: 'translateY(-20px) rotate(180deg)' },
            },
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '20%',
            right: '10%',
            width: 150,
            height: 150,
            borderRadius: '50%',
            background: 'linear-gradient(45deg, rgba(0, 122, 61, 0.03), rgba(206, 17, 38, 0.03))',
            animation: 'float 8s ease-in-out infinite reverse',
            zIndex: 0,
          }}
        />
        {/* Profile Photo on the far left */}
        <Box
          sx={{
            height: '100%',
            width: { xs: '60vw', sm: '44vw', md: '36vw', lg: '32vw', xl: '28vw' },
            maxWidth: 600,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            zIndex: 1,
            pl: { xs: 2, sm: 4, md: 6 },
            pr: { xs: 1, sm: 2, md: 4 },
            animation: 'slideInLeft 1s ease-out',
            '@keyframes slideInLeft': {
              '0%': { opacity: 0, transform: 'translateX(-50px)' },
              '100%': { opacity: 1, transform: 'translateX(0)' },
            },
          }}
        >
          <ProfilePhoto />
        </Box>
        {/* Hero Content in the center/right */}
        <Box
          sx={{
            flex: 1,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
            pl: { xs: 2, sm: 4, md: 6 },
            pr: { xs: 3, sm: 6, md: 10 },
            minWidth: 0,
            animation: 'slideInRight 1s ease-out 0.3s both',
            '@keyframes slideInRight': {
              '0%': { opacity: 0, transform: 'translateX(50px)' },
              '100%': { opacity: 1, transform: 'translateX(0)' },
            },
          }}
        >
            <HeroContent onViewWork={handleScrollToSkills} />
          </Box>
        </Box>
        {/* Skills Section */}
        <Box sx={{ scrollSnapAlign: 'start' }}>
          <SkillsSection />
        </Box>
        {/* Projects Section */}
        <Box sx={{ scrollSnapAlign: 'start' }}>
          <ProjectsSection />
        </Box>
      </Box>
      {/* Down Arrow Button */}
      <Zoom in={showDownArrow}>
        <Fab
          color="primary"
          size="medium"
          onClick={handleScrollToNext}
          sx={{
            position: 'fixed',
            bottom: 32,
            right: 32,
            zIndex: 1200,
            boxShadow: '0 4px 16px rgba(206, 17, 38, 0.18)',
            backgroundColor: '#CE1126',
            color: 'white',
            '&:hover': {
              backgroundColor: '#a50e1e',
            },
            transition: 'all 0.22s ease',
          }}
          aria-label="Scroll to next section"
        >
          <KeyboardArrowDownIcon />
        </Fab>
      </Zoom>
      {/* Up Arrow Button */}
      <Zoom in={showUpArrow}>
        <Fab
          color="primary"
          size="medium"
          onClick={handleScrollToPrevious}
          sx={{
            position: 'fixed',
            bottom: 100,
            right: 32,
            zIndex: 1200,
            boxShadow: '0 4px 16px rgba(206, 17, 38, 0.18)',
            backgroundColor: '#CE1126',
            color: 'white',
            '&:hover': {
              backgroundColor: '#a50e1e',
            },
            transition: 'all 0.22s ease',
          }}
          aria-label="Scroll to top"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>
    </Box>
  );
}
