import { useState } from 'react';
import { Box, Typography, Chip, IconButton, Tooltip, Collapse, Button } from '@mui/material';
import { GitHub as GitHubIcon, Launch as LaunchIcon, Code as CodeIcon, ExpandMore as ExpandMoreIcon, Info as InfoIcon } from '@mui/icons-material';
import { colors } from '../theme/colors';
import { hexToRgba } from '../utils/color';

const ProjectCard = ({ project, index, isDragging, isActive }) => {
  const [expanded, setExpanded] = useState(false);
  const [showAllTech, setShowAllTech] = useState(false);

  return (
    <Box
      sx={{
        minWidth: '360px',
        maxWidth: '360px',
        height: '500px',
        flexShrink: 0,
        borderRadius: 4,
        background: 'rgba(255, 255, 255, 0.98)',
        border: isActive ? `2px solid ${colors.softRed}` : '1px solid rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        position: 'relative',
        transition: 'transform 0.2s ease-out, box-shadow 0.2s ease-out, border 0.2s ease-out',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: isActive 
          ? `0 8px 24px rgba(206, 17, 38, 0.3)` 
          : '0 4px 12px rgba(0, 0, 0, 0.08)',
        pointerEvents: isDragging ? 'none' : 'auto',
        animation: isActive ? 'activePulse 2s ease-in-out infinite' : 'none',
        '@keyframes activePulse': {
          '0%, 100%': { 
            boxShadow: `0 8px 24px rgba(206, 17, 38, 0.3)`,
          },
          '50%': { 
            boxShadow: `0 12px 32px rgba(206, 17, 38, 0.5)`,
          },
        },
        '&:hover': {
          transform: 'scale3d(1.04, 1.04, 1)',
          boxShadow: `0 16px 32px rgba(0, 0, 0, 0.2)`,
          border: `2px solid ${hexToRgba(colors.softRed, 0.5)}`,
          zIndex: 10,
        },
        '&:hover::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(135deg, ${hexToRgba(colors.softRed, 0.05)} 0%, ${hexToRgba(colors.softGreen, 0.05)} 100%)`,
          pointerEvents: 'none',
          zIndex: 0,
        },
      }}
    >
      {/* Status Badge & Info */}
      <Box
        sx={{
          position: 'absolute',
          top: 12,
          right: 12,
          zIndex: 3,
          display: 'flex',
          gap: 1,
          animation: `float 3s ease-in-out infinite ${index * 0.2}s`,
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-10px)' },
          },
        }}
      >
        <Chip
          label={project.status}
          size="small"
          icon={<CodeIcon sx={{ fontSize: 14 }} />}
          sx={{
            background: project.status === 'Featured'
              ? `linear-gradient(135deg, ${colors.softRed} 0%, #ff6b6b 100%)`
              : project.status === 'In Development'
              ? `linear-gradient(135deg, ${colors.softGreen} 0%, #51cf66 100%)`
              : project.status === 'Client Work'
              ? 'linear-gradient(135deg, #4c6ef5 0%, #748ffc 100%)'
              : project.status === 'Small Projects'
              ? 'linear-gradient(135deg, #f59f00 0%, #ffd43b 100%)'
              : 'linear-gradient(135deg, #868e96 0%, #adb5bd 100%)',
            color: '#ffffff',
            fontWeight: 700,
            fontSize: '0.75rem',
            height: 26,
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            '& .MuiChip-icon': {
              color: '#ffffff',
            },
            '& .MuiChip-label': {
              px: 1.5,
            },
          }}
        />
        
        {/* Info Tooltip */}
        <Tooltip 
          title={
            <Box sx={{ p: 0.5 }}>
              <Typography variant="caption" sx={{ display: 'block', fontWeight: 600 }}>
                Tech Stack: {project.techStack.length} technologies
              </Typography>
              {project.liveDemo && (
                <Typography variant="caption" sx={{ display: 'block', mt: 0.5 }}>
                  ✓ Live Demo Available
                </Typography>
              )}
              {project.github && (
                <Typography variant="caption" sx={{ display: 'block' }}>
                  ✓ Source Code Available
                </Typography>
              )}
            </Box>
          }
          arrow 
          placement="left"
        >
          <Box
            sx={{
              width: 26,
              height: 26,
              borderRadius: '50%',
              bgcolor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.2) rotate(180deg)',
                bgcolor: colors.softRed,
                '& svg': {
                  color: '#ffffff',
                },
              },
            }}
          >
            <InfoIcon sx={{ fontSize: 14, color: colors.softText }} />
          </Box>
        </Tooltip>
      </Box>

      {/* Image Section */}
      <Box
        sx={{
          width: '100%',
          height: 200,
          position: 'relative',
          overflow: 'hidden',
          flexShrink: 0,
          bgcolor: 'rgba(0, 0, 0, 0.05)',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '50%',
            background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, transparent 100%)',
            zIndex: 1,
          },
        }}
      >
        <Box
          component="img"
          src={project.image}
          alt={project.title}
          loading="lazy"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease-out',
            '.MuiBox-root:hover &': {
              transform: 'scale3d(1.08, 1.08, 1)',
            },
          }}
        />
        
        {/* Action Buttons Overlay */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 16,
            right: 16,
            display: 'flex',
            gap: 1,
            zIndex: 2,
            opacity: 0,
            transform: 'translate3d(0, 10px, 0)',
            transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
            '.MuiBox-root:hover &': {
              opacity: 1,
              transform: 'translate3d(0, 0, 0)',
            },
          }}
        >
          {project.liveDemo && (
            <Tooltip title="Live Demo" arrow placement="top">
              <IconButton
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.liveDemo, '_blank');
                }}
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                  '&:hover': {
                    bgcolor: colors.softGreen,
                    color: '#ffffff',
                    transform: 'scale(1.15) rotate(5deg)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <LaunchIcon />
              </IconButton>
            </Tooltip>
          )}
          {project.github && (
            <Tooltip title="View Code" arrow placement="top">
              <IconButton
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.github, '_blank');
                }}
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                  '&:hover': {
                    bgcolor: colors.softRed,
                    color: '#ffffff',
                    transform: 'scale(1.15) rotate(-5deg)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      </Box>

      {/* Content Section */}
      <Box
        sx={{
          p: 2.5,
          position: 'relative',
          zIndex: 1,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            color: colors.title,
            fontWeight: 700,
            mb: 1,
            fontSize: '1.2rem',
            lineHeight: 1.3,
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {project.title}
        </Typography>

        {/* Tagline */}
        <Typography
          variant="body2"
          sx={{
            color: colors.softText,
            mb: 1.5,
            fontSize: '0.9rem',
            lineHeight: 1.5,
            fontWeight: 400,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            minHeight: 42,
          }}
        >
          {project.tagline}
        </Typography>

        {/* Tech Stack */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 0.75,
            mb: 1.5,
            position: 'relative',
          }}
        >
          {(showAllTech ? project.techStack : project.techStack.slice(0, 4)).map((tech, idx) => {
            const gradients = [
              `linear-gradient(135deg, ${colors.softRed} 0%, #ff6b6b 100%)`,
              `linear-gradient(135deg, ${colors.softGreen} 0%, #51cf66 100%)`,
              `linear-gradient(135deg, #4c6ef5 0%, #748ffc 100%)`,
              `linear-gradient(135deg, #f59f00 0%, #ffd43b 100%)`,
              `linear-gradient(135deg, #e64980 0%, #f06595 100%)`,
              `linear-gradient(135deg, #7950f2 0%, #9775fa 100%)`,
            ];
            return (
              <Chip
                key={idx}
                label={tech}
                size="small"
                sx={{
                  background: gradients[idx % gradients.length],
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  height: 24,
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                  animation: `slideUp 0.5s ease-out ${idx * 0.1}s both`,
                  '@keyframes slideUp': {
                    '0%': { opacity: 0, transform: 'translateY(10px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                  },
                  '&:hover': {
                    transform: 'translateY(-3px) scale(1.05)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
                  },
                  '& .MuiChip-label': {
                    px: 1.5,
                  },
                }}
              />
            );
          })}
          {project.techStack.length > 4 && !showAllTech && (
            <Chip
              label={`+${project.techStack.length - 4}`}
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                setShowAllTech(true);
              }}
              sx={{
                background: 'rgba(0, 0, 0, 0.1)',
                color: colors.softText,
                fontWeight: 600,
                fontSize: '0.75rem',
                height: 24,
                border: '1px solid rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                '&:hover': {
                  background: colors.softRed,
                  color: '#ffffff',
                  transform: 'scale(1.1)',
                },
                transition: 'all 0.3s ease',
                '& .MuiChip-label': {
                  px: 1.5,
                },
              }}
            />
          )}
          {showAllTech && project.techStack.length > 4 && (
            <Chip
              label="Show Less"
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                setShowAllTech(false);
              }}
              sx={{
                background: 'rgba(0, 0, 0, 0.1)',
                color: colors.softText,
                fontWeight: 600,
                fontSize: '0.75rem',
                height: 24,
                border: '1px solid rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                '&:hover': {
                  background: colors.softGreen,
                  color: '#ffffff',
                  transform: 'scale(1.1)',
                },
                transition: 'all 0.3s ease',
                '& .MuiChip-label': {
                  px: 1.5,
                },
              }}
            />
          )}
        </Box>

        {/* Description */}
        <Box sx={{ flex: 1, mb: 1.5 }}>
          <Typography
            variant="body2"
            sx={{
              color: colors.softGray,
              fontSize: '0.85rem',
              lineHeight: 1.6,
              display: expanded ? 'block' : '-webkit-box',
              WebkitLineClamp: expanded ? 'unset' : 3,
              WebkitBoxOrient: 'vertical',
              overflow: expanded ? 'visible' : 'hidden',
            }}
          >
            {project.description}
          </Typography>
          
          {/* Expand Button */}
          {project.description.length > 150 && (
            <Button
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                setExpanded(!expanded);
              }}
              endIcon={
                <ExpandMoreIcon 
                  sx={{ 
                    transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                  }} 
                />
              }
              sx={{
                mt: 0.5,
                fontSize: '0.75rem',
                fontWeight: 600,
                color: colors.softRed,
                textTransform: 'none',
                '&:hover': {
                  bgcolor: 'transparent',
                  color: colors.softGreen,
                },
              }}
            >
              {expanded ? 'Show Less' : 'Read More'}
            </Button>
          )}
        </Box>

        {/* Role Badge */}
        <Box
          sx={{
            pt: 1.5,
            mt: 'auto',
            borderTop: '1px solid rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(0, 0, 0, 0.5)',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.05em',
            }}
          >
            {project.role}
          </Typography>
        </Box>
      </Box>

      {/* Shine effect - removed for performance */}
    </Box>
  );
};

export default ProjectCard;
