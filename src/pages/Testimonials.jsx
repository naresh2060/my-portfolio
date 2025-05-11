import React from "react";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Client Name",
    image: "https://randomuser.me/api/portraits/women/79.jpg",
  },
  {
    text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Client Name",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Client Name",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Client Name",
    image: "https://randomuser.me/api/portraits/women/48.jpg",
  },
];

const Testimonials = () => {
  return (
    <div id="testimonials" className="w-full min-h-screen bg-black flex flex-col items-center justify-center px-6 box-border ibm-plex-mono-regular">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h2 className="text-white text-4xl font-bold ibm-plex-mono-bold">Testimonials</h2>
        <p className="text-gray-400 mt-2 max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-900 text-white p-6 rounded-lg shadow-lg relative"
          >
            <span className="absolute top-2 left-3 text-4xl text-gray-500">“</span>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">{testimonial.text}</p>
            <div className="flex items-center gap-3 mt-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full border-2 border-gray-500"
              />
              <span className="font-semibold">{testimonial.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
