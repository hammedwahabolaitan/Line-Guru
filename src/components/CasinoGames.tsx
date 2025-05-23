
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const CasinoGames = () => {
  const games = [
    { id: "1", name: "Lightning Roulette", category: "Live Casino" },
    { id: "2", name: "Mega Fortune", category: "Slots" },
    { id: "3", name: "Blackjack VIP", category: "Table Games" },
    { id: "4", name: "Andar Bahar", category: "Live Casino" },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Casino Games</h2>
        <Button variant="ghost" className="text-guru-blue">
          View All Games
        </Button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {games.map((game) => (
          <Card key={game.id} className="bg-guru-darker border-gray-800 overflow-hidden hover:border-gray-700 transition-colors">
            <div className="h-32 bg-gray-800 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="icon" className="bg-guru-blue hover:bg-blue-600 rounded-full">
                  <Play className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <CardContent className="p-3">
              <h3 className="font-medium truncate">{game.name}</h3>
              <p className="text-xs text-gray-400">{game.category}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CasinoGames;
