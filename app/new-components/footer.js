"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "../lib/utils";

const Footer = () => {
  const footerLinks = {
    spaces: [
      "Auditorium",
      "Planning",
      "Sailboat retrospective",
      "Campfire",
      "This or that",
      "Debate room",
      "The floor is lava",
      "Connect 4",
      "The farmyard",
      "Football field",
    ],
    solutionsByPain: [
      "For Employee turnover",
      "For Employee disengagement",
      "For Remote disconnection",
    ],
    solutionsByRole: [
      "For CXOs",
      "For HR",
      "For Managers",
      "For Employees",
      "For Marketing",
    ],
    solutionsByType: [
      "Daily activity",
      "Events",
      "Fun competitions",
      "Custom office space",
    ],
    other: ["About us", "Pricing", "Sign in", "Request access"],
  };

  const socialMediaLinks = [
    { icon: "/svg/custom-icons/social-media/discord.svg", alt: "Discord" },
    { icon: "/svg/custom-icons/social-media/instagram.svg", alt: "Instagram" },
    { icon: "/svg/custom-icons/social-media/linkedin.svg", alt: "LinkedIn" },
    { icon: "/svg/custom-icons/social-media/tiktok.svg", alt: "TikTok" },
    { icon: "/svg/custom-icons/social-media/x.svg", alt: "X" },
    { icon: "/svg/custom-icons/social-media/youtube.svg", alt: "YouTube" },
  ];

  return (
    <footer className="w-full">
      {/* Links Section */}
      <div className="w-full bg-purple-50">
        <div className="w-full max-w-[1600px] mx-auto px-12 py-24 grid grid-cols-5 gap-24">
          {Object.entries(footerLinks).map(([key, links]) => (
            <div key={key} className="flex flex-col gap-4">
              <h3 className="text-[12px] font-bold font-manrope text-purple-700 uppercase tracking-[0.08em]">
                {key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </h3>
              <ul className="flex flex-col gap-4">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href={`/${key}/${link.toLowerCase().replace(/ /g, "-")}`}
                      className="text-[14px] text-brand-700 hover:text-purple-600 transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full bg-white px-12 pt-12 pb-[120px]">
        <div className="w-full max-w-[1600px] mx-auto flex justify-between items-start">
          {/* Left Section */}
          <div className="flex items-center gap-16">
            {/* Social Media Icons */}
            <div className="flex gap-4">
              {socialMediaLinks.map(({ icon, alt }) => (
                <Link
                  key={alt}
                  href="#"
                  className="w-11 h-11 rounded-full bg-purple-50 flex items-center justify-center hover:bg-purple-100 transition-colors"
                >
                  <Image src={icon} width={20} height={20} alt={alt} />
                </Link>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex gap-8">
              <Link
                href="/terms-and-conditions"
                className="text-[12px] text-brand-700 hover:text-purple-600"
              >
                Terms and conditions
              </Link>
              <Link
                href="/privacy-policy"
                className="text-[12px] text-brand-700 hover:text-purple-600"
              >
                Privacy policy
              </Link>
              <Link
                href="/cookie-policy"
                className="text-[12px] text-brand-700 hover:text-purple-600"
              >
                Cookie policy
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-end">
            <Image
              src="/svg/logos/teamup-logo-dark.svg"
              alt="Team Up! Logo"
              width={193}
              height={40}
            />
            <p className="text-[12px] text-brand-700 mt-1">
              © 2025, TEAM UP TECH ESPAÑA, SL. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
