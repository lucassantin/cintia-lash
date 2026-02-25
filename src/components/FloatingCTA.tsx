import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="https://wa.me/554891308875"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 100, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 100, x: "-50%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-6 left-1/2 z-50 
                     bg-gradient-to-r from-primary via-rose-gold-light to-gold
                     text-primary-foreground px-6 py-3 rounded-full
                     font-semibold shadow-elegant backdrop-blur-sm
                     flex items-center gap-2
                     hover:scale-105 transition-transform duration-300
                     md:hidden"
        >
          <MessageCircle className="w-5 h-5" />
          Agendar Agora
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
