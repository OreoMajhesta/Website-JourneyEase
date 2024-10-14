import Footer from "../components/Footer";
import Order from "../components/Order";
import { useTheme } from "../functions/ThemeContext";

export default function OrderPage() {
    const { isDarkTheme } = useTheme();
    return(
        <div className={`transition-colors duration-500 ${isDarkTheme ? 'bg-slate-950 text-white' : 'bg-slate-100 text-black'}`}>
            <div className="px-1 sm:px-4 top-20 pt-28">
                <Order />
            </div>           
            <Footer />
        </div>
    );
}