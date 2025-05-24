import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-400 py-6 mt-20">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>

        <div className="space-x-4 text-sm">
          <a href="https://github.com/YudavaRoopnarine" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/yudava-roopnarine-256a7325b/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            LinkedIn
          </a>
          <a href="mailto:roopnarinealex1997@gmail.com" className="hover:text-blue-500">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
