import CarouselBanner from "../components/CarouselBanner";
import Footer from "../components/Footer";
import GameAvailable from "../components/GameAvailable";
import NavBar from "../components/NavBar";
import Why from "../components/Why";
import { useTheme } from '../functions/ThemeContext';

export default function HomePage() {
    const { isDarkTheme } = useTheme();
    return(
        <div className={`transition-colors duration-500 ${isDarkTheme ? 'bg-slate-950 text-white' : 'bg-slate-100 text-black'}`}>
            <NavBar />
            <div className="px-4 lg:px-0">
                <CarouselBanner />
                <GameAvailable />
                <Why />
                <div className="h-screen"></div>
                
            </div>           
            <Footer />
        </div>
    );
}