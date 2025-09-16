import { Box } from '@mui/material';

const SyrianFlag = ({ width = 200, height = 120 }) => {
  return (
    <Box
      sx={{
        width: width,
        height: height,
        border: '2px solid #000',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Red stripe */}
      <Box
        sx={{
          height: `${height / 3}px`,
          backgroundColor: '#CE1126',
        }}
      />
      
      {/* White stripe with green stars */}
      <Box
        sx={{
          height: `${height / 3}px`,
          backgroundColor: '#FFFFFF',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Two green stars */}
        <Box
          sx={{
            display: 'flex',
            gap: '8px',
          }}
        >
          <Box
            sx={{
              width: '0',
              height: '0',
              borderLeft: '8px solid transparent',
              borderRight: '8px solid transparent',
              borderBottom: '16px solid #007A3D',
              transform: 'rotate(180deg)',
            }}
          />
          <Box
            sx={{
              width: '0',
              height: '0',
              borderLeft: '8px solid transparent',
              borderRight: '8px solid transparent',
              borderBottom: '16px solid #007A3D',
              transform: 'rotate(180deg)',
            }}
          />
        </Box>
      </Box>
      
      {/* Black stripe */}
      <Box
        sx={{
          height: `${height / 3}px`,
          backgroundColor: '#000000',
        }}
      />
    </Box>
  );
};

export default SyrianFlag; 