
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Award, Scale, Star, CheckCircle, Play, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Enhanced background with multiple gradients and patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-50 via-white to-blue-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-navy-100/20 via-transparent to-transparent"></div>
      
      {/* Animated floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-navy-100 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-100 rounded-full opacity-40 animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-yellow-100 rounded-full opacity-30 animate-pulse delay-1000"></div>
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in space-y-8">
            {/* Enhanced trust indicator with more details */}
            <div className="flex items-center space-x-2 text-sm text-navy-600 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 w-fit shadow-lg">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              </div>
              <span className="font-medium">4.9/5 • 50,000+ legal professionals</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-gradient mb-6 leading-tight">
              Empower Your 
              <span className="block text-navy-900 relative">
                Legal Journey
                <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed max-w-xl">
              Access <span className="font-semibold text-navy-900">premium downloadable legal eBooks</span>, explore legal careers with 
              <span className="font-semibold text-navy-900"> comprehensive salary insights</span>, 
              and get the professional guidance you need to succeed in the legal field.
            </p>

            {/* Enhanced value propositions with icons */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3 group">
                <CheckCircle className="h-5 w-5 text-green-500 group-hover:scale-110 transition-transform" />
                <span className="text-gray-700">500+ Premium Legal Resources</span>
                <TrendingUp className="h-4 w-4 text-green-500 ml-auto" />
              </div>
              <div className="flex items-center space-x-3 group">
                <CheckCircle className="h-5 w-5 text-green-500 group-hover:scale-110 transition-transform" />
                <span className="text-gray-700">Instant Download Access</span>
                <div className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full ml-auto">New</div>
              </div>
              <div className="flex items-center space-x-3 group">
                <CheckCircle className="h-5 w-5 text-green-500 group-hover:scale-110 transition-transform" />
                <span className="text-gray-700">Expert Career Guidance</span>
                <div className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full ml-auto">24/7</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-navy-900 hover:bg-navy-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                Browse Digital Store
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white transition-all duration-300 group">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Enhanced stats grid with better animations */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="bg-white p-6 rounded-xl shadow-lg border group-hover:shadow-xl transition-shadow duration-300 group-hover:border-navy-200">
                  <BookOpen className="h-8 w-8 text-navy-900 mx-auto mb-3 group-hover:text-navy-700 transition-colors" />
                  <div className="text-3xl font-bold text-navy-900 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Legal Resources</div>
                  <div className="text-xs text-green-600 mt-1">+50 this month</div>
                </div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="bg-white p-6 rounded-xl shadow-lg border group-hover:shadow-xl transition-shadow duration-300 group-hover:border-navy-200">
                  <Users className="h-8 w-8 text-navy-900 mx-auto mb-3 group-hover:text-navy-700 transition-colors" />
                  <div className="text-3xl font-bold text-navy-900 mb-1">50k+</div>
                  <div className="text-sm text-gray-600">Users Helped</div>
                  <div className="text-xs text-blue-600 mt-1">Growing daily</div>
                </div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="bg-white p-6 rounded-xl shadow-lg border group-hover:shadow-xl transition-shadow duration-300 group-hover:border-navy-200">
                  <Award className="h-8 w-8 text-navy-900 mx-auto mb-3 group-hover:text-navy-700 transition-colors" />
                  <div className="text-3xl font-bold text-navy-900 mb-1">15+</div>
                  <div className="text-sm text-gray-600">Legal Specialties</div>
                  <div className="text-xs text-purple-600 mt-1">All covered</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-up">
            <div className="relative">
              {/* Enhanced image with multiple overlay effects */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop" 
                  alt="Legal professionals working with technology"
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:via-white/10 transition-all duration-500"></div>
              </div>
              
              {/* Enhanced floating cards with better positioning */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl border hover:shadow-3xl transition-shadow duration-300 hover:-translate-y-1">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-navy-100 to-blue-100 rounded-full flex items-center justify-center">
                    <Scale className="h-6 w-6 text-navy-900" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy-900">Trusted by Legal Professionals</div>
                    <div className="text-sm text-gray-600">Join thousands of satisfied users</div>
                  </div>
                </div>
              </div>

              {/* Additional floating elements with enhanced styling */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-navy-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-shadow">
                📚 New Resources Weekly
              </div>
              
              <div className="absolute top-1/2 -right-8 bg-white p-4 rounded-xl shadow-lg border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">98%</div>
                  <div className="text-xs text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
