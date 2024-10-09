const pricelistdata = [
    {
        id: 1,
        name: 'Genshin Impact',
        image: '/Genshin_Impact.png',
        categories: {
            'Daily Tasks': [
                { item: 'Daily Commissions (per hari)', price: 'Rp 20,000' },
                { item: 'Daily Resin Burn (160 resin)', price: 'Rp 20,000' },
                { item: 'Expedition Collecting (1 hari)', price: 'Rp 15,000' },
            ],
            'Weekly Tasks': [
                { item: 'Weekly Boss (1 minggu)', price: 'Rp 50,000' },
                { item: 'Battle Pass Leveling (10 level)', price: 'Rp 80,000' },
            ],
            'Farming': [
                { item: 'Artifact Farming (1 jam)', price: 'Rp 45,000' },
                { item: 'Talent Book Farming (1 jam)', price: 'Rp 30,000' },
                { item: 'Weapon Ascension Materials Farming (1 jam)', price: 'Rp 35,000' },
                { item: 'Character Ascension Materials Farming (1 jam)', price: 'Rp 40,000' },
            ],
            'Special Tasks': [
                { item: 'Spiral Abyss 9-12 Clear', price: 'Rp 150,000' },
                { item: 'Spiral Abyss 1-12 Full Clear', price: 'Rp 300,000' },
                { item: 'Event Clear (1 event)', price: 'Rp 100,000' },
            ]
        }
    },
    {
        id: 2,
        name: 'Honkai Star Rail',
        image: '/Honkai_Star_Rail.png',
        categories: {
            'Daily Tasks': [
                { item: 'Daily Training (per hari)', price: 'Rp 25,000' },
            ],
            'Farming': [
                { item: 'Character EXP Material Farming (1 jam)', price: 'Rp 30,000' },
                { item: 'Light Cone Farming (1 jam)', price: 'Rp 35,000' },
                { item: 'Relic Farming (1 jam)', price: 'Rp 45,000' },
            ],
            'Special Tasks': [
                { item: 'Simulated Universe World 1-6 Clear', price: 'Rp 120,000' },
                { item: 'Simulated Universe World 1-8 Full Clear', price: 'Rp 200,000' },
            ]
        }
    },
    {
        id: 3,
        name: 'Wuthering Waves',
        image: '/Wuthering_Waves.png',
        categories: {
            'Daily Tasks': [
                { item: 'Daily Quest Completion (per hari)', price: 'Rp 22,000' },
            ],
            'Farming': [
                { item: 'Artifact Farming (1 jam)', price: 'Rp 45,000' },
                { item: 'Material Gathering (1 jam)', price: 'Rp 30,000' },
            ],
            'Special Tasks': [
                { item: 'World Exploration (1 region)', price: 'Rp 100,000' },
                { item: 'Story Quest Completion (per quest)', price: 'Rp 70,000' },
            ]
        }
    }
];

export default pricelistdata;
