"use client";
import React from "react";
import { motion } from "framer-motion";

const TransitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

export default function Transition({ color }: { color: string }) {
  const boba = document.querySelector(".boba");
  const biba = document.querySelector(".biba");
  const buba = document.querySelector(".buba");

  boba?.classList.toggle(color + "1");
  biba?.classList.toggle(color + "2");
  buba?.classList.toggle(color + "3");

  return (
    <div>
      <motion.div
        className="boba"
        variants={TransitionVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{ delay: 0, duration: 0.8, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="biba"
        variants={TransitionVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="buba"
        variants={TransitionVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      ></motion.div>
    </div>
  );
}
