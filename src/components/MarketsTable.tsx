import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PriceChange from "@/components/PriceChange";
import { Grid, Search, Star, TrendingUp } from "lucide-react";
import CryptoCard from "./CryptoCard";

// Market data
const markets = [
  { 
    name: "Bitcoin", 
    symbol: "BTC/USDT", 
    price: 52438.21, 
    change: 2.34, 
    volume: "1.2B",
    marketCap: "1.01T"
  },
  { 
    name: "Ethereum", 
    symbol: "ETH/USDT", 
    price: 2856.42, 
    change: 3.12, 
    volume: "845.3M",
    marketCap: "342.8B"
  },
  { 
    name: "Solana", 
    symbol: "SOL/USDT", 
    price: 106.78, 
    change: -1.24, 
    volume: "421.7M",
    marketCap: "46.5B"
  },
  { 
    name: "Binance Coin", 
    symbol: "BNB/USDT", 
    price: 324.56, 
    change: 0.89, 
    volume: "312.5M",
    marketCap: "50.2B"
  },
  { 
    name: "XRP", 
    symbol: "XRP/USDT", 
    price: 0.568, 
    change: -0.72, 
    volume: "215.8M",
    marketCap: "31.5B"
  },
  { 
    name: "Cardano", 
    symbol: "ADA/USDT", 
    price: 0.594, 
    change: 1.45, 
    volume: "156.7M",
    marketCap: "21.2B"
  },
  { 
    name: "Dogecoin", 
    symbol: "DOGE/USDT", 
    price: 0.132, 
    change: -0.98, 
    volume: "102.5M",
    marketCap: "18.7B"
  },
  { 
    name: "Avalanche", 
    symbol: "AVAX/USDT", 
    price: 36.98, 
    change: 7.56, 
    volume: "144.3M",
    marketCap: "13.5B"
  }
];

const MarketsTable = () => {
  // Featured cryptocurrencies for grid view
  const featuredCoins = markets.slice(0, 8);
  
  return (
    <div className="bg-guru-darker py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-baseline mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Markets</h2>
            <p className="text-gray-400 mt-1">Explore all cryptocurrency markets</p>
          </div>
        </div>
        
        <div className="mb-8">
          <Tabs defaultValue="all">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <TabsList className="bg-gray-800 mb-4 md:mb-0">
                <TabsTrigger value="all" className="data-[state=active]:bg-guru-blue">All</TabsTrigger>
                <TabsTrigger value="spot" className="data-[state=active]:bg-guru-blue">Spot</TabsTrigger>
                <TabsTrigger value="futures" className="data-[state=active]:bg-guru-blue">Futures</TabsTrigger>
                <TabsTrigger value="defi" className="data-[state=active]:bg-guru-blue">DeFi</TabsTrigger>
              </TabsList>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input 
                    type="text"
                    placeholder="Search markets" 
                    className="pl-9 bg-gray-800 border-gray-700 w-full sm:w-64"
                  />
                </div>
                
                <Select defaultValue="volume">
                  <SelectTrigger className="w-full sm:w-40 bg-gray-800 border-gray-700">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="volume">Volume</SelectItem>
                    <SelectItem value="marketcap">Market Cap</SelectItem>
                    <SelectItem value="change">Price Change</SelectItem>
                    <SelectItem value="price">Price</SelectItem>
                  </SelectContent>
                </Select>
                
                <div className="flex">
                  <Button variant="outline" size="icon" className="rounded-r-none border-gray-700 bg-gray-800">
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-l-none border-gray-700 bg-gray-700">
                    <TrendingUp className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {featuredCoins.slice(0, 4).map((coin) => (
                  <CryptoCard
                    key={coin.symbol}
                    name={coin.name}
                    symbol={coin.symbol}
                    price={coin.price}
                    change={coin.change}
                  />
                ))}
              </div>
              
              <div className="bg-guru-dark border border-gray-800 rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-gray-400 border-b border-gray-800">
                        <th className="px-4 py-3 font-medium w-12"></th>
                        <th className="px-4 py-3 font-medium">Name</th>
                        <th className="px-4 py-3 font-medium text-right">Price</th>
                        <th className="px-4 py-3 font-medium text-right">24h Change</th>
                        <th className="px-4 py-3 font-medium text-right">24h Volume</th>
                        <th className="px-4 py-3 font-medium text-right">Market Cap</th>
                        <th className="px-4 py-3 font-medium"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {markets.map((market) => (
                        <tr key={market.symbol} className="table-row">
                          <td className="px-4 py-4">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Star className="h-4 w-4 text-gray-500" />
                            </Button>
                          </td>
                          <td className="px-4 py-4">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                                <TrendingUp className="w-4 h-4 text-guru-blue" />
                              </div>
                              <div>
                                <p className="font-medium">{market.name}</p>
                                <p className="text-sm text-gray-400">{market.symbol}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-right">${market.price.toLocaleString()}</td>
                          <td className="px-4 py-4 text-right">
                            <PriceChange value={market.change} />
                          </td>
                          <td className="px-4 py-4 text-right">${market.volume}</td>
                          <td className="px-4 py-4 text-right">${market.marketCap}</td>
                          <td className="px-4 py-4 text-right">
                            <Button size="sm" className="bg-guru-blue hover:bg-blue-600 text-white">
                              Trade
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <Button variant="outline" className="border-gray-700 hover:bg-gray-800">
                  Load More
                </Button>
              </div>
            </TabsContent>
            
            {/* Other tabs would have similar content */}
            <TabsContent value="spot" className="mt-6">
              <div className="bg-guru-dark border border-gray-800 rounded-lg p-8 text-center">
                <h3 className="text-xl font-medium mb-2">Spot Trading Markets</h3>
                <p className="text-gray-400">Same content as All tab but filtered for Spot markets</p>
              </div>
            </TabsContent>
            
            <TabsContent value="futures" className="mt-6">
              <div className="bg-guru-dark border border-gray-800 rounded-lg p-8 text-center">
                <h3 className="text-xl font-medium mb-2">Futures Trading Markets</h3>
                <p className="text-gray-400">Same content as All tab but filtered for Futures markets</p>
              </div>
            </TabsContent>
            
            <TabsContent value="defi" className="mt-6">
              <div className="bg-guru-dark border border-gray-800 rounded-lg p-8 text-center">
                <h3 className="text-xl font-medium mb-2">DeFi Trading Markets</h3>
                <p className="text-gray-400">Same content as All tab but filtered for DeFi markets</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default MarketsTable;
