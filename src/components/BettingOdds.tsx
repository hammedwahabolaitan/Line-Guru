
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import PriceChange from "@/components/PriceChange";

interface Match {
  id: string;
  teamA: string;
  teamB: string;
  oddsA: number;
  oddsB: number;
  oddsDraw: number;
  time: string;
  isLive: boolean;
}

const BettingOdds = () => {
  // Mock data - in a real app this would come from an API
  const upcomingMatches: Match[] = [
    { id: "1", teamA: "Chennai Super Kings", teamB: "Mumbai Indians", oddsA: 1.85, oddsB: 2.00, oddsDraw: 3.5, time: "Today, 19:00", isLive: true },
    { id: "2", teamA: "Royal Challengers", teamB: "Rajasthan Royals", oddsA: 1.75, oddsB: 2.10, oddsDraw: 3.8, time: "Today, 20:30", isLive: true },
    { id: "3", teamA: "Kolkata Knight Riders", teamB: "Delhi Capitals", oddsA: 1.90, oddsB: 1.95, oddsDraw: 3.6, time: "Tomorrow, 15:00", isLive: false },
    { id: "4", teamA: "Manchester United", teamB: "Arsenal", oddsA: 2.25, oddsB: 1.65, oddsDraw: 3.2, time: "Tomorrow, 17:30", isLive: false },
    { id: "5", teamA: "Barcelona", teamB: "Real Madrid", oddsA: 1.95, oddsB: 1.90, oddsDraw: 3.5, time: "12 May, 20:00", isLive: false },
  ];

  return (
    <div className="w-full overflow-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-guru-darker">
            <TableHead className="w-[300px]">Match</TableHead>
            <TableHead className="text-center">1</TableHead>
            <TableHead className="text-center">X</TableHead>
            <TableHead className="text-center">2</TableHead>
            <TableHead className="text-right">Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {upcomingMatches.map((match) => (
            <TableRow key={match.id} className="table-row">
              <TableCell>
                <div className="flex flex-col">
                  <span className="font-medium">{match.teamA} vs {match.teamB}</span>
                  {match.isLive && (
                    <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full w-fit mt-1">LIVE</span>
                  )}
                </div>
              </TableCell>
              <TableCell>
                <Button variant="outline" className="w-full border-gray-700 hover:bg-gray-800 hover:border-guru-blue">
                  {match.oddsA.toFixed(2)}
                </Button>
              </TableCell>
              <TableCell>
                <Button variant="outline" className="w-full border-gray-700 hover:bg-gray-800 hover:border-guru-blue">
                  {match.oddsDraw.toFixed(2)}
                </Button>
              </TableCell>
              <TableCell>
                <Button variant="outline" className="w-full border-gray-700 hover:bg-gray-800 hover:border-guru-blue">
                  {match.oddsB.toFixed(2)}
                </Button>
              </TableCell>
              <TableCell className="text-right text-gray-400">
                {match.time}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BettingOdds;
