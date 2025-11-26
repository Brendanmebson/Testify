import { Grid, Typography, Box, Button } from '@mui/material';

const PSTAToolsSection = () => {
  return (
    <Box sx={{ padding: '40px 20px', backgroundColor: '#fff' }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 600 }}>
        Tools That Drive Our Success
      </Typography>
      <Typography variant="body1" align="center" sx={{ color: 'gray', marginBottom: 4 }}>
        At Testify, we pair each process with the right tools to deliver reliable results.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" align="center" sx={{ fontWeight: 500 }}>
            Web Testing Tools
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {['Selenium', 'Cypress', 'Cucumber', 'Katalon'].map((tool) => (
              <Button key={tool} sx={{ textTransform: 'none' }}>
                {tool}
              </Button>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" align="center" sx={{ fontWeight: 500 }}>
            Mobile Testing Tools
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {['Appium', 'Espresso', 'Experitest'].map((tool) => (
              <Button key={tool} sx={{ textTransform: 'none' }}>
                {tool}
              </Button>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" align="center" sx={{ fontWeight: 500 }}>
            Security Testing Tools
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {['ZAPTEST', 'NetSparker', 'Nexus'].map((tool) => (
              <Button key={tool} sx={{ textTransform: 'none' }}>
                {tool}
              </Button>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" align="center" sx={{ fontWeight: 500 }}>
            Performance Testing Tools
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {['JMeter', 'BlazeMeter', 'LoadRunner'].map((tool) => (
              <Button key={tool} sx={{ textTransform: 'none' }}>
                {tool}
              </Button>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" align="center" sx={{ fontWeight: 500 }}>
            API Testing Tools
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {['Postman', 'SoapUI'].map((tool) => (
              <Button key={tool} sx={{ textTransform: 'none' }}>
                {tool}
              </Button>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" align="center" sx={{ fontWeight: 500 }}>
            Defect Management Tools
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {['Jira', 'Trello', 'MantisHub'].map((tool) => (
              <Button key={tool} sx={{ textTransform: 'none' }}>
                {tool}
              </Button>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PSTAToolsSection;
