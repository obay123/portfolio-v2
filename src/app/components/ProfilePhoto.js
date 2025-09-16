import { Box, Paper, Typography, Chip } from '@mui/material';
import { Star, LocationOn } from '@mui/icons-material';

const ProfilePhoto = () => {
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Enhanced decorative background element */}
      <Box
        sx={{
          position: 'absolute',
          top: 22,
          left: -10,
          right: -15,
          bottom: -30,
          background: 'linear-gradient(135deg, rgba(206, 17, 38, 0.08) 0%, rgba(0, 122, 61, 0.08) 100%)',
          borderRadius: '20px',
          zIndex: -1,
          animation: 'pulse 4s ease-in-out infinite',
          '@keyframes pulse': {
            '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
            '50%': { opacity: 1, transform: 'scale(1.01)' },
          },
        }}
      />
      
      {/* Profile Photo Container */}
      <Paper
        elevation={16}
        sx={{
          width: '100%',
          maxWidth: 560,
          height: 650,
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '16px',
          background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
          border: '3px solid #e0e0e0',
          cursor: 'pointer',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.05)',
          '&:hover': {
            transform: 'translateY(-10px) scale(1.01)',
            boxShadow: '0 30px 60px rgba(0,0,0,0.15), 0 12px 24px rgba(0,0,0,0.1)',
            border: '1px solid #CE1126',
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, rgba(206, 17, 38, 0.03) 0%, rgba(0, 122, 61, 0.03) 100%)',
            borderRadius: '16px',
            zIndex: 1,
          },
        }}
      >
        {/* Profile Photo */}
        <Box
          component="img"
          src="/placeholder-avatar.jpg"
          alt="Profile"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'relative',
            zIndex: 2,
            transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              transform: 'scale(1.08)',
            },
          }}
        />
        
        {/* Enhanced overlay gradient for depth */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 10,
            right: 0,
            height: '40%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)',
            borderRadius: '0 0 16px 16px',
            zIndex: 3,
          }}
        />
        
       
        
        {/* Enhanced Syrian Flag overlay */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 15,
            right: 15,
            zIndex: 4,
            animation: 'slideInUp 0.8s ease-out 0.9s both',
            '@keyframes slideInUp': {
              '0%': { opacity: 0, transform: 'translateY(20px)' },
              '100%': { opacity: 1, transform: 'translateY(0)' },
            },
          }}
        >
          <Paper
            elevation={8}
            sx={{
              p: 1.5,
              borderRadius: '8px',
              background: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(255,255,255,0.3)',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
            }}
          >
            <Box
              sx={{
                width: 60,
                height: 42,
                border: '1px solid #d0d0d0',
                borderRadius: '3px',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              }}
            >
              {/* Red stripe */}
              <Box sx={{ height: '12px', backgroundColor: '#CE1126' }} />
              {/* White stripe with 2 green stars */}
              <Box
                sx={{
                  height: '14px',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                {/* First star */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: '35%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#007A3D',
                    clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                  }}
                />
                {/* Second star */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: '65%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#007A3D',
                    clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                  }}
                />
              </Box>
              {/* Black stripe */}
              <Box sx={{ height: '14px', backgroundColor: '#000000' }} />
            </Box>
          </Paper>
        </Box>
        
        {/* Enhanced Experience Badge */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 15,
            left: 15,
            zIndex: 4,
            animation: 'slideInUp 0.8s ease-out 1.1s both',
          }}
        >
          <Paper
            elevation={8}
            sx={{
              p: 2,
              borderRadius: '12px',
              background: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(255,255,255,0.3)',
              textAlign: 'center',
              minWidth: 50,
              boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
              transition: 'all 0.3s ease',
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: '#CE1126',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                mb: 0,
              }}
            >
              1+
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#666',
                fontSize: '0.8rem',
                fontWeight: 600,
              }}
            >
              Years
            </Typography>
          </Paper>
        </Box>
      </Paper>
      
      {/* Enhanced floating decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: -15,
          right: -15,
          width: 30,
          height: 30,
          borderRadius: '50%',
          background: 'linear-gradient(45deg, #CE1126, #007A3D)',
          opacity: 0.7,
          animation: 'float 4s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
            '50%': { transform: 'translateY(-15px) rotate(180deg)' },
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 60,
          left: -20,
          width: 20,
          height: 20,
          borderRadius: '50%',
          background: 'linear-gradient(45deg, #007A3D, #CE1126)',
          opacity: 0.5,
          animation: 'float 5s ease-in-out infinite reverse',
        }}
      />
    </Box>
  );
};

export default ProfilePhoto; 