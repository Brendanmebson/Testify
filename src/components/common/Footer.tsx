import { Box, Grid, Typography, Link, Container, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button } from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  const services = [
    { label: 'Software Testing', path: '/services/softwaretesting' },
    { label: 'Project Management', path: '/services/projectmanagement' },
    { label: 'Process Setup', path: '/services/processsta' },
    { label: 'QA Coaching', path: '/services/processsta' },
  ];

  const companyLinks = [
    { label: 'About Us', path: '/aboutus' },
    { label: 'Case Studies', path: '/casestudies' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Careers', path: '/careers' },
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#0F172A',
        color: 'white',
        pt: 10,
        pb: 4,
        borderTop: '1px solid',
        borderColor: 'rgba(255, 255, 255, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 900,
                letterSpacing: 2,
                mb: 3,
                color: 'primary.light',
              }}
            >
              TESTIFY
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.6)',
                lineHeight: 1.8,
                maxWidth: 300,
                mb: 4,
              }}
            >
              Building a culture of quality engineering and reliable software systems across the globe.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {[TwitterIcon, LinkedInIcon, GitHubIcon].map((Icon, i) => (
                <IconButton
                  key={i}
                  size="small"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    '&:hover': {
                      color: 'primary.light',
                      borderColor: 'primary.light',
                      bgcolor: 'rgba(36, 84, 255, 0.1)',
                    },
                  }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Box>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 3 }}>
              Services
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {services.map((item) => (
                <Link
                  key={item.label}
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    transition: 'color 0.2s',
                    '&:hover': { color: 'primary.light' },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 3 }}>
              Company
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {companyLinks.map((item) => (
                <Link
                  key={item.label}
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    transition: 'color 0.2s',
                    '&:hover': { color: 'primary.light' },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 3 }}>
              Newsletter
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)', mb: 3 }}>
              Get the latest insights on quality engineering delivered to your inbox.
            </Typography>
            {/* Newsletter input placeholder */}
            <Box
              sx={{
                display: 'flex',
                bgcolor: 'rgba(255, 255, 255, 0.05)',
                p: 0.5,
                borderRadius: 2,
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <Box
                component="input"
                placeholder="Email address"
                sx={{
                  flexGrow: 1,
                  bgcolor: 'transparent',
                  border: 'none',
                  color: 'white',
                  px: 2,
                  outline: 'none',
                  fontSize: '0.875rem',
                  '&::placeholder': { color: 'rgba(255, 255, 255, 0.3)' },
                }}
              />
              <Button
                variant="contained"
                size="small"
                sx={{
                  boxShadow: 'none',
                  borderRadius: 1.5,
                  textTransform: 'none',
                  fontWeight: 700,
                }}
              >
                Join
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 10,
            pt: 4,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="caption"
            sx={{ color: 'rgba(255, 255, 255, 0.4)', fontWeight: 500 }}
          >
            © {new Date().getFullYear()} Testify. Empowering high-performance engineering teams. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
