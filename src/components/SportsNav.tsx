
import { Button } from "@/components/ui/button";
import { BadgeIndian, Cricket, Football, Baseball, Tennis, ChevronRight } from "lucide-react";

const SportsNav = () => {
  const sports = [
    { name: "Cricket", icon: Cricket },
    { name: "Football", icon: Football },
    { name: "Tennis", icon: Tennis },
    { name: "Basketball", icon: Baseball },
    { name: "Rugby", icon: BadgeIndian },
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
