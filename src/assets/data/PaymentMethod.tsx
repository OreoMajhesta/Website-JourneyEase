const paymentMethods = [
    {
        id: 'qr',
        name: 'QR Codes',
        description: 'Pembayaran transfer via QR Codes',
        options: [
            {
                name: 'QRIS',
                fee: 2,
                image: '/QRIS.png',
            },
            {
                name: 'Shopeepay',
                fee: 4,
                image: '/SHOPEEPAY.png',
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
                image: '/BCA.png',
            },
        ],
    },
];

export default paymentMethods;