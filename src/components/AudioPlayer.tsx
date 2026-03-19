import { useState, useRef } from "react";
import { Music, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

// Change this URL to your Takbiran backsound
const AUDIO_SRC = "";

const AudioPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  if (!AUDIO_SRC) return null;

  return (
    <>
      <audio ref={audioRef} src={AUDIO_SRC} loop />
      <motion.button
        onClick={toggle}
        className="fixed right-4 top-4 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-card shadow-md"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={playing ? "Mute" : "Play music"}
      >
        {playing ? (
          <Music className="h-5 w-5 text-foreground" />
        ) : (
          <VolumeX className="h-5 w-5 text-muted-foreground" />
        )}
      </motion.button>
    </>
  );
};

export default AudioPlayer;
