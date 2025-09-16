// This section is not shown in the hero area, so no need to fit it to 100vh/100vw.
import { Box, Typography, Paper, Grid, Chip, Container, Avatar, LinearProgress } from '@mui/material';
import { Code, School, Work, Star, Psychology, Public } from '@mui/icons-material';

const AboutSection = () => {
  const skills = [
    { name: 'React', level: 90, color: '#61DAFB' },
    { name: 'Node.js', level: 85, color: '#339933' },
    { name: 'TypeScript', level: 80, color: '#3178C6' },
    { name: 'Python', level: 75, color: '#3776AB' },
    { name: 'SQL', level: 85, color: '#336791' },
    { name: 'MongoDB', level: 80, color: '#47A248' },
  ];

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Freelance',
      period: '2021 - Present',
      description: 'Building scalable web applications and providing technical solutions for clients worldwide.'
    },
    {
      title: 'Frontend Developer',
      company: 'Tech Startup',
      period: '2020 - 2021',
      description: 'Developed responsive user interfaces and implemented modern web technologies.'
    },
    {
      title: 'Computer Science Student',
      company: 'University',
      period: '2019 - 2023',
      description: 'Studied computer science with focus on software engineering and web development.'
    }
  ];

  const achievements = [
    '25+ Projects Completed',
    '3+ Years Experience',
    '12+ Technologies Mastered',
    '100% Client Satisfaction',
    'Remote Work Expert',
    'Open Source Contributor'
  ];

  return (
    <Box sx={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      bgcolor: 'background.default',
      py: 8,
      position: 'relative',
    }}>
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(206, 17, 38, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0, 122, 61, 0.03) 0%, transparent 50%)',
          zIndex: 0,
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6}>
          {/* About Me */}
          <Grid item xs={12} lg={6}>
            <Paper
              elevation={8}
              sx={{
                p: 5,
                borderRadius: 4,
                height: 'fit-content',
                background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%)',
                border: '1px solid rgba(255,255,255,0.8)',
                position: 'relative',
                overflow: 'hidden',
                animation: 'slideInLeft 0.8s ease-out',
                '@keyframes slideInLeft': {
                  '0%': { opacity: 0, transform: 'translateX(-50px)' },
                  '100%': { opacity: 1, transform: 'translateX(0)' },
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #CE1126, #007A3D)',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Avatar
                  sx={{
                    bgcolor: '#CE1126',
                    width: 50,
                    height: 50,
                    mr: 2,
                  }}
                >
                  <Psychology />
                </Avatar>
                <Typography
                  variant="h3"
                  sx={{
                    color: '#CE1126',
                    fontWeight: 'bold',
                    fontSize: { xs: '1.8rem', md: '2.2rem' },
                  }}
                >
                  About Me
                </Typography>
              </Box>
              
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: 'text.primary',
                  mb: 3,
                  fontWeight: 400,
                }}
              >
                As a passionate Syrian developer, I bring a unique blend of technical expertise 
                and cultural perspective to every project. My journey from Syria has instilled in me 
                resilience, adaptability, and a deep understanding of creating solutions that truly 
                make a difference in people's lives.
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: 'text.primary',
                  mb: 4,
                  fontWeight: 400,
                }}
              >
                I specialize in full-stack development with modern technologies, focusing on 
                scalable applications, user-centered design, and clean, maintainable code. 
                My passion for technology drives continuous learning and innovation.
              </Typography>

              {/* Achievements */}
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#007A3D',
                    fontWeight: 'bold',
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <Star sx={{ color: '#FFD700' }} />
                  Key Achievements
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {achievements.map((achievement, index) => (
                    <Chip
                      key={index}
                      label={achievement}
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(0, 122, 61, 0.1)',
                        color: '#007A3D',
                        fontWeight: 600,
                        fontSize: '0.8rem',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 122, 61, 0.2)',
                          transform: 'translateY(-1px)',
                        },
                        transition: 'all 0.2s ease',
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/* Skills & Experience */}
          <Grid item xs={12} lg={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {/* Skills */}
              <Paper
                elevation={8}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%)',
                  border: '1px solid rgba(255,255,255,0.8)',
                  position: 'relative',
                  overflow: 'hidden',
                  animation: 'slideInRight 0.8s ease-out 0.2s both',
                  '@keyframes slideInRight': {
                    '0%': { opacity: 0, transform: 'translateX(50px)' },
                    '100%': { opacity: 1, transform: 'translateX(0)' },
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #007A3D, #CE1126)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Avatar
                    sx={{
                      bgcolor: '#007A3D',
                      width: 50,
                      height: 50,
                      mr: 2,
                    }}
                  >
                    <Code />
                  </Avatar>
                  <Typography
                    variant="h4"
                    sx={{
                      color: '#007A3D',
                      fontWeight: 'bold',
                      fontSize: { xs: '1.5rem', md: '1.8rem' },
                    }}
                  >
                    Technical Skills
                  </Typography>
                </Box>
                
                <Box sx={{ mb: 3 }}>
                  {skills.map((skill, index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 600,
                            color: 'text.primary',
                          }}
                        >
                          {skill.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: skill.color,
                            fontWeight: 'bold',
                          }}
                        >
                          {skill.level}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: 'rgba(0,0,0,0.1)',
                          '& .MuiLinearProgress-bar': {
                            backgroundColor: skill.color,
                            borderRadius: 4,
                          },
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              </Paper>

              {/* Experience */}
              <Paper
                elevation={8}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%)',
                  border: '1px solid rgba(255,255,255,0.8)',
                  position: 'relative',
                  overflow: 'hidden',
                  animation: 'slideInRight 0.8s ease-out 0.4s both',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #CE1126, #007A3D)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Avatar
                    sx={{
                      bgcolor: '#CE1126',
                      width: 50,
                      height: 50,
                      mr: 2,
                    }}
                  >
                    <Work />
                  </Avatar>
                  <Typography
                    variant="h4"
                    sx={{
                      color: '#CE1126',
                      fontWeight: 'bold',
                      fontSize: { xs: '1.5rem', md: '1.8rem' },
                    }}
                  >
                    Experience
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {experiences.map((exp, index) => (
                    <Box
                      key={index}
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        backgroundColor: 'rgba(206, 17, 38, 0.05)',
                        border: '1px solid rgba(206, 17, 38, 0.1)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: 'rgba(206, 17, 38, 0.08)',
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#CE1126',
                          fontWeight: 'bold',
                          mb: 1,
                        }}
                      >
                        {exp.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#007A3D',
                          fontWeight: 600,
                          mb: 1,
                        }}
                      >
                        {exp.company} • {exp.period}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.6,
                        }}
                      >
                        {exp.description}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection; 