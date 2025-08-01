
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Download, Clock, Users, ArrowRight, Heart, ShoppingCart, Eye } from "lucide-react";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      title: "Complete Contract Law eBook",
      description: "Comprehensive guide covering all aspects of contract law with real-world examples and templates.",
      price: "$29.99",
      originalPrice: "$49.99",
      rating: 4.9,
      reviews: 234,
      downloads: 1250,
      category: "Contract Law",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      badge: "Bestseller",
      readTime: "4 hours",
      preview: true,
      trending: true
    },
    {
      id: 2,
      title: "Employment Law Essentials",
      description: "Essential knowledge for employment law, including recent updates and case studies.",
      price: "$24.99",
      originalPrice: "$39.99",
      rating: 4.8,
      reviews: 189,
      downloads: 890,
      category: "Employment Law",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop",
      badge: "New",
      readTime: "3 hours",
      preview: true,
      trending: false
    },
    {
      id: 3,
      title: "Family Law Practice Guide",
      description: "Practical guide for family law practitioners with forms, procedures, and best practices.",
      price: "$34.99",
      originalPrice: "$54.99",
      rating: 4.9,
      reviews: 156,
      downloads: 760,
      category: "Family Law",
      image: "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=400&h=300&fit=crop",
      badge: "Popular",
      readTime: "5 hours",
      preview: true,
      trending: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-navy-900 border-navy-200 bg-navy-50">
            📚 Digital Store
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            Featured Legal Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most popular legal eBooks, templates, and guides created by experienced legal professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border hover:border-navy-200 hover:-translate-y-2">
                {/* Product Image with hover overlay */}
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  {/* Hover overlay with action buttons */}
                  <div className="absolute inset-0 bg-navy-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    {product.preview && (
                      <Button size="sm" variant="outline" className="bg-white/90 hover:bg-white text-navy-900">
                        <Eye className="h-4 w-4 mr-2" />
                        Preview
                      </Button>
                    )}
                    <Button size="sm" className="bg-white text-navy-900 hover:bg-gray-100">
                      <Heart className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                  </div>
                  
                  {/* Badge with trending indicator */}
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <Badge 
                      variant={product.badge === 'Bestseller' ? 'default' : 'secondary'}
                      className={`${
                        product.badge === 'Bestseller' ? 'bg-yellow-500 text-white' : 
                        product.badge === 'New' ? 'bg-green-500 text-white' :
                        'bg-blue-500 text-white'
                      }`}
                    >
                      {product.badge}
                    </Badge>
                    {product.trending && (
                      <Badge className="bg-red-500 text-white text-xs">
                        🔥 Trending
                      </Badge>
                    )}
                  </div>

                  {/* Category */}
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="outline" className="bg-white/90 text-navy-900">
                      {product.category}
                    </Badge>
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-navy-700 transition-colors line-clamp-2">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">
                    {product.description}
                  </p>

                  {/* Enhanced Product Stats */}
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{product.rating}</span>
                      <span className="text-xs">({product.reviews})</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Download className="h-4 w-4" />
                      <span>{product.downloads.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{product.readTime}</span>
                    </div>
                  </div>

                  {/* Enhanced Pricing */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-navy-900">{product.price}</span>
                      <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                    </div>
                    <Badge variant="secondary" className="text-green-700 bg-green-100">
                      Save {Math.round(((parseFloat(product.originalPrice.slice(1)) - parseFloat(product.price.slice(1))) / parseFloat(product.originalPrice.slice(1))) * 100)}%
                    </Badge>
                  </div>

                  {/* Enhanced Action Buttons */}
                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-navy-900 hover:bg-navy-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <ShoppingCart className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      Add to Cart
                    </Button>
                    <Button size="sm" variant="outline" className="border-navy-900 text-navy-900 hover:bg-navy-50">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Progress indicator for limited time offers */}
                  <div className="mt-4 bg-gray-100 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-full rounded-full transition-all duration-1000"
                      style={{ width: `${Math.random() * 40 + 60}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center">Limited time offer</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-navy-900 to-navy-800 text-white p-8 rounded-2xl shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Unlock Your Legal Potential Today
            </h3>
            <p className="text-navy-100 mb-6 max-w-2xl mx-auto">
              Join thousands of legal professionals who trust our resources to advance their careers and enhance their practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-navy-900 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                View All Resources
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy-900 transition-all duration-300">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
