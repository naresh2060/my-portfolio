import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Developed a personal portfolio showcasing projects and achievements with an elegant design.",
    image: `${import.meta.env.BASE_URL}image/portfolio.png`,
    link: window.location.origin,
  },
  {
    title: "E-Commerce Website",
    description:
      "Designed and developed a seamless shopping experience for customers with a responsive UI.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
    link: window.location.origin,
  },
  {
    title: "Tech Blog Platform",
    description:
      "Built a modern blogging platform for tech enthusiasts to share insights and news.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    link: window.location.origin,
  },
  {
    title: "SaaS Dashboard",
    description:
      "A feature-rich SaaS dashboard providing real-time analytics and data visualization.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    link: window.location.origin,
  },
];

const RecentWork = () => {
  const swiperRef = useRef(null);

  return (
    <div id="recent-work" className="w-full min-h-screen bg-white flex flex-col items-center justify-center px-4 md:px-0 box-border ">
      {/* Title Section */}
      <div className="text-center mb-6 md:mb-12 mt-6 md:mt-16 w-full">
        <h2 className="text-black text-2xl md:text-5xl font-bold mb-3 md:mb-6">Recent Work</h2>
        <p className="text-gray-400 text-xs md:text-lg max-w-2xl mx-auto font-mono tracking-wide leading-relaxed px-4">
          Solving user & business problems for over 15 years.<br />
          I build elegant and effective solutions that make a real difference.
        </p>
      </div>

      {/* Mobile Slider */}
      <div className="w-full md:hidden">
        <Swiper
          ref={swiperRef}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={16}
          slidesPerView={1}
          className="w-full"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center p-3">
                <div className="w-full relative overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[200px] md:h-[250px] object-cover"
                  />
                </div>
                <div className="w-full text-left mt-3">
                  <h3 className="text-lg md:text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4 font-mono leading-relaxed">
                    {project.description}
                  </p>
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-1.5 md:py-2 px-4 md:px-6 rounded-lg shadow-lg transition transform hover:scale-105 duration-300 flex items-center gap-2 text-xs md:text-sm"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    Know more <span className="text-base md:text-lg">&rarr;</span>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Slider */}
      <div className="hidden md:block w-full">
        <div className="w-full flex flex-row items-center justify-between">
          {/* Left Arrow */}
          <div className="flex justify-center items-center w-24 min-w-[6rem] ml-[8vw]">
            <button
              className="z-30 bg-white border border-gray-400 text-gray-400 p-4 rounded-full transition-colors duration-200 hover:border-gray-600 hover:text-gray-600 cursor-pointer"
              onClick={() => swiperRef.current?.swiper?.slidePrev()}
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          {/* Swiper Slider */}
          <div className="w-full max-w-6xl relative flex items-center">
            <Swiper
              ref={swiperRef}
              modules={[Navigation]}
              navigation={false}
              spaceBetween={40}
              slidesPerView={2}
              loop={true}
              speed={800}
              className="w-full"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center p-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-xl shadow-lg w-full h-[350px] object-cover mb-8"
                    />
                    <div className="w-full text-left">
                      <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                      <p className="text-gray-400 text-lg mb-8 font-mono leading-relaxed">
                        {project.description}
                      </p>
                      <button
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition transform hover:scale-105 duration-300 flex items-center gap-2 cursor-pointer text-lg"
                        onClick={() => window.open(project.link, '_blank')}
                      >
                        Know more <span className="text-xl">&rarr;</span>
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right Arrow */}
          <div className="flex justify-center items-center w-24 min-w-[6rem] mr-[8vw]">
            <button
              className="z-30 bg-white border border-gray-400 text-gray-400 p-4 rounded-full transition-colors duration-200 hover:border-gray-600 hover:text-gray-600 cursor-pointer"
              onClick={() => swiperRef.current?.swiper?.slideNext()}
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentWork;
