
import { Scale, Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Scale className="h-8 w-8" />
              <span className="font-serif text-xl font-bold">Next Gen Law Help</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering legal professionals and students with accessible resources, 
              career guidance, and expert insights for success in the legal field.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Digital Store</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Legal eBooks</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Career Guides</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Templates</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Mini Courses</a></li>
            </ul>
          </div>

          {/* Legal Careers */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Legal Careers</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Corporate Law</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Personal Injury</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Family Law</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Criminal Defense</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Salary Data</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-300" />
                <span className="text-gray-300">support@nextgenlawhelp.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-300" />
                <span className="text-gray-300">1-800-LAW-HELP</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-300" />
                <span className="text-gray-300">Legal District, Law City, LC 12345</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-navy-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 Next Gen Law Help. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
