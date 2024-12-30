import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';

const ProfileInfo = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div 
      className="flex-1 md:pt-8" // Added padding at the top to move the text down
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.h1 
        className="text-3xl md:text-4xl font-bold text-gray-900"
        variants={textVariants}
      >
        Tushar Ravi Shinde
      </motion.h1>
      <motion.div 
        className="mt-4 flex flex-wrap gap-4 text-gray-600"
        variants={textVariants}
      >
        <motion.div 
          className="flex items-center gap-1"
          whileHover={{ scale: 1.05 }}
        >
          <Briefcase size={18} />
          <span>Developer</span>
        </motion.div>
        <motion.div 
          className="flex items-center gap-1"
          whileHover={{ scale: 1.05 }}
        >
          <MapPin size={18} />
          <span>Mumbai, India</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProfileInfo;
