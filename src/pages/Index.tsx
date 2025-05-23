
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SportsNav from "@/components/SportsNav";
import BettingOdds from "@/components/BettingOdds";
import CasinoGames from "@/components/CasinoGames";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        <div className="container mx-auto px-4 md:px-6 py-8">
          <SportsNav />
          
          <div className="mt-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">Today's Top Matches</h2>
            <BettingOdds />
          </div>
          
          <div className="my-12">
            <CasinoGames />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
