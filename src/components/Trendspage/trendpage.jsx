import React from "react";
const Image1 = new URL("../../assets/mv1.jpg", import.meta.url).href;
const Image2 = new URL("../../assets/mv2.jpg", import.meta.url).href;
const Image3 = new URL("../../assets/mv3.jpg", import.meta.url).href;
const Image4 = new URL("../../assets/mv4.jpg", import.meta.url).href;
const Image5 = new URL("../../assets/mv5.jpg", import.meta.url).href;
const Image6 = new URL("../../assets/mv6.jpg", import.meta.url).href;
const Image7 = new URL("../../assets/mv7.jpg", import.meta.url).href;
const Image8 = new URL("../../assets/mv8.jpg", import.meta.url).href;
const Image9 = new URL("../../assets/mv9.jpg", import.meta.url).href;
const Image10 = new URL("../../assets/squidgame.jpg", import.meta.url).href;
const Trendpage = () => {
  const Imglist = [
    {
      src: Image1,
      id: 1,
    },
    {
      src: Image2,
      id: 2,
    },
    {
      src: Image3,
      id: 3,
    },
    {
      src: Image4,
      id: 4,
    },
    {
      src: Image5,
      id: 5,
    },
    {
      src: Image6,
      id: 6,
    },
    {
      src: Image7,
      id: 7,
    },
    {
      src: Image8,
      id: 8,
    },
    {
      src: Image9,
      id: 9,
    },
    {
      src: Image10,
      id: 10,
    },
  ];
  return (
    <>
      <section className=" z-20 flex flex-col bg-black w-full">
        <div className="mx-4 md:mx-14 lg:mx-32 mt-16">
          <h2 className="text-white font-bold text-3xl">Trending Now</h2>

          <div className="relative">
            <button 
              onClick={() => {
                const container = document.querySelector('.scroll-container');
                if (container) {
                  container.scrollBy({ left: -300, behavior: 'smooth' });
                }
              }}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-r-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex gap-4 md:gap-10 overflow-x-auto py-4 md:py-8 scroll-container scrollbar-hide">
              {Imglist.map((i) => (
                <div className="relative flex-shrink-0" key={i.id}>
                  <img
                    src={i.src}
                    alt="img"
                    className="w-32 h-44 md:w-52 md:h-72 object-cover rounded-md"
                  />
                  <div className="absolute bottom-1 md:bottom-2 -left-2 md:-left-4">
                    <span
                      className="text-black text-4xl md:text-9xl font-bold"
                      style={{
                        textShadow:
                          "2px 2px 0px #fff, -2px -2px 0px #fff, 2px -2px 0px #fff, -2px 2px 0px #fff",
                        WebkitTextStroke: "1px white",
                      }}
                    >
                      {i.id}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              onClick={() => {
                const container = document.querySelector('.scroll-container');
                if (container) {
                  container.scrollBy({ left: 300, behavior: 'smooth' });
                }
              }}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-l-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trendpage;
