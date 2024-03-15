'use client'

import { motion } from 'framer-motion'
import type { MotionProps } from 'framer-motion'

interface AnimateProps extends MotionProps {
  children: Readonly<React.ReactNode>
}

export const Animate = ({ children, ...props }: AnimateProps) => {
  return <motion.div {...props}>{children}</motion.div>
}
