import { useState } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { Code } from '@mui/icons-material';
import { projects } from '../constants/projects';
import { colors } from '../theme/colors';
import ProjectCard from './ProjectCard';
import ProjectTabs from './ProjectTabs';

const ProjectsSection = () => {
  const [selected, setSelected] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  // Animate fade-in on tab change
  const handleTabChange = (_, v) => {
    setFadeIn(false);
    setTimeout(() => {
      setSelected(v);
      setFadeIn(true);
    }, 200);
  };

  return (
    <Box
      id="projects"
      sx={{
        height: '100dvh',
        bgcolor: '#f8fafc',
        py: { xs: 4, md: 0 },
        pt: { xs: 2, md: 2 },
        position: 'relative',
        scrollMarginTop: '80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflow: 'hidden',
      }}
    >
      {/* Enhanced background with subtle patterns */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 80%, rgba(206, 17, 38, 0.04) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(139, 69, 19, 0.04) 0%, transparent 50%),
            linear-gradient(45deg, transparent 49%, rgba(206, 17, 38, 0.02) 50%, transparent 51%),
            linear-gradient(-45deg, transparent 49%, rgba(139, 69, 19, 0.02) 50%, transparent 51%)
          `,
          backgroundSize: '100% 100%, 100% 100%, 20px 20px, 20px 20px',
          zIndex: 0,
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0 }}>
        <Typography
          variant="h2"
          sx={{
            color: colors.softText,
            fontWeight: 'bold',
            mb: 3,
            textAlign: 'center',
            letterSpacing: '0.02em',
            fontSize: { xs: '2rem', md: '2.6rem' },
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              bottom: -10,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 500,
              height: 3,
              background: `linear-gradient(90deg, ${colors.softRed} 0%, ${colors.softGreen} 50%, ${colors.title} 100%)`,
              opacity: 0.25,
              borderRadius: 2,
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -10,
              left: 'calc(50% - 290px)',
              width: 120,
              height:3,
              background: `linear-gradient(90deg, ${colors.softRed}, ${colors.softGreen} 50%, ${colors.title} 100%)`,
              borderRadius: 4,
              animation: 'arrowSweep 1.5s ease-in-out infinite',
            },
            '@keyframes arrowSweep': {
              '0%': { transform: 'translateX(50px)', opacity: 1 },
              '15%': { opacity: 1 },
              '50%': { transform: 'translateX(400px)',opacity:1 },
              '85%': { opacity: 1 },
              '100%': { transform: 'translateX(50px)', opacity: 1 },
            },
          }}
        >
          My Projects
        </Typography>
        {/* Two-column layout for desktop, stacked for mobile */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'stretch', md: 'flex-start' },
            justifyContent: 'center',
            gap: { xs: 3, md: 0 },
            width: '100%',
            mt: 4,
            flex: 1,
            minHeight: 0,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <ProjectTabs projects={projects} selected={selected} onChange={handleTabChange} />

          {/* Project Card on the right with improved spacing */}
          <Box sx={{ 
            flex: 1, 
            minWidth: 0, 
            display: 'flex', 
            alignItems: 'flex-start', 
            justifyContent: 'center', 
            pl: { md: 4 }, 
            pt: { xs: 4, md: 5 },
            position: 'relative',
            overflowY: 'auto',
            scrollSnapType: 'y proximity',
          }}>
            <Box sx={{ width: '100%', maxWidth: 520, scrollSnapAlign: 'start' }}>
              <ProjectCard project={projects[selected]} fadeIn={fadeIn} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsSection;