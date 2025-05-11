import React from 'react'

function Contact() {
  return (
    <div id="contact" className="ibm-plex-mono-regular">

<div className="bg-black text-white flex flex-col justify-center items-center min-h-screen box-border">

    <div className="w-full max-w-lg text-center">
        <h1 className="text-3xl font-bold ibm-plex-mono-bold mb-3">Get In Touch</h1>
        <p className="text-gray-400 text-sm mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <form className="space-y-4">
            <div className="text-left">
                <label className="block text-sm font-medium">Email</label>
                <input type="email" placeholder="Please enter your email" className="w-full p-3 border border-gray-700 rounded-md bg-white text-black" />
            </div>
            
            <div className="text-left">
                <label className="block text-sm font-medium">Mobile</label>
                <input type="tel" placeholder="Enter mobile" className="w-full p-3 border border-gray-700 rounded-md bg-white text-black" />
            </div>
            
            <div className="text-left">
                <label className="block text-sm font-medium">Message</label>
                <textarea placeholder="Enter your message" rows="4" className="w-full p-3 border border-gray-700 rounded-md bg-white text-black"></textarea>
            </div>

            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md transition relative">
                Submit →
                <span className="absolute inset-0 bg-green-700 opacity-20 blur-lg rounded-md"></span>
            </button>
        </form>
    </div>

    <footer className="absolute bottom-5 text-gray-400 text-sm">
        Made with ❤️
    </footer>

</div>

    </div>
  )
}

export default Contact
