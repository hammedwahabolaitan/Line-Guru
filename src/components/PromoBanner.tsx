
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const PromoBanner = () => {
  return (
    <div className="bg-gradient-to-r from-guru-blue to-guru-purple rounded-xl overflow-hidden">
      <div className="py-6 px-6 md:px-10">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Welcome Bonus: 100% up to ₹10,000</h2>
          <p className="text-gray-100 mb-4">Sign up today and get a 100% bonus on your first deposit. Use code: WELCOME100</p>
          <Button className="bg-white text-guru-blue hover:bg-gray-100">
            Claim Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
