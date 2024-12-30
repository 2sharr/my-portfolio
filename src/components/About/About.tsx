import React from 'react';
import { Code, Coffee, Book, Music } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-teal-400 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Profile"
                className="rounded-lg shadow-2xl transform transition duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              About <span className="text-purple-600">Me</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              I'm a passionate developer with a love for creating beautiful and functional web applications. 
              With expertise in modern web technologies, I strive to build solutions that make a difference.
            </p>

            {/* Interests */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Code className="text-purple-600 mb-2" size={24} />
                <h3 className="font-semibold">Coding</h3>
                <p className="text-sm text-gray-600">Full-stack Development</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Coffee className="text-teal-600 mb-2" size={24} />
                <h3 className="font-semibold">Coffee</h3>
                <p className="text-sm text-gray-600">And Problem Solving</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Book className="text-purple-600 mb-2" size={24} />
                <h3 className="font-semibold">Learning</h3>
                <p className="text-sm text-gray-600">Continuous Growth</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Music className="text-teal-600 mb-2" size={24} />
                <h3 className="font-semibold">Music</h3>
                <p className="text-sm text-gray-600">While Coding</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;