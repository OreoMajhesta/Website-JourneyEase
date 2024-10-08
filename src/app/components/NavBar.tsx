import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useHandleLinkClick from '../functions/handleLinkClick';
import { useTheme } from '../functions/ThemeContext';
import { icons } from '../../assets/icons/icons';

const Navbar = () => {
    const { isDarkTheme } = useTheme();
    const [isNavbarVisible, setNavbarVisible] = useState(true);
    const prevScrollY = useRef(0);
    const timeoutRef = useRef<number | null>(null);
    const location = useLocation();
    const handleLinkClick = useHandleLinkClick();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            if (currentScrollY < prevScrollY.current) {
                setNavbarVisible(true);
            } else {
                setNavbarVisible(false);
            }
            timeoutRef.current = setTimeout(() => {
                setNavbarVisible(true);
            }, 500);

            prevScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <nav>
            <div
                className={`transition-all duration-500 ${isDarkTheme ? 'bg-black text-white' : 'bg-white text-black'
                    } border-solid border-2 border-sky-500 py-4 px-5 fixed top-0 z-50 font-sans rounded-full transform left-1/2 -translate-x-1/2 ${isNavbarVisible ? 'translate-y-2 w-11/12' : '-translate-y-full w-0'
                    }`}
            >
                <div className="px-2 md:px-10 lg:px-16 mx-auto flex items-center justify-between">
                    <div className="flex items-center font-bold text-2xl space-x-3">
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="h-8 lg:h-10 xl:h-14 w-auto cursor-pointer hover:rotate-180 transition"
                            onClick={() => handleLinkClick('/')}
                        />
                        <a className="text-2xl lg:text-3xl xl:text-4xl font-Rajdhani">JOURNEY EASE</a>
                    </div>

                    <div className="flex items-center gap-x-5 lg:gap-x-10">
                        <ul className="hidden md:flex items-center gap-x-5 lg:gap-x-10 font-normal">
                            <li>
                                <button
                                    onClick={() => handleLinkClick('PriceList')}
                                    className="text-md underline-offset-4 hover:underline lg:text-xl xl:text-2xl font-Poppins"
                                >
                                    Price List
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleLinkClick('/about')}
                                    className="text-md underline-offset-4 hover:underline lg:text-xl xl:text-2xl font-Poppins"
                                >
                                    About
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleLinkClick('/chat')}
                                    className="text-md underline-offset-4 hover:underline lg:text-xl xl:text-2xl font-Poppins"
                                >
                                    Consultation
                                </button>
                            </li>
                        </ul>

                        <button
                            onClick={() => handleLinkClick('/login')}
                            className="bg-sky-500 text-white px-5 py-2 xl:px-10 xl:text-2xl hover:bg-blue-700 transition rounded-full font-semibold font-Poppins"
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
            <div className={`fixed z-50 bottom-0 w-full md:hidden transition-all duration-200 ${isDarkTheme ? 'bg-black text-white' : 'bg-white text-black'} border-t border-sky-500 dark:border-gray-700 pb-2`}>
                <ul className="flex justify-around items-center font-normal">
                    <li>
                        <button
                            onClick={() => handleLinkClick('/chat')}
                            className="flex flex-col text-sm transition-all duration-500 hover:bg-sky-500 font-Poppins items-center justify-center p-3 px-5 rounded-b-full"
                        >
                            <icons.AiOutlineHome className='text-4xl transition-all duration-500 hover:scale-110'/>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleLinkClick('/chat')}
                            className="flex flex-col text-sm transition-all duration-500 hover:bg-sky-500 font-Poppins items-center justify-center p-3 px-5 rounded-b-full"
                        >
                            <icons.AiOutlineInfoCircle className='text-4xl transition-all duration-500 hover:scale-110'/>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleLinkClick('PriceList')}
                            className="flex flex-col text-sm transition-all duration-500 hover:bg-sky-500 font-Poppins items-center justify-center p-3 px-5 rounded-b-full"
                        >
                            <icons.AiOutlineTag className='text-4xl transition-all duration-500 hover:scale-110'/>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleLinkClick('/chat')}
                            className="flex flex-col text-sm transition-all duration-500 hover:bg-sky-500 font-Poppins items-center justify-center p-3 px-5 rounded-b-full"
                        >
                            <icons.BsChat className='text-4xl transition-all duration-500 hover:scale-110'/>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
