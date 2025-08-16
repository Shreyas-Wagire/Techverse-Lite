import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Footer: React.FC = () => {
  const contributors = ["Sakshi Nalawade", "Shreya Chougule", "Anant Thorat"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contributors.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nameLetters = contributors[currentIndex].split("");

  return (
    <footer className="bg-gradient-to-br from-gray-50 via-white to-blue-50/30 py-6 sm:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col items-center text-center">
            <p className="text-gray-500 text-xs sm:text-sm mb-2">
              © 2024 TechVerse. All rights reserved.
            </p>

            {/* Line 1 */}
            <p className="text-gray-700 text-sm sm:text-base md:text-lg font-medium whitespace-nowrap">
              Built by TechVerse Web.Dev
            </p>

            {/* Line 2 - Contributors */}
            <div className="relative mt-2 h-6 sm:h-7 md:h-8 min-w-[140px] sm:min-w-[180px] md:min-w-[220px] flex justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={contributors[currentIndex]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    y: -10,
                    position: "absolute",
                    left: 0,
                    right: 0,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-bold italic 
                             text-base sm:text-lg md:text-xl lg:text-2xl whitespace-nowrap"
                >
                  {nameLetters.map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: i * 0.04, // smooth typing effect
                        ease: "easeOut",
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
