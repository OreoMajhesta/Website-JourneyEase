import { useLocation } from 'react-router-dom';
import paymentMethods from '../../assets/data/PaymentMethod'; // Pastikan path ini benar
import { FaWhatsapp } from 'react-icons/fa';
import { useTheme } from '@/functions/ThemeContext';

const Invoice = () => {
    const location = useLocation();
    const { isDarkTheme } = useTheme();
    const {
        userId,
        username,
        server,
        password,
        note,
        selectedItems,
        totalPrice,
        selectedMethods,
        selectedOption,
        totalPriceWithFee,
    } = location.state || {};

    interface Item {
        item: string;
        price: string;
    }

    interface PaymentMethod {
        id: string;
        name: string;
        description: string;
        options: {
            name: string;
            fee: number;
            image: string;
        }[];
    }

    const sendToWhatsApp = () => {
        const message = `
            Invoice:
            User ID: ${userId}
            Username: ${username}
            Region: ${server}
            Password: ${password}
            Note: ${note}
            Paket yang Dipilih: ${selectedItems.map((item: Item) => `${item.item}: ${item.price}`).join(', ')}
            Total: Rp ${totalPrice.toLocaleString('id-ID')}
            Metode Pembayaran: ${selectedMethods.map((methodId: string) => {
                const method = paymentMethods.find((method: PaymentMethod) => method.id === methodId);
                return `${method?.name}: ${method?.description}`;
            }).join(', ')}
            Opsi yang Dipilih: ${selectedOption}
            Total dengan Biaya: Rp ${totalPriceWithFee.toLocaleString('id-ID')}
        `;
        const phoneNumber = '+6288216389495';
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    console.log('Selected Items:', selectedItems);
    console.log('Total Price:', totalPrice);
    console.log('Selected Methods:', selectedMethods);
    console.log('Selected Option:', selectedOption);

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <div className={`flex flex-col items-center col-1 ${isDarkTheme ? 'bg-slate-800 text-white' : 'bg-white text-black'} transition-all duration-500 p-6 rounded-lg shadow-xl`}>
                <h1 className="text-2xl font-bold mb-4">Invoice</h1>
                <div>
                    <p>User ID: {userId}</p>
                    <p>Username: {username}</p>
                    <p>Region: {server}</p>
                    <p>Password: {password}</p>
                    <p>Note: {note}</p>
                    <h2>Paket yang Dipilih</h2>
                    {selectedItems && selectedItems.length > 0 ? (
                        <ul>
                            {selectedItems.map((item: Item, index: number) => (
                                <li key={index}>
                                    {item.item}: {item.price}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Tidak ada paket yang dipilih.</p>
                    )}
                    <h2>Total: Rp {totalPrice.toLocaleString('id-ID')}</h2>

                    <h2>Metode Pembayaran:</h2>
                    {selectedMethods && selectedMethods.length > 0 ? (
                        <ul>
                            {selectedMethods.map((methodId: string) => {
                                const method = paymentMethods.find((method: PaymentMethod) => method.id === methodId);
                                if (method && method.options.some(option => option.name === selectedOption)) {
                                    return (
                                        <li key={method.id}>
                                            <strong>{method.name}</strong>: {method.description}
                                            <ul>
                                                {method.options
                                                    .filter(option => option.name === selectedOption) // Filter options by selected option name
                                                    .map(option => (
                                                        <li key={option.name}>
                                                            {option.name} - Biaya admin {option.fee}%
                                                            <img src={option.image} alt={option.name} style={{ width: '50px', height: 'auto' }} />
                                                        </li>
                                                    ))}
                                            </ul>
                                        </li>
                                    );
                                }
                                return null;
                            })}
                        </ul>
                    ) : (
                        <p>Tidak ada metode pembayaran yang dipilih.</p>
                    )}
                    <h2>Total dengan biaya admin: Rp {totalPriceWithFee.toLocaleString('id-ID')}</h2>
                </div>
                <button
                    onClick={sendToWhatsApp}
                    className="flex items-center w-full justify-center bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition duration-300 my-5"
                >
                    <FaWhatsapp className="mr-2" />
                    Kirim Invoice via WhatsApp
                </button>
            </div>
        </div>
    );
};

export default Invoice;
