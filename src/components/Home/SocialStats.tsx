import { motion } from 'framer-motion';

const SocialStats = () => {
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

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-sm p-4 flex flex-wrap gap-6 justify-between items-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="flex flex-wrap gap-6"
        variants={containerVariants}
      >
        {[
          { value: '20+', label: 'Projects' },
          { value: '3+', label: 'coding years' },
          { value: '100%', label: 'Success Rate' }
        ].map((stat, index) => (
          <motion.div 
            key={index}
            className="text-center"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
          >
            <div className="text-xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SocialStats;