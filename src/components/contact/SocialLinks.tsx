import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';

const SocialLinks = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: 'Github',
      href: 'https://github.com/2sharr',
      hoverColor: 'hover:text-gray-900',
      bgHover: 'hover:bg-gray-100'
    },
    {
      icon: <Instagram size={24} />,
      label: 'Instagram',
      href: 'https://instagram.com/_tushharr__',
      hoverColor: 'hover:text-pink-600',
      bgHover: 'hover:bg-pink-50'
    },
    {
      icon: <Twitter size={24} />,
      label: 'Twitter',
      href: 'https://x.com/2shharrr',
      hoverColor: 'hover:text-blue-400',
      bgHover: 'hover:bg-blue-50'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      hoverColor: 'hover:text-blue-600',
      bgHover: 'hover:bg-blue-50'
    }
  ];

  return (
    <motion.div
      className="py-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Follow Me</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-3 px-6 py-3 rounded-lg text-gray-600 
              ${social.hoverColor} ${social.bgHover} transition-all duration-300
              border border-gray-200 hover:border-transparent`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            {social.icon}
            <span className="font-medium">{social.label}</span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default SocialLinks;