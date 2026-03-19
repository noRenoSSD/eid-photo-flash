import { motion } from "framer-motion";
import familyPhoto from "@/assets/family-photo.jpg";

const PolaroidCard = () => (
  <motion.div
    className="relative mx-auto w-[280px] sm:w-[320px]"
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  >
    {/* Polaroid frame */}
    <div
      className="rounded-sm bg-card p-3 pb-16 sm:p-4 sm:pb-20"
      style={{ boxShadow: "var(--shadow-polaroid)" }}
    >
      {/* Photo */}
      <div className="overflow-hidden rounded-sm">
        <img
          src={familyPhoto}
          alt="Family Eid Celebration"
          className="aspect-[3/4] w-full object-cover"
        />
      </div>

      {/* Caption area */}
      <div className="absolute bottom-4 left-0 right-0 text-center sm:bottom-5">
        <p className="font-handwritten text-2xl font-bold text-foreground/80 sm:text-3xl">
          Eid Mubarak 1447H
        </p>
        <div className="mt-1 flex items-center justify-center gap-1">
          <span className="text-xs text-muted-foreground">✨</span>
          <span className="font-body text-[10px] tracking-widest text-muted-foreground uppercase">
            taqabbalallahu minna wa minkum
          </span>
          <span className="text-xs text-muted-foreground">✨</span>
        </div>
      </div>
    </div>

    {/* Tape decoration */}
    <div className="absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 -rotate-2 rounded-sm bg-pastel-green/60" />
  </motion.div>
);

export default PolaroidCard;
