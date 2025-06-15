import React, { useState } from 'react';

function Contact() {
    const [status, setStatus] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

    
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
        };
        // catch(error){
        //         setStatus('ERROR');

        //     }

        const triggerPopup=()=>{
            setShowPopup(true);
            setTimeout(() => {
                setShowPopup(false);    
            }, 2000);
        };
        



  return (
    <div id="contact" className="ibm-plex-mono-regular">

      <div className="bg-zinc-900 text-white flex flex-col justify-center items-center min-h-screen box-border">

            {/* Popup Notification */}
                {showPopup && (
                    <div className={`fixed top-5 right-5 px-4 py-2 rounded-md text-white ${status === 'SUCCESS' ? 'bg-green-600' : 'bg-red-600'} transition`}>
                        {status === 'SUCCESS' ? 'Form submitted successfully!' : 'Oops! Something went wrong.'}
                    </div>
                )}

        <div className="w-full max-w-lg text-center">
          <h1 className="text-3xl font-bold ibm-plex-mono-bold mb-3">Get In Touch</h1>
          <p className="text-gray-400 text-sm mb-6">
            I’m excited to hear from you! Whether it’s a project, collaboration, or just a hello — drop me a message and let’s connect.
          </p>

          <form onSubmit={handleSubmit}
            className="space-y-4"
          >
            {/* Honeypot input for spam protection */}
            <input type="text" name="_gotcha" style={{ display: 'none' }} />

            <div className="text-left">
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Please enter your email"
                required
                className="w-full p-3 border border-gray-700 rounded-md bg-white text-black"
              />
            </div>

            <div className="text-left">
              <label className="block text-sm font-medium">Mobile</label>
              <input
                type="tel"
                name="mobile"
                placeholder="Enter mobile"
                className="w-full p-3 border border-gray-700 rounded-md bg-white text-black"
                pattern="\d{10}"
                title="Please enter 10 digits phone number"
              />
            </div>

            <div className="text-left">
              <label className="block text-sm font-medium">Message</label>
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="4"
                required
                className="w-full p-3 border border-gray-700 rounded-md bg-white text-black resize-none"
              ></textarea>
            </div>

            <button
  type="submit"
  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer relative"
>
  Submit →
  <span className="absolute inset-0 bg-green-700 opacity-20 blur-lg rounded-md"></span>
</button>

                        {/* {status === 'SUCCESS' && <p className="text-green-500 mt-4">Thank you! Your message has been sent.</p>}
                        {status === 'ERROR' && <p className="text-red-500 mt-4">Oops! Something went wrong. Please try again.</p>} */}
          </form>
        </div>

      </div>

    </div>
  );
}

export default Contact;
