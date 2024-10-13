import { Testimonial} from "../components/Testimonial";
import CarouselBanner from "../components/CarouselBanner";
import Footer from "../components/Footer";
import GameAvailable from "../components/GameAvailable";
import Why from "../components/Why";
import YoutubeLive from "../components/YoutubeLive";
import { useTheme } from '../functions/ThemeContext';

export default function HomePage() {
    const { isDarkTheme } = useTheme();
    return (
        <div className={`transition-colors duration-500 ${isDarkTheme ? 'bg-slate-950 text-white' : 'bg-slate-100 text-black'}`}>
            <div className="py-32">
                <CarouselBanner />
                <div className="px-5 lg:px-0">
                    <GameAvailable />
                    <Why />
                    <Testimonial />
                    <YoutubeLive />
                </div>
            </div>
            <Footer />
        </div>
    );
}