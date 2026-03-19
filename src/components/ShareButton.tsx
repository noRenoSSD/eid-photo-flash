import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const ShareButton = () => {
  const message = encodeURIComponent(
    "Assalamu'alaikum Wr. Wb.\n\nSelamat Hari Raya Idul Fitri 1 Syawal 1447 H 🌙✨\nMohon Maaf Lahir dan Batin 🙏\n\nTaqabbalallahu minna wa minkum"
  );
  const url = `https://wa.me/?text=${message}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-display text-sm font-semibold text-primary-foreground shadow-md transition-colors"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
    >
      <Heart className="h-4 w-4" />
      Share to WhatsApp
    </motion.a>
  );
};

export default ShareButton;
