import { useState, useRef, useEffect } from "react";
import { Music2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Taruh file MP3 kamu di /public dengan nama "music.mp3"
const AUDIO_SRC = "/music.mp3";

const AudioPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Coba autoplay setelah splash selesai (~3 detik)
  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 2800);

    const playTimer = setTimeout(() => {
      if (!audioRef.current) return;
      audioRef.current
        .play()
        .then(() => setPlaying(true))
        .catch(() => {
          // Browser block autoplay — user harus klik manual
          setPlaying(false);
        });
    }, 3000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(playTimer);
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={AUDIO_SRC} loop preload="auto" />

      <AnimatePresence>
        {visible && (
          <motion.button
            key="audio-btn"
            onClick={toggle}
            initial={{ opacity: 0, scale: 0.5, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.92 }}
            className="fixed right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/80 shadow-lg backdrop-blur-sm border border-white/60"
            aria-label={playing ? "Pause music" : "Play music"}
            title={playing ? "Pause musik" : "Play musik"}
          >
            {/* Ring animasi saat musik playing */}
            {playing && (
              <motion.span
                className="absolute inset-0 rounded-full border-2 border-amber-400/60"
                animate={{ scale: [1, 1.35, 1], opacity: [0.7, 0, 0.7] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}

            {playing ? (
              <Music2 className="h-5 w-5 text-amber-500" />
            ) : (
              <VolumeX className="h-5 w-5 text-gray-400" />
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default AudioPlayer;
