import React from 'react'
import './styles.css'
import Nav from '../component/Nav'
import Button from '../component/Button'
import '../font.css'


export default function Home() {
    return (
        <div id="home">
            <div className="body box-border " >
                <Nav />
                {/* <Button/> */}
                <div className="description text-white flex mx-[15%] mt-10 ">
                    <div className="detail w-2/3 mr-50 mt-20">
                        <div className="name ibm-plex-mono-bold text-5xl">Naresh Kushawaha</div>
                        <div className="desc ibm-plex-mono-regular my-10 ">Passionate developer crafting clean, scalable, and user-friendly applications with modern technologies. Turning ideas into reality through code.</div>
                        <Button className="ibm-plex-mono-bold text-1xl" text="Let's get started" />
                    </div>
                    <div className="profile-container w-1/3 mt-8">
                        {/* <img src="/image/profile.jpg" alt="Profile Picture Here" className="profile-image" /> */}
                        <img src={`${import.meta.env.BASE_URL}image/profile.jpg`} alt="Profile Picture Here" className="profile-image" />

                    </div>
                </div>
                <div className="bg-black text-white flex  mx-[15%] ">
                    <div className="text-left">
                        <h2 className="text-sm mb-5 ibm-plex-mono-regular">Worked with</h2>
                        <div className="flex space-x-4">
                            <div className="bg-gray-900 border border-gray-800 ibm-plex-mono-bold font-semibold py-3 px-6 rounded-lg uppercase opacity-50 hover:opacity-100 transition">
                                ClickUp
                            </div>
                            <div className="bg-gray-900 border border-gray-800 ibm-plex-mono-bold font-semibold py-3 px-6 rounded-lg uppercase opacity-50 hover:opacity-100 transition">
                                Dropbox
                            </div>
                            <div className="bg-gray-900 border border-gray-800 ibm-plex-mono-bold font-semibold py-3 px-6 rounded-lg uppercase opacity-50 hover:opacity-100 transition">
                                Paychex
                            </div>
                            <div className="bg-gray-900 border border-gray-800 ibm-plex-mono-bold font-semibold py-3 px-6 rounded-lg uppercase opacity-50 hover:opacity-100 transition">
                                Elastic
                            </div>
                            <div className="bg-gray-900 border border-gray-800 ibm-plex-mono-bold font-semibold py-3 px-6 rounded-lg uppercase opacity-50 hover:opacity-100 transition">
                                Stripe
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
