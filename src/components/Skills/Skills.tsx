import { motion } from 'framer-motion';
import { Code, Users, FileText, Database, Monitor, Camera } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: <Code size={24} />,
      title: "Coding",
      description: "Proficient in multiple programming languages and frameworks"
    },
    {
      icon: <Users size={24} />,
      title: "Communication",
      description: "Excellent verbal and written communication skills"
    },
    {
      icon: <FileText size={24} />,
      title: "Technical Writing",
      description: "Experience in documentation and technical content creation"
    },
    {
      icon: <Database size={24} />,
      title: "Data Entry",
      description: "Accurate and efficient data management skills"
    },
    {
      icon: <Monitor size={24} />,
      title: "Computer & AI",
      description: "Proficient in new technologies and artificial intelligence"
    },
    {
      icon: <Camera size={24} />,
      title: "Photography",
      description: "Creative eye for composition and visual storytelling"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial={{ y: -50 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
        >
          My <span className="text-purple-600">Skills</span>
        </motion.h2>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="group relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;