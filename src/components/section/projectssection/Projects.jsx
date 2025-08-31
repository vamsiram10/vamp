"use client";

import { forwardRef, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import HomeEventCard from "@/snippets/homeeventcard/HomeEventCard";
import "./projects.css";
import AnimatedTitle from "@/components/utils/animatedtitle/AnimatedTitle";

// Each project now includes a pentagon graph data for skills used in that project
const cardProjects = [
  {
    title: "Hackathon 2024",
    description:
      "Build innovative solutions and compete for prizes in our annual coding marathon!",
    details:
      "This event brings together coders, designers, and entrepreneurs to build innovative solutions. Participants form teams, brainstorm ideas, and develop prototypes within a limited time. Prizes are awarded for creativity, technical excellence, and impact.",
    image: "/img/hackathon.jpg",
    skills: [
      { name: "React", value: "React: 90" },
      { name: "Node.js", value: "Node.js: 80" },
      { name: "UI/UX", value: "UI/UX: 70" },
      { name: "Teamwork", value: "Teamwork: 85" },
      { name: "APIs", value: "APIs: 75" },
    ],
  },
  {
    title: "Design Sprint",
    description:
      "Collaborate with creative minds to solve real-world problems in just 48 hours.",
    details:
      "A fast-paced event where teams rapidly prototype and test solutions to real-world challenges. Mentors guide participants through ideation, prototyping, and user testing. The best solutions are showcased to a panel of judges.",
    image: "/img/designsprint.jpg",
    skills: [
      { name: "Figma", value: "Figma: 85" },
      { name: "Ideation", value: "Ideation: 90" },
      { name: "Prototyping", value: "Prototyping: 80" },
      { name: "Collaboration", value: "Collaboration: 95" },
      { name: "Presentation", value: "Presentation: 75" },
    ],
  },
  {
    title: "Tech Expo",
    description:
      "Showcase your latest projects and network with industry professionals.",
    details:
      "An exhibition for students and professionals to present their latest tech projects. Attendees can interact with demos, attend talks, and network with industry leaders. Awards are given for the most innovative and impactful projects.",
    image: "/img/techexpo.jpg",
    skills: [
      { name: "Networking", value: "Networking: 90" },
      { name: "Demo", value: "Demo: 80" },
      { name: "Documentation", value: "Documentation: 70" },
      { name: "Marketing", value: "Marketing: 60" },
      { name: "Innovation", value: "Innovation: 85" },
    ],
  },
  {
    title: "Workshop Series",
    description:
      "Learn new skills from experts in web development, AI, and more.",
    details:
      "A series of hands-on workshops led by industry experts. Topics include web development, artificial intelligence, and problem-solving. Participants gain practical experience and receive certificates upon completion.",
    image: "/img/workshop.jpg",
    skills: [
      { name: "Web Dev", value: "Web Dev: 80" },
      { name: "AI/ML", value: "AI/ML: 75" },
      { name: "Learning", value: "Learning: 95" },
      { name: "Community", value: "Community: 85" },
      { name: "Problem Solving", value: "Problem Solving: 90" },
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
                className="object-cover mb-4 w-full h-48 rounded"
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
