import { Box, IconButton, Typography, Tooltip } from '@mui/material';
import { LinkedIn, GitHub, Instagram, WhatsApp, Email } from '@mui/icons-material';

const SocialLinks = () => {
  const socialLinks = [
    {
      platform: 'linkedin',
      icon: LinkedIn,
      label: 'LinkedIn',
      color: '#0077B5',
      url: 'https://linkedin.com/in/your-profile',
      description: 'Connect with me on LinkedIn'
    },
    {
      platform: 'github',
      icon: GitHub,
      label: 'GitHub',
      color: '#333333',
      url: 'https://github.com/your-username',
      description: 'Check out my projects on GitHub'
    },
    {
      platform: 'instagram',
      icon: Instagram,
      label: 'Instagram',
      color: '#E4405F',
      url: 'https://instagram.com/your-username',
      description: 'Follow me on Instagram'
    },
    {
      platform: 'whatsapp',
      icon: WhatsApp,
      label: 'WhatsApp',
      color: '#25D366',
      url: 'https://wa.me/your-phone-number',
      description: 'Message me on WhatsApp'
    },
    {
      platform: 'email',
      icon: Email,
      label: 'Email',
      color: '#D44638',
      url: 'mailto:your-email@example.com',
      description: 'Send me an email'
    }
  ];

  const handleSocialClick = (url) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        mb: 4,
      }}
    >
    
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {socialLinks.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <Tooltip
              key={social.platform}
              title={social.description}
              placement="top"
              arrow
            >
              <IconButton
                onClick={() => handleSocialClick(social.url)}
                sx={{
                  color: '#7a7a7a',
                  width: 52,
                  height: 52,
                  border: '1px solid #e0e0e0',
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  backdropFilter: 'blur(10px)',
                  position: 'relative',
                  overflow: 'hidden',
                  animation: `fadeInUp 0.6s ease-out ${0.2 + index * 0.1}s both`,
                  '@keyframes fadeInUp': {
                    '0%': { opacity: 0, transform: 'translateY(20px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(45deg, ${social.color}20, ${social.color}10)`,
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  },
                  '&:hover': {
                    color: social.color,
                    backgroundColor: 'rgba(255,255,255,0.95)',
                    transform: 'translateY(-4px) scale(1.05)',
                    boxShadow: `0 8px 20px ${social.color}30`,
                    borderColor: `${social.color}40`,
                    '&::before': {
                      opacity: 1,
                    },
                  },
                  '&:active': {
                    transform: 'translateY(-2px) scale(1.02)',
                  },
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <IconComponent
                  sx={{
                    fontSize: '1.4rem',
                    position: 'relative',
                    zIndex: 1,
                  }}
                />
              </IconButton>
            </Tooltip>
          );
        })}
      </Box>

      {/* Contact Info */}
      <Box
        sx={{
          textAlign: 'center',
          mt: 2,
          p: 2,
          borderRadius: 2,
          backgroundColor: 'rgba(206, 17, 38, 0.05)',
          border: '1px solid rgba(206, 17, 38, 0.1)',
          animation: 'fadeInUp 0.6s ease-out 0.8s both',
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: '#666',
            fontSize: '0.9rem',
            fontWeight: 500,
          }}
        >
          Available for freelance projects and collaborations
        </Typography>
      </Box>
    </Box>
  );
};

export default SocialLinks; 