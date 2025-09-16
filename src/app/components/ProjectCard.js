import { useState } from 'react';
import { Box, Typography, Paper, Chip, Tooltip, Fade, IconButton, useTheme, useMediaQuery } from '@mui/material';
import { GitHub as GitHubIcon, Launch as LaunchIcon } from '@mui/icons-material';
import { colors } from '../theme/colors';
import { hexToRgba } from '../utils/color';

const ProjectCard = ({ project, fadeIn }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isHover, setIsHover] = useState(false);

  return (
    <Fade in={fadeIn} timeout={500}>
      <Paper
        // elevation={5}
        sx={{
          borderRadius: 17,
          background: colors.cardBg,
          boxShadow: '0 8px 32px 0 rgba(30,41,59,0.18)',
          border: 'px solid transparent',
          position: 'relative',
          p: 0,
          maxWidth: 700,
          minWidth: 500,
          mx: 'auto',
          width: '100%',
          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
          overflow: 'hidden',
          perspective: '1000px',
          transformStyle: 'preserve-3d',
          display: 'flex',
          flexDirection: 'column',
          height: { xs: 500, sm: 520, md: 560, lg: 600 },
          outline: '1px solid rgba(226,232,240,0.35)',
          outlineOffset: '-1px',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 40px 0 rgba(30,41,59,0.25)'
          },
          '&:focus-within': {
            boxShadow: '0 0 0 3px rgba(56, 161, 105, 0.25), 0 12px 40px rgba(30,41,59,0.22)'
          },
          '&:hover .card-sheen': {
            opacity: 0.5,
            transform: 'translateX(180%)'
          }
        }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {/* Hover sheen */}
        <Box
          className="card-sheen"
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '-60%',
            width: '50%',
            transform: 'translateX(-40%) skewX(-20deg)',
            background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.45) 50%, rgba(255,255,255,0) 100%)',
            filter: 'blur(6px)',
            opacity: 0,
            transition: 'transform 0.6s ease, opacity 0.45s ease',
            pointerEvents: 'none',
            zIndex: 2,
            '@media (prefers-reduced-motion: reduce)': {
              transition: 'opacity 0.2s ease'
            }
          }}
        />

        {/* Project Image (clickable if liveDemo) */}
        <Box
          sx={{
            width: '100%',
            height: { xs: 180, sm: 200, md: 220, lg: 240 },
            background: 'linear-gradient(135deg, #e2e8f0 0%, #f8fafc 100%)',
            position: 'relative',
            cursor: project.liveDemo ? 'pointer' : 'default',
            overflow: 'hidden',
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
            '&:hover img': {
              transform: project.liveDemo ? 'scale(1.04)' : 'none',
              filter: project.liveDemo ? 'brightness(1.08)' : 'none',
            },
            transition: 'all 0.3s',
          }}
          onClick={() => project.liveDemo && window.open(project.liveDemo, '_blank')}
        >
          <Box
            component="img"
            src={project.image}
            alt={project.title}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4,
            }}
            loading="lazy"
          />
          {/* Overlay actions */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(15,23,42,0.0) 30%, rgba(15,23,42,0.55) 100%)',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              px: 2,
              pb: 1.5,
              opacity: isHover ? 1 : 0,
              transform: isHover ? 'translateY(0)' : 'translateY(8px)',
              transition: 'opacity 0.25s ease, transform 0.25s ease',
            }}
          >
            <Typography variant="subtitle2" sx={{ color: '#fff', fontWeight: 700, textShadow: '0 2px 8px rgba(0,0,0,0.35)' }}>
              {project.title}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {project.liveDemo && (
                <Tooltip title="Live Demo" arrow>
                  <IconButton size="small" onClick={(e) => { e.stopPropagation(); window.open(project.liveDemo, '_blank'); }} sx={{ bgcolor: 'rgba(255,255,255,0.9)', outline: '2px solid transparent', outlineOffset: 0.5, '&:hover': { bgcolor: '#fff', transform: 'translateY(-2px) scale(1.04)' }, '&:focus-visible': { outlineColor: colors.softGreen }, transition: 'all 0.2s' }}>
                    <LaunchIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              )}
              {project.github && (
                <Tooltip title="Source Code" arrow>
                  <IconButton size="small" onClick={(e) => { e.stopPropagation(); window.open(project.github, '_blank'); }} sx={{ bgcolor: 'rgba(255,255,255,0.9)', outline: '2px solid transparent', outlineOffset: 0.5, '&:hover': { bgcolor: '#fff', transform: 'translateY(-2px) scale(1.04)' }, '&:focus-visible': { outlineColor: colors.softRed }, transition: 'all 0.2s' }}>
                    <GitHubIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              )}
            </Box>
          </Box>
        </Box>

        {/* Card Content */}
        <Box sx={{ p: 4, pt: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', flex: 1, justifyContent: 'space-between' }}>
          {/* Title, Tagline */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Box>
              <Typography variant="h5" sx={{ color: colors.title, fontWeight: 700, mb: 0.2 }}>
                {project.title}
              </Typography>
            </Box>
          </Box>
          <Typography variant="subtitle2" sx={{ color: colors.title, fontWeight: 500, mb: 1, textAlign: 'center', letterSpacing: '0.01em', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {project.tagline}
          </Typography>
          <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap', mb: 2, justifyContent: 'center' }}>
            {project.techStack.map((tech, i) => {
              const bg = [colors.softTech2, colors.softTech1, colors.softTech1, colors.title][i % 4];
              return (
                <Chip
                  key={i}
                  label={tech}
                  size="small"
                  sx={{
                    background: bg,
                    color: '#fff',
                    fontWeight: 550,
                    fontSize: '0.8rem',
                    letterSpacing: '0.5px',
                    boxShadow: `inset 0 0 0 1px ${hexToRgba('#ffffff', 0.08)}, 0 6px 14px ${hexToRgba(bg, 1)}`,
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: `inset 0 0 0 1px ${hexToRgba('#ffffff', 0.12)}, 0 12px 24px ${hexToRgba(bg, 0.5)}`,
                    },
                    '&:active': {
                      transform: 'translateY(0px) scale(0.98)'
                    }
                  }}
                />
              );
            })}
          </Box>
          <Typography variant="body1" sx={{ color: colors.softGray, mb: 2, fontWeight: 400, lineHeight: 1.7, textAlign: 'center', display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {project.description}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mt: 1, flexWrap: 'wrap', justifyContent: 'center' }} />
        </Box>
      </Paper>
    </Fade>
  );
};

export default ProjectCard;
