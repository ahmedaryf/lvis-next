"use client"
import React from 'react'
import { motion, AnimatePresence } from "framer-motion";

export default function Framer({children, delay}) {
  return (
    <AnimatePresence>
        <motion.div
          key={1}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
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
