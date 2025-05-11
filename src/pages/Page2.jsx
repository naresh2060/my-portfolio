import React from 'react';

export default function Page2() {
  return (
    <div id="case-studies" className='w-full overflow-hidden'>
      <div className="w-full max-w-screen-xl mx-auto px-4 py-20">
        {/* Header Section */}
        <div className="w-full p-6 md:p-10 rounded-lg">
          <h1 className="text-4xl text-center font-bold">Case Studies</h1>
          <p className="text-center text-gray-600 mt-4 ibm-plex-mono-regular">
            Solving user & business problems since last 15+ years. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Case Study Card */}
        <div className="w-full flex items-center justify-center mt-10">
          <div className="w-full max-w-4xl flex flex-col md:flex-row bg-white overflow-hidden rounded-lg">
            {/* Left Content */}
            <div className="p-6 w-full md:w-1/2">
              <span className="px-3 py-1 text-sm font-semibold text-orange-600 bg-orange-100 rounded-full ibm-plex-mono-regular">
                Fintech
              </span>
              <h2 className="mt-4 text-2xl font-bold text-gray-900 ibm-plex-mono-bold">Work name here</h2>
              <p className="mt-2 text-gray-600 ibm-plex-mono-regular">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="mt-4 px-5 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition">
                View case study →
              </button>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2">
              <img
                src="/image/case_study_1.png"
                alt="Case Study Image"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Card-2 */}
        <div className="w-full flex items-center justify-center mt-10">
          <div className="w-full max-w-4xl flex flex-col md:flex-row-reverse bg-white overflow-hidden rounded-lg">
            {/* Right Content */}
            <div className="p-6 w-full md:w-1/2">
              <span className="px-3 py-1 text-sm font-semibold text-orange-600 bg-orange-100 rounded-full ibm-plex-mono-regular">
                EdTech
              </span>
              <h2 className="mt-4 text-2xl font-bold text-gray-900 ibm-plex-mono-bold">Work name here</h2>
              <p className="mt-2 text-gray-600 ibm-plex-mono-regular">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="mt-4 px-5 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition">
                View case study →
              </button>
            </div>

            {/* Left Image */}
            <div className="w-full md:w-1/2">
              <img 
                src="/image/case_study_2.png"
                alt="Case Study Image"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Card-3 */}
        <div className="w-full flex items-center justify-center mt-10">
          <div className="w-full max-w-4xl flex flex-col md:flex-row bg-white overflow-hidden rounded-lg">
            {/* Left Content */}
            <div className="p-6 w-full md:w-1/2">
              <span className="px-3 py-1 text-sm font-semibold text-orange-600 bg-orange-100 rounded-full ibm-plex-mono-regular">
                Pharma
              </span>
              <h2 className="mt-4 text-2xl font-bold text-gray-900 ibm-plex-mono-bold">Work name here</h2>
              <p className="mt-2 text-gray-600 ibm-plex-mono-regular">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="mt-4 px-5 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition">
                View case study →
              </button>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2">
              <img
                src="/image/case_study_1.png"
                alt="Case Study Image"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
