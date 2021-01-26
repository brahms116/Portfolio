import { motion } from "framer-motion";
import colors from "../styles/colors";

export default function Home() {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <style jsx>{`
        .page {
          background: ${colors.background};
          min-height: 100vh;
          width: 100vw;
        }
      `}</style>
    </motion.div>
  );
}
