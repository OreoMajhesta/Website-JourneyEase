import { useTheme } from '../functions/ThemeContext';
import { icons } from '../../assets/icons/icons';

const WhyItems = [
    {
        icon: icons.AiOutlineFieldTime,
        name: 'Cepat & Efisien',
        description: 'Kami menyelesaikan pesanan dengan cepat, sehingga Anda dapat menikmati hasilnya tanpa menunggu lama.'
    },
    {
        icon: icons.MdOutlineMonetizationOn,
        name: 'Garansi',
        description: 'Jika kami tidak bisa memenuhi janji, uang Anda akan dikembalikan sebagian dari sisa yang tidak dapat di selesaikan.'
    },
    {
        icon: icons.RiShieldKeyholeLine,
        name: 'Keamanan Data',
        description: 'Kami menjaga kerahasiaan akun dan data Anda, sehingga Anda bisa mempercayakan akun anda pada kami.'
    }
];

const Why = () => {
    const { isDarkTheme } = useTheme();
    return (
        <section className="py-20`">
            <div className="mx-auto mb-8 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-14">KENAPA HARUS PILIH JASA JOKI GAME KAMI?</h2>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 px-2 md:px-0 items-center justify-center">
                {WhyItems.map((item, index) => (
                    <div
                        key={index}
                        className={`${isDarkTheme ? 'bg-slate-800 border-gray-600' : 'bg-white border-gray-300'} shadow-lg rounded-2xl p-6 flex flex-col  h-full`}
                    >
                        <div className='flex flex-row sm:flex-col items-center sm:items-center'>
                            <div className="h-24 w-24 flex items-center justify-center mb-2">
                                <item.icon className="h-24 w-24" style={{ color: isDarkTheme ? '#4ADE80' : '#3B82F6' }} />
                            </div>
                            <h3 className="font-bold text-4xl mb-2">{item.name}</h3>
                        </div>
                        <p className="text-xl font-semibold text-justify">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};


export default Why;
