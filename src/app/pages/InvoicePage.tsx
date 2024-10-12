import Invoice from "@/components/Invoice";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useTheme } from "../functions/ThemeContext";

export default function ContactPage() {
    const { isDarkTheme } = useTheme();
    return(
        <div className={`transition-colors duration-500 ${isDarkTheme ? 'bg-slate-950 text-white' : 'bg-slate-100 text-black'}`}>
            <NavBar />
            <div className="px-4 lg:px-0 top-20 pt-28">
                <Invoice />
            </div>           
            <Footer />
        </div>
    );
}