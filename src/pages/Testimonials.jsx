import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    text: "Built a smooth, responsive website that perfectly fits our needs. Professional and reliable developer!",
    name: "Prakash Thapa",
    image: "https://randomuser.me/api/portraits/women/79.jpg",
  },
  {
    text: "Excellent communication and timely delivery. The project exceeded our expectations in quality and performance.",
    name: "Bibek Adhikari",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    text: "Highly skilled and detail-oriented. The final product was clean, fast, and user-friendly.",
    name: "Kriti Bhandari",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    text: "Very satisfied with the work. The website looks great and functions flawlessly across devices.",
    name: "Anjali Gurung",
    image: "https://randomuser.me/api/portraits/women/48.jpg",
  },
];

const Testimonials = () => {
  return (
    <div id="testimonials" className="w-full min-h-screen bg-black flex flex-col items-center justify-center px-4 md:px-6 box-border ibm-plex-mono-regular">
      {/* Title Section */}
      <div className="text-center mb-6 md:mb-12">
        <h2 className="text-white text-2xl md:text-5xl font-bold ibm-plex-mono-bold">Testimonials</h2>
        <p className="text-gray-400 mt-2 text-xs md:text-lg max-w-lg">
          Experience shared by our clients
        </p>
      </div>

      {/* Mobile Slider */}
      <div className="w-full md:hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="w-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-zinc-900 text-white p-5 md:p-8 rounded-xl shadow-lg relative mx-2">
                <span className="absolute top-3 left-3 text-4xl md:text-5xl text-zinc-700">"</span>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4 md:mb-6 mt-3 md:mt-4">{testimonial.text}</p>
                <div className="flex items-center gap-3 md:gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-zinc-700"
                  />
                  <span className="font-semibold text-sm md:text-lg">{testimonial.name}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-2 gap-8 w-full max-w-6xl">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-zinc-900 text-white p-8 rounded-xl shadow-lg relative transform hover:scale-105 transition-transform duration-300"
          >
            <span className="absolute top-6 left-6 text-6xl text-zinc-700">"</span>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 mt-6">{testimonial.text}</p>
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full border-2 border-zinc-700"
              />
              <span className="font-semibold text-xl">{testimonial.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
