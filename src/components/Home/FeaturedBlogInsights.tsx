import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
  Grid,
  Container,
} from "@mui/material";
import CalendarTodayOutlined from "@mui/icons-material/CalendarTodayOutlined";
import AccessTimeOutlined from "@mui/icons-material/AccessTimeOutlined";

interface BlogArticle {
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
}

const articles: BlogArticle[] = [
  {
    tag: "Best Practices",
    title: "10 QA Best Practices Every FinTech Should Follow",
    excerpt:
      "Discover the essential quality assurance practices that help FinTech companies maintain reliability and security at scale.",
    date: "Nov 20, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    tag: "Automation",
    title: "How to Build a Test Automation Framework from Scratch",
    excerpt:
      "A comprehensive guide to setting up automated testing infrastructure that scales with your product.",
    date: "Nov 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
  },
  {
    tag: "Strategy",
    title: "The ROI of Investing in Quality Assurance",
    excerpt:
      "Learn why early investment in QA saves money, time, and reputation in the long run.",
    date: "Nov 10, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
];

const BlogCard = ({ tag, title, excerpt, date, readTime, image }: BlogArticle) => (
  <Card
    elevation={0}
    sx={{
      height: "100%",
      borderRadius: 4,
      border: "1px solid",
      borderColor: "divider",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      backdropFilter: "blur(4px)",
      transition: "all 0.3s ease",
      overflow: "hidden",
      "&:hover": {
        transform: "translateY(-8px)",
        boxShadow: "0 12px 20px -10px rgba(0,0,0,0.1)",
        borderColor: "primary.main",
      },
    }}
  >
    <Box
      sx={{
        height: 200,
        width: "100%",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
    <CardContent sx={{ p: 4, display: "flex", flexDirection: "column", height: "calc(100% - 200px)" }}>
      <Chip
        label={tag}
        size="small"
        sx={{
          borderRadius: 1,
          mb: 2,
          fontWeight: 700,
          fontSize: 10,
          textTransform: "uppercase",
          letterSpacing: 0.5,
          color: "primary.main",
          borderColor: "primary.light",
          alignSelf: "flex-start",
        }}
        variant="outlined"
      />

      <Typography variant="h6" sx={{ fontWeight: 800, mb: 1.5, lineHeight: 1.3 }}>
        {title}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          lineHeight: 1.6,
          mb: 3,
          flexGrow: 1,
        }}
      >
        {excerpt}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: 3, mt: "auto" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
          <CalendarTodayOutlined sx={{ fontSize: 14, color: "text.secondary" }} />
          <Typography variant="caption" sx={{ fontWeight: 600, color: "text.secondary" }}>
            {date}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
          <AccessTimeOutlined sx={{ fontSize: 14, color: "text.secondary" }} />
          <Typography variant="caption" sx={{ fontWeight: 600, color: "text.secondary" }}>
            {readTime}
          </Typography>
        </Box>
      </Box>
    </CardContent>
  </Card>
);

export default function FeaturedBlogInsights() {
  return (
    <Box sx={{ width: "100%", py: { xs: 10, md: 15 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
            Featured Blog & Insights
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 4 }}>
            Expert insights on quality assurance and software testing
          </Typography>
          <Box sx={{ width: 60, height: 4, bgcolor: "primary.main", mx: "auto", borderRadius: 2 }} />
        </Box>

        <Grid container spacing={4}>
          {articles.map((a, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <BlogCard {...a} />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8, textAlign: "center" }}>
          <Button
            variant="outlined"
            size="large"
            endIcon={<span>→</span>}
            sx={{
              borderRadius: 2,
              px: 4,
              py: 1.5,
              fontWeight: 700,
              color: "text.primary",
              borderColor: "divider",
              backgroundColor: "white",
              "&:hover": {
                borderColor: "primary.main",
                backgroundColor: "rgba(36, 84, 255, 0.04)",
              },
            }}
          >
            View All Articles
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
