"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Link from "next/link"; // Import the Link component

// components
import CustomButton from "./CustomButton";

const classes = [
  {
    name: "Body Building",
    img: "/assets/img/classes/bodybuilding.jpg",
    description:
      "Build muscle, strength, and endurance with our specialized bodybuilding classes. Focus on lifting techniques and workout routines designed for maximum gains.",
    fullDescription:
      "Our bodybuilding classes are designed for individuals who want to focus on muscle growth, strength, and physical conditioning. With expert trainers guiding your form and providing personalized plans, you'll push your limits to build muscle and see visible results. Whether you're new to bodybuilding or looking to refine your technique, we offer the perfect environment for growth.",
  },
  {
    name: "Cardio",
    img: "/assets/img/classes/cardio.jpg",
    description:
      "Boost your heart health and endurance with our fun, high-energy cardio workouts. Ideal for burning calories and improving overall fitness.",
    fullDescription:
      "Our cardio classes are designed to get your heart pumping and your calories burning. Whether you're looking to lose weight, improve your cardiovascular health, or increase your endurance, we provide a variety of cardio workouts that are both fun and effective. From cycling to aerobics, our sessions cater to all fitness levels, ensuring you get the best cardio workout possible.",
  },
  {
    name: "Fitness",
    img: "/assets/img/classes/fitness.jpg",
    description:
      "Get fit, strong, and healthy with our fitness classes. Combining strength training, mobility, and conditioning to help you achieve your personal fitness goals.",
    fullDescription:
      "Our fitness classes are designed for individuals at all levels who want to improve their overall fitness. Whether you're looking to build strength, improve flexibility, or enhance cardiovascular health, we provide a wide range of fitness routines. Our expert trainers will guide you through each session, ensuring proper form and providing modifications to suit your needs. Join us to take your fitness journey to the next level.",
  },
  {
    name: "Zumba Dance",
  
    img: "/assets/img/classes/z.jpg",
    
     
      description:
        "Push your limits with Zumba – a fun, high-energy dance workout that combines Latin and international music with dance moves to burn calories and improve fitness.",
    
    
    fullDescription:
      "Our CrossFit classes are designed to push you to your limits, combining weightlifting, gymnastics, and metabolic conditioning. With constantly varied exercises, each workout is different and tailored to challenge your body. Whether you're an experienced CrossFit athlete or just starting, our classes are scalable to your fitness level, ensuring everyone gets an intense, effective workout that helps improve strength, endurance, and overall fitness.",
  },
];

const Classes = () => {
  return (
    <section id="class">
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2"
      >
        {classes.map((item, index) => {
          return (
            <div
              className="relative w-full h-[300px] lg:h-[485px] flex flex-col justify-center items-center"
              key={index}
            >
              {/* overlay */}
              <div className="bg-black/50 absolute w-full h-full top-0 z-0"></div>
              <Image src={item.img} fill className="object-cover" alt="" />
              {/* text & btn */}
              <div className="z-30 max-w-[380px] text-center flex flex-col items-center justify-center gap-4">
                <motion.h3
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                  className="h3 text-accent"
                >
                  {item.name}
                </motion.h3>
                <motion.p
                  variants={fadeIn("up", 0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                  className="text-white font-bold"
                >
                  {item.description}
                </motion.p>
                <motion.div
                  variants={fadeIn("up", 0.8)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <Link href="#">
                    <CustomButton
                      containerStyles="w-[164px] h-[46px]"
                      text="Read more"
                    />
                  </Link>
                </motion.div>
                {/* Link to full description */}
               
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Classes;
