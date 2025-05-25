import React from 'react';
import { FaDownload, FaBriefcase, FaUniversity } from 'react-icons/fa';

const Resume = () => {
  return (
    <section id="resume" className="px-6 md:px-16 py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Resume</h2>

        {/* Professional Summary */}
        <div className="mb-12 text-center md:text-left">
          <h3 className="text-xl font-semibold mb-2">Professional Summary</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Results-driven Computer Science graduate with hands-on experience in building full-stack web applications and data pipelines. Proficient in Python, SQL, and RESTful APIs with a solid foundation in backend development, ETL workflows, and scalable code practices. Passionate about continuous learning and delivering clean, maintainable software solutions.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold flex items-center">
              <FaBriefcase className="mr-2 text-blue-500" />
              Backend Developer – Freelance
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Jan 2024 – Present</p>
            <p className="mt-2 text-sm">
              Built RESTful APIs, optimized PostgreSQL queries, and developed Flask apps.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold flex items-center">
              <FaBriefcase className="mr-2 text-blue-500" />
              Data Engineering Intern – DataCorp
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Jun 2023 – Dec 2023</p>
            <p className="mt-2 text-sm">
              Created ETL pipelines and managed cloud data storage using Snowflake and Airflow.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold flex items-center">
              <FaUniversity className="mr-2 text-blue-500" />
              B.S. Computer Science – Queens College
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">2019 – 2023</p>
            <p className="mt-2 text-sm">
              Graduated with Honors. Specialized in backend systems and databases.
            </p>
          </div>
        </div>

        {/* Download CV */}
        <div className="mt-12 text-center">
          <a
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors"
          >
            <FaDownload className="mr-2" />
            View My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;



