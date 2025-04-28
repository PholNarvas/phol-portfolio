import React from 'react';
import { RevealOnScroll } from '../RevealOnScroll';

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen  flex justify-center items-center relative md:justify-start md:ml-[180px] grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          {/* Header Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-400 to-gray-700 bg-clip-text text-transparent leading-right">
            Hi! I'm Phol.
          </h1>
          {/* Description  */}
          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            An aspiring FrontEnd Developer with a passion for creating clean,
            responsive, and user-friendly websites.
          </p>
          {/* Projects And Contact */}
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="opacity-90 bg-amber-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-amber-500/50 text-amber-500 py-3 px-6 rounded font-medium transition-all duration-200 
           hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
      <div className="">
        <img
          src="/images/xx.jpg"
          className="hidden sm:hidden md:hidden lg:block h-[600px] absolute top-[150px] rounded-4xl transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>
    </section>
  );
};
