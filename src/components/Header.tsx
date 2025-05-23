
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Menu, 
  X, 
  Globe, 
  ChevronDown,
  Trophy,
  Gamepad2,
  LineChart,
  LayoutDashboard
} from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-800 bg-guru-dark sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center h-16 px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <TrendingUp className="h-6 w-6 text-guru-blue mr-2" />
            <span className="font-bold text-xl">Line Guru Pro</span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <Button variant="ghost" className="nav-link flex items-center">Sports</Button>
          <Button variant="ghost" className="nav-link flex items-center">Live</Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="nav-link flex items-center">
                Casino <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem>
                <Trophy className="mr-2 h-4 w-4" />
                <span>Live Casino</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Gamepad2 className="mr-2 h-4 w-4" />
                <span>Slots</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LayoutDashboard className="mr-2 h-4 w-4" />
                <span>Table Games</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button variant="ghost" className="nav-link">Promotions</Button>
          <Button variant="ghost" className="nav-link">Exchange</Button>
        </nav>
        
        {/* User Actions */}
        <div className="hidden md:flex items-center space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Hindi</DropdownMenuItem>
              <DropdownMenuItem>Bengali</DropdownMenuItem>
              <DropdownMenuItem>Telugu</DropdownMenuItem>
              <DropdownMenuItem>Tamil</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button variant="ghost" className="rounded-md px-4">Log In</Button>
          <Button className="bg-guru-blue hover:bg-blue-600 text-white rounded-md px-4">Sign Up</Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-guru-dark border-t border-gray-800">
          <div className="px-4 py-2 space-y-1">
            <Button variant="ghost" className="w-full justify-start">Sports</Button>
            <Button variant="ghost" className="w-full justify-start">Live</Button>
            <Button variant="ghost" className="w-full justify-start">Casino</Button>
            <Button variant="ghost" className="w-full justify-start">Promotions</Button>
            <Button variant="ghost" className="w-full justify-start">Exchange</Button>
            
            <div className="pt-4 flex flex-col space-y-2">
              <Button variant="ghost" className="justify-center">Log In</Button>
              <Button className="bg-guru-blue hover:bg-blue-600 text-white">Sign Up</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
