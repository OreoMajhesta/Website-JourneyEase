// GameAvailable.tsx
import { useTheme } from '../functions/ThemeContext';
import AnimationInBottom from '../animation/AnimationInBottom';

const games = [
    {
        logo: '/Genshin_Impact.png',
        name: 'Genshin Impact',
        developer: 'Hoyoverse',
    },
    {
        logo: '/Honkai_Star_Rail.png',
        name: 'Honkai Star Rail',
        developer: 'Hoyoverse',
    },
    {
        logo: '/Wuthering_Waves.png',
        name: 'Wuthering Waves',
        developer: 'Kuro Games',
    },
];

const GameAvailable = () => {
    const { isDarkTheme } = useTheme();

    return (
        <div className="container mx-auto my-8">
            <div className="flex justify-between items-center mb-3">
                <h2 className="text-xl md:text-3xl font-bold font-Poppins">Available Games</h2>
                <h2 className="text-lg md:text-2xl cursor-pointer hover:underline font-Poppins">
                    Lihat Semua
                </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
                {games.map((game, index) => (
                    <AnimationInBottom key={index} delay={(index + 1) * 0.2} duration={1} once={false}>
                        <div
                            className={`shadow-xl rounded-2xl flex flex-col items-center transition-all duration-500 ${isDarkTheme ? 'bg-slate-800 text-white' : 'bg-white text-black'
                                } hover:scale-105 cursor-pointer`}
                        >
                            <img
                                src={game.logo}
                                alt={game.name}
                                className={`object-cover w-full h-20 sm:h-32 rounded-t-2xl transition-all duration-500 ${isDarkTheme ? 'filter grayscale hover:grayscale-0' : ''
                                    }`}
                            />
                            <div className="flex flex-col md:flex-row justify-between md:items-center w-full px-2 sm:px-4 py-3 sm:py-4">
                                <h3 className="text-md lg:text-lg xl:text-2xl font-semibold font-Poppins">{game.name}</h3>
                                <h3 className="text-sm lg:text-md xl:text-xl font-Rajdhani font-semibold">{game.developer}</h3>
                            </div>
                        </div>
                    </AnimationInBottom>
                ))}
            </div>
        </div>
    );
};

export default GameAvailable;
