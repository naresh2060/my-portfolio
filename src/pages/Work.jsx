import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Add custom styles for navigation
const swiperStyles = {
  '.swiper-button-next, .swiper-button-prev': {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#22c55e', // green-500 to match your theme
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    zIndex: 10,
    '&:after': {
      fontSize: '20px',
    },
    '&:hover': {
      backgroundColor: 'white',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
  },
  '.swiper-button-next': {
    right: '-56px',
  },
  '.swiper-button-prev': {
    left: '-56px',
  },
  '.swiper-button-disabled': {
    opacity: '0.35',
    cursor: 'auto',
    pointerEvents: 'none',
  },
};

const projects = [ {
  title: "Portfolio Website",
  description:
    "Developed a personal portfolio showcasing projects and achievements with an elegant design.",
  image: "/image/portfolio.png",
},
  {
    title: "E-Commerce Website",
    description:
      "Designed and developed a seamless shopping experience for customers with a responsive UI.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80", // Portfolio workspace image for e-commerce
  },
  {
    title: "Tech Blog Platform",
    description:
      "Built a modern blogging platform for tech enthusiasts to share insights and news.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80", // Blog/tech workspace
  },
 
  {
    title: "SaaS Dashboard",
    description:
      "A feature-rich SaaS dashboard providing real-time analytics and data visualization.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", // Dashboard analytics
  },
];

const RecentWork = () => {
  const swiperRef = useRef(null);
  return (
    <div id="recent-work" className="w-full min-h-screen bg-white flex flex-col items-center justify-center px-0 box-border">
      {/* Title Section */}
      <div className="text-center mb-8 mt-8 w-full">
        <h2 className="text-black text-4xl font-bold mb-4">Recent Work</h2>
        <p className="text-gray-400 text-base max-w-2xl mx-auto font-mono tracking-wide leading-relaxed">
          Solving user & business problems since last 15+ years.<br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Custom Navigation Buttons and Centered Inner Div for Slider */}
      <div className="w-full flex flex-row items-center justify-between">
        {/* Left Gutter with Arrow */}
        <div className="flex justify-center items-center w-24 min-w-[4rem] ml-[5vw]">
          <button
            className="z-30 bg-white border border-gray-400 text-gray-400 p-3 rounded-full transition-colors duration-200 hover:border-gray-600 hover:text-gray-600 cursor-pointer"
            onClick={() => swiperRef.current?.swiper?.slidePrev()}
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
        {/* Slider */}
        <div className="w-full max-w-5xl relative flex items-center">
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            navigation={false}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            speed={800}
            className="w-full"
            style={swiperStyles}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center p-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-xl shadow-lg w-full h-[300px] object-cover mb-6"
                  />
                  <div className="w-full text-left">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-base mb-6 font-mono leading-relaxed">
                      {project.description}
                    </p>
                    {project.title === 'Portfolio Website' ? (
                      <button
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition flex items-center gap-2 cursor-pointer"
                        onClick={() => window.open(window.location.origin, '_blank')}
                      >
                        Know more <span className="text-xl">&rarr;</span>
                      </button>
                    ) : (
                      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition flex items-center gap-2 cursor-pointer">
                        Know more <span className="text-xl">&rarr;</span>
                      </button>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Right Gutter with Arrow */}
        <div className="flex justify-center items-center w-24 min-w-[4rem] mr-[5vw]">
          <button
            className="z-30 bg-white border border-gray-400 text-gray-400 p-3 rounded-full transition-colors duration-200 hover:border-gray-600 hover:text-gray-600 cursor-pointer"
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
  );
};

export default RecentWork;
