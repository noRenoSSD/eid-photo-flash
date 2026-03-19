import { motion } from "framer-motion";

const Ketupat = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 50" className={className} fill="none">
    <path
      d="M20 5 L35 20 L20 40 L5 20 Z"
      stroke="hsl(var(--pastel-green))"
      strokeWidth="2"
      fill="hsl(var(--pastel-green) / 0.3)"
    />
    <line x1="12" y1="15" x2="28" y2="15" stroke="hsl(var(--pastel-green))" strokeWidth="1.5" />
    <line x1="10" y1="20" x2="30" y2="20" stroke="hsl(var(--pastel-green))" strokeWidth="1.5" />
    <line x1="12" y1="25" x2="28" y2="25" stroke="hsl(var(--pastel-green))" strokeWidth="1.5" />
    <path d="M18 2 Q20 0 22 2 L22 5 L18 5 Z" fill="hsl(var(--pastel-green) / 0.5)" />
  </svg>
);

const Crescent = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none">
    <path
      d="M22 4a14 14 0 1 0 0 24 14 14 0 0 1 0-24z"
      fill="hsl(var(--pastel-pink) / 0.5)"
      stroke="hsl(var(--pastel-pink))"
      strokeWidth="1.5"
    />
    <circle cx="24" cy="10" r="2" fill="hsl(var(--pastel-pink) / 0.6)" />
  </svg>
);

const Sparkle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="hsl(var(--pastel-pink) / 0.7)">
    <path d="M12 0 L14 9 L24 12 L14 14 L12 24 L10 14 L0 12 L10 9 Z" />
  </svg>
);

const elements = [
  { Component: Ketupat, x: "5%", y: "15%", size: "w-8 h-10", delay: 0, duration: 5 },
  { Component: Crescent, x: "88%", y: "10%", size: "w-7 h-7", delay: 1, duration: 6 },
  { Component: Sparkle, x: "92%", y: "45%", size: "w-5 h-5", delay: 0.5, duration: 3 },
  { Component: Ketupat, x: "90%", y: "75%", size: "w-6 h-8", delay: 2, duration: 5.5 },
  { Component: Crescent, x: "8%", y: "70%", size: "w-6 h-6", delay: 1.5, duration: 4 },
  { Component: Sparkle, x: "15%", y: "42%", size: "w-4 h-4", delay: 0.8, duration: 2.5 },
  { Component: Sparkle, x: "80%", y: "30%", size: "w-3 h-3", delay: 1.2, duration: 3.5 },
  { Component: Ketupat, x: "50%", y: "85%", size: "w-7 h-9", delay: 0.3, duration: 6 },
  { Component: Sparkle, x: "30%", y: "8%", size: "w-4 h-4", delay: 2.5, duration: 2.8 },
  { Component: Crescent, x: "70%", y: "88%", size: "w-5 h-5", delay: 1.8, duration: 4.5 },
];

const FloatingElements = () => (
  <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
    {elements.map((el, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{ left: el.x, top: el.y }}
        animate={{
          y: [0, -20, 5, -15, 0],
          x: [0, 8, -5, 10, 0],
          rotate: [0, 10, -8, 5, 0],
          opacity: [0.5, 0.9, 0.6, 1, 0.5],
        }}
        transition={{
          duration: el.duration,
          repeat: Infinity,
          delay: el.delay,
          ease: "easeInOut",
        }}
      >
        <el.Component className={el.size} />
      </motion.div>
    ))}
  </div>
);

export default FloatingElements;
