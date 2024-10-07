import { useEffect, useState } from 'react';
import { icons } from '../../assets/icons/icons';
import { useTheme } from '../functions/ThemeContext';

const slides = [
    {
        image: '/banner1.png',
    },
    {
        image: '/banner2.png',
    },
    {
        image: '/banner3.png',
    },
];

const CarouselBanner = () => {
    const { isDarkTheme } = useTheme();
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentSlide]);

    return (
        <section className='pt-28'>
            <div className="relative container mx-auto h-auto overflow-hidden shadow-xl rounded-3xl">
                <div
                    className="flex transition-transform duration-1000 ease-in-out"
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                    }}
                >
                    {slides.map((slide, index) => (
                        <div key={index} className="w-full h-full flex-shrink-0">
                            <img
                                src={slide.image}
                                alt={`Slide ${index + 1}`}
                                className={`w-full h-full object-cover  transition-all duration-500 ${isDarkTheme ? 'filter grayscale hover:grayscale-0' : ''}`}
                            />
                        </div>
                    ))}
                </div>

                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-sky-500 text-white px-3 py-2 rounded-md text-5xl font-bold text-center cursor-pointer"
                >
                    <icons.MdArrowBack />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-sky-500 text-white px-3 py-2 rounded-md text-5xl font-bold text-center cursor-pointer"
                >
                    <icons.MdArrowForward />
                </button>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-5">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            className={`w-5 h-5 rounded-full cursor-pointer transition-all duration-500 ${currentSlide === index ? 'bg-sky-500 w-16' : 'bg-gray-400'}`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CarouselBanner;
