"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import CustomButton from "./CustomButton";
import { FaCheck } from "react-icons/fa";

const trainerData = [
  {
    name: "Supreeth Malur",
    role: "Certified Trainer",
    description: "7 years of industry experience in fitness and strength training.",
  },
  {
    name: "Pavan Manu",
    role: "Mr. Karnataka",
    description: "National-level bodybuilder and certified trainer known for results.",
  },
  {
    name: "Adhisesh",
    role: "Mr. Junior Karnataka",
    description: "Renowned coach with titles and proven track record.",
  },
];

const competitionPack = {
  title: "Competition Pack",
  price: "₹49,999",
  benefits: [
    {
      icon: FaCheck,
      text: "Includes membership",
    },
    {
      icon: FaCheck,
      text: "Access to all gym facilities",
    },
    {
      icon: FaCheck,
      text: "Diet plan included",
    },
    {
      icon: FaCheck,
      text: "Health and fitness tips",
    },
    {
      icon: FaCheck,
      text: "Monday-Friday gym access",
    },
    {
      icon: FaCheck,
      text: "Full access to everything",
    },
  ],
  message: "Hi, I am interested in the Professional package at your gym.",
};

const Team = () => {
  return (
    <>
      {/* TEAM SECTION */}
      <section className="py-12 bg-white" id="team">
        <div className="container mx-auto h-full flex flex-col items-center justify-center">
          {/* header */}
          <motion.h2
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="h2 text-center mb-6"
          >
            Our Trainers
          </motion.h2>

          {/* trainers grid */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 mb-12"
          >
            {trainerData.map((trainer, index) => (
              <div
                className="flex flex-col items-center text-center px-4"
                key={index}
              >
                <h4 className="h4 mb-2 text-black">{trainer.name}</h4>
                <p className="uppercase text-xs tracking-[3px] mb-2 text-gray-600">
                  {trainer.role}
                </p>
                <p className="mb-6 max-w-[320px] mx-auto text-gray-700">
                  {trainer.description}
                </p>
              </div>
            ))}
          </motion.div>

          {/* btn */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            <CustomButton
              containerStyles="w-[196px] h-[62px]"
              text="See all trainers"
            />
          </motion.div>
        </div>
      </section>

      {/* COMPETITION PACK SECTION */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="text-4xl font-bold text-center text-gray-800 mb-6"
          >
            {competitionPack.title}
          </motion.h2>

          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Designed for those training for national-level fitness competitions. This premium package ensures you’re competition-ready.
          </p>

          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="bg-white shadow-md rounded-lg p-6 sm:p-10 text-center"
          >
            <div className="text-3xl font-bold text-red-600 mb-4">{competitionPack.price}</div>
            <ul className="text-left space-y-4 max-w-md mx-auto">
              {competitionPack.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <benefit.icon className="text-green-600" />
                  <span>{benefit.text}</span>
                </li>
              ))}
            </ul>

            <button className="mt-8 w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded transition">
              Join Competition Pack
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Team;
