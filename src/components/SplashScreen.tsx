import { motion, AnimatePresence } from "framer-motion";
import { Camera } from "lucide-react";
import { useEffect, useState } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [phase, setPhase] = useState<"camera" | "flash" | "done">("camera");

  useEffect(() => {
    // Camera blink phase
    const t1 = setTimeout(() => {
      // Play shutter sound via Web Audio API
      try {
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.1);
      } catch {
        // Audio not supported
      }
      setPhase("flash");
    }, 1800);

    const t2 = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 2400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-card"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Camera Icon */}
          <motion.div
            className="relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Camera body */}
            <div className="relative flex flex-col items-center">
              <motion.div
                className="rounded-3xl bg-pastel-green p-8 shadow-lg"
                animate={
                  phase === "camera"
                    ? { scale: [1, 1.05, 1, 1.05, 1] }
                    : {}
                }
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                {/* Lens */}
                <motion.div
                  className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-primary-foreground/20 bg-card"
                  animate={
                    phase === "camera"
                      ? { scale: [1, 0.85, 1] }
                      : {}
                  }
                  transition={{ duration: 0.4, delay: 1.2 }}
                >
                  <motion.div
                    className="h-14 w-14 rounded-full bg-primary/60"
                    animate={
                      phase === "camera"
                        ? { scale: [1, 0.6, 1] }
                        : {}
                    }
                    transition={{ duration: 0.3, delay: 1.3 }}
                  >
                    <div className="flex h-full w-full items-center justify-center">
                      <div className="h-4 w-4 rounded-full bg-card/80" />
                    </div>
                  </motion.div>
                </motion.div>

                {/* Flash indicator */}
                <div className="mt-3 flex justify-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-secondary" />
                  <div className="h-2 w-2 rounded-full bg-accent" />
                </div>
              </motion.div>

              <p className="mt-6 font-display text-lg font-semibold text-foreground/60">
                Eid Snap ✨
              </p>
            </div>
          </motion.div>

          {/* Flash overlay */}
          <AnimatePresence>
            {phase === "flash" && (
              <motion.div
                className="absolute inset-0 z-10 bg-card"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.15,
                  exit: { duration: 0.6 },
                }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
