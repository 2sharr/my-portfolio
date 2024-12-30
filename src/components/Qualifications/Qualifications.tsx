import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, Building2 } from 'lucide-react';

const timelineData = [
  {
    year: '2024',
    title: 'Bachelor of Information Technology',
    institution: 'BVCOE',
    status: 'Currently in 2nd Year',
    icon: GraduationCap,
  },
  {
    year: '2024',
    title: 'Diploma in Information Technology',
    institution: 'Government Polytechnic Thane College',
    status: 'Completed',
    percentage: '88%',
    icon: Building2,
  },
  {
    year: '2021',
    title: '10th SSC Board',
    institution: 'Swami Vivekanand Vidya Mandir High School',
    percentage: '79%',
    icon: School,
  },
];

const TimelineSection = () => {
  return (
    <section id="qualifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Educational Journey</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

          {/* Timeline Items */}
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex items-center justify-between mb-8 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Timeline Item Content */}
              <div
                className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <span className="text-blue-500 font-semibold">{item.year}</span>
                  <h3 className="text-xl font-bold text-gray-800 mt-2">{item.title}</h3>
                  <p className="text-gray-600 mt-2">{item.institution}</p>
                  {item.percentage && (
                    <p className="text-green-600 font-semibold mt-2">
                      Score: {item.percentage}
                    </p>
                  )}
                  {item.status && (
                    <p className="text-blue-600 font-semibold mt-2">{item.status}</p>
                  )}
                </motion.div>
              </div>

              {/* Timeline Item Icon */}
              <div className="relative flex items-center justify-center w-2/12">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white z-10"
                >
                  <item.icon size={24} />
                </motion.div>
              </div>

              {/* Empty Spacer */}
              <div className="w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
