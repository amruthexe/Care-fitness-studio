"use client";

import { MdClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

// components
import CustomButton from "./CustomButton";

// import swiper components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper/modules";

// swiper styles
import "swiper/css";
import "swiper/css/pagination";

// membership data
const membershipData = [
  {
    title: "Standard",
    price: "₹ 1499",
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
        icon: MdClose,
        text: "Diet plan included",
      },
      {
        icon: FaCheck,
        text: "Health and fitness tips",
      },
      {
        icon: MdClose,
        text: "Monday-Friday gym access",
      },
      {
        icon: FaCheck,
        text: "Full access to everything",
      },
    ],
    message: "Hi, I am interested in the Standard package at your gym.",
  },
  {
    title: "Personal Training",
    price: "₹ 4999",
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
    message: "Hi, I am interested in the Ultimate package at your gym.",
  },
  {
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
  },
];

// function to handle the "Buy now" button click
const handleBuyNow = ( message:any) => {
  const phoneNumber = "+918861994863"; // Provided phone number
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank"); // Open WhatsApp with pre-filled message
};

const MembershipSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      className="min-h-[680px]"
    >
      {membershipData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="border border-accent hover:bg-primary-300/80 transition-all duration-300 w-full max-w-sm xl:max-w-none mx-auto">
              <div className="py-5 px-[60px] border-b border-accent">
                <h4 className="h4">{item.title}</h4>
              </div>
              {/* benefits */}
              <div className="py-[30px] px-[60px]">
                <ul className="flex flex-col gap-5 mb-7">
                  {item.benefits.map((benefit, index) => {
                    return (
                      <li key={index} className="flex items-center gap-2">
                        <benefit.icon className="text-accent text-lg" />
                        {benefit.text}
                      </li>
                    );
                  })}
                </ul>
                {/* price & button */}
                <p className="text-accent mb-8 flex gap-1 items-center">
                  <strong className="text-4xl">{item.price}</strong>
                  <em className="self-end text-2xl">/month</em>
                </p>
                <a
                  href={`https://wa.me/+918861994863?text=${encodeURIComponent(
                    item.message
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CustomButton
                    containerStyles="w-[196px] h-[62px]"
                    text="Buy now"
                  />
                </a>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MembershipSlider;
