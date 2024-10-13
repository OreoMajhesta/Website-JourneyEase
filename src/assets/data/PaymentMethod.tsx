const paymentMethods = [
    {
        id: 'qr',
        name: 'QR Codes',
        description: 'Pembayaran transfer via QR Codes',
        options: [
            {
                name: 'QRIS',
                fee: 2,
                image: '/payments/QRIS.png',
            },
            {
                name: 'Shopeepay',
                fee: 4,
                image: '/payments/SHOPEEPAY.png',
            },
        ],
    },
    {
        id: 'bank',
        name: 'Transfer Bank',
        description: 'Pembayaran transfer via Bank',
        options: [
            {
                name: 'BCA Bank',
                fee: 8,
                image: '/payments/BCA.png',
            },
        ],
    },
];

export default paymentMethods;