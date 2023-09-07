import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
}
const Fade = ({ children, duration, delay }: IProps) => {
  return (
    <AnimatePresence>
      <motion.div
        whileInView={{ opacity: 1 }}
        transition={{ delay: delay || 0.5, duration: duration || 0.5 }}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 0, opacity: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Fade;
