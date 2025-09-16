import { Box, Typography, Button } from '@mui/material';
import { LocationOn, Work, School } from '@mui/icons-material';
import SocialLinks from './SocialLinks';

const HeroContent = ({ onViewWork }) => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: { xs: '95vw', sm: '90vw', md: '40vw', lg: '36vw', xl: '32vw' },
        mx: 'auto',
        py: { xs: 1, sm: 2, md: 0 },
        px: { xs: 1, sm: 2, md: 0 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 0,
        maxHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* Name, Title, Description */}
      <Box sx={{ width: '100%', textAlign: 'center', mb: 2 }}>
        <Typography
          variant="overline"
          sx={{
            color: '#CE1126',
            fontWeight: 600,
            letterSpacing: '3px',
            mb: 1,
            display: 'block',
            fontSize: '0.85rem',
          }}
        >
          WELCOME TO MY PORTFOLIO
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.2rem', sm: '2.5rem', lg: '2.8rem' },
            fontWeight: 200,
            color: '#1a1a1a',
            lineHeight: 1.1,
            mb: 1,
            letterSpacing: '-0.04em',
          }}
        >
          Obai Kaddour
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '1.1rem', sm: '1.3rem', lg: '1.5rem' },
            color: '#5a5a5a',
            fontWeight: 300,
            mb: 2,
            lineHeight: 1.3,
            letterSpacing: '0.02em',
          }}
        >
          Full Stack Web Developer
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1rem',
            color: '#4a4a4a',
            lineHeight: 1.6,
            mb: 2,
            maxWidth: '540px',
            fontWeight: 400,
            mx: 'auto',
          }}
        >
          Passionate developer creating innovative web solutions that make a difference. 
          Specializing in modern full-stack technologies with a focus on user-centered design 
          and scalable applications.
        </Typography>
      </Box>
      {/* Info Row */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          mb: 2,
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <LocationOn sx={{ color: '#CE1126', fontSize: '1.1rem' }} />
          <Typography variant="body2" sx={{ color: '#666', fontSize: '0.95rem' }}>
            lebanon
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Work sx={{ color: '#CE1126', fontSize: '1.1rem' }} />
          <Typography variant="body2" sx={{ color: '#666', fontSize: '0.95rem' }}>
            Available for Projects
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <School sx={{ color: '#CE1126', fontSize: '1.1rem' }} />
          <Typography variant="body2" sx={{ color: '#666', fontSize: '0.95rem' }}>
            Management Information Systems
          </Typography>
        </Box>
      </Box>
      {/* Social Media Links */}
      <Box sx={{ width: '100%', mb: 2 }}>
        <SocialLinks />
      </Box>
      {/* Call to Action Buttons */}
      <Box
        sx={{
          display: 'flex',
          gap: 1.5,
          flexWrap: 'wrap',
          mt: 1,
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Button
          variant="contained"
          size="medium"
          sx={{
            backgroundColor: '#CE1126',
            color: 'white',
            px: 3,
            py: 1,
            fontSize: '0.95rem',
            fontWeight: 500,
            borderRadius: '6px',
            textTransform: 'none',
            letterSpacing: '1px',
            boxShadow: '0 2px 8px rgba(206, 17, 38, 0.18)',
            '&:hover': {
              backgroundColor: '#a50e1e',
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 16px rgba(206, 17, 38, 0.22)',
            },
            transition: 'all 0.22s ease',
          }}
          onClick={onViewWork}
        >
          View My Work
        </Button>
        <Button
          variant="outlined"
          size="medium"
          sx={{
            borderColor: '#CE1126',
            color: '#CE1126',
            px: 3,
            py: 1,
            fontSize: '0.95rem',
            fontWeight: 500,
            borderRadius: '6px',
            textTransform: 'none',
            letterSpacing: '1px',
            '&:hover': {
              backgroundColor: 'rgba(206, 17, 38, 0.05)',
              borderColor: '#a50e1e',
              color: '#a50e1e',
              transform: 'translateY(-2px)',
            },
            transition: 'all 0.22s ease',
          }}
        >
          Download CV
        </Button>
      </Box>
    </Box>
  );
};

export default HeroContent; 