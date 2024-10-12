const paymentMethods = [
    {
        id: 'qr',
        name: 'QR Codes',
        description: 'Pembayaran transfer via QR Codes',
        options: [
            {
                name: 'QRIS',
                fee: 1,
                image: '/public/payments/QRIS.png',
            },
            {
                name: 'Shopeepay',
                fee: 20,
                image: '/public/payments/SHOPEEPAY.png',
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
                fee: 5,
                image: '/public/payments/BCA.png',
            },
        ],
    },
];

export default paymentMethods;