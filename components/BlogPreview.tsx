
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "How to Choose the Right Law School in 2024",
    excerpt: "A comprehensive guide to selecting the best law school for your career goals, including LSAT prep tips and application strategies.",
    author: "Sarah Mitchell",
    date: "Dec 15, 2023",
    category: "Education",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400&h=250&fit=crop"
  },
  {
    title: "Legal Tech: Tools Every Modern Lawyer Needs",
    excerpt: "Discover the essential software and technologies that are revolutionizing legal practice and increasing efficiency.",
    author: "David Chen",
    date: "Dec 12, 2023",
    category: "Technology",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop"
  },
  {
    title: "Salary Negotiation Tips for New Law Graduates",
    excerpt: "Learn how to effectively negotiate your starting salary and benefits package as a new attorney entering the job market.",
    author: "Lisa Rodriguez",
    date: "Dec 10, 2023",
    category: "Career",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
  }
];

const BlogPreview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gradient mb-4">
            Latest Legal Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights from the legal world
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={post.title} className={`hover-lift group cursor-pointer animate-fade-in`} style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <Badge className="absolute top-4 left-4 bg-white text-navy-900">
                    {post.category}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-3 text-navy-900 group-hover:text-navy-700 transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  <ArrowRight className="h-4 w-4 text-navy-900 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border border-navy-900 text-navy-900 px-8 py-3 rounded-lg hover:bg-navy-50 transition-colors">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
