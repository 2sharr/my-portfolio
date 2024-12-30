import { motion } from 'framer-motion';
import { Mail, Download } from 'lucide-react';

const ActionButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto px-4 sm:px-0">
      <motion.a
        href="mailto:tusharshinde186306@gmail.com"
        target="_blank"
        className="w-full sm:w-auto px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center justify-center gap-2 shadow-md"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Mail size={20} />
        <span className="font-medium">Contact</span>
      </motion.a>
      <motion.a
        href="/my-portfolio/images/myResume.pdf"
        download="tushar_shinde_cv.pdf"
        className="w-full sm:w-auto px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 flex items-center justify-center gap-2 shadow-md"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Download size={20} />
        <span className="font-medium">Download CV</span>
      </motion.a>
    </div>
  );
};

export default ActionButtons;
