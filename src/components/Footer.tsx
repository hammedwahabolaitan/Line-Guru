
import { Button } from "@/components/ui/button";
import { 
  Instagram, 
  TrendingUp, 
  Twitter, 
  Facebook, 
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
              Line Guru Pro is a premier betting platform offering a wide range of sports betting markets, live betting, casino games, and more. Bet responsibly with our secure and reliable platform.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="rounded-full border-gray-700 hover:border-gray-500 hover:bg-gray-800">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-gray-700 hover:border-gray-500 hover:bg-gray-800">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-gray-700 hover:border-gray-500 hover:bg-gray-800">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-gray-700 hover:border-gray-500 hover:bg-gray-800">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Sports</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Cricket
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Football
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Tennis
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Basketball
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Horse Racing
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Casino</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Live Casino
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Slots
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Table Games
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Card Games
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Jackpots
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Help</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Betting Rules
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Responsible Gaming
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Contact Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Payment Methods
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
                  <ChevronRight className="h-4 w-4 mr-1" /> Affiliates
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Licenses
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Line Guru Pro. All rights reserved. 18+. Play Responsibly.
            </p>
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-guru-blue transition-colors">
                Responsible Gambling
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
