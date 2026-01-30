import './about.css';
function About() {
    return (
   <>
         
            <h1 className="text-3xl font-semibold text-center mx-auto">About our apps</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">
                A visual collection of our most recent works - each piece crafted with intention, emotion and style.
            </p>
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-0 py-10">
                <img className="max-w-sm w-full rounded-xl h-auto"
                    src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=830&h=844&auto=format&fit=crop"
                    alt="" />
                <div>
                    <h1 className="text-3xl font-semibold">Our Latest features</h1>
                    <p className="text-sm text-slate-500 mt-2">
                        Ship Beautiful Frontends Without the Overhead — Customizable, Scalable and Developer-Friendly UI
                        Components.
                    </p>
            
                    <div className="flex flex-col gap-10 mt-6">
                        <div className="flex items-center gap-4">
                            <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png" alt="" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-600">Lightning-Fast Performance</h3>
                                <p className="text-sm text-slate-500">Built with speed — minimal load times and optimized.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png" alt="" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-600">Beautifully Designed Components</h3>
                                <p className="text-sm text-slate-500">Modern, pixel-perfect UI components ready for any project.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png" alt="" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-600">Plug-and-Play Integration</h3>
                                <p className="text-sm text-slate-500">Simple setup with support for React, Next.js and Tailwind css.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <h1 className="text-3xl font-medium text-slate-800 text-center">Meet Our Team</h1>
            <p className="text-slate-500 text-center">The people behind the product, passionate about what they do.</p>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
                <div className="max-w-80 bg-black text-white rounded-2xl">
                    <div className="relative -mt-px overflow-hidden rounded-2xl">
                        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600" alt="" className="h-[270px] w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top" />
                        <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
                    </div>
                    <div className="px-4 pb-6 text-center">
                        <p className="mt-4 text-lg">John Doe</p>
                        <p className="text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#9938CA] to-[#E0724A] text-transparent bg-clip-text">Content Marketing</p>
                    </div>
                </div>
                <div className="max-w-80 bg-black text-white rounded-2xl">
                    <div className="relative -mt-px overflow-hidden rounded-2xl">
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600" alt="" className="h-[270px] w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top" />
                        <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
                    </div>
                    <div className="px-4 pb-6 text-center">
                        <p className="mt-4 text-lg">John Doe</p>
                        <p className="text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#9938CA] to-[#E0724A] text-transparent bg-clip-text">Content Marketing</p>
                    </div>
                </div>
                <div className="max-w-80 bg-black text-white rounded-2xl">
                    <div className="relative -mt-px overflow-hidden rounded-2xl">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&h=600&auto=format&fit=crop" alt="" className="h-[270px] w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top" />
                        <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
                    </div>
                    <div className="px-4 pb-6 text-center">
                        <p className="mt-4 text-lg">John Doe</p>
                        <p className="text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#9938CA] to-[#E0724A] text-transparent bg-clip-text">Content Marketing</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;
