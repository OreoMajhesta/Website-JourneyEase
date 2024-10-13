import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

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
    return (
        <section>
            <div className="relative container mx-auto h-auto overflow-hidden shadow-xl Hp:rounded-3xl">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    loop={true}
                    className="w-full h-full"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={slide.image}
                                alt={`Slide ${index + 1}`}
                                className="h-full w-full object-cover"
                            />
                        </SwiperSlide>
                    ))}

                    {/* Tombol Navigasi */}
                    <button className="hidden lg:flex swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 bg-sky-500 text-white p-3 rounded-md font-bold cursor-pointer md:p-8">
                    </button>
                    <button className="hidden lg:flex swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 bg-sky-500 text-white p-3 rounded-md font-bold cursor-pointer md:p-8">
                    </button>
                </Swiper>

                {/* Custom pagination styles in Tailwind */}
                <style>{`
                    .swiper-pagination-bullet {
                        width: 1.5rem;
                        height: 1.5rem;
                        background-color: gray;
                        opacity: 1;
                        transition: all 0.5s ease-in-out; 
                    }

                    .swiper-pagination-bullet-active {
                        background-color: rgb(14 165 233);
                        width: 4rem;
                        height: 1.5rem;
                        border-radius: 9999px; 
                        transition: all 0.5s ease-in-out;
                    }
                        
                    .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
                        margin: 0 12px ;
                    }

                    /* Responsive styles */
                    @media (max-width: 768px) {
                        .swiper-pagination-bullet {
                            width: 1rem;
                            height: 1rem;
                        }
                        .swiper-pagination-bullet-active {
                            width: 2rem;
                            height: 1rem;
                        }
                        .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
                            margin: 0 8px ;
                        }
                    }

                    @media (max-width: 480px) {
                        .swiper-pagination-bullet {
                            width: 0.75rem;
                            height: 0.75rem;
                        }
                        .swiper-pagination-bullet-active {
                            width: 1.5rem;
                            height: 0.75rem;
                        }
                        .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
                            margin: 0 5px ;
                        }
                    }
                `}</style>
            </div>
        </section>
    );
};

export default CarouselBanner;
