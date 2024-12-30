import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X } from 'lucide-react';
import { useState } from 'react';
import { getAssetPath } from '../../utils/assetPath';

const ProfileImage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div 
        className="relative cursor-pointer"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        onClick={() => setIsModalOpen(true)}
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
          onClick={(e) => {
            e.stopPropagation();
            setIsModalOpen(true);
          }}
        >
          <Camera size={20} className="text-gray-600" />
        </motion.button>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative max-w-3xl w-full aspect-square rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsModalOpen(false)}
              >
                <X size={24} />
              </motion.button>
              <img
                src={getAssetPath('images/tushar.jpg')}
                alt="Tushar Ravi Shinde"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProfileImage;