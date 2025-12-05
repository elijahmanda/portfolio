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
          {/* Perspective grid floor */}
          <div className="absolute inset-0 flex items-end justify-center overflow-hidden">
            <motion.div
              animate={{ y: [0, -100, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="relative w-[200%] h-[80%]"
              style={{
                background: `
                  repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 49px,
                    rgba(0,0,0,0.03) 49px,
                    rgba(0,0,0,0.03) 50px
                  ),
                  repeating-linear-gradient(
                    90deg,
                    transparent,
                    transparent 49px,
                    rgba(0,0,0,0.03) 49px,
                    rgba(0,0,0,0.03) 50px
                  )
                `,
                transform: 'perspective(500px) rotateX(60deg)',
                transformOrigin: 'center bottom'
              }}
            />
          </div>

          {/* Holographic circle interface */}
          <div className="relative z-10">
            {/* Outer rotating ring with segments */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="relative w-64 h-64"
            >
              {[...Array(24)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-1 h-8 origin-bottom"
                  style={{
                    transform: `translate(-50%, -100%) rotate(${i * 15}deg)`,
                  }}
                >
                  <motion.div
                    animate={{
                      scaleY: [0.5, 1, 0.5],
                      opacity: [0.2, 0.6, 0.2]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.05
                    }}
                    className="w-full h-full bg-black"
                  />
                </div>
              ))}
            </motion.div>

            {/* Middle ring - counter rotation */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 m-auto w-48 h-48"
            >
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="black"
                  strokeWidth="0.5"
                  strokeDasharray="4 4"
                  opacity="0.2"
                />
              </svg>
              
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 1, 0.4]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.15
                  }}
                  className="absolute w-2 h-2 bg-black rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-90px)`
                  }}
                />
              ))}
            </motion.div>

            {/* Inner core with cross-hair */}
            <div className="absolute inset-0 m-auto w-32 h-32 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="relative w-full h-full"
              >
                {/* Cross lines */}
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-black/30" />
                <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-black/30" />
                
                {/* Corner brackets */}
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-4 h-4 border-black/40"
                    style={{
                      borderWidth: i % 2 === 0 ? '2px 0 0 2px' : '0 2px 2px 0',
                      top: i < 2 ? '0' : 'auto',
                      bottom: i >= 2 ? '0' : 'auto',
                      left: i === 0 || i === 3 ? '0' : 'auto',
                      right: i === 1 || i === 2 ? '0' : 'auto'
                    }}
                  />
                ))}

                {/* Center dot */}
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 border-2 border-black rounded-full"
                />
              </motion.div>
            </div>

            {/* Data stream arcs */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8 - i * 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 m-auto"
                style={{
                  width: `${140 + i * 30}px`,
                  height: `${140 + i * 30}px`
                }}
              >
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <motion.path
                    d="M 50 5 A 45 45 0 0 1 95 50"
                    fill="none"
                    stroke="black"
                    strokeWidth="1"
                    opacity="0.15"
                    strokeDasharray="5 5"
                  />
                </svg>
              </motion.div>
            ))}
          </div>

          {/* Top HUD bar */}
          <div className="absolute top-0 left-0 right-0 h-12 border-b border-black/5 flex items-center px-6 justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 0.4, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-[10px] font-mono tracking-wider text-black"
            >
              SYS.INIT
            </motion.div>
            
            <motion.div
              animate={{ width: ["0%", "100%"] }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="flex-1 mx-12 h-[2px] bg-black/20 relative overflow-hidden"
            >
              <motion.div
                animate={{ x: ["0%", "100%"] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-1/4 bg-gradient-to-r from-transparent via-black to-transparent"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 0.4, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-[10px] font-mono tracking-wider text-black"
            >
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ◆
              </motion.span>
              {" "}ONLINE
            </motion.div>
          </div>

          {/* Bottom status panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-16 flex flex-col items-center gap-3"
          >
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-sm font-light tracking-[0.5em] uppercase text-black"
            >
              LOADING
            </motion.div>

            {/* Waveform visualization */}
            <div className="flex items-end gap-[2px] h-8">
              {[...Array(32)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    height: [
                      `${20 + Math.sin(i * 0.5) * 10}%`,
                      `${80 + Math.sin(i * 0.5) * 20}%`,
                      `${20 + Math.sin(i * 0.5) * 10}%`
                    ]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.02,
                    ease: "easeInOut"
                  }}
                  className="w-[2px] bg-black/30"
                />
              ))}
            </div>

            <div className="text-[9px] text-gray-400 font-mono tracking-widest">
              NEURAL NET CALIBRATION
            </div>
          </motion.div>

          {/* Corner UI elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ delay: 0.5 }}
            className="absolute top-8 left-8 text-[9px] font-mono text-black space-y-1"
          >
            <div>LAT: -15.4167</div>
            <div>LON: 28.2833</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ delay: 0.6 }}
            className="absolute top-8 right-8 text-[9px] font-mono text-black text-right space-y-1"
          >
            <div>FPS: 60</div>
            <div>LAT: 12ms</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
