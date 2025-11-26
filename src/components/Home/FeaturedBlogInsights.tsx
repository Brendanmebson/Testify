import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
} from "@mui/material";
import CalendarTodayOutlined from "@mui/icons-material/CalendarTodayOutlined";
import AccessTimeOutlined from "@mui/icons-material/AccessTimeOutlined";

interface BlogArticle {
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

const articles: BlogArticle[] = [
  {
    tag: "Best Practices",
    title: "10 QA Best Practices Every FinTech Should Follow",
    excerpt:
      "Discover the essential quality assurance practices that help FinTech companies maintain reliability and security at scale.",
    date: "Nov 20, 2024",
    readTime: "5 min read",
  },
  {
    tag: "Automation",
    title: "How to Build a Test Automation Framework from Scratch",
    excerpt:
      "A comprehensive guide to setting up automated testing infrastructure that scales with your product.",
    date: "Nov 15, 2024",
    readTime: "8 min read",
  },
  {
    tag: "Strategy",
    title: "The ROI of Investing in Quality Assurance",
    excerpt:
      "Learn why early investment in QA saves money, time, and reputation in the long run.",
    date: "Nov 10, 2024",
    readTime: "6 min read",
  },
];

const BlogCard = ({ tag, title, excerpt, date, readTime }: BlogArticle) => (
  <Card
    variant="outlined"
    sx={{
      width: 360,
      p: 2,
      borderRadius: "16px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
    }}
  >
    <CardContent>
      <Chip
        label={tag}
        size="small"
        variant="outlined"
        sx={{ borderRadius: "6px", mb: 2 }}
      />

      <Typography fontWeight={600}>{title}</Typography>

      <Typography
        color="text.secondary"
        fontSize="14px"
        mt={1}
        lineHeight="20px"
      >
        {excerpt}
      </Typography>

      <Box mt={3} display="flex" alignItems="center" gap={2}>
        <Box display="flex" alignItems="center" gap={1}>
          <CalendarTodayOutlined sx={{ fontSize: 16 }} />
          <Typography fontSize="13px">{date}</Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={1}>
          <AccessTimeOutlined sx={{ fontSize: 16 }} />
          <Typography fontSize="13px">{readTime}</Typography>
        </Box>
      </Box>
    </CardContent>
  </Card>
);

export default function FeaturedBlogInsights() {
  return (
    <Box py={10} display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h5" fontWeight={700}>
        Featured Blog / Insights
      </Typography>

      <Typography mt={1} mb={5} color="text.secondary">
        Expert insights on quality assurance and software testing
      </Typography>

      <Box display="flex" flexWrap="nowrap" overflow="auto" gap={3}>
        {articles.map((a, i) => (
          <BlogCard key={i} {...a} />
        ))}
      </Box>

      <Button
        variant="outlined"
        sx={{ mt: 6, borderRadius: "8px", px: 3, py: 1 }}
        endIcon={<span>→</span>}
      >
        View All Articles
      </Button>
    </Box>
  );
}
