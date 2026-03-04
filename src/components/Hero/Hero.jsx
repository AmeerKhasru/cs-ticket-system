import React from 'react';
import inProgressImage from '../../assets/vector1.png';
import resolvedImage from '../../assets/vector2.png';

const HeroSection = () => {
    return (
        <div className="max-w-[1200px] mx-auto bg-base-200 py-10">
            <div className="max-w-[1200px] mx-auto px-4 md:px-0">
                <div className="flex flex-col md:flex-row gap-6 min-h-[200px]">

                    {/* Left Side: On-Progress */}
                    <div
                        className="relative flex-1 overflow-hidden rounded-2xl flex flex-col items-center justify-center text-white p-8 group cursor-pointer shadow-xl transition-all duration-300 hover:brightness-110"
                        style={{
                        
                            backgroundImage: `linear-gradient(to bottom right, rgba(66, 42, 213, 0.9), rgba(50, 42, 213, 1)), url(${inProgressImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        
                        <div className="relative z-10 text-center">
                            <h2 className="text-4xl font-black mb-2 italic">In-Progress</h2>
                            <div className="mt-4 badge badge-warning p-4 font-bold text-white">42</div>
                        </div>
                    </div>

                   
                    <div
                        className="relative flex-1 overflow-hidden rounded-2xl flex flex-col items-center justify-center text-white p-8 group cursor-pointer shadow-xl transition-all duration-300 hover:brightness-110"
                        style={{
                           
                            backgroundImage: `linear-gradient(to bottom right, rgba(20, 83, 45, 0.9), rgba(10, 83, 45, 1)), url(${resolvedImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        <div className="relative z-10 text-center">
                            <h2 className="text-4xl font-black mb-2 italic">Resolved</h2>
                            <div className="mt-4 badge badge-success p-4 font-bold text-white">1,208 </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HeroSection;