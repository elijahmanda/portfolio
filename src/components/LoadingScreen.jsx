import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-white z-50 flex items-center justify-center overflow-hidden"
        >
          {/* Animated grid background */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }} />
          </div>

          {/* Scanning line effect */}
          <motion.div
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-black/20 to-transparent blur-sm" />
          </motion.div>

          {/* Top progress bar with glow */}
          <motion.div
            animate={{ width: ["0%", "100%"] }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-[2px] bg-black absolute top-0 left-0 shadow-[0_0_10px_rgba(0,0,0,0.3)]"
          />

          {/* Central loading interface */}
          <div className="relative flex flex-col items-center gap-8">
            {/* Orbital rings */}
            <div className="relative w-32 h-32">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 3 - i * 0.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 border border-black/10 rounded-full"
                  style={{
                    width: `${100 - i * 20}%`,
                    height: `${100 - i * 20}%`,
                    margin: 'auto'
                  }}
                >
                  <div className="absolute w-2 h-2 bg-black rounded-full -top-1 left-1/2 -translate-x-1/2" />
                </motion.div>
              ))}

              {/* Center pulse */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 m-auto w-3 h-3 bg-black rounded-full"
              />
            </div>

            {/* Loading text with scientific styling */}
            <div className="flex flex-col items-center gap-3">
              <motion.p
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-sm text-black font-light tracking-[0.3em] uppercase"
              >
                LOADING
              </motion.p>

              {/* Progress percentage */}
              <motion.div
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="flex items-center gap-2 text-xs text-gray-400 font-mono"
              >
                <motion.span
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ▸
                </motion.span>
                <motion.span
                  animate={{ 
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  INITIALIZING SYSTEM
                </motion.span>
              </motion.div>

              {/* Data stream effect */}
              <div className="flex gap-1 mt-2">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      height: ["4px", "16px", "4px"],
                      opacity: [0.3, 1, 0.3]
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.1
                    }}
                    className="w-[2px] bg-black/40"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-black/10" />
          <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-black/10" />
          <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-black/10" />
          <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-black/10" />

          {/* Version indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-400 font-mono tracking-wider"
          >
            v2.0.1
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
