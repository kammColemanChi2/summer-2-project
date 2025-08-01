
import { Button } from "@/components/ui/button";
import { Menu, Scale, User, ShoppingCart } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <Scale className="h-8 w-8 text-navy-900" />
          <span className="font-serif text-xl font-bold text-navy-900">Next Gen Law Help</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-sm font-medium hover:text-navy-900 transition-colors">Digital Store</a>
          <a href="#" className="text-sm font-medium hover:text-navy-900 transition-colors">Lawyer Careers</a>
          <a href="#" className="text-sm font-medium hover:text-navy-900 transition-colors">Resources</a>
          <a href="#" className="text-sm font-medium hover:text-navy-900 transition-colors">Blog</a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            <User className="h-4 w-4 mr-2" />
            Sign In
          </Button>
          <Button size="sm" className="bg-navy-900 hover:bg-navy-800">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Cart
          </Button>
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="container py-4 space-y-4">
            <a href="#" className="block text-sm font-medium">Digital Store</a>
            <a href="#" className="block text-sm font-medium">Lawyer Careers</a>
            <a href="#" className="block text-sm font-medium">Resources</a>
            <a href="#" className="block text-sm font-medium">Blog</a>
            <div className="pt-4 space-y-2">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
              <Button size="sm" className="w-full bg-navy-900 hover:bg-navy-800">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
