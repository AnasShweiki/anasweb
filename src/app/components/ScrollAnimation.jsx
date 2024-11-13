// components/ScrollAnimation.jsx
import { motion } from "framer-motion";

const ScrollAnimation = ({ children, delay = 0.2 }) => (
  <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay, duration: 1, ease: "easeOut" }} viewport={{ once: true }}>
    {children}
  </motion.div>
);

export default ScrollAnimation;
