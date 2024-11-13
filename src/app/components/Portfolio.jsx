import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('first'); // Handle active tab state

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
        <p className="text-lg text-center text-gray-600 mb-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s.
        </p>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-6">
          <button
            className={`px-6 py-2 text-sm font-medium text-gray-700 ${activeTab === 'first' ? 'bg-gray-300' : 'bg-gray-200'} rounded-l-lg hover:bg-gray-300 focus:outline-none transition duration-300`}
            onClick={() => setActiveTab('first')}
          >
            Tab 1
          </button>
          <button
            className={`px-6 py-2 text-sm font-medium text-gray-700 ${activeTab === 'second' ? 'bg-gray-300' : 'bg-gray-200'} hover:bg-gray-300 focus:outline-none transition duration-300`}
            onClick={() => setActiveTab('second')}
          >
            Tab 2
          </button>
          <button
            className={`px-6 py-2 text-sm font-medium text-gray-700 ${activeTab === 'third' ? 'bg-gray-300' : 'bg-gray-200'} rounded-r-lg hover:bg-gray-300 focus:outline-none transition duration-300`}
            onClick={() => setActiveTab('third')}
          >
            Tab 3
          </button>
        </div>

        {/* Tab Content */}
        <div>
          {/* First Tab Content */}
          {activeTab === 'first' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          )}

          {/* Second and Third Tab Content */}
          {activeTab !== 'first' && (
            <div className="text-center py-6">
              <p className="text-lg text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit.
              </p>
            </div>
          )}
        </div>
      </div>

 
    </section>
  );
};

export default Portfolio;
