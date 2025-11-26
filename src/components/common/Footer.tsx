import { Box, Grid, Typography, Link, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#0a0747', padding: '40px 0' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ color: '#fff', fontWeight: 600 }}>
              TESTIFY
            </Typography>
            <Typography variant="body2" sx={{ color: '#bbb' }}>
              Product Quality Engineering & Software Testing You Can Trust. Delivered Fast.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ color: '#fff', fontWeight: 600 }}>
              Services
            </Typography>
            <Box>
              {['Software Testing', 'Project Management', 'Process Setup', 'QA Coaching'].map((service) => (
                <Typography key={service} variant="body2" sx={{ color: '#bbb', marginBottom: 1 }}>
                  <Link href="#" sx={{ color: '#bbb', textDecoration: 'none' }}>
                    {service}
                  </Link>
                </Typography>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ color: '#fff', fontWeight: 600 }}>
              Company
            </Typography>
            <Box>
              {['About Us', 'Case Studies', 'Testimonials', 'Careers'].map((company) => (
                <Typography key={company} variant="body2" sx={{ color: '#bbb', marginBottom: 1 }}>
                  <Link href="#" sx={{ color: '#bbb', textDecoration: 'none' }}>
                    {company}
                  </Link>
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: 'center', marginTop: 4 }}>
          <Typography variant="body2" sx={{ color: '#bbb' }}>
            © 2025 Testify. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
