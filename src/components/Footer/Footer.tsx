import React from 'react';
import SocialLinks from '../Contact/SocialLinks';
import ScrollToTop from './ScrollToTop';

const links = {
  About: ['Story', 'Team', 'Careers'],
  Services: ['Development', 'Design', 'Strategy'],
  Legal: ['Privacy', 'Terms', 'Security'],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">John Doe</h3>
            <p className="mb-4 text-gray-400">
              Creating beautiful digital experiences with a focus on user needs
              and business goals.
            </p>
            <SocialLinks />
          </div>
          
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-lg font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-2">
                {items.map(item => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </div>
      </div>
      <ScrollToTop />
    </footer>
  );
}