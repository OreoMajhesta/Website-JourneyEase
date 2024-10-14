import Footer from "../components/Footer";
import PriceList from "../components/PriceList";
import { useTheme } from "../functions/ThemeContext";

export default function HomePage() {
    const { isDarkTheme } = useTheme();
    return(
        <div className={`transition-colors duration-500 ${isDarkTheme ? 'bg-slate-950 text-white' : 'bg-slate-100 text-black'}`}>
            <div className="mx-5 lg:px-0 top-20 pt-28">
                <PriceList />
            </div>           
            <Footer />
        </div>
    );
}