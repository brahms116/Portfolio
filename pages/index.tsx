import { motion } from "framer-motion";
import LandingSection from "../components/LandingSection";
import colors from "../styles/colors";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="page">
        <LandingSection />
      </div>
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
