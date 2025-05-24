import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="px-6 md:px-16 py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Contact Me</h2>

        <form
          action="https://formspree.io/f/xblovrbl"  // Replace with your Formspree or backend URL
          method="POST"
          className="grid gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="px-4 py-3 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="px-4 py-3 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="px-4 py-3 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>

        {/* Social Icons */}
        <div className="mt-12 text-center space-x-6">
          <a href="https://github.com/YudavaRoopnarine?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/yudava-roopnarine-256a7325b/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            LinkedIn
          </a>
          <a href="mailto:roopnarinealex1997@gmail.com" className="text-blue-600 hover:underline">
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
