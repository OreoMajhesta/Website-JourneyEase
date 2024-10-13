import React from 'react';
import { useState } from 'react';
import pricelistitems from "../../assets/data/PriceListData";
import { useTheme } from '../functions/ThemeContext';

interface Item {
    item: string;
    price: string;
}

const PriceList = () => {
    const { isDarkTheme } = useTheme();
    const [selectedGame, setSelectedGame] = useState(pricelistitems[0]);

    return (
        <div className="max-w-7xl mx-auto p-4">
            <div className="flex justify-center gap-5 md:gap-20 mb-8">
                {pricelistitems.map((game) => (
                    <button
                        key={game.id}
                        onClick={() => setSelectedGame(game)}
                        className={`p-4 rounded-lg shadow-lg ${selectedGame.id === game.id ? 'bg-sky-400 text-white' : 'bg-sky-500'
                            } transition-all duration-500 hover:scale-105`}
                    >
                        <img src={game.image} alt={game.name} className="w-20 md:w-32 h-20 md:h-32 mx-auto mb-2 rounded-xl" />
                        <span>{game.name}</span>
                    </button>
                ))}
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-sky-500 text-white">
                            <th className="p-4 border border-gray-300">{selectedGame.name}</th>
                            <th className="p-4 border border-gray-300">Harga</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(selectedGame.categories).map(([category, items], idx) => (
                            <React.Fragment key={idx}>
                                <tr className={`transition-all duration-300 ${isDarkTheme ? 'bg-slate-800 text-white' : 'bg-gray-200 border-gray-300'}`}>
                                    <td colSpan={2} className="p-4 font-semibold text-center">{category}</td>
                                </tr>
                                {(items as Item[]).map((item, index) => (
                                    <tr key={index} className="border-t border-gray-300">
                                        <td className="p-4 border w-3/4 border-gray-300">{item.item}</td>
                                        <td className="p-4 border border-gray-300">{item.price}</td>
                                    </tr>
                                ))}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PriceList;
