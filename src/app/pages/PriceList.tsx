import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import PriceList from "../components/PriceList";
import { useTheme } from "../functions/ThemeContext";

export default function HomePage() {
    const { isDarkTheme } = useTheme();
    return(
        <div className={`transition-colors duration-500 ${isDarkTheme ? 'bg-slate-950 text-white' : 'bg-slate-100 text-black'}`}>
            <NavBar />
            <div className="px-4 lg:px-0 top-20 pt-28">
                <PriceList />
                <div className="h-screen"></div> 
            </div>           
            <Footer />
        </div>
    );
}