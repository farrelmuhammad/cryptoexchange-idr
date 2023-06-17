import React from "react";
import hero1 from '../assets/images/content/image-section-1.png'

const Hero = () => {
    return (
        <section className="flex items-center hero">
            <div className="w-full absolute z-20 inset-0 md:relative md:w-full md:h-full text-center flex flex-col justify-center hero-caption">
                <h1 className="text-3xl md:text-5xl leading-tight font-semibold">
                    Crypto exchange <br className="" />
                    We're exchange your money
                </h1>
                <h2 className="px-8 text-base md:px-0 md:text-lg my-6 tracking-wide">
                    Kami menyediakan kurs uang yang terbaik
                    <br className="hidden lg:block" />
                    dari rupiah ke crypto maupun sebaliknya
                </h2>
                <div>
                    <a
                        href="#browse-the-room"
                        className="bg-pink-400 text-black hover:bg-black hover:text-pink-400 rounded-full px-8 py-3 mt-4 inline-block flex-none transition duration-200"
                    >
                        Explore Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
