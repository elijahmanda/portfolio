import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-white z-50 flex items-center justify-center"
        >
          <motion.div
            animate={{ width: ["0%", "100%"] }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-1 bg-black absolute top-0 left-0"
          />
          <motion.p
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-sm text-gray-600 font-light tracking-widest"
          >
            LOADING
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};