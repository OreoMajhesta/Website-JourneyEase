const videos = [
    {
        id: 'KwJJK2xilVQ',
        title: 'Tutorial Video 1',
    },
    {
        id: '7RcPpYjJeA8',
        title: 'Tutorial Video 2',
    },
    {
        id: '-S6ImxIia_A',
        title: 'Tutorial Video 3',
    },
    {
        id: '5mR9FggWIiM',
        title: 'Tutorial Video 4',
    },
];

const YoutubeLive = () => {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen pt-20">
            <h1 className="text-2xl md:text-5xl font-bold mb-1 md:mb-10 font-Poppins">
                Tutorial Videos
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full container px-4">
                {videos.map((video, index) => (
                    <div key={index} className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
                        <iframe
                            src={`https://www.youtube.com/embed/${video.id}`}
                            title={video.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute top-0 left-0 w-full h-full shadow-lg rounded-2xl"
                        />
                        <h2 className="text-lg font-semibold text-center mt-4">{video.title}</h2>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default YoutubeLive;
