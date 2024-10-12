import { useState } from 'react';
import { useParams } from 'react-router-dom';
import pricelistdata from '../../assets/data/PriceListData';
import { useTheme } from '../functions/ThemeContext';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface Item {
    item: string;
    price: string;
}

const Order = () => {
    const { isDarkTheme } = useTheme();
    const { gameId } = useParams<{ gameId: string }>();
    const gameData = pricelistdata.find(game => game.id === parseInt(gameId || '0'));
    const [selectedItems, setSelectedItems] = useState<Item[]>([]);
    const [showMore, setShowMore] = useState(false); 

    if (!gameData) {
        return <div className="text-center my-8">Game tidak ditemukan</div>;
    }

    const handleSelectItem = (item: Item) => {
        setSelectedItems(prevSelected => {
            const isItemSelected = prevSelected.find(selected => selected.item === item.item);

            if (isItemSelected) {
                return prevSelected.filter(selected => selected.item !== item.item);
            } else {
                return [...prevSelected, item];
            }
        });
    };

    // Calculate total price
    const totalPrice = selectedItems.reduce((total, item) => total + parseInt(item.price.replace(/[^\d]/g, '')), 0);

    return (
        <div className="max-w-7xl mx-auto my-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Left Section - Game Info */}
                <div className="lg:col-span-1">
                    <div className={`${isDarkTheme ? 'bg-slate-800 text-white' : 'bg-white text-black'} shadow-lg rounded-lg p-8 Hp:px-14 lg:px-4`}>
                        <div className='grid grid-cols-2 lg:grid-cols-1 gap-10 items-center'>
                            <h2 className="hidden lg:flex text-2xl font-bold font-Poppins mt-4 mb-2">{gameData.name}</h2>
                            <img src={gameData.image} alt={gameData.name} className="w-3/4 lg:w-full h-auto rounded" width={500} height={500} />
                            <h2 className="flex lg:hidden text-2xl font-bold font-Poppins mt-4 mb-2 justify-center">{gameData.name}</h2>
                        </div>
                        <p className="my-2 font-semibold font-Poppins">DESKRIPSI PRODUK</p>
                        <hr className="border-t my-4 border-slate-300" />
                        <p className='text-justify'>
                            {showMore ? 
                                "Kami mempersembahkan layanan yang cepat, murah, serta aman dan terpercaya! Tingkatkan akun anda  dengan bantuan dari profesional kami. Kami mengutamakan kepuasan dan keamanan akun Anda dalam setiap jasa yang kami berikan." 
                                :
                                ""
                            }
                        </p>
                        <div>
                            <button onClick={() => setShowMore(!showMore)} className="text-blue-500 underline mt-2 flex items-center">
                                {showMore ? 'Lihat lebih sedikit' : 'Lihat lebih banyak'}
                                {showMore ? <IoIosArrowUp className="ml-2" /> : <IoIosArrowDown className="ml-2" />}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-3 space-y-6">
                    {/* User UID Information */}
                    <div className={`${isDarkTheme ? 'bg-slate-800 text-white' : 'bg-white text-black'} shadow-lg rounded-lg p-8`}>
                        <div className="flex gap-3 items-center mb-4">
                            <h2 className="text-xl bg-sky-500 w-8 h-8 rounded-full font-semibold text-white flex justify-center items-center font-Poppins">1</h2>
                            <h2 className="text-xl font-semibold font-Poppins">Masukkan Data Akun</h2>
                        </div>
                        <hr className="border-t mb-4 border-slate-300" />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Masukkan User ID Anda"
                                className="border border-gray-300 p-2 rounded-lg w-full"
                                aria-label="Masukkan User ID Anda"
                            />
                            <select
                                className="border border-gray-300 p-2 rounded-lg w-full"
                                aria-label="Pilih Region"
                            >
                                <option value="Asia">Asia</option>
                                <option value="NA">NA</option>
                                <option value="Europe">Europe</option>
                                <option value="Other">Other</option>
                            </select>
                            <input
                                type="text"
                                placeholder="Masukkan Username/Email Akun"
                                className="border border-gray-300 p-2 rounded-lg w-full"
                                aria-label="Masukkan Username/Email Akun"
                            />
                            <input
                                type="text"
                                placeholder="Masukkan Password"
                                className="border border-gray-300 p-2 rounded-lg w-full"
                                aria-label="Masukkan Password"
                            />
                            <input
                                type="text"
                                placeholder="Ketik Catatan Untuk Penjoki"
                                className="border border-gray-300 p-2 rounded-lg w-full sm:col-span-2"
                                aria-label="Ketik Catatan Untuk Penjoki"
                            />
                        </div>
                        <p className="text-sm font-semibold font-Poppins mt-2">
                            Pastikan untuk membaca semua informasi, syarat & ketentuan sebelum melakukan pemesanan untuk memastikan bahwa Anda mendapatkan layanan terbaik dan sesuai ekspektasi.
                        </p>
                    </div>

                    {/* Category and Item Selection */}
                    <div className={`${isDarkTheme ? 'bg-slate-800 text-white' : 'bg-white text-black'} shadow-lg rounded-lg p-8`}>
                        <div className="flex gap-3 items-center mb-4">
                            <h2 className="text-xl bg-sky-500 w-8 h-8 rounded-full font-semibold text-white flex justify-center items-center font-Poppins">2</h2>
                            <h2 className="text-xl font-semibold font-Poppins">Pilih Paket</h2>
                        </div>
                        <hr className="border-t mb-4 border-slate-300" />
                        {/* Iterate through the categories */}
                        {Object.entries(gameData.categories).map(([category, items], idx) => (
                            <div key={idx}>
                                <h4 className="text-lg text-sky-500 font-semibold mb-1">{category}</h4>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-5">
                                    {/* Iterate through the items in each category */}
                                    {(items as Item[]).map((item, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleSelectItem(item)}
                                            className={`
                                                ${selectedItems.includes(item)
                                                    ? 'bg-blue-500 text-white'
                                                    : `${isDarkTheme ? 'bg-slate-950 text-white' : 'bg-slate-100 text-black'}`}
                                                p-4 rounded-lg text-center shadow-md hover:scale-105 transition-transform duration-300
                                            `}
                                        >
                                            <span>{item.item}</span>
                                            <p className="text-sm text-gray-500">{item.price}</p>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Display selected items and total price */}
                    <div className={`${isDarkTheme ? 'bg-slate-800 text-white' : 'bg-white text-black'} shadow-lg rounded-lg p-8`}>
                        <div className="flex gap-3 items-center mb-4">
                            <h2 className="text-xl bg-sky-500 w-8 h-8 rounded-full font-semibold text-white flex justify-center items-center font-Poppins">3</h2>
                            <h2 className="text-xl font-semibold font-Poppins">Paket Yang Dipilih</h2>
                        </div>
                        <hr className="border-t mb-4 border-slate-300" />
                        <div className={`${isDarkTheme ? 'bg-slate-800 text-white' : 'bg-white text-black'} border-dotted border-sky-500 border-2 shadow-lg rounded-lg p-8`}>
                            {selectedItems.length === 0 ? (
                                <p className="text-gray-500">Belum ada item yang dipilih.</p>
                            ) : (
                                <ul className="space-y-2">
                                    {selectedItems.map((item, index) => (
                                        <li key={index} className="flex justify-between">
                                            <span>{item.item}</span>
                                            <span>{item.price}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <hr className="border-t my-4 border-slate-300" />
                        <div className="flex justify-between font-semibold font-Poppins">
                            <span>Total Harga:</span>
                            <span>Rp {totalPrice.toLocaleString('id-ID')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;
