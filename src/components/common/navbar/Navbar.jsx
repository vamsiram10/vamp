"use client";
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export function Navbar() {
  // Sound effect: a short click sound (public domain)
  // You can replace the URL with your own sound file if desired
  const clickAudioRef = useRef(
    typeof window !== "undefined" ? new Audio("/gtasanhoverone.wav") : null
  );

  const playClickSound = () => {
    if (clickAudioRef.current) {
      // Reset to start if already playing
      clickAudioRef.current.currentTime = 0;
      clickAudioRef.current.play();
    }
  };

  // Navbar show/hide on scroll
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        setShowNavbar(true);
        lastScrollY.current = currentScrollY;
        return;
      }
      if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "/projects",
      icon: (
        <span className="h-4 w-4 text-neutral-500 dark:text-white">📁</span>
      ),
      // The Projects page is linked to src/components/section/projectssection/Projects.jsx
    },
    {
      name: "About Me",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact Me",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <div className="relative w-full">
      <nav
        className={`z-50 fixed top-4 left-1/2 flex items-center px-6 py-2 bg-white/80 rounded-full border-neutral-200 shadow-lg transform -translate-x-1/2 dark:bg-black/80 backdrop-blur-md space-x-8 border dark:border-white/[0.2] transition-transform duration-300 ${
          showNavbar
            ? "translate-y-0 opacity-100"
            : "-translate-y-20 opacity-0 pointer-events-none"
        }`}
        style={{ willChange: "transform, opacity" }}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.link}
            className="flex items-center transition-colors space-x-2 hover:text-blue-300"
            onClick={playClickSound}
          >
            {item.icon}
            <span className="hidden sm:inline">{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
