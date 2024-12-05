import React from "react";
import { motion, useAnimationFrame } from "framer-motion";

const AnimatedCounter = () => {
  const [number, setNumber] = React.useState(0);

  React.useEffect(() => {
    const duration = 1000; // 2 seconds
    const frameRate = 60; // Number of updates per second
    const totalFrames = (duration / 1000) * frameRate;

    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      setNumber(Math.round(126 * progress));

      if (frame === totalFrames) {
        clearInterval(interval);
      }
    }, 1000 / frameRate);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ fontSize: "10rem", fontFamily: "Sintony", fontWeight: "100" }}
    >
      {number}
    </motion.div>
  );
};

export default AnimatedCounter;
