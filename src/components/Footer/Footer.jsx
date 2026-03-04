import React from 'react';

const Footer = () => {
    return (
        /* Changed bg-white to bg-black and border color to slate-800 */
        <footer className="max-w-[1200px] mx-auto bg-black border-t border-slate-800 mt-1 rounded-2xl">
            <div className=" px-2 md:px-0 py-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">

                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-1 px-4">
                        <div className="mb-4">
                            <span className="text-xl font-black tracking-tighter text-2xl italic text-[#422AD5]">
                                CS-TICKET
                            </span>
                            <span className="text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase mt-1">
                                System
                            </span>
                        </div>
                        {/* Changed text-slate-500 to text-slate-400 */}
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Simplifying customer support with real-time tracking and intelligent priority management.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Product</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li className="hover:text-[#422AD5] cursor-pointer transition-colors">Features</li>
                            <li className="hover:text-[#422AD5] cursor-pointer transition-colors">Pricing</li>
                            <li className="hover:text-[#422AD5] cursor-pointer transition-colors">API</li>
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Support</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li className="hover:text-[#422AD5] cursor-pointer transition-colors">Help Center</li>
                            <li className="hover:text-[#422AD5] cursor-pointer transition-colors">Documentation</li>
                            <li className="hover:text-[#422AD5] cursor-pointer transition-colors">Community</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className='px-4'>
                        <h4 className="font-bold text-white mb-4">Stay Updated</h4>
                        <div className="join w-full">
                            {/* Adjusted input colors for dark mode */}
                            <input className="input input-sm bg-slate-900 border-slate-700 text-white join-item w-full focus:outline-none focus:border-[#422AD5]" placeholder="Email address" />
                            <button className="btn btn-sm btn-primary join-item bg-[#422AD5] border-none hover:bg-[#3622b0]">Join</button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[12px] px-4 font-medium text-slate-500">
                        © 2026 CS-Ticket System. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <span className="text-[12px] font-bold text-slate-500 hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                        <span className="text-[12px] px-4 font-bold text-slate-500 hover:text-white cursor-pointer transition-colors">Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;