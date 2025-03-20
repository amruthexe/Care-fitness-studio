"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

// components
import CustomButton from "./CustomButton";

const ZumbaDance = () => {
  return (
    <section id="zumba" className="bg-black text-white py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="relative w-full lg:w-1/2 h-[400px]">
          <Image
            src="/assets/img/classes/z.jpg"
            alt="Zumba Dance"
            layout="fill"
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
        
        {/* Text Section */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <motion.h2
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="text-4xl text-center text-accent"
          >
            Zumba Dance - Our Special
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="text-xl text-center"
          >
            Push your limits with Zumba – a fun, high-energy dance workout that combines Latin and international music with dance moves to burn calories and improve fitness.
          </motion.p>

          <div className="flex flex-col gap-4">
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="bg-red-600 p-4 rounded-lg"
            >
              <h4 className="text-2xl font-bold mb-2">Cardiovascular Fitness</h4>
              <p>
                Zumba is a high-energy workout that involves continuous movement and aerobic exercise, contributing to improved cardiovascular health. It helps increase heart rate and improve circulation.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="bg-red-600 p-4 rounded-lg"
            >
              <h4 className="text-2xl font-bold mb-2">Calorie Burn and Weight Management</h4>
              <p>
                Zumba is an effective way to burn calories. The combination of dance moves and energetic music can lead to increased calorie expenditure, making it beneficial for weight management and loss.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
             
            </motion.div>
          </div>
        </div>
      </div>
      {/* Schedule Section */}
    
    </section>
  );
};

export default ZumbaDance;
