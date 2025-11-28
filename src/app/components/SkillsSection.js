import { useEffect, useRef, useState } from 'react';
import { Box, Container, Grid, Typography, Paper, Chip } from '@mui/material';
import { TrendingUp } from '@mui/icons-material';
import { skills } from '../constants/skills';
import { colors } from '../theme/colors';

const getCategoryAccent = (name) => {
  if (name === 'Frontend') return { primary: '#e53e3e', secondary: '#fc8181', light: '#fed7d7' };
  if (name === 'Backend') return { primary: '#38a169', secondary: '#68d391', light: '#c6f6d5' };
  if (name === 'Database') return { primary: '#38a169', secondary: '#68d391', light: '#c6f6d5' };
  if (name === 'DevOps & Tools') return { primary: '#2d3748', secondary: '#4a5568', light: '#e2e8f0' };
  return { primary: colors.softText, secondary: colors.softText, light: '#e2e8f0' };
};

// Dynamic code snippets for each category
const codeSnippets = {
  'Frontend': [
    'const [state, setState] = useState()',
    '<Component {...props} />',
    'interface Props extends BaseProps',
    'className="flex items-center gap-4"',
    'useEffect(() => { fetch() }, [])',
    'Promise.all([api1(), api2()])',
    'React.memo(Component)',
    'const theme = useTheme()',
    'grid grid-cols-3 gap-6',
    'transition: all 0.3s ease',
    'export default function Page()',
    'import { useState } from "react"',
    'type User = { id: number }',
    'hover:scale-105 cursor-pointer',
    'ref.current?.scrollIntoView()',
  ],
  'Backend': [
    'app.get("/api/users", handler)',
    'Route::middleware(["auth"])',
    'async function createUser(data)',
    'await db.user.create({ data })',
    'jwt.sign(payload, SECRET)',
    'express.json({ limit: "10mb" })',
    '$request->validate(["email"])',
    'DB::transaction(() => {})',
    'res.status(200).json(result)',
    'middleware: ["cors", "auth"]',
    'await User::find($id)',
    'passport.authenticate("jwt")',
    'process.env.DATABASE_URL',
    'app.use(express.urlencoded())',
    'cache.set(key, value, ttl)',
  ],
  'Database': [
    'SELECT * FROM users WHERE',
    'JOIN orders ON user_id = id',
    'WHERE created_at > NOW()',
    'GROUP BY category, status',
    'ORDER BY created_at DESC',
    'CREATE INDEX idx_email',
    'INNER JOIN posts p ON p.id',
    'COUNT(*) as total_users',
    'UPDATE users SET active = 1',
    'DELETE FROM cache WHERE exp',
    'LEFT JOIN comments c',
    'HAVING COUNT(*) > 5',
    'ALTER TABLE ADD COLUMN',
    'PRIMARY KEY (id)',
    'FOREIGN KEY (user_id)',
  ],
  'DevOps & Tools': [
    'docker build -t myapp:latest',
    'kubectl apply -f deployment',
    'git commit -m "feat: update"',
    'npm run build && npm test',
    'CI/CD: Build → Test → Deploy',
    'docker-compose up -d',
    'on: [push, pull_request]',
    'git checkout -b feature',
    'npm ci --production',
    'docker push registry/app',
    'terraform apply -auto',
    'yarn install --frozen',
    'actions: runs-on: ubuntu',
    'nginx -s reload',
    'pm2 restart app',
  ],
};

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [categoryTransition, setCategoryTransition] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
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

  const handleCategoryChange = (index) => {
    if (index !== activeCategoryIndex) {
      setCategoryTransition(true);
      setTimeout(() => {
        setActiveCategoryIndex(index);
        setCategoryTransition(false);
      }, 150);
    }
  };

  const activeAccent = getCategoryAccent(skills[activeCategoryIndex].category);

  return (
    <Box
      ref={sectionRef}
      id="skills"
      sx={{
        height: '100dvh',
        bgcolor: '#ffffff',
        backgroundImage: `
          radial-gradient(ellipse at 20% 20%, ${activeAccent.primary}08 0%, transparent 50%),
          radial-gradient(ellipse at 80% 80%, ${activeAccent.secondary}06 0%, transparent 50%),
          linear-gradient(180deg, #fafbfc 0%, #ffffff 100%)
        `,
        scrollMarginTop: '80px',
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'center',
        pt: { xs: 2, md: 3 },
        borderTop: '1px solid #e2e8f0',
        position: 'relative',
        transition: 'background-image 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
        overflow: 'hidden',
        
        // Animated hexagonal grid pattern
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          right: '-50%',
          bottom: '-50%',
          backgroundImage: `
            linear-gradient(30deg, ${activeAccent.primary}08 12%, transparent 12.5%, transparent 87%, ${activeAccent.primary}08 87.5%, ${activeAccent.primary}08),
            linear-gradient(150deg, ${activeAccent.primary}08 12%, transparent 12.5%, transparent 87%, ${activeAccent.primary}08 87.5%, ${activeAccent.primary}08),
            linear-gradient(30deg, ${activeAccent.primary}06 12%, transparent 12.5%, transparent 87%, ${activeAccent.primary}06 87.5%, ${activeAccent.primary}06),
            linear-gradient(150deg, ${activeAccent.primary}06 12%, transparent 12.5%, transparent 87%, ${activeAccent.primary}06 87.5%, ${activeAccent.primary}06)
          `,
          backgroundSize: '80px 140px',
          backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px',
          pointerEvents: 'none',
          animation: 'hexagonMove 40s linear infinite',
          transition: 'background-image 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
          opacity: 0.5,
        },
        
        // Flowing waves layer
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(ellipse at 30% 50%, ${activeAccent.primary}06 0%, transparent 50%),
            radial-gradient(ellipse at 70% 50%, ${activeAccent.secondary}06 0%, transparent 50%)
          `,
          pointerEvents: 'none',
          animation: 'waveFlow 15s ease-in-out infinite alternate',
          transition: 'background 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        
        '@keyframes hexagonMove': {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '100%': { transform: 'translate(80px, 140px) rotate(360deg)' },
        },
        
        '@keyframes waveFlow': {
          '0%': {
            transform: 'scale(1) translateX(0)',
            opacity: 0.4,
          },
          '50%': {
            transform: 'scale(1.1) translateX(20px)',
            opacity: 0.6,
          },
          '100%': {
            transform: 'scale(1) translateX(0)',
            opacity: 0.4,
          },
        },
      }}
    >
      {/* Large gradient orbs with smooth morphing */}
      {[
        { top: '10%', left: '5%', size: 400, delay: 0, duration: 20 },
        { top: '50%', right: '5%', size: 500, delay: 3, duration: 25 },
        { bottom: '15%', left: '40%', size: 350, delay: 5, duration: 22 },
      ].map((orb, index) => (
        <Box
          key={`orb-${index}`}
          sx={{
            position: 'absolute',
            ...orb,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            borderRadius: '50%',
            background: `radial-gradient(circle at 30% 30%, ${activeAccent.primary}18 0%, ${activeAccent.secondary}12 40%, transparent 70%)`,
            filter: 'blur(80px)',
            animation: `morphOrb${index} ${orb.duration}s ease-in-out ${orb.delay}s infinite`,
            transition: 'background 1.2s ease, opacity 0.8s ease',
            opacity: isInView ? 0.7 : 0,
            mixBlendMode: 'normal',
            [`@keyframes morphOrb${index}`]: {
              '0%, 100%': {
                transform: 'translate(0, 0) scale(1)',
                borderRadius: '50%',
              },
              '33%': {
                transform: `translate(${50 * (index % 2 === 0 ? 1 : -1)}px, ${-40}px) scale(1.2)`,
                borderRadius: '40% 60% 60% 40% / 60% 40% 60% 40%',
              },
              '66%': {
                transform: `translate(${-30 * (index % 2 === 0 ? 1 : -1)}px, ${50}px) scale(0.9)`,
                borderRadius: '60% 40% 40% 60% / 40% 60% 40% 60%',
              },
            },
          }}
        />
      ))}

      {/* Network particles with connecting lines */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: isInView ? 1 : 0,
          transition: 'opacity 1s ease 0.3s',
        }}
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        {[
          { x1: '15%', y1: '20%', x2: '45%', y2: '35%' },
          { x1: '45%', y1: '35%', x2: '75%', y2: '25%' },
          { x1: '75%', y1: '25%', x2: '85%', y2: '50%' },
          { x1: '85%', y1: '50%', x2: '60%', y2: '70%' },
          { x1: '60%', y1: '70%', x2: '30%', y2: '65%' },
          { x1: '30%', y1: '65%', x2: '15%', y2: '20%' },
          { x1: '45%', y1: '35%', x2: '30%', y2: '65%' },
          { x1: '75%', y1: '25%', x2: '60%', y2: '70%' },
        ].map((line, index) => (
          <line
            key={`line-${index}`}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke={activeAccent.primary}
            strokeWidth="1.5"
            strokeOpacity="0.15"
            filter="url(#glow)"
            style={{
              animation: `lineGlow ${3 + index * 0.5}s ease-in-out infinite ${index * 0.3}s`,
              transition: 'stroke 1.2s ease',
            }}
          >
            <animate
              attributeName="stroke-opacity"
              values="0.08;0.25;0.08"
              dur={`${3 + index * 0.5}s`}
              repeatCount="indefinite"
              begin={`${index * 0.3}s`}
            />
          </line>
        ))}
      </svg>

      {/* Enhanced network particles */}
      {[
        { top: '20%', left: '15%', delay: 0, size: 6 },
        { top: '35%', left: '45%', delay: 0.5, size: 8 },
        { top: '25%', right: '25%', delay: 1, size: 7 },
        { top: '50%', right: '15%', delay: 1.5, size: 6 },
        { top: '70%', right: '40%', delay: 2, size: 9 },
        { bottom: '35%', left: '30%', delay: 2.5, size: 7 },
        { top: '45%', left: '25%', delay: 1, size: 8 },
        { bottom: '20%', left: '60%', delay: 0.8, size: 6 },
      ].map((particle, index) => (
        <Box
          key={`particle-${index}`}
          sx={{
            position: 'absolute',
            ...particle,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${activeAccent.primary}DD, ${activeAccent.secondary}80)`,
            boxShadow: `
              0 0 ${particle.size * 3}px ${activeAccent.primary}50,
              0 0 ${particle.size * 6}px ${activeAccent.secondary}30,
              inset 0 0 ${particle.size}px ${activeAccent.primary}40
            `,
            animation: `particleFloat${index} ${8 + index}s ease-in-out ${particle.delay}s infinite`,
            transition: 'background 1.2s ease, box-shadow 1.2s ease, opacity 0.8s ease',
            opacity: isInView ? 1 : 0,
            zIndex: 1,
            [`@keyframes particleFloat${index}`]: {
              '0%, 100%': {
                transform: 'translate(0, 0) scale(1)',
                opacity: 0.5,
              },
              '25%': {
                transform: `translate(${40 * (index % 2 === 0 ? 1 : -1)}px, ${-30 * (index % 3)}px) scale(1.4)`,
                opacity: 0.8,
              },
              '50%': {
                transform: `translate(${-35 * (index % 3)}px, ${40 * (index % 2 === 0 ? 1 : -1)}px) scale(0.9)`,
                opacity: 0.6,
              },
              '75%': {
                transform: `translate(${30 * (index % 3)}px, ${35 * (index % 2 === 0 ? -1 : 1)}px) scale(1.2)`,
                opacity: 0.7,
              },
            },
          }}
        />
      ))}

      {/* Dynamic floating code snippets based on active category */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: categoryTransition ? 0 : (isInView ? 1 : 0),
          transition: 'opacity 0.3s ease-in-out',
          pointerEvents: 'none',
        }}
      >
        {(() => {
          const activeCategory = skills[activeCategoryIndex]?.category || 'Frontend';
          const snippets = codeSnippets[activeCategory] || codeSnippets['Frontend'];
          
          // Position patterns for better distribution
          const positions = [
            { top: '8%', left: '5%' },
            { top: '15%', left: '25%' },
            { top: '12%', right: '20%' },
            { top: '25%', left: '10%' },
            { top: '30%', right: '15%' },
            { top: '35%', left: '30%' },
            { top: '40%', right: '35%' },
            { top: '45%', left: '8%' },
            { top: '50%', right: '25%' },
            { top: '55%', left: '40%' },
            { top: '60%', right: '10%' },
            { top: '65%', left: '15%' },
            { top: '70%', right: '40%' },
            { top: '75%', left: '35%' },
            { top: '80%', right: '20%' },
          ];
          
          return snippets.map((snippet, index) => {
            const position = positions[index % positions.length];
            return (
              <Typography
                key={`snippet-${activeCategory}-${index}`}
                sx={{
                  position: 'absolute',
                  ...position,
                  color: activeAccent.primary,
                  opacity: 0,
                  fontSize: { xs: '0.7rem', md: '0.85rem' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  pointerEvents: 'none',
                  whiteSpace: 'nowrap',
                  animation: `floatSnippet${index} ${10 + index * 1.2}s ease-in-out ${index * 0.3}s infinite`,
                  transition: 'color 1.2s ease',
                  filter: 'blur(0.2px)',
                  transform: 'translateZ(0)',
                  willChange: 'transform, opacity',
                  [`@keyframes floatSnippet${index}`]: {
                    '0%': {
                      transform: 'translateY(0) translateX(0) rotate(0deg) scale(1)',
                      opacity: 0,
                    },
                    '15%': {
                      opacity: 0.28,
                    },
                    '50%': {
                      transform: `translateY(-${50 + index * 6}px) translateX(${index % 2 === 0 ? 25 : -25}px) rotate(${index % 3 === 0 ? 2 : -2}deg) scale(1.05)`,
                      opacity: 0.35,
                    },
                    '85%': {
                      opacity: 0.25,
                    },
                    '100%': {
                      transform: `translateY(-${100 + index * 8}px) translateX(${index % 2 === 0 ? 50 : -50}px) rotate(0deg) scale(0.95)`,
                      opacity: 0,
                    },
                  },
                }}
              >
                {snippet}
              </Typography>
            );
          });
        })()}
      </Box>

      {/* Concentric expanding rings */}
      {[
        { top: '25%', left: '20%', delay: 0, size: 150 },
        { top: '60%', right: '15%', delay: 2, size: 200 },
        { bottom: '25%', left: '55%', delay: 4, size: 180 },
      ].map((ring, index) => (
        <Box
          key={`ring-${index}`}
          sx={{
            position: 'absolute',
            ...ring,
            width: `${ring.size}px`,
            height: `${ring.size}px`,
            border: `2px solid ${activeAccent.primary}30`,
            borderRadius: '50%',
            animation: `expandRing${index} 6s ease-out ${ring.delay}s infinite`,
            transition: 'border-color 1.2s ease, opacity 0.8s ease',
            opacity: isInView ? 1 : 0,
            [`@keyframes expandRing${index}`]: {
              '0%': {
                transform: 'scale(0.5)',
                opacity: 0.6,
              },
              '50%': {
                opacity: 0.3,
              },
              '100%': {
                transform: 'scale(2)',
                opacity: 0,
              },
            },
          }}
        />
      ))}

      <Container
        maxWidth="xl"
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Grid
          container
          spacing={0}
          sx={{
            flex: 1,
          }}
        >
          {/* Left column: section intro */}
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateX(0) scale(1)' : 'translateX(-50px) scale(0.95)',
              filter: isInView ? 'blur(0px)' : 'blur(10px)',
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s',
            }}
          >
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                gap: 1.5,
              }}
            >
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1.25,
                  p: 1.5,
                  borderRadius: '16px',
                  background: `linear-gradient(135deg, ${activeAccent.light}60 0%, ${activeAccent.light}40 100%)`,
                  border: '2px solid',
                  borderColor: `${activeAccent.primary}40`,
                  mb: 0.5,
                  boxShadow: `0 8px 32px ${activeAccent.primary}25, inset 0 1px 0 rgba(255,255,255,0.8)`,
                  transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: '10px',
                    background: `linear-gradient(135deg, ${activeAccent.primary} 0%, ${activeAccent.secondary} 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 4px 16px ${activeAccent.primary}40`,
                    transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <TrendingUp sx={{ color: '#ffffff', fontSize: '1.2rem' }} />
                </Box>
                <Typography
                  variant="overline"
                  sx={{
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: activeAccent.primary,
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    transition: 'color 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  Skills & Technologies
                </Typography>
              </Box>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '1.7rem', md: '2.1rem' },
                  letterSpacing: '-0.02em',
                  color: colors.softText,
                  textShadow: `0 0 30px ${activeAccent.primary}20`,
                  transition: 'text-shadow 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                What I use to ship production‑ready products.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#4a5568',
                  fontSize: { xs: '0.88rem', md: '0.95rem' },
                  lineHeight: 1.7,
                  borderLeft: '4px solid',
                  borderColor: activeAccent.primary,
                  pl: 2,
                  background: `linear-gradient(90deg, ${activeAccent.light}30 0%, transparent 100%)`,
                  py: 1,
                  borderRadius: '0 8px 8px 0',
                  transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                A balanced stack across frontend, backend, data and DevOps, with a focus on
                maintainability, performance and developer experience.
              </Typography>
            </Box>
          </Grid>

          {/* Right column: interactive categorized skills */}
          <Grid
            item
            xs={12}
            md={9}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: 2,
              mt: { xs: 2, md: -15 },
              alignItems: 'flex-start',
              alignContent: 'flex-start',
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
              filter: isInView ? 'blur(0px)' : 'blur(10px)',
              transition: 'all 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s',
            }}
          >
            {/* Category tabs */}
            {skills.map((category, index) => {
                const accent = getCategoryAccent(category.category);
                const isActive = index === activeCategoryIndex;

                return (
                  <Chip
                    key={category.category}
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box
                          sx={{
                            width: 10,
                            height: 10,
                            borderRadius: '50%',
                            backgroundColor: isActive ? '#ffffff' : accent.primary,
                            boxShadow: isActive ? `0 0 8px ${accent.secondary}` : 'none',
                            transition: 'all 0.3s ease',
                          }}
                        />
                        <span style={{ fontWeight: isActive ? 700 : 600 }}>{category.category}</span>
                        <Box
                          component="span"
                          sx={{
                            fontSize: '0.7rem',
                            opacity: isActive ? 0.9 : 0.7,
                            fontWeight: 700,
                            ml: 0.25,
                          }}
                        >
                          {category.items.length}
                        </Box>
                      </Box>
                    }
                    onClick={() => handleCategoryChange(index)}
                    sx={{
                      px: 2,
                      py: 1.5,
                      height: 'auto',
                      borderRadius: '14px',
                      cursor: 'pointer',
                      fontSize: '0.92rem',
                      mb: 1,
                      color: isActive ? '#ffffff' : '#2d3748',
                      background: isActive 
                        ? `linear-gradient(135deg, ${accent.primary} 0%, ${accent.secondary} 100%)`
                        : '#ffffff',
                      border: '2px solid',
                      borderColor: isActive ? accent.primary : '#e2e8f0',
                      boxShadow: isActive 
                        ? `0 8px 32px ${accent.primary}40, 0 0 16px ${accent.primary}20, inset 0 1px 0 rgba(255,255,255,0.3)`
                        : '0 2px 12px rgba(0,0,0,0.08)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      transform: isActive ? 'translateY(-4px) scale(1.03)' : 'translateY(0) scale(1)',
                      '&:hover': {
                        background: isActive 
                          ? `linear-gradient(135deg, ${accent.primary} 0%, ${accent.secondary} 100%)`
                          : `linear-gradient(135deg, ${accent.light}50 0%, #ffffff 100%)`,
                        borderColor: accent.primary,
                        color: isActive ? '#ffffff' : accent.primary,
                        transform: 'translateY(-4px) scale(1.03)',
                        boxShadow: `0 12px 40px ${accent.primary}35`,
                      },
                      '& .MuiChip-label': {
                        px: 0,
                      }
                    }}
                  />
                );
              })}

            {/* Active category panel */}
            {(() => {
              const activeCategory = skills[activeCategoryIndex];
              const accent = getCategoryAccent(activeCategory.category);

              return (
                <Paper
                  elevation={0}
                  sx={{
                    borderRadius: '24px',
                    border: '2px solid',
                    borderColor: `${accent.primary}30`,
                    background: `
                      linear-gradient(135deg, #ffffff 0%, ${accent.light}15 40%, ${accent.light}10 70%, #ffffff 100%),
                      radial-gradient(ellipse at top left, ${accent.primary}05 0%, transparent 50%),
                      radial-gradient(ellipse at bottom right, ${accent.secondary}05 0%, transparent 50%)
                    `,
                    p: { xs: 2.5, md: 3 },
                    minWidth: '1500px',
                    maxWidth: '1500px',
                    minHeight: { xs: 'auto', md: '350px' },
                    display: 'flex',
                    flexDirection: 'column',
                    flexBasis: '100%',
                    gap: 2.5,
                    opacity: categoryTransition ? 0.6 : (isInView ? 1 : 0),
                    transform: categoryTransition 
                      ? 'scale(0.98)' 
                      : (isInView ? 'scale(1)' : 'scale(0.95)'),
                    transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s',
                    boxShadow: `
                      0 20px 80px ${accent.primary}25, 
                      0 10px 40px ${accent.secondary}15,
                      inset 0 1px 0 rgba(255,255,255,0.9),
                      0 0 0 1px ${accent.primary}15
                    `,
                  }}
                >
                  {/* Category Title */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                      mb: 1,
                    }}
                  >
                    <Box
                      sx={{
                        width: 4,
                        height: 32,
                        borderRadius: 999,
                        background: `linear-gradient(180deg, ${accent.primary} 0%, ${accent.secondary} 100%)`,
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: '1.4rem',
                        fontWeight: 700,
                        color: colors.softText,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {activeCategory.category}
                    </Typography>
                    <Chip
                      label={`${activeCategory.items.length} skills`}
                      size="small"
                      sx={{
                        height: '24px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        backgroundColor: accent.light,
                        color: accent.primary,
                        border: `1px solid ${accent.primary}30`,
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: { 
                        xs: '1fr', 
                        sm: 'repeat(2, 1fr)', 
                        md: 'repeat(3, 1fr)',
                        lg: 'repeat(4, 1fr)',
                        xl: 'repeat(5, 1fr)'
                      },
                      columnGap: 2,
                      rowGap: 2,
                    }}
                  >
                    {activeCategory.items.map((skill, idx) => {
                      const IconComponent = skill.icon;
                      const isHovered = hoveredSkill === skill.name;

                      return (
                          <Paper
                            key={skill.name}
                            elevation={isHovered ? 4 : 0}
                            onMouseEnter={() => setHoveredSkill(skill.name)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            sx={{
                              p: 1.75,
                              borderRadius: '16px',
                              border: '2px solid',
                              borderColor: isHovered ? accent.primary : '#e2e8f0',
                              background: isHovered 
                                ? `linear-gradient(135deg, ${accent.light}50 0%, #ffffff 100%)`
                                : '#ffffff',
                              cursor: 'pointer',
                              opacity: isInView ? 1 : 0,
                              transform: isHovered 
                                ? 'translateY(-8px) scale(1.03)' 
                                : (isInView ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)'),
                              filter: isInView ? 'blur(0px)' : 'blur(5px)',
                              transition: `
                                all 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                                opacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.6 + idx * 0.05}s,
                                transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.6 + idx * 0.05}s,
                                filter 0.6s ease ${0.6 + idx * 0.05}s
                              `,
                              boxShadow: isHovered 
                                ? `0 16px 48px ${accent.primary}30, 0 0 20px ${accent.primary}15, inset 0 1px 0 rgba(255,255,255,0.9)`
                                : '0 4px 12px rgba(0,0,0,0.06)',
                            }}
                          >
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.2 }}>
                              <Box
                                sx={{
                                  width: 42,
                                  height: 42,
                                  borderRadius: '12px',
                                  background: isHovered
                                    ? `linear-gradient(135deg, ${accent.primary} 0%, ${accent.secondary} 100%)`
                                    : `linear-gradient(135deg, ${accent.light}60 0%, ${accent.light}40 100%)`,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flexShrink: 0,
                                  transition: 'all 0.4s ease',
                                  boxShadow: isHovered 
                                    ? `0 8px 24px ${accent.primary}50, 0 0 12px ${accent.primary}30` 
                                    : `0 2px 8px ${accent.primary}20`,
                                  border: '1px solid',
                                  borderColor: isHovered ? accent.primary : 'transparent',
                                }}
                              >
                                <IconComponent
                                  style={{
                                    fontSize: '1.4rem',
                                    color: isHovered ? '#ffffff' : accent.primary,
                                    transition: 'all 0.4s ease',
                                  }}
                                />
                              </Box>
                              <Box sx={{ flex: 1, minWidth: 0 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 0.75 }}>
                                  <Typography
                                    sx={{
                                      fontSize: '0.95rem',
                                      fontWeight: 700,
                                      color: colors.softText,
                                      letterSpacing: '-0.01em',
                                    }}
                                  >
                                    {skill.name}
                                  </Typography>
                                </Box>
                                {skill.details && (
                                  <Typography
                                    sx={{
                                      fontSize: '0.75rem',
                                      color: '#718096',
                                      mb: 1,
                                      lineHeight: 1.4,
                                    }}
                                  >
                                    {skill.details}
                                  </Typography>
                                )}
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                  <Box
                                    sx={{
                                      position: 'relative',
                                      height: 6,
                                      borderRadius: 999,
                                      backgroundColor: '#edf2f7',
                                      overflow: 'hidden',
                                      flex: 1,
                                    }}
                                  >
                                    <Box
                                      sx={{
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        bottom: 0,
                                        width: isInView ? `${skill.level}%` : '0%',
                                        borderRadius: 999,
                                        background: `linear-gradient(90deg, ${accent.primary}, ${accent.secondary})`,
                                        boxShadow: isHovered 
                                          ? `0 0 16px ${accent.primary}70, 0 0 8px ${accent.primary}50` 
                                          : `0 0 4px ${accent.primary}30`,
                                        transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s, box-shadow 0.4s ease',
                                      }}
                                    />
                                  </Box>
                                  <Typography
                                    sx={{
                                      fontSize: '0.75rem',
                                      color: isHovered ? accent.primary : '#a0aec0',
                                      fontWeight: 700,
                                      minWidth: '38px',
                                      textAlign: 'right',
                                      transition: 'color 0.4s ease',
                                    }}
                                  >
                                    {skill.level}%
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Paper>
                      );
                    })}
                  </Box>
                </Paper>
              );
            })()}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SkillsSection;
