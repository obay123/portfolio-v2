import { Box, Tabs, Tab, Avatar, useTheme, useMediaQuery } from '@mui/material';
import { Code } from '@mui/icons-material';
import { colors } from '../theme/colors';

const ProjectTabs = ({ projects, selected, onChange }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        minWidth: { xs: '100%', md: 320 },
        maxWidth: { xs: '100%', md: 300 },
        pr: { md: 0 },
        pb: { xs: 2, md: 0 },
        mr: { md: 14 },
        display: 'flex',
        flexDirection: { xs: 'row', md: 'column' },
        alignItems: { xs: 'center', md: 'stretch' },
        background: `linear-gradient(135deg, ${colors.softBg} 20%, ${colors.softBorder} 100%)`,
        backdropFilter: 'blur(8px)',
        borderRadius: 4,
        boxShadow: { md: '0 4px 24px 0 rgba(30,41,59,0.08)' },
        position: 'relative',
        zIndex: 2,
        border: { md: `1.5px solid ${colors.softBorder}` },
        height: { md: '80%' },
        maxHeight: { md: '80%' },
        justifyContent: { xs: 'center', md: 'flex-start' },
        p: { xs: 2, md: 3 },
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: colors.softRed,
          borderRadius: '4px 4px 0 0',
          zIndex: 1,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: colors.title,
          borderRadius: '0 0 4px 4px',
          zIndex: 1,
        },
      }}
    >
      <Tabs
        orientation={isMobile ? 'horizontal' : 'vertical'}
        value={selected}
        onChange={onChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        aria-label="Projects"
        sx={{
          width: '100%',
          flex: 1,
          minHeight: 0,
          maxHeight: { md: '100%' },
          overflowY: 'auto',
          '&::-webkit-scrollbar': { width: 8, height: 8 },
          '&::-webkit-scrollbar-thumb': { backgroundColor: 'rgba(45, 55, 72, 0.25)', borderRadius: 8 },
          '&::-webkit-scrollbar-track': { backgroundColor: 'transparent' },
          '& .MuiTab-root': {
            minWidth: 120,
            fontWeight: 700,
            color: colors.softText,
            borderRadius: 3,
            mx: { xs: 0.5, md: 0 },
            my: { xs: 0, md: 0.5 },
            px: 2,
            py: 1,
            background: '#fff',
            transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
            '&.Mui-selected': {
              color: '#fff',
              background: colors.softRed,
              boxShadow: `0 4px 12px rgba(229, 62, 62, 0.25)`,
              transform: 'translateY(-2px)',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                left: -4,
                top: '50%',
                transform: 'translateY(-50%)',
                width: 3,
                height: '70%',
                borderRadius: 3,
                background: `linear-gradient(180deg, ${colors.softGreen}, ${colors.softRed})`,
              }
            },
            '&:hover:not(.Mui-selected)': {
              background: 'rgba(229, 62, 62, 0.08)',
              transform: 'translateY(-1px)',
            },
          },
          '& .MuiTabs-indicator': {
            display: 'none',
          },
          '& .MuiTabs-scrollButtons': {
            color: colors.softRed,
            '&.Mui-disabled': {
              opacity: 0.3,
            },
          },
          '& .MuiTabs-scrollable': {
            overflow: 'visible',
          },
          alignItems: { md: 'flex-start' },
          justifyContent: { xs: 'center', md: 'flex-start' },
        }}
      >
        {projects.map((project, idx) => (
          <Tab
            key={idx}
            icon={<Avatar src={project.image} alt={project.title} sx={{ width: 28, height: 28, bgcolor: colors.softRed, fontSize: 16, boxShadow: `0 2px 8px rgba(229, 62, 62, 0.18)`, border: '2px solid #fff', outline: selected === idx ? `2px solid ${colors.softGreen}` : 'none', outlineOffset: '2px' }}><Code fontSize="small" /></Avatar>}
            iconPosition="start"
            label={project.title}
            sx={{ 
              minHeight: 48, 
              justifyContent: 'flex-start', 
              textAlign: 'left', 
              width: '100%',
              fontSize: '0.9rem',
              '& .MuiTab-iconWrapper': {
                mr: 1,
              },
              animation: 'fadeSlideIn 0.5s ease both',
              animationDelay: `${idx * 60}ms`,
              '@keyframes fadeSlideIn': {
                '0%': { opacity: 0, transform: 'translateY(8px)' },
                '100%': { opacity: 1, transform: 'translateY(0)' },
              }
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default ProjectTabs;
