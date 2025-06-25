import React from 'react'
import './styles.css'
import Nav from '../component/Nav'
import Button from '../component/Button'
import '../font.css'



export default function Home() {
    return (
        <div id="home">
            <div className="body box-border bg-zinc-900 min-h-screen">
                <Nav />
                
                {/* Main Content Container */}
                <div className="flex flex-col md:flex-row mx-[5%] md:mx-[15%] mt-6 md:mt-20 md:pt-20">
                    {/* Profile Image - Top on mobile, Right on desktop */}
                    <div className="w-full md:w-1/3 order-1 md:order-2 flex justify-center md:justify-end mb-6 md:mb-0">
                        <div className="relative w-45 h-45 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-zinc-700 shadow-xl transform hover:scale-105 transition-transform duration-300">
                            <img  
                                src={`${import.meta.env.BASE_URL}image/profile.jpg`} 
                                alt="Naresh Kushawaha" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Content - Below image on mobile, Left on desktop */}
                    <div className="w-full md:w-2/3 order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
                        <h1 className="ibm-plex-mono-bold text-3xl md:text-5xl text-white mb-4 md:mb-6 animate-fade-in">
                            Naresh Kushawaha
                        </h1>
                        <p className="ibm-plex-mono-regular text-base md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl leading-relaxed">
                            Passionate developer crafting clean, scalable, and user-friendly applications with modern technologies. Turning ideas into reality through code.
                        </p>
                        <div className="mb-6 md:mb-5">
                            <Button className="ibm-plex-mono-bold text-sm transform hover:scale-105 transition-transform duration-300" text="Let's get started" />
                        </div>
                    </div>
                </div>

                {/* Worked With Section */}
                <div className="mx-[5%] md:mx-[15%] mt-0 mb-20 md:mt-20 mb-12 md:mb-20">
                    <h2 className="text-sm mb-4 md:mb-6 ibm-plex-mono-regular text-white text-center md:text-left">
                        Worked with >>
                    </h2>
                   <div className="grid grid-cols-2 md:flex md:flex-row gap-3 md:gap-6 justify-center md:justify-start">
    {[
        { name: 'Developers Guru Pvt. Ltd.', link: 'https://www.developersguru.com.np/' },
        { name: 'Dropbox', link: 'https://www.dropbox.com' },
        { name: 'Elastic', link: 'https://www.elastic.co' }
    ].map((company) => (
        <a
            key={company.name}
            href={company.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-500 border border-zinc-700 ibm-plex-mono-bold text-xs md:text-base font-semibold py-2 md:py-3 px-3 md:px-6 rounded-lg uppercase 
                       opacity-70 hover:opacity-100 hover:bg-zinc-700 hover:border-zinc-600 
                       transform hover:scale-105 transition-all duration-300 cursor-pointer
                       flex items-center justify-center"
        >
            {company.name}
        </a>
    ))}
</div>

                </div>
            </div>
        </div>
    )
}
