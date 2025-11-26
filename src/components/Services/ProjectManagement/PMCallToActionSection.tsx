import { Box, Button, Typography, Container } from '@mui/material';

const PMCallToActionSection = () => {
  return (
    <Box sx={{ background: 'linear-gradient(180deg, #0a0747 0%, #131050 100%)', padding: '80px 20px' }}>
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Typography variant="h4" sx={{ color: '#fff', fontWeight: 600, marginBottom: 2 }}>
          Ready to upgrade your team's QA skills?
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            padding: '12px 36px',
            fontSize: '16px',
            fontWeight: 500,
            margin: '10px',
            textTransform: 'none',
            backgroundColor: '#007bff',
          }}
        >
          Get Started
        </Button>
        <Button
          variant="outlined"
          sx={{
            padding: '12px 36px',
            fontSize: '16px',
            fontWeight: 500,
            margin: '10px',
            textTransform: 'none',
            borderColor: '#fff',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#fff',
              color: '#0a0747',
            },
          }}
        >
          Book Free Consultation
        </Button>
      </Container>
    </Box>
  );
};

export default PMCallToActionSection;
