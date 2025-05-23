
import { Button } from "@/components/ui/button";
import { Users, Gamepad2, Trophy, Dumbbell, CircleDot, ChevronRight } from "lucide-react";

const SportsNav = () => {
  const sports = [
    { name: "Cricket", icon: Trophy },
    { name: "Football", icon: Gamepad2 },
    { name: "Tennis", icon: Dumbbell },
    { name: "Basketball", icon: CircleDot },
    { name: "Rugby", icon: Users },
  ];

  return (
    <div className="flex overflow-x-auto pb-2 gap-2 md:gap-4">
      {sports.map((sport) => (
        <Button
          key={sport.name}
          variant="outline"
          className="border-gray-700 hover:bg-gray-800 whitespace-nowrap"
        >
          <sport.icon className="mr-2 h-5 w-5" />
          {sport.name}
        </Button>
      ))}
      <Button variant="ghost" className="whitespace-nowrap">
        More Sports <ChevronRight className="ml-1 h-4 w-4" />
      </Button>
    </div>
  );
};

export default SportsNav;
