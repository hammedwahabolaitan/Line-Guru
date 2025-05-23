
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Timer, Wallet } from "lucide-react";
import PromoBanner from "./PromoBanner";

const Hero = () => {
  return (
    <div className="bg-guru-dark pt-10 pb-16 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Bet Smarter with 
              <span className="gradient-text block"> Line Guru Pro</span>
            </h1>
            
            <p className="text-lg text-gray-300 max-w-lg">
              Experience the thrill of sports betting with competitive odds, live action, and instant payouts. Join thousands of winners today!
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-guru-blue hover:bg-blue-600 text-white px-6 py-6 text-lg">
                Sign Up Now
              </Button>
              <Button variant="outline" className="border-gray-700 hover:bg-gray-800 py-6 text-lg">
                See Today's Odds
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="flex items-center">
                <ShieldCheck className="h-5 w-5 text-guru-blue mr-2" />
                <p className="text-sm">Secure & Licensed</p>
              </div>
              <div className="flex items-center">
                <Timer className="h-5 w-5 text-guru-blue mr-2" />
                <p className="text-sm">Fast Withdrawals</p>
              </div>
              <div className="flex items-center">
                <Wallet className="h-5 w-5 text-guru-blue mr-2" />
                <p className="text-sm">Best Odds</p>
              </div>
            </div>
          </div>
          
          <div>
            <PromoBanner />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
