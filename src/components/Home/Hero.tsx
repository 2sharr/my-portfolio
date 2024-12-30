import { motion } from 'framer-motion';
import ProfileImage from './ProfileImage';
import ProfileInfo from './ProfileInfo';
import ActionButtons from './ActionButtons';
import SocialStats from './SocialStats';

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen bg-gray-100">
      {/* Video Background */}
      <motion.div
        className="relative h-[350px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/my-portfolio/images/banner.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </motion.div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-[100px]">
        <motion.div
          className="flex flex-col md:flex-row items-end md:items-end gap-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ProfileImage />
          <ProfileInfo />
          <ActionButtons />
        </motion.div>

        <SocialStats />
      </div>
    </div>
  );
};

export default Hero;
