// Portfolio.jsx
import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('first');

  const projects = [
    { title: 'Business Startup', description: 'Design & Development', imgUrl: "/project-img1.png" },
    { title: 'Business Startup', description: 'Design & Development', imgUrl: "/project-img2.png" },
    { title: 'Business Startup', description: 'Design & Development', imgUrl: "/project-img3.png" },
    { title: 'Business Startup', description: 'Design & Development', imgUrl: "/project-img1.png" },
    { title: 'Business Startup', description: 'Design & Development', imgUrl: "/project-img2.png" },
    { title: 'Business Startup', description: 'Design & Development', imgUrl: "/project-img3.png" },
  ];

  return (
    <section className="py-16 relative" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-4">Projects</h2>
      

        {/* Tab Navigation */}
        <div className="flex justify-center mb-6" >
          <button
            id="tab1"
            className={`px-6 py-2 text-sm font-medium text-gray-700 ${activeTab === 'first' ? 'bg-gray-300' : 'bg-gray-200'} rounded-l-lg hover:bg-gray-300 focus:outline-none transition duration-300`}
            onClick={() => setActiveTab('first')}
          >
            Protfolio
          </button>
          <button
            id="tab2"
            className={`px-6 py-2 text-sm font-medium text-gray-700 ${activeTab === 'second' ? 'bg-gray-300' : 'bg-gray-200'} hover:bg-gray-300 focus:outline-none transition duration-300`}
            onClick={() => setActiveTab('second')}
          >
            Skills
          </button>
          <button
            id="tab3"

            className={`px-6 py-2 text-sm font-medium text-gray-700 ${activeTab === 'third' ? 'bg-gray-300' : 'bg-gray-200'} rounded-r-lg hover:bg-gray-300 focus:outline-none transition duration-300`}
            onClick={() => setActiveTab('third')}
          >
            About us
          </button>
        </div>

        {/* Tab Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === 'first' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          )}

        </motion.div>
      </div>
      <div>

        {/* Tab Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >


          {activeTab !== 'second' && (
            <div className="text-center py-6">
              <p className="text-lg text-gray-600">
                Skills
                Frontend Development: React, React Native, Next.js, HTML5, CSS3, JavaScript (ES6+), TypeScript
                UI/UX Design: Modern CSS, SASS, Styled Components, responsive design, accessibility best practices
                Backend Knowledge: Experience with Node.js, Express.js, RESTful APIs, and Strapi for content management
                Tooling: Git, Webpack, Babel, NPM, Yarn, Jest, Vercel, Firebase, Figma
              </p>
            </div>
          )}
        </motion.div>
      </div>

    </section>
  );
};

export default Portfolio;
