import HeadShot from "../assets/images/bolu.jpg";
import WorkDisplay from "@/components/workDisplay";
import Archi from "../assets/images/archi.jpg";
import Resort from "../assets/images/resort.jpg";
import Flower from "../assets/images/flower.webp";
import Button from "@/components/Button";
import FlipText from "@/components/AnimatedText";
import { motion } from "framer-motion";
import { easeOut } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: easeOut } },
};

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="flex h-screen relative overscroll-hidden">
        <div className="bg-white w-1/2" />
        <div className="w-1/2 relative">
          <img
            src={HeadShot}
            alt="headshot"
            className="w-full h-screen object-cover"
          />
        </div>

        <div className="absolute inset-x-0 bottom-0 w-full overflow-hidden">
          <motion.div
            className="w-[20vw] ml-12"
            variants={fadeInUp}
            initial="hidden"
            animate="show"
          >
            <h2 className="text-gray-900 font-semibold">Frontend Engineer</h2>
            <p className="text-gray-400">
              I help designers and agencies elevate their branding with creative
              development support.
            </p>
          </motion.div>

          <motion.h1
            className="m-0 p-0 text-[220px] text-center leading-[0.8] font-bold"
            variants={fadeInUp}
            initial="hidden"
            animate="show"
          >
            SEIDU BOLU
          </motion.h1>
        </div>
      </section>

      {/* About Section */}
      <section className="h-[200vh] p-6">
        <motion.div
          className="mx-auto text-gray-800 px-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="overflow-hidden">
            <img
              src={Flower}
              alt="About"
              className="w-72 ml-24 mt-32 rounded-md"
            />
            <p className="text-6xl font-bold mt-6">
              I help brands craft meaningful stories and compelling visuals that
              deeply resonate with their audience, foster strong connections,
              build lasting loyalty, and drive sustainable long-term growth.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="ml-auto w-1/2 border-t-1 p-4 mt-12 mr-24"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex gap-2 w-fit mb-8">
            <div>
              <p className="font-semibold text-sm">From A-Z</p>
              <p className="text-gray-300 text-sm">
                I manage your entire branding process, from concept to
                execution. Whether it's logo design, messaging, or strategy, I
                ensure everything aligns for a cohesive and impactful brand.
              </p>
            </div>
            <div>
              <p className="font-semibold text-sm">Solo or Team</p>
              <p className="text-gray-300 text-sm">
                I manage your entire branding process, from concept to
                execution. Whether it's logo design, messaging, or strategy, I
                ensure everything aligns for a cohesive and impactful brand.
              </p>
            </div>
          </div>

          <Button>
            <FlipText
              text="More About Me"
              className="text-sm text-white"
              delay={0.03}
              duration={0.3}
            />
          </Button>
        </motion.div>
      </section>

      {/* Work Section */}
      <section className="relative h-[200vh]">
        <div className="sticky top-0 z-20 h-screen">
          <WorkDisplay img={Archi} text="APEX ARCHITECTS" />
        </div>
        <div className="sticky top-0 z-30 h-screen">
          <WorkDisplay img={Resort} text="Mubau Resort" />
        </div>
      </section>
    </div>
  );
}

export default Home;
