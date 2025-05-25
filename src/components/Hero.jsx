import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 bg-white dark:bg-gray-900">

      {/* Left side - Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Hi, I’m Yudava Roopnarine👋
        </h1>
        <h2 className="text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
          Frontend Developer
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          I build clean, responsive websites and applications that bring ideas to life.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <a href="#projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            View Projects
          </a>
          <a href="#contact" className="border border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition">
            Contact Me
          </a>
        </div>
      </div>

      {/* Right side - Image or Graphic */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
            src={`${process.env.PUBLIC_URL}/images/interest-rate-svgrepo-com.svg`}
            alt="Yuda's illustration or profile"
            className="w-72 h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
