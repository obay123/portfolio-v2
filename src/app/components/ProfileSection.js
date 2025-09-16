import { useState, useEffect } from 'react';
import { 
  Box, 
  Avatar, 
  Typography, 
  Paper, 
  Chip, 
  Stack, 
  Fade, 
  Zoom, 
  Slide, 
  useTheme, 
  useMediaQuery,
  IconButton,
  Tooltip,
  Divider
} from '@mui/material';
import { 
  LocationOn, 
  Work, 
  School, 
  Star, 
  Code, 
  Psychology,
  TrendingUp,
  EmojiEvents,
  GitHub,
  LinkedIn,
  Email,
  Phone
} from '@mui/icons-material';
import SyrianFlag from './SyrianFlag';

const colors = {
  primary: '#CE1126',
  secondary: '#007A3D',
  accent: '#FFD700',
  text: '#2D3748',
  textLight: '#718096',
  bg: '#F7FAFC',
  cardBg: '#FFFFFF',
  border: '#E2E8F0',
  success: '#38A169',
  warning: '#ED8936',
  info: '#3182CE',
};

const ProfileSection = ({ 
  name = "Obai Kaddour", 
  title = "Full Stack Web Developer",
  photoUrl = "/placeholder-avatar.jpg",
  flagWidth = 200,
  flagHeight = 120 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'Frontend', icon: <Code />, level: 90, color: colors.primary },
    { name: 'Backend', icon: <Code />, level: 85, color: colors.secondary },
    { name: 'Database', icon: <Code />, level: 80, color: colors.success },
    { name: 'DevOps', icon: <Code />, level: 75, color: colors.warning },
  ];

  const stats = [
    { label: 'Projects', value: '15+', icon: <Code />, color: colors.primary },
    { label: 'Experience', value: '1+ Years', icon: <TrendingUp />, color: colors.secondary },
    { label: 'Certifications', value: '3', icon: <EmojiEvents />, color: colors.accent },
    { label: 'Languages', value: '4', icon: <Psychology />, color: colors.success },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: `linear-gradient(135deg, ${colors.bg} 0%, #E2E8F0 100%)`,
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 4 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Enhanced background patterns */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 80%, rgba(206, 17, 38, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 122, 61, 0.03) 0%, transparent 50%),
            linear-gradient(45deg, transparent 49%, rgba(206, 17, 38, 0.01) 50%, transparent 51%),
            linear-gradient(-45deg, transparent 49%, rgba(0, 122, 61, 0.01) 50%, transparent 51%)
          `,
          backgroundSize: '100% 100%, 100% 100%, 30px 30px, 30px 30px',
          zIndex: 0,
        }}
      />

      <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 1200, mx: 'auto' }}>
        <Fade in={isVisible} timeout={800}>
          <Paper
            elevation={16}
            sx={{
              borderRadius: 4,
              background: `linear-gradient(145deg, ${colors.cardBg} 0%, ${colors.bg} 100%)`,
              border: `2px solid ${colors.border}`,
              overflow: 'hidden',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '6px',
                background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                zIndex: 2,
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', lg: 'row' },
                alignItems: { xs: 'center', lg: 'stretch' },
                minHeight: { xs: 'auto', lg: 600 },
              }}
            >
              {/* Left Section - Photo and Basic Info */}
              <Box
                sx={{
                  flex: { lg: '0 0 400px' },
                  p: { xs: 4, md: 6 },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: `linear-gradient(135deg, rgba(206, 17, 38, 0.02) 0%, rgba(0, 122, 61, 0.02) 100%)`,
                  position: 'relative',
                }}
              >
                {/* Profile Photo with enhanced styling */}
                <Zoom in={isVisible} timeout={1000}>
                  <Box sx={{ position: 'relative', mb: 4 }}>
                    <Avatar
                      src={photoUrl}
                      alt={name}
                      sx={{
                        width: { xs: 180, md: 220 },
                        height: { xs: 180, md: 220 },
                        border: `4px solid ${colors.primary}`,
                        boxShadow: `0 12px 32px rgba(206, 17, 38, 0.25)`,
                        position: 'relative',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: -8,
                          left: -8,
                          right: -8,
                          bottom: -8,
                          borderRadius: '50%',
                          background: `linear-gradient(45deg, ${colors.primary}, ${colors.secondary})`,
                          opacity: 0.1,
                          zIndex: -1,
                          animation: 'pulse 3s ease-in-out infinite',
                        },
                        '@keyframes pulse': {
                          '0%, 100%': { transform: 'scale(1)', opacity: 0.1 },
                          '50%': { transform: 'scale(1.05)', opacity: 0.2 },
                        },
                      }}
                    />
                    
                    {/* Status indicator */}
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 8,
                        right: 8,
                        width: 20,
                        height: 20,
                        borderRadius: '50%',
                        background: colors.success,
                        border: '3px solid white',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                        animation: 'statusPulse 2s ease-in-out infinite',
                        '@keyframes statusPulse': {
                          '0%, 100%': { opacity: 1 },
                          '50%': { opacity: 0.7 },
                        },
                      }}
                    />
                  </Box>
                </Zoom>

                {/* Name and Title */}
                <Slide direction="up" in={isVisible} timeout={1200}>
                  <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <Typography
                      variant="h2"
                      sx={{
                        color: colors.primary,
                        fontWeight: 800,
                        fontSize: { xs: '2rem', md: '2.5rem' },
                        mb: 1,
                        letterSpacing: '0.02em',
                        textShadow: `0 2px 4px rgba(206, 17, 38, 0.1)`,
                      }}
                    >
                      {name}
                    </Typography>
                    
                    <Typography
                      variant="h5"
                      sx={{
                        color: colors.secondary,
                        fontWeight: 600,
                        fontSize: { xs: '1.1rem', md: '1.3rem' },
                        mb: 2,
                        opacity: 0.9,
                      }}
                    >
                      {title}
                    </Typography>

                    {/* Location and Nationality */}
                    <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" sx={{ mb: 3 }}>
                      <Chip
                        icon={<LocationOn />}
                        label="Syria"
                        size="small"
                        sx={{
                          background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                          color: 'white',
                          fontWeight: 600,
                        }}
                      />
                      <Chip
                        icon={<Work />}
                        label="Available for Work"
                        size="small"
                        sx={{
                          background: colors.success,
                          color: 'white',
                          fontWeight: 600,
                        }}
                      />
                    </Stack>
                  </Box>
                </Slide>

                {/* Syrian Flag */}
                <Slide direction="up" in={isVisible} timeout={1400}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: colors.textLight,
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        mb: 1,
                      }}
                    >
                      Syrian Developer
                    </Typography>
                    <SyrianFlag width={flagWidth} height={flagHeight} />
                  </Box>
                </Slide>
              </Box>

              {/* Right Section - Detailed Info */}
              <Box
                sx={{
                  flex: 1,
                  p: { xs: 4, md: 6 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                {/* Stats Grid */}
                <Slide direction="left" in={isVisible} timeout={1600}>
                  <Box sx={{ mb: 4 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        color: colors.text,
                        fontWeight: 700,
                        mb: 3,
                        textAlign: { xs: 'center', lg: 'left' },
                      }}
                    >
                      Professional Overview
                    </Typography>
                    
                    <Box
                      sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
                        gap: 2,
                        mb: 4,
                      }}
                    >
                      {stats.map((stat, index) => (
                        <Zoom in={isVisible} timeout={1800 + index * 200} key={stat.label}>
                          <Paper
                            elevation={4}
                            sx={{
                              p: 2,
                              textAlign: 'center',
                              borderRadius: 3,
                              background: `linear-gradient(135deg, ${colors.cardBg} 0%, ${colors.bg} 100%)`,
                              border: `1px solid ${colors.border}`,
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                              },
                            }}
                          >
                            <Box
                              sx={{
                                color: stat.color,
                                mb: 1,
                                display: 'flex',
                                justifyContent: 'center',
                              }}
                            >
                              {stat.icon}
                            </Box>
                            <Typography
                              variant="h4"
                              sx={{
                                color: colors.text,
                                fontWeight: 700,
                                mb: 0.5,
                              }}
                            >
                              {stat.value}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: colors.textLight,
                                fontWeight: 500,
                              }}
                            >
                              {stat.label}
                            </Typography>
                          </Paper>
                        </Zoom>
                      ))}
                    </Box>
                  </Box>
                </Slide>

                {/* Skills Section */}
                <Slide direction="left" in={isVisible} timeout={2000}>
                  <Box sx={{ mb: 4 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        color: colors.text,
                        fontWeight: 700,
                        mb: 3,
                        textAlign: { xs: 'center', lg: 'left' },
                      }}
                    >
                      Technical Skills
                    </Typography>
                    
                    <Stack spacing={2}>
                      {skills.map((skill, index) => (
                        <Box key={skill.name} sx={{ position: 'relative' }}>
                          <Box
                            sx={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              mb: 1,
                            }}
                          >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <Box sx={{ color: skill.color }}>{skill.icon}</Box>
                              <Typography
                                variant="body1"
                                sx={{
                                  fontWeight: 600,
                                  color: colors.text,
                                }}
                              >
                                {skill.name}
                              </Typography>
                            </Box>
                            <Typography
                              variant="body2"
                              sx={{
                                fontWeight: 600,
                                color: skill.color,
                              }}
                            >
                              {skill.level}%
                            </Typography>
                          </Box>
                          
                          <Box
                            sx={{
                              width: '100%',
                              height: 8,
                              background: colors.border,
                              borderRadius: 4,
                              overflow: 'hidden',
                              position: 'relative',
                            }}
                          >
                            <Box
                              sx={{
                                width: `${skill.level}%`,
                                height: '100%',
                                background: `linear-gradient(90deg, ${skill.color} 0%, ${skill.color}80 100%)`,
                                borderRadius: 4,
                                transition: 'width 1.5s ease-in-out',
                                animation: 'slideIn 1.5s ease-out',
                                '@keyframes slideIn': {
                                  '0%': { width: '0%' },
                                  '100%': { width: `${skill.level}%` },
                                },
                              }}
                            />
                          </Box>
                        </Box>
                      ))}
                    </Stack>
                  </Box>
                </Slide>

                {/* Contact and Social Links */}
                <Slide direction="up" in={isVisible} timeout={2200}>
                  <Box>
                    <Divider sx={{ mb: 3, opacity: 0.3 }} />
                    
                    <Typography
                      variant="h6"
                      sx={{
                        color: colors.text,
                        fontWeight: 600,
                        mb: 2,
                        textAlign: { xs: 'center', lg: 'left' },
                      }}
                    >
                      Get In Touch
                    </Typography>
                    
                    <Stack
                      direction={{ xs: 'column', sm: 'row' }}
                      spacing={2}
                      justifyContent={{ xs: 'center', lg: 'flex-start' }}
                      alignItems="center"
                    >
                      <Tooltip title="Email" arrow>
                        <IconButton
                          sx={{
                            background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                            color: 'white',
                            '&:hover': {
                              transform: 'translateY(-2px)',
                              boxShadow: '0 4px 12px rgba(206, 17, 38, 0.3)',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          <Email />
                        </IconButton>
                      </Tooltip>
                      
                      <Tooltip title="GitHub" arrow>
                        <IconButton
                          sx={{
                            background: colors.text,
                            color: 'white',
                            '&:hover': {
                              transform: 'translateY(-2px)',
                              boxShadow: '0 4px 12px rgba(45, 55, 72, 0.3)',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          <GitHub />
                        </IconButton>
                      </Tooltip>
                      
                      <Tooltip title="LinkedIn" arrow>
                        <IconButton
                          sx={{
                            background: '#0077B5',
                            color: 'white',
                            '&:hover': {
                              transform: 'translateY(-2px)',
                              boxShadow: '0 4px 12px rgba(0, 119, 181, 0.3)',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          <LinkedIn />
                        </IconButton>
                      </Tooltip>
                      
                      <Tooltip title="Phone" arrow>
                        <IconButton
                          sx={{
                            background: colors.success,
                            color: 'white',
                            '&:hover': {
                              transform: 'translateY(-2px)',
                              boxShadow: '0 4px 12px rgba(56, 161, 105, 0.3)',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          <Phone />
                        </IconButton>
                      </Tooltip>
                    </Stack>
                  </Box>
                </Slide>
              </Box>
            </Box>
          </Paper>
        </Fade>
      </Box>
    </Box>
  );
};

export default ProfileSection; 