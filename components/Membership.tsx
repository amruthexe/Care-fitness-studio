"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

// components
import MembershipSlider from "./MembershipSlider";

const Membership = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="py-8 xl:py-0 lg:h-[95vh] bg-membership bg-cover bg-center relative before:w-full before:h-full before:bg-black/50 before:absolute before:top-0 before:z-10"
      id="prices"
    >
      <div className="container mx-auto px-6 xl:px-0 text-white h-full flex flex-col justify-center xl:pt-24 relative z-20">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          className="text-white text-center mb-8 text-4xl font-medium leading-tight"
        >
          Membership
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="w-full max-w-[1200px] mx-auto"
        >
          <MembershipSlider />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Membership;
