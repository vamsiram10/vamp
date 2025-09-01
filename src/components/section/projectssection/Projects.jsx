"use client";

import { forwardRef, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import HomeEventCard from "@/snippets/homeeventcard/HomeEventCard";
import "./projects.css";
import AnimatedTitle from "@/components/utils/animatedtitle/AnimatedTitle";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

// Each project now includes a pentagon graph data for skills used in that project
const cardProjects = [
  {
    title: "ShopEase E-commerce",
    description:
      "A mini e-commerce app using Java Servlets, JDBC, and MySQL with real-time cart updates.",
    details:
      "ShopEase is a streamlined e-commerce application built to showcase essential backend concepts. It features user login, manages shopping carts across sessions, and connects directly to a MySQL database using JDBC for handling products and orders. Through this project, I gained hands-on experience with server-side Java programming and database architecture.",
    image: "/shopease.jpeg",
    skills: [
      { name: "Java Servlets", value: "Java Servlets: 90" },
      { name: "JDBC", value: "JDBC: 85" },
      { name: "MySQL", value: "MySQL: 15" },
      { name: "JavaScript", value: "JavaScript: 70" },
      { name: "CSS", value: "HTML/CSS: 85" },
    ],
  },
  {
    title: "Avasa Foundation Website (NGO)",
    description:
      "Developed a modern, responsive website for Avasa Foundation using Next.js, React, and Tailwind CSS.",
    details: (
      <>
        For the Avasa Foundation NGO website, I built a modern, responsive web
        application using React and the Next.js framework. The project leverages
        both JavaScript and TypeScript for robust, type-safe code. I utilized
        Tailwind CSS for rapid and consistent styling, ensuring a clean and
        accessible UI. Animations and interactive effects were implemented with
        GSAP to enhance user engagement. The site structure is built with
        semantic HTML, and the overall stack demonstrates my ability to
        integrate advanced frontend technologies for a real-world, impactful
        project. Visit:{" "}
        <a
          href="https://avasafoundation.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline hover:text-blue-600"
        >
          avasafoundation.org
        </a>
      </>
    ),
    image: "/AVASA.jpg",
    live: "https://avasafoundation.org/",
    skills: [
      { name: "Next.js", value: "Next.js: 90" },
      { name: "React", value: "React: 90" },
      { name: "TypeScript", value: "TypeScript: 10" },
      { name: "Tailwind CSS", value: "Tailwind CSS: 85" },
      { name: "GSAP", value: "GSAP: 75" },
    ],
  },
  {
    title: "Terminal Automation",
    description:
      "A Python menu-driven tool for  automation: send emails, WhatsApp messages, scrape web data etc.",
    details:
      "Terminal Automation is a Python-based tool that streamlines common tasks through a simple command-line interface. It automates actions like sending emails, scheduling WhatsApp messages, scraping web data, and converting text to speech—all from the terminal. The project uses Python libraries and APIs to make repetitive workflows more efficient.\n\nChallenges & Solutions:\nAutomating WhatsApp Web was tricky due to frequent UI changes. I used Selenium WebDriver with XPATH selectors and explicit waits to make the automation more reliable.",
    image: "/soon.png",
    skills: [
      { name: "Python", value: "Python: 95" },
      { name: "API Integration", value: "API Integration: 81" },
      { name: "CLI Tools", value: "CLI Tools: 70" },
      { name: "Web Scraping", value: "Web Scraping: 70" },
      { name: "Automation", value: "Automation: 95" },
    ],
  },
  {
    title: "Hackathon : cognizant",
    description:
      "Participated in a 3-hour hackathon where strong core concepts were essential to quickly build a working solution.",
    details: (
      <>
        I participated in the{" "}
        <span className="font-semibold text-blue-400">Snap Syntax</span>{" "}
        hackathon, where I built a website as per the requirements using only
        HTML and CSS. This experience challenged me to quickly design and
        implement a functional and visually appealing site within a limited
        timeframe, relying solely on core web technologies.
        <br />
        <span>
          visit:&nbsp;
          <a
            href="https://snap-cogni2047756.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline hover:text-blue-600"
          >
            CodeSprint Hackathon
          </a>
        </span>
      </>
    ),
    image: "/4.jpg",

    skills: [
      { name: "HTML", value: "HTML: 80" },
      { name: "CSS", value: "CSS: 75" },
      { name: "CSS", value: "JavaScript: 85" },
      { name: "HTML & CSS", value: "HTML & CSS: 90" },
      { name: "HTML", value: "Teamwork: 90" },
    ],
  },
];

// Fix: Export cardProjects so it can be imported and used elsewhere if needed
export { cardProjects };

// Create an array of backText for each card using the project descriptions
const cardBackTexts = cardProjects.map((project) => project.description);

const Projects = forwardRef((props, ref) => {
  const projectsContainer = useRef(null);
  const zoomRef = useRef(null);

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState(null);

  useEffect(() => {
    // Zoom animation trigger
    const zoom = zoomRef.current;
    if (zoom) {
      zoom.classList.add("animate-zoomOut");
      const timeout = setTimeout(() => {
        zoom.style.display = "none";
      }, 1500); // hides after animation
      return () => clearTimeout(timeout);
    }
  }, []);

  // Handler for card click
  const handleCardClick = (project) => {
    setModalProject(project);
    setModalOpen(true);
  };

  // Handler for closing modal
  const handleCloseModal = (e) => {
    // Only close if clicking on overlay or close button
    if (
      e.target.classList.contains("project-modal-overlay") ||
      e.target.classList.contains("project-modal-close")
    ) {
      setModalOpen(false);
      setModalProject(null);
    }
  };

  return (
    <div className="relative min-h-screen text-white bg-black">
      {/* Zoom Transition */}
      <div
        id="zoom"
        ref={zoomRef}
        className="z-50 fixed inset-0 flex items-center justify-center bg-black zoom-overlay"
      >
        <h1 className="m-0 text-[clamp(2.5rem,10vw,8rem)] leading-[1.1]">
          <span className="inline-block tracking-[0.1em] break-words">
            <span className="text-rose-600">L</span>
            <span className="text-orange-400">e</span>
            <span className="text-yellow-400">t</span>
            <span className="text-green-500">'</span>
            <span className="text-blue-500">s</span>
            <span className="text-purple-700">&nbsp;g</span>
            <span className="text-pink-500">o</span>
          </span>
        </h1>
      </div>
      {/* <div className="absolute left-1/2 top-25 text-5xl text-center font-extrabold text-blue-400 -translate-x-1/2 te">
        PROJECTS
      </div> */}
      <section className="HomeEventSec" ref={projectsContainer}>
        <AnimatedTitle
          title="Events Overview"
          containerClass="mt-5 !text-black text-center"
        />
        {cardProjects.map((project, index) => (
          <div
            key={index}
            style={{ display: "inline-block" }}
            onClick={() => handleCardClick(project)}
            tabIndex={0}
            role="button"
            aria-label={`Show details for ${project.title}`}
          >
            <HomeEventCard
              id={`card-${index + 1}`}
              frontSrc="/img/amity_logo.png"
              frontAlt="Card Image"
              backText={project.description}
              title={project.title}
              skills={project.skills}
              ref={(el) => {
                if (ref && typeof ref === "object" && ref.current) {
                  ref.current[index] = el;
                }
              }}
            />
          </div>
        ))}
      </section>
      {/* Modal for project details */}
      {modalOpen && modalProject && (
        <div
          className="z-[100] fixed inset-0 flex items-center justify-center project-modal-overlay bg-black bg-opacity-70"
          onClick={handleCloseModal}
          style={{ animation: "fadeIn 0.2s" }}
        >
          <div
            className="relative project-modal-content p-6 max-w-lg w-full text-black bg-white rounded-lg shadow-lg"
            style={{
              animation: "modalPop 0.25s",
              maxWidth: "90vw",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 project-modal-close text-2xl text-gray-700 hover:text-black"
              onClick={handleCloseModal}
              aria-label="Close"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
                zIndex: 10,
              }}
            >
              ×
            </button>
            {modalProject.image && (
              <img
                src={modalProject.image}
                alt={modalProject.title}
                className="object-cover mb-4 w-90 h-48 rounded"
                style={{ maxHeight: "200px", objectFit: "cover" }}
              />
            )}
            <h2 className="mb-2 text-2xl font-bold">{modalProject.title}</h2>
            <p className="mb-3">
              {modalProject.details || modalProject.description}
            </p>
            {/* <div>
              <strong>Skills:</strong>
              <ul className="list-disc list-inside">
                {modalProject.skills &&
                  modalProject.skills.map((skill, i) => (
                    <li key={i}>
                      {skill.name} ({skill.value.split(":")[1]?.trim() || "0"}%)
                    </li>
                  ))}
              </ul>
            </div> */}
          </div>
        </div>
      )}
      <style jsx>{`
        @keyframes zoomOut {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(12);
            opacity: 0;
          }
        }
        .animate-zoomOut {
          animation: zoomOut 3s ease forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes modalPop {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .project-modal-overlay {
          animation: fadeIn 0.2s;
        }
        .project-modal-content {
          animation: modalPop 0.25s;
        }
      `}</style>
    </div>
  );
});

export default Projects;
