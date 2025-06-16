import React, { useState } from 'react';

function Contact() {
    const [status, setStatus] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/xanjjwje",{
                method: 'POST',
                headers: {'Accept' : 'application/json'},
                body: data,
            });

            if(response.ok){
                setStatus('SUCCESS');
                form.reset();
                triggerPopup();
            }else{
                setStatus('ERROR');
                triggerPopup();
            }
        } catch(error) {
            setStatus('ERROR');
            triggerPopup();
        }
    };

    const triggerPopup=()=>{
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);    
        }, 2000);
    };

    return (
        <div id="contact" className="ibm-plex-mono-regular">
            <div className="bg-zinc-900 text-white flex flex-col justify-center items-center min-h-screen box-border px-4 py-6 md:py-0">
                {/* Popup Notification */}
                {showPopup && (
                    <div className={`fixed top-4 right-4 px-3 py-2 rounded-md text-white text-sm shadow-lg transform transition-all duration-300 ${
                        status === 'SUCCESS' ? 'bg-green-600' : 'bg-red-600'
                    }`}>
                        {status === 'SUCCESS' ? 'Form submitted successfully!' : 'Oops! Something went wrong.'}
                    </div>
                )}

                <div className="w-full max-w-lg text-center">
                    <h1 className="text-xl md:text-3xl font-bold ibm-plex-mono-bold mb-2 md:mb-3">Get In Touch</h1>
                    <p className="text-gray-400 text-xs md:text-base mb-6 md:mb-8 px-2">
                        I'm excited to hear from you! Whether it's a project, collaboration, or just a hello — drop me a message and let's connect.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5 bg-zinc-800 p-4 md:p-6 rounded-xl shadow-lg">
                        {/* Honeypot input for spam protection */}
                        <input type="text" name="_gotcha" style={{ display: 'none' }} />

                        <div className="text-left space-y-1 md:space-y-2">
                            <label className="block text-xs md:text-sm font-medium text-gray-300">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Please enter your email"
                                required
                                className="w-full p-2 md:p-3 text-sm md:text-base border border-zinc-600 rounded-lg bg-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                            />
                        </div>

                        <div className="text-left space-y-1 md:space-y-2">
                            <label className="block text-xs md:text-sm font-medium text-gray-300">Mobile</label>
                            <input
                                type="tel"
                                name="mobile"
                                placeholder="Enter mobile number"
                                className="w-full p-2 md:p-3 text-sm md:text-base border border-zinc-600 rounded-lg bg-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                                pattern="\d{10}"
                                title="Please enter 10 digits phone number"
                            />
                        </div>

                        <div className="text-left space-y-1 md:space-y-2">
                            <label className="block text-xs md:text-sm font-medium text-gray-300">Message</label>
                            <textarea
                                name="message"
                                placeholder="Enter your message"
                                rows="3"
                                required
                                className="w-full p-2 md:p-3 text-sm md:text-base border border-zinc-600 rounded-lg bg-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-green-600 hover:bg-green-700 text-white text-sm md:text-base font-semibold py-2 md:py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer relative group"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Submit
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                            <span className="absolute inset-0 bg-green-700 opacity-20 blur-lg rounded-lg group-hover:opacity-30 transition-opacity"></span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
