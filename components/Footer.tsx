"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

// components
import CustomButton from "./CustomButton";

// variants
const footerContainerVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 0.5,
      ease: "linear",
    },
  },
};

const footerItem = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
};

const Footer = () => {
  return (
    <footer className="bg-black pt-24 pb-12">
      <div className="container mx-auto pb-24">
        <motion.div
          variants={footerContainerVariant}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-white grid grid-cols-1 xl:grid-cols-4 gap-x-8 gap-y-12"
        >
          {/* info */}
          <motion.div variants={footerItem} className="flex items-center flex-col gap-4">
            <Link href="#">
              <Image
                src={"/assets/img/hero/logo-removebg.png"}
                width={150}
                height={80}
                alt="Care Fitness Studio Logo"
              />
            </Link>
            <p className="max-w-sm">
              Your trusted fitness partner helping you achieve your fitness goals with world-class training.
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-xl text-accent" />
                <span>Kolar Main Road, MBM Complex 3rd Floor, Malur 563130</span>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-xl text-accent" />
                <span>(886) 1989463, (702) 6131447</span>
              </li>
              <li className="flex items-center gap-4">
                <FaEnvelope className="text-xl text-accent" />
                <span>info@carefitness.com</span>
              </li>
            </ul>
          </motion.div>
          {/* blog */}
          <motion.div variants={footerItem}>
            <h4 className="h4 text-accent mb-4">Recent blog posts</h4>
            {/* post */}
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link className="hover:text-accent transition-all" href="#">
                <h5 className="h5 leading-snug">
                  How to stay motivated for all exercises
                </h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  September 22, 2024
                </p>
              </Link>
            </div>
            {/* post */}
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link className="hover:text-accent transition-all" href="#">
                <h5 className="h5 leading-snug">
                  Top 5 workout routines for beginners
                </h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  October 10, 2024
                </p>
              </Link>
            </div>
          </motion.div>
          {/* gallery */}
          <motion.div variants={footerItem}>
            <h4 className="h4 text-accent mb-4">Gallery</h4>
            {/* gallery imgs */}
            <div className="flex flex-wrap gap-4">
              <Link href="#">
                <Image
                  src={"/assets/img/trainers/david.jpg"}
                  width={100}
                  height={100}
                  alt="Trainer David"
                />
              </Link>
              <Link href="#">
                <Image
                  src={"/assets/img/trainers/matt.jpg"}
                  width={100}
                  height={100}
                  alt="Trainer Matt"
                />
              </Link>
              <Link href="#">
                <Image
                  src={"/assets/img/trainers/rosy.jpg"}
                  width={100}
                  height={100}
                  alt="Trainer Rosy"
                />
              </Link>
              <Link href="#">
                <Image
                  src={"/assets/img/trainers/sofia.jpg"}
                  width={100}
                  height={100}
                  alt="Trainer Sofia"
                />
              </Link>
            </div>
          </motion.div>
          {/* newsletter */}
          <motion.div variants={footerItem}>
            <h4 className="h4 text-accent mb-4">Newsletter</h4>
            <div className="flex flex-col gap-4">
              <p>
                Stay updated with our latest fitness tips, offers, and news by subscribing to our newsletter.
              </p>
              <form className="flex items-center">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="w-[172px] h-[50px] outline-none px-4 text-primary-300"
                />
                <CustomButton
                  containerStyles="w-[96px] h-[50px] px-4"
                  text="Send"
                />
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
      {/* copyright */}
      <div className="text-white border-t border-white/20 py-12">
        <div className="container mx-auto h-full">
          <div className="flex items-center justify-between h-full">
            <span>&copy; Copyright 2025 Care Fitness Studio</span>
            <ul className="flex gap-4 text-xl">
              <li>
                <Link
                  href="https://www.facebook.com"
                  className="text-white hover:text-accent transition-all"
                >
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/aesthetic_muscle0204/"
                  className="text-white hover:text-accent transition-all"
                >
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.twitter.com"
                  className="text-white hover:text-accent transition-all"
                >
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.youtube.com"
                  className="text-white hover:text-accent transition-all"
                >
                  <FaYoutube />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
