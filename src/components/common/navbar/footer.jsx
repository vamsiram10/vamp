import React from "react";
import Link from "next/link";
import { Cover } from "@/components/ui/cover";
import { useConfetti } from "@/components/ui/useConfetti";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About Me", href: "/aboutme" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/projects" },
  { name: "Certificates", href: "/#certificates" },
];

const servicesLinks = [
  "NGO- Websites",
  "Ecom Websites",
  "Portfolios",
  "Full Websites",
  "NLP",
];

export default function Footer() {
  const { confetti } = useConfetti();

  const handleConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
    });
  };

  return (
    <footer
      className="py-12 px-4 w-full text-white bg-black"
      style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}
    >
      <div className="flex flex-col justify-between gap-10 mx-auto max-w-6xl md:flex-row">
        {/* Everyday should be legendary!!! */}
        <div className="flex-1 flex flex-col justify-between mb-8 md:mb-0">
          <div>
            {/* Using Cover from cover.jsx to wrap the quote */}
            <div className="mb-2">
              <Cover>
                <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">
                  Strive not to be a success but rather to be of value.
                </h2>
              </Cover>
            </div>

            <p className="mb-4 text-xs text-gray-400">
              Challenge yourself, chase your dreams, create a legacy.
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="flex-1 mb-8 md:mb-0">
          <h3 className="mb-3 text-lg font-semibold underline underline-offset-4">
            Links
          </h3>
          <ul className="flex flex-col gap-2">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="transition-colors duration-200 hover:text-yellow-400"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="flex-1 mb-8 md:mb-0">
          <h3 className="mb-3 text-lg font-semibold underline underline-offset-4">
            Services
          </h3>
          <ul className="flex flex-col gap-2">
            {servicesLinks.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div className="flex-1">
          <h3 className="mb-3 text-lg font-semibold underline underline-offset-4">
            Connect
          </h3>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href="mailto:saiprithvisuperior@gmail.com"
                className="transition-colors duration-200 hover:text-yellow-400"
              >
                vamsirama1622@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+919032267113"
                className="transition-colors duration-200 hover:text-yellow-400"
              >
                +91 6309162444
              </a>
            </li>
            <li>Jaipur, Rajasthan, India</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 mt-10 pt-4 text-center text-xs text-gray-500 border-t border-gray-800">
        <button
          type="button"
          onClick={(e) => {
            // Only trigger confetti if we're in the footer
            // Find the closest footer element up the DOM tree
            let node = e.currentTarget;
            let isInFooter = false;
            while (node) {
              if (node.tagName && node.tagName.toLowerCase() === "footer") {
                isInFooter = true;
                break;
              }
              node = node.parentElement;
            }
            if (isInFooter && typeof handleConfetti === "function") {
              handleConfetti(e);
            }
          }}
          className="px-3 py-1 text-xs font-semibold text-white bg-violet-500 rounded-full hover:bg-violet-400 transition"
        >
          Everyday should be extraordinary!!!
        </button>
        {/* <button
          type="button"
          onClick={handleConfetti}
          aria-label="Celebrate"
          className="ml-2 px-2 py-1 text-black font-bold text-xs bg-yellow-400 rounded-full hover:bg-yellow-300 transition"
        >
          CLICK ME
        </button> */}
      </div>
    </footer>
  );
}
