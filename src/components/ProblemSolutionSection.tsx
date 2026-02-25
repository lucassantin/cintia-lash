import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

const problemSolutionPairs = [
  {
    problem: "Cansada de rímel?",
    solution: "Acorde pronta todos os dias.",
  },
  {
    problem: "Olhar sem expressão?",
    solution: "Magnetismo e confiança instantâneos.",
  },
];

const ProblemSolutionSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSolution, setShowSolution] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (showSolution) {
        setShowSolution(false);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % problemSolutionPairs.length);
        }, 500);
      } else {
        setShowSolution(true);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [showSolution]);

  const currentPair = problemSolutionPairs[currentIndex];

  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-primary mb-4">
            <Sparkles className="w-4 h-4" />
            Transformação
            <Sparkles className="w-4 h-4" />
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative h-48 flex items-center justify-center"
        >
          <div className="text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentIndex}-${showSolution}`}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                {!showSolution ? (
                  <p className="text-2xl sm:text-3xl md:text-4xl font-serif text-muted-foreground italic">
                    "{currentPair.problem}"
                  </p>
                ) : (
                  <p className="text-2xl sm:text-3xl md:text-4xl font-serif text-gradient font-semibold">
                    ✨ {currentPair.solution}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Progress indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {problemSolutionPairs.map((_, index) => (
            <motion.div
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-primary"
                  : "w-1.5 bg-primary/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
