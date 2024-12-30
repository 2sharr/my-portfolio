import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

const ProfileImage = () => {
  return (
    <motion.div 
      className="relative"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        src="/images/tushar.jpg"
        alt="Tushar Ravi Shinde"
        className="w-[180px] h-[180px] rounded-full border-4 border-white shadow-lg object-cover"
        whileHover={{ scale: 1.05 }}
      />
      <motion.button 
        className="absolute bottom-4 right-4 bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-200"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Camera size={20} className="text-gray-600" />
      </motion.button>
    </motion.div>
  );
};

export default ProfileImage;