import { useParams } from 'react-router-dom';
import pricelistdata from '../../assets/data/PriceListData';
import { useTheme } from '../functions/ThemeContext';

interface Item {
    item: string;
    price: string;
}

const Order = () => {
    const { isDarkTheme } = useTheme();
    const { gameId } = useParams<{ gameId: string }>();
    const gameData = pricelistdata.find(game => game.id === parseInt(gameId || '0'));

    if (!gameData) {
        return <div className="text-center my-8">Game tidak ditemukan</div>;
    }

    return (
        <div className="max-w-6xl mx-auto my-8 p-4">
            {/* Main Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Section - Game Info */}
                <div className="lg:col-span-1">
                    <div className={`${isDarkTheme ? 'bg-slate-800 text-white' : 'bg-white text-black'} shadow-lg rounded-lg p-4`}>
                        <h2 className="text-2xl font-bold font-Poppins mt-4 mb-2">{gameData.name}</h2>
                        <img src={gameData.image} alt={gameData.name} className="w-full h-auto rounded" />
                        <p className="my-2 font-semibold font-Poppins">DESKRIPSI PRODUK</p>
                        <hr className="border-t my-4 border-slate-300" />
                        <p className="mb-4">First Joki Discount:</p>
                        <a href="#" className="text-blue-500 underline mt-2">Lihat lebih banyak</a>
                    </div>
                </div>

                {/* Right Section - Selection & Input */}
                <div className="lg:col-span-2 space-y-6">
                    {/* User UID Information */}
                    <div className={`${isDarkTheme ? 'bg-slate-800 text-white' : 'bg-white text-black'} shadow-lg rounded-lg p-8`}>
                        <div className="flex gap-3 items-center mb-4">
                            <h2 className="text-xl bg-sky-500 w-8 h-8 rounded-full font-semibold text-white flex justify-center items-center font-Poppins">1</h2>
                            <h2 className="text-xl font-semibold font-Poppins">Masukkan Data Akun</h2>
                        </div>
                        <hr className="border-t mb-4 border-slate-300" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                className="border border-gray-300 p-2 rounded-lg w-full col-span-2"
                                aria-label="Ketik Catatan Untuk Penjoki"
                            />
                        </div>
                        <p className="text-sm font-semibold font-Poppins mt-2">
                            Pastikan untuk membaca semua informasi , syarat & ketentuan sebelum melakukan pemesanan untuk memastikan bahwa Anda mendapatkan layanan terbaik dan sesuai ekspektasi.
                        </p>
                    </div>


                    {/* Category and Item Selection */}
                    <div className={`${isDarkTheme ? 'bg-slate-800 text-white' : 'bg-white text-black'}shadow-lg rounded-lg p-8`}>
                        <div className="flex gap-3 items-center mb-4">
                            <h2 className="text-xl bg-sky-500 w-8 h-8 rounded-full font-semibold text-white flex justify-center items-center font-Poppins">2</h2>
                            <h2 className="text-xl font-semibold font-Poppins">Pilih Jasa</h2>
                        </div>
                        <hr className="border-t mb-4 border-slate-300" />
                        {/* Iterate through the categories */}
                        {Object.entries(gameData.categories).map(([category, items], idx) => (
                            <div key={idx}>
                                <h4 className="text-lg text-sky-500 font-semibold mb-1">{category}</h4>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-5">
                                    {/* Iterate through the items in each category */}
                                    {(items as Item[]).map((item, index) => (
                                        <button key={index} className="bg-gray-100 p-4 rounded-lg text-center shadow-md hover:bg-gray-200">
                                            <span>{item.item}</span>
                                            <p className="text-sm text-gray-500">{item.price}</p>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;
