
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PriceChange from "@/components/PriceChange";
import { TrendingUp, Zap } from "lucide-react";

const trendingCoins = [
  { symbol: "BTC/USDT", name: "Bitcoin", price: 52438.21, change: 2.34, volume: "1.2B" },
  { symbol: "ETH/USDT", name: "Ethereum", price: 2856.42, change: 3.12, volume: "845.3M" },
  { symbol: "SOL/USDT", name: "Solana", price: 106.78, change: -1.24, volume: "421.7M" },
  { symbol: "BNB/USDT", name: "Binance Coin", price: 324.56, change: 0.89, volume: "312.5M" },
  { symbol: "XRP/USDT", name: "Ripple", price: 0.568, change: -0.72, volume: "215.8M" }
];

const gainers = [
  { symbol: "ARB/USDT", name: "Arbitrum", price: 1.42, change: 16.24, volume: "98.6M" },
  { symbol: "DOT/USDT", name: "Polkadot", price: 7.26, change: 8.32, volume: "156.7M" },
  { symbol: "AVAX/USDT", name: "Avalanche", price: 36.98, change: 7.56, volume: "144.3M" },
  { symbol: "MATIC/USDT", name: "Polygon", price: 0.68, change: 6.94, volume: "112.8M" },
  { symbol: "LINK/USDT", name: "Chainlink", price: 14.32, change: 6.21, volume: "89.2M" }
];

const TrendingPairs = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Market Trends</h2>
          <p className="text-gray-400 mt-1">Track the latest market movements</p>
        </div>
        <Button className="bg-guru-blue hover:bg-blue-600 text-white">
          View All Markets
        </Button>
      </div>

      <Card className="bg-guru-dark border-gray-800">
        <CardHeader className="pb-0">
          <Tabs defaultValue="trending">
            <TabsList className="bg-gray-800">
              <TabsTrigger value="trending" className="data-[state=active]:bg-guru-blue">
                <TrendingUp className="mr-2 h-4 w-4" />
                Trending
              </TabsTrigger>
              <TabsTrigger value="gainers" className="data-[state=active]:bg-guru-blue">
                <Zap className="mr-2 h-4 w-4" />
                Top Gainers
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="trending" className="mt-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-gray-400 border-b border-gray-800">
                      <th className="px-4 py-3 font-medium">Pair</th>
                      <th className="px-4 py-3 font-medium">Price</th>
                      <th className="px-4 py-3 font-medium">24h Change</th>
                      <th className="px-4 py-3 font-medium">24h Volume</th>
                      <th className="px-4 py-3 font-medium">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trendingCoins.map((coin) => (
                      <tr key={coin.symbol} className="table-row">
                        <td className="px-4 py-4">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                              <TrendingUp className="w-4 h-4 text-guru-blue" />
                            </div>
                            <div>
                              <p className="font-medium">{coin.symbol}</p>
                              <p className="text-sm text-gray-400">{coin.name}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4">${coin.price.toLocaleString()}</td>
                        <td className="px-4 py-4">
                          <PriceChange value={coin.change} />
                        </td>
                        <td className="px-4 py-4">${coin.volume}</td>
                        <td className="px-4 py-4">
                          <Button size="sm" className="bg-guru-blue hover:bg-blue-600 text-white">
                            Trade
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="gainers" className="mt-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-gray-400 border-b border-gray-800">
                      <th className="px-4 py-3 font-medium">Pair</th>
                      <th className="px-4 py-3 font-medium">Price</th>
                      <th className="px-4 py-3 font-medium">24h Change</th>
                      <th className="px-4 py-3 font-medium">24h Volume</th>
                      <th className="px-4 py-3 font-medium">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gainers.map((coin) => (
                      <tr key={coin.symbol} className="table-row">
                        <td className="px-4 py-4">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                              <TrendingUp className="w-4 h-4 text-guru-blue" />
                            </div>
                            <div>
                              <p className="font-medium">{coin.symbol}</p>
                              <p className="text-sm text-gray-400">{coin.name}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4">${coin.price.toLocaleString()}</td>
                        <td className="px-4 py-4">
                          <PriceChange value={coin.change} />
                        </td>
                        <td className="px-4 py-4">${coin.volume}</td>
                        <td className="px-4 py-4">
                          <Button size="sm" className="bg-guru-blue hover:bg-blue-600 text-white">
                            Trade
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
          </Tabs>
        </CardHeader>
      </Card>
    </div>
  );
};

export default TrendingPairs;
