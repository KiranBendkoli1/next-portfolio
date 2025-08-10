"use client";
import React, { useState } from "react";
import { FaGithub, FaInstagram, FaPhone, FaCopy } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const icons = [
  {
    key: "instagram",
    icon: FaInstagram,
    label: "Instagram",
    detail: "kiran_bendkoli_",
    link: "https://instagram.com/kiran_bendkoli_",
    color: "#E1306C",
  },
  {
    key: "github",
    icon: FaGithub,
    label: "GitHub",
    detail: "KiranBendkoli1",
    link: "https://github.com/KiranBendkoli1",
    color: "#181717",
  },
  {
    key: "linkedin",
    icon: FaLinkedinIn,
    label: "LinkedIn",
    detail: "kiran-bendkoli-2a2b741b9",
    link: "https://www.linkedin.com/in/kiran-bendkoli-2a2b741b9/",
    color: "#0077B5",
  },
  {
    key: "mail",
    icon: MdEmail,
    label: "Email",
    detail: "kiranbendkoli24@gmail.com",
    link: "mailto:kiranbendkoli24@gmail.com",
    color: "#EA4335",
  },
  {
    key: "phone",
    icon: FaPhone,
    label: "Phone",
    detail: "+91-8530628606",
    link: "tel:+918530628606",
    color: "#34B7F1",
  },
];

const CircleNavCard = () => {
  const [selected, setSelected] = useState("github");
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="w-full h-[260px] flex flex-col items-center justify-center relative">
      <h2 className="text-2xl font-bold mb-6">Contact me</h2>
      <div className="flex gap-4 pb-5">
        {icons.map((item, index) => {
          const isActive = selected === item.key;
          return (
            <motion.div
              key={item.key}
              initial={{ y: 20 }}
              animate={{
                y: [20, 25, 20],
                scale: isActive ? 1.2 : 1,
              }}
              transition={{
                y: {
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                },
                scale: { duration: 0.2 },
              }}
            >
              <item.icon
                onMouseEnter={() => {
                  setSelected(item.key);
                }}
                style={{
                  color: isActive ? item.color : "currentColor",
                }}
                className={twMerge(
                  "size-10 hover:size-14 rounded-full p-2 cursor-pointer",
                  "transition-all duration-300 ease-in-out",
                  isActive ? "bg-white shadow-lg" : "hover:bg-white/10"
                )}
              />
            </motion.div>
          );
        })}
      </div>
      <div className="mt-10 flex flex-col items-center min-h-[60px] transition-all duration-300">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg font-semibold text-primary"
        >
          {icons.find((i) => i.key === selected)?.label}
        </motion.span>
        <div className="relative group">
          <div className="flex items-center gap-2">
            <a
              href={icons.find((i) => i.key === selected)?.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-tBase text-base mt-1 hover:underline"
            >
              {icons.find((i) => i.key === selected)?.detail}
            </a>
            <button
              onClick={() =>
                handleCopy(icons.find((i) => i.key === selected)?.detail || "")
              }
              className="opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Copy to clipboard"
            >
              <FaCopy className="w-4 h-4 text-gray-600 hover:text-gray-800" />
            </button>
          </div>
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded"
            >
              Copied!
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CircleNavCard;
