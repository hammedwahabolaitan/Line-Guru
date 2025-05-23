
import { Button } from "@/components/ui/button";
import { 
  Instagram, 
  TrendingUp, 
  Twitter, 
  Github, 
  Youtube, 
  ChevronRight 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-guru-dark border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <TrendingUp className="h-6 w-6 text-guru-blue mr-2" />
              <span className="font-bold text-xl">Line Guru Pro</span>
            </div>
            <p className="text-gray-400 mb-6">
              Line Guru Pro is a professional cryptocurrency trading platform designed for both beginners and experienced traders. Our platform offers a wide range of trading pairs with competitive fees.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="rounded-full border-gray-700 hover:border-gray-500 hover:bg-gray-800">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-gray-700 hover:border-gray-500 hover:bg-gray-800">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-gray-700 hover:border-gray-500 hover:bg-gray-800">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-gray-700 hover:border-gray-500 hover:bg-gray-800">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Spot Trading
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Futures
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Staking
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Earn
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Launchpad
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Buy Crypto
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Markets
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Trading Fee
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> API
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Referral
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Beginner Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Announcements
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> User Feedback
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Submit a Ticket
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-lg">About</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Business Contacts
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Press
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Community
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Line Guru Pro. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors">
                Cookie Preferences
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
