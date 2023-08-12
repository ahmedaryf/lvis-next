"use client"
import React from 'react'
import { motion, AnimatePresence } from "framer-motion";

export default function Framer({children, delay}) {
  return (
    <AnimatePresence>
        <motion.div
          key={1}
          initial={{ opacity: 0, clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)"}}
          animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"}}
          exit={{ opacity: 0, clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)"}}
          transition={{
            duration: 1,
            delay: delay
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
  )
}
