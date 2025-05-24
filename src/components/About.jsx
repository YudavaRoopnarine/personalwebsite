import React from 'react';

const About = () => {
  return (
    <section id="about" className="px-6 md:px-16 py-20 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>

        {/* Intro */}
        <p className="text-lg mb-6">"I’m a Software Engineer with a strong focus on creating scalable web
          applications and tackling data challenges. I thrive in building robust backend systems while also
          crafting intuitive, user-friendly frontends. My passion lies in transforming complex problems into
          efficient, elegant solutions that drive seamless user experiences and data-driven insights."
        </p>

        {/* Education */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">🎓 Education</h3>
          <p>
            B.S. in Computer Science – Queens College, Class of 2023
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">🛠️ Tech Stack</h3>
          <div className="flex flex-wrap gap-4">
            <span
                className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-lg">HTML</span>
            <span
                className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-lg">CSS</span>
            <span
                className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-lg">PostgreSQL</span>
            <span
                className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-4 py-2 rounded-lg">Python</span>
            <span
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-lg">Caching</span>
            <span
                className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-4 py-2 rounded-lg">APIs</span>
          </div>
        </div>


        {/* Fun Fact */}
        <p>
          Outside of coding, I love Working Out, Gaming, and building Simple Projects.
        </p>
      </div>
    </section>
  );
};

export default About;
