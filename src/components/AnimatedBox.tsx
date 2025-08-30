import { motion } from 'framer-motion';

const AnimatedBox = () => {
  return (
    <motion.div
      className='w-48 h-48 bg-blue-500 rounded shadow-lg flex items-center justify-center text-white text-2xl'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      👋 Hello from Framer!
    </motion.div>
  );
};

export default AnimatedBox;
