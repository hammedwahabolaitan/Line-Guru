
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";
import PriceChange from "@/components/PriceChange";

const Hero = () => {
  return (
    <div className="bg-guru-dark pt-10 pb-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Trade Crypto with 
              <span className="gradient-text block"> Line Guru Pro</span>
            </h1>
            
            <p className="text-lg text-gray-300 max-w-lg">
              Fast, secure, and professional trading platform with the best rates and lowest fees. Join millions of users trading cryptocurrencies.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-guru-blue hover:bg-blue-600 text-white px-6 py-6 text-lg">
                Start Trading
              </Button>
              <Button variant="outline" className="border-gray-700 hover:bg-gray-800 py-6 text-lg">
                Explore Markets
              </Button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4">
              <div className="space-y-1">
                <p className="text-sm text-gray-400">Total Volume (24h)</p>
                <p className="text-xl font-semibold">$4.8B+</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-400">Markets</p>
                <p className="text-xl font-semibold">250+</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-400">Users</p>
                <p className="text-xl font-semibold">2M+</p>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="absolute -z-10 w-64 h-64 bg-guru-blue/20 rounded-full blur-3xl top-10 left-10"></div>
            <div className="absolute -z-10 w-64 h-64 bg-guru-purple/20 rounded-full blur-3xl bottom-10 right-10"></div>
            
            <div className="bg-card-gradient border border-gray-800 rounded-2xl p-6 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Popular Markets</h3>
                <Button variant="ghost" size="sm" className="text-guru-blue">View All</Button>
              </div>
              
              <div className="space-y-4">
                {[
                  { symbol: "BTC/USDT", name: "Bitcoin", price: 52438.21, change: 2.34 },
                  { symbol: "ETH/USDT", name: "Ethereum", price: 2856.42, change: 3.12 },
                  { symbol: "SOL/USDT", name: "Solana", price: 106.78, change: -1.24 },
                  { symbol: "BNB/USDT", name: "Binance Coin", price: 324.56, change: 0.89 }
                ].map((coin) => (
                  <div key={coin.symbol} className="flex justify-between items-center p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                        <TrendingUp className="w-4 h-4 text-guru-blue" />
                      </div>
                      <div>
                        <p className="font-medium">{coin.symbol}</p>
                        <p className="text-sm text-gray-400">{coin.name}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">${coin.price.toLocaleString()}</p>
                      <PriceChange value={coin.change} />
                    </div>
                  </div>
                ))}
              </div>
              
              <Button className="w-full mt-6 bg-guru-blue hover:bg-blue-600 text-white">
                Start Trading
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
