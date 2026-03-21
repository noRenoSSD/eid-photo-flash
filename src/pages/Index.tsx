import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SplashScreen from "@/components/SplashScreen";
import PolaroidCard from "@/components/PolaroidCard";
import FloatingElements from "@/components/FloatingElements";
import AudioPlayer from "@/components/AudioPlayer";

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  const handleSplashComplete = useCallback(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Splash */}
      <SplashScreen onComplete={handleSplashComplete} />

      {/* Audio toggle */}
      <AudioPlayer />

      {/* Floating decorations */}
      <AnimatePresence>{showContent && <FloatingElements />}</AnimatePresence>

      {/* Main content */}
      <AnimatePresence>
        {showContent && (
          <motion.main
            className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Polaroid */}
            <PolaroidCard />

            {/* Text content */}
            <motion.div
              className="mt-8 max-w-md text-center sm:mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h1 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                Keluarga Besar
              </h1>
              <p className="font-handwritten text-3xl font-bold text-foreground/70 sm:text-4xl">
                KUWAT SANTOSO, S.Kom., M.Kom.
              </p>

              <div className="mx-auto my-5 h-px w-16 bg-border" />

              <p className="font-body text-sm leading-relaxed text-muted-foreground sm:text-base">
                Kami mengucapkan
              </p>
              <p className="mt-1 font-display text-lg font-semibold text-foreground sm:text-xl">
                Selamat Hari Raya Idul Fitri
              </p>
              <p className="font-handwritten text-xl text-foreground/60">
                1 Syawal 1447 H
              </p>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground sm:text-base">
                Mohon Maaf Lahir dan Batin 🙏
              </p>
            </motion.div>

            {/* Footer */}
            <motion.p
              className="mt-12 font-body text-[10px] tracking-widest text-muted-foreground/50 uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              Eid Snap • 2025
            </motion.p>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
