import React from 'react';
import bannerImg from '../../assets/bg-shadow.png';
import bannerLogo from "../../assets/banner-main.png"

const Banner = () => {
    return (
        <div className='max-w-10/12 mx-auto'>
            <div
                className="min-h-[400px] bg-cover bg-center rounded-lg relative overflow-hidden bg-[#0a0a0a]"
                style={{ backgroundImage: `url(${bannerImg})` }}
            >
                {/* Tailwind Gradient Overlay to fix the "White center" issue */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-900/20 via-transparent to-pink-900/20 pointer-events-none"></div>
                
                {/* Content inside banner (Optional) */}
                <div className="relative z-10 flex  py-10 items-center justify-center">
                   {/* <h1 className="text-white text-3xl font-bold">Your Content Here</h1> */}
                   <div className='space-y-5 text-center'>
                    <img src={bannerLogo} alt="" className='mx-auto' />
                    <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h2>
                    <p className='text-[18px] md:text-[24px] font-medium text-base-200'>Beyond Boundaries Beyond Limits</p>
                    <button className="btn bg-[#E7FE29]">Claim Free Credit</button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;