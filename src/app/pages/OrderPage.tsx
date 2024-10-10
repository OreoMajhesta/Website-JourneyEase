import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Order from "../components/Order";
import { useTheme } from "../functions/ThemeContext";

export default function OrderPage() {
    const { isDarkTheme } = useTheme();
    return(
        <div className={`transition-colors duration-500 ${isDarkTheme ? 'bg-slate-950 text-white' : 'bg-slate-100 text-black'}`}>
            <NavBar />
            <div className="px-4 sm:px-4 top-20 pt-28">
                <Order />
            </div>           
            <Footer />
        </div>
    );
}