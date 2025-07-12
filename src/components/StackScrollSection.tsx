import { motion, useViewportScroll, useTransform } from "framer-motion";
import WorkDisplay from "./workDisplay";
import Archi from "../assets/images/archi.jpg";
import Resort from "../assets/images/resort.jpg";

export default function StackedScrollSection() {
  const { scrollYProgress } = useViewportScroll();
  const opacity1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 0]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  return (
    <main style={{ position: "relative", height: "200vh", overflow: "hidden" }}>
      <motion.div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 2,
          opacity: opacity1,
        }}
      >
        <WorkDisplay img={Archi} text="APEX ARCHITECTS" />
      </motion.div>

      <motion.div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1,
          opacity: opacity2,
        }}
      >
        <WorkDisplay img={Resort} text="Mubau Resort" />
      </motion.div>
    </main>
  );
}
