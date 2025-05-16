import { CheckCircle, Circle } from "lucide-react";
import clsx from "clsx";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import themeColorMap from "../../utils/themeColorMap";

const HabitCard = ({
  emoji = "💪",
  title = "Gym",
  streak = 5,
  defaultChecked = false,
  theme = "black",
}) => {
  const [checked, setChecked] = useState(defaultChecked);
  const colors = themeColorMap[theme] || themeColorMap["black"];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.25 }}
      onClick={() => setChecked(!checked)}
      className={clsx(
        "relative rounded-xl p-5 w-full flex flex-col gap-2 items-start justify-between border transition-all duration-300 cursor-pointer overflow-hidden",
        colors.bg,
        colors.text,
        "border-gray-800",
        "hover:scale-[1.01] hover:shadow-md"
      )}
    >
      
      <AnimatePresence>
        {checked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10 rounded-xl"
          />
        )}
      </AnimatePresence>

      
      <AnimatePresence>
        {checked && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="absolute top-2 right-2 z-20"
          >
            <CheckCircle className="text-green-400" size={24} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center justify-between w-full relative z-20">
        <span className={`text-3xl ${checked ? 'grayscale' : ''}`}>{emoji}</span>
        {!checked && <Circle size={20} className="text-gray-300" />}
      </div>

      <h3
        className={clsx(
          "text-lg font-bold mt-2 relative z-20",
          checked && "line-through text-gray-300"
        )}
      >
        {title}
      </h3>

      <p
        className={clsx(
          "text-xs relative z-20",
          checked ? "text-gray-400 line-through" : "text-gray-200"
        )}
      >
        🔥 {streak} day streak
      </p>
    </motion.div>
  );
};

export default HabitCard;
