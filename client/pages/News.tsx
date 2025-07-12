import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Newspaper,
  Calendar,
  User,
  ArrowRight,
  Heart,
  Award,
  Users,
  Clock,
} from "lucide-react";

const featuredArticle = {
  title: "New Partnership with Local NHS Trust Enhances Medical Support",
  excerpt:
    "We're excited to announce our new partnership with the Regional NHS Trust, bringing enhanced medical support and coordination to our clients. This collaboration ensures seamless healthcare delivery right in your home.",
  image:
    "https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
  date: "December 15, 2024",
  author: "Sarah Mitchell",
  category: "Partnership",
  readTime: "5 min read",
};

const newsArticles = [
  {
    title: "Winter Care Tips: Keeping Seniors Safe and Warm",
    excerpt:
      "As temperatures drop, it's important to take extra precautions to ensure the safety and comfort of elderly loved ones. Here are our top winter care tips.",
    image:
      "https://images.pexels.com/photos/7551652/pexels-photo-7551652.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
    date: "December 10, 2024",
    author: "Dr. Michael Thompson",
    category: "Health Tips",
    readTime: "4 min read",
  },
  {
    title: "Celebrating 10 Years of Compassionate Care",
    excerpt:
      "This month marks our 10th anniversary of providing exceptional care services. We reflect on our journey and the families we've been privileged to serve.",
    image:
      "https://images.pexels.com/photos/7551473/pexels-photo-7551473.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
    date: "December 5, 2024",
    author: "Emma Davies",
    category: "Company News",
    readTime: "3 min read",
  },
  {
    title: "The Benefits of Pet Therapy for Seniors",
    excerpt:
      "Research shows that pet interaction can significantly improve the mental and physical health of seniors. Learn about our pet therapy programs.",
    image:
      "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
    date: "November 28, 2024",
    author: "Lisa Johnson",
    category: "Wellness",
    readTime: "6 min read",
  },
  {
    title: "Holiday Support Services Available",
    excerpt:
      "Don't let your loved ones spend the holidays alone. Our special holiday care packages ensure everyone feels included and cared for during the festive season.",
    image:
      "https://images.pexels.com/photos/8032934/pexels-photo-8032934.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
    date: "November 20, 2024",
    author: "Sarah Mitchell",
    category: "Services",
    readTime: "4 min read",
  },
  {
    title: "Understanding Dementia: A Guide for Families",
    excerpt:
      "Dementia affects millions of families. Our comprehensive guide helps families understand the condition and how to provide the best possible care.",
    image:
      "https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
    date: "November 15, 2024",
    author: "Dr. Michael Thompson",
    category: "Health Education",
    readTime: "8 min read",
  },
  {
    title: "New Team Members Join Our Care Family",
    excerpt:
      "We're growing! Meet our newest team members who bring additional expertise in specialized medical care and companionship services.",
    image:
      "https://images.pexels.com/photos/7551652/pexels-photo-7551652.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
    date: "November 8, 2024",
    author: "Emma Davies",
    category: "Team News",
    readTime: "3 min read",
  },
];

const categories = [
  { name: "All", count: 25 },
  { name: "Health Tips", count: 8 },
  { name: "Company News", count: 6 },
  { name: "Wellness", count: 5 },
  { name: "Services", count: 4 },
  { name: "Team News", count: 2 },
];

const quickStats = [
  {
    icon: Users,
    number: "500+",
    label: "Families Served",
    description: "Happy clients across the region",
  },
  {
    icon: Award,
    number: "10",
    label: "Years Experience",
    description: "Decade of compassionate care",
  },
  {
    icon: Heart,
    number: "24/7",
    label: "Support Available",
    description: "Round the clock assistance",
  },
  {
    icon: Clock,
    number: "98%",
    label: "Satisfaction Rate",
    description: "Client satisfaction score",
  },
];

export default function News() {
  return (
    <Layout
      title="News & Updates"
      description="Stay informed with the latest news, updates, and helpful articles from Comforting Care Solutions about home care and healthy living."
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-care-50 to-trust-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="bg-care-500 p-3 rounded-lg">
                <Newspaper className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-care-800">
                News & Updates
              </h1>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Stay informed with the latest news, health tips, and updates from
              Comforting Care Solutions. We're committed to keeping you informed
              about best practices in home care and our community involvement.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-care-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-care-600" />
                </div>
                <div className="text-2xl font-bold text-care-800 mb-1">
                  {stat.number}
                </div>
                <div className="font-semibold text-care-700 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-care-800 mb-4">
              Featured News
            </h2>
          </div>

          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-square overflow-hidden">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="inline-block bg-care-100 text-care-700 px-3 py-1 rounded-full text-sm font-medium mb-4 w-fit">
                  {featuredArticle.category}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-care-800 mb-4">
                  {featuredArticle.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredArticle.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{featuredArticle.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{featuredArticle.readTime}</span>
                  </div>
                </div>
                <Button asChild>
                  <Link to="/contact" className="flex items-center space-x-2">
                    <span>Read Full Article</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-care-800 mb-4">
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 px-3 rounded-md hover:bg-care-50 cursor-pointer transition-colors"
                      >
                        <span className="text-sm font-medium">
                          {category.name}
                        </span>
                        <span className="text-xs bg-care-100 text-care-700 px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Articles Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {newsArticles.map((article, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="inline-block bg-care-100 text-care-700 px-2 py-1 rounded-full text-xs font-medium mb-3">
                        {article.category}
                      </div>
                      <h3 className="text-lg font-semibold text-care-800 mb-3 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                        <div className="flex items-center space-x-4">
                          <span>{article.date}</span>
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <Button asChild variant="outline" size="sm">
                        <Link to="/contact">Read More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Load More Articles</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-care-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card>
            <CardContent className="p-8">
              <Newspaper className="h-12 w-12 text-care-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-care-800 mb-4">
                Stay Updated with Our Newsletter
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Get the latest health tips, care advice, and company updates
                delivered directly to your inbox. Join our community of families
                who trust us for care insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Button asChild>
                  <Link to="/contact">Subscribe to Newsletter</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-care-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Questions About Our Services?
          </h2>
          <p className="text-xl text-care-100 mb-8 max-w-2xl mx-auto">
            Have questions about any of our news or services? We're here to help
            and provide more information about how we can support you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-care-600"
            >
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
