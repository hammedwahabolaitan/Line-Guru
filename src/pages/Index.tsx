
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrendingPairs from "@/components/TrendingPairs";
import MarketsTable from "@/components/MarketsTable";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <TrendingPairs />
        <MarketsTable />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
