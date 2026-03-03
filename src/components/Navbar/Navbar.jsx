import React from 'react';

const Navbar = () => {
    return (
        /* 1. Full-width wrapper: Background and shadow stay edge-to-edge */
        <div className=" max-w-full mx-auto bg-base-100 shadow-sm">
            
            {/* 2. Centered Container: Limits content to 1200px and centers it */}
            <div className=" mx-auto navbar px-4 md:px-8 lg:px-16">
                
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content px-4 bg-base-100 rounded-box z-[1] font-semibold w-52 p-2 shadow">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Changelog</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Download</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <a className="font-bold text-sm md:text-xl">CS-Ticket System</a>
                </div>

                <div className='navbar-end'>
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal font-semibold px-1">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Changelog</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Download</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <a className="btn bg-[#422AD5] hover:bg-[#3522ab] text-white border-none"> <span className='text-gray-300 text-xl font-bold'>+</span> New Ticket</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;