"use client";
import React from "react";

const AboutMe = () => {
  return (
    <>
      <section className="relative top-10 px-4 mx-auto py-12 max-w-3xl">
        <h2 className="mb-6 text-3xl font-bold text-center">
          A DEVELOPER'S JOURNEY.
        </h2>
        <p className="mx-auto text-lg leading-relaxed text-white text-center">
          My journey as a developer has been shaped by a deep interest in
          front-end development and modern programming languages. I specialize
          in building interactive, user-focused web applications using React.js
          and the Next.js framework. My experience began with learning the
          fundamentals of JavaScript and CSS, which gave me a strong foundation
          in creating seamless digital experiences.
        </p>
        <p className="mx-auto mt-6 text-lg leading-relaxed text-white text-center">
          As I advanced, I became passionate about leveraging the power of React
          to build dynamic interfaces and using Next.js to optimize performance
          and scalability. I enjoy architecting reusable components, managing
          state efficiently, and ensuring accessibility and responsiveness
          across devices. My projects often involve integrating APIs, handling
          server-side rendering, and deploying full-stack solutions with
          Next.js. I am always eager to learn new technologies and best
          practices in the ever-evolving front-end ecosystem. This website is a
          reflection of my skills and dedication to modern web development, and
          I look forward to expanding it further as I continue to grow as a
          React and Next.js developer.
        </p>
      </section>
      <section className="relative px-4 mx-auto py-12 max-w-3xl">
        <div className="flex flex-col items-center mt-16">
          <div className="w-full max-w-2xl">
            {/* Timeline container */}
            <div className="relative">
              {/* Animated vertical line */}
              <div className="z-0 absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-blue-300 to-blue-900 opacity-70 -translate-x-1/2 animate-pulse"></div>
              {/* Timeline items */}
              {[
                {
                  title: "Amity University Rajasthan",
                  description:
                    "Pursuing a Bachelor's in Computer Science, maintaining a CGPA of 9.05.",
                  date: "2022 - 2026 (Expected)",
                  location: "Jaipur",
                  icon: (
                    <svg
                      className="w-6 h-6 text-yellow-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 0H6m6 0h6"
                      />
                    </svg>
                  ),
                  badge: "Education",
                },
                {
                  title: "Aaditya Junior College",
                  description:
                    "Completed Intermediate in Science with a final percentage of 98.4%.",
                  date: "2019 - 2021",
                  location: "Karimnagar, Telangana",
                  icon: (
                    <svg
                      className="w-6 h-6 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 20l9-5-9-5-9 5 9 5z"
                      />
                    </svg>
                  ),
                  badge: "Science",
                },
                {
                  title: "Paramita Heritage School",
                  description:
                    "Graduated 10th class (MPC) with a perfect GPA of 10.",
                  date: "2018 - 2019",
                  location: "Karimnagar, Telangana",
                  icon: (
                    <svg
                      className="w-6 h-6 text-pink-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ),
                  badge: "School",
                },
              ].map((item, idx, arr) => (
                <div
                  key={item.title}
                  className={`z-10 relative flex items-center mb-10 group transition-transform duration-300 hover:scale-[1.025] ${
                    idx === arr.length - 1 ? "mb-0" : ""
                  }`}
                >
                  {/* Left side */}
                  <div className="pr-6 w-1/2 text-right">
                    <div className="inline-flex items-center gap-2 mb-1">
                      <span className="inline-block px-2 py-0.5 text-xs font-semibold text-blue-200 bg-blue-900/60 rounded-full shadow-md">
                        {item.badge}
                      </span>
                      <span className="inline-block">{item.icon}</span>
                    </div>
                    <h3 className="font-bold text-lg text-white drop-shadow-lg">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  {/* Center dot with glow and animation */}
                  <div className="flex flex-col items-center w-0">
                    <span className="z-10 relative block w-6 h-6 bg-gradient-to-br from-blue-500 via-blue-400 to-blue-700 rounded-full border-4 border-white shadow-2xl animate-pulse">
                      <span className="absolute inset-0 w-full h-full bg-blue-500 rounded-full opacity-30 blur-lg"></span>
                    </span>
                  </div>
                  {/* Right side */}
                  <div className="pl-6 w-1/2 text-left">
                    <span className="text-blue-300 font-semibold text-base tracking-wide">
                      {item.date}
                    </span>
                    <div className="flex items-center gap-1 mt-1 text-gray-400 text-xs">
                      <svg
                        className="inline-block w-4 h-4 text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 12.414a4 4 0 10-1.414 1.414l4.243 4.243a1 1 0 001.414-1.414z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {item.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 mx-auto py-16 max-w-4xl">
        <h2 className="mb-10 text-4xl font-extrabold text-center text-blue-500">
          <span className="inline-block align-middle">🚀</span> Technical Skills
        </h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Programming Languages */}
          <div className="overflow-hidden relative p-5 h-46 bg-gradient-to-br from-blue-900/80 via-blue-800/60 to-blue-700/80 rounded-1xl border-blue-700/40 shadow-2xl transition-transform duration-300 group border hover:scale-105 hover:shadow-blue-500/40 sm:h-45">
            <div className="absolute opacity-40 transition-opacity duration-300 pointer-events-none -top-8 -right-8 group-hover:opacity-70">
              <svg width="90" height="90" fill="none" viewBox="0 0 24 24">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#60a5fa"
                  strokeWidth="2"
                />
                <path stroke="#60a5fa" strokeWidth="2" d="M12 2v20m10-10H2" />
              </svg>
            </div>
            <h3 className="flex items-center gap-3 mb-5 text-2xl font-bold text-blue-300 tracking-wide">
              <span className="inline-block w-3 h-3 bg-blue-400 rounded-full shadow-lg animate-pulse"></span>
              Programming Languages
            </h3>
            <div className="flex flex-wrap gap-4 mt-2">
              <div className="flex flex-col items-center transition-transform duration-200 group-hover:scale-110">
                <span className="flex items-center justify-center w-10 h-10 text-2xl font-bold text-white bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-full shadow-lg">
                  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                    <path d="M16 2L2 30h28L16 2z" fill="#F7DF1E" />
                    <text
                      x="8"
                      y="23"
                      fontSize="12"
                      fill="#222"
                      fontWeight="bold"
                    >
                      J
                    </text>
                  </svg>
                </span>
                <span className="mt-2 text-white font-medium">Java</span>
              </div>
              <div className="flex flex-col items-center transition-transform duration-200 group-hover:scale-110">
                <span className="flex items-center justify-center w-10 h-10 text-2xl font-bold text-white bg-gradient-to-tr from-blue-400 to-blue-600 rounded-full shadow-lg">
                  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                    <ellipse cx="16" cy="16" rx="14" ry="14" fill="#3776AB" />
                    <text
                      x="7"
                      y="23"
                      fontSize="12"
                      fill="#fff"
                      fontWeight="bold"
                    >
                      Py
                    </text>
                  </svg>
                </span>
                <span className="mt-2 text-white font-medium">Python</span>
              </div>
              <div className="flex flex-col items-center transition-transform duration-200 group-hover:scale-110">
                <span className="flex items-center justify-center w-10 h-10 text-2xl font-bold text-white bg-gradient-to-tr from-green-400 to-green-600 rounded-full shadow-lg">
                  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                    <rect
                      x="4"
                      y="4"
                      width="24"
                      height="24"
                      rx="6"
                      fill="#059669"
                    />
                    <text
                      x="10"
                      y="23"
                      fontSize="12"
                      fill="#fff"
                      fontWeight="bold"
                    >
                      C
                    </text>
                  </svg>
                </span>
                <span className="mt-2 text-white font-medium">C</span>
              </div>
            </div>
          </div>
          {/* Databases */}
          <div className="overflow-hidden relative p-5 h-40 bg-gradient-to-br from-purple-900/80 via-purple-800/60 to-purple-700/80 rounded-1xl border-purple-700/40 shadow-2xl transition-transform duration-300 group border hover:scale-105 hover:shadow-purple-500/40">
            <div className="absolute opacity-40 transition-opacity duration-300 pointer-events-none -top-8 -right-8 group-hover:opacity-70">
              <svg width="90" height="90" fill="none" viewBox="0 0 24 24">
                <ellipse
                  cx="12"
                  cy="12"
                  rx="10"
                  ry="10"
                  stroke="#a78bfa"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <h3 className="flex items-center gap-3 mb-5 text-2xl font-bold text-purple-300 tracking-wide">
              <span className="inline-block w-3 h-3 bg-purple-400 rounded-full shadow-lg animate-pulse"></span>
              Databases
            </h3>
            <div className="flex flex-wrap gap-4 mt-2">
              <div className="flex flex-col items-center transition-transform duration-200 group-hover:scale-110">
                <span className="flex items-center justify-center w-10 h-10 text-2xl font-bold text-white bg-gradient-to-tr from-green-400 to-green-600 rounded-full shadow-lg">
                  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                    <ellipse cx="16" cy="16" rx="14" ry="14" fill="#34d399" />
                    <text
                      x="4"
                      y="23"
                      fontSize="12"
                      fill="#222"
                      fontWeight="bold"
                    >
                      MySQL
                    </text>
                  </svg>
                </span>
                <span className="mt-2 text-white font-medium">MySQL</span>
              </div>
              <div className="flex flex-col items-center transition-transform duration-200 group-hover:scale-110">
                <span className="flex items-center justify-center w-10 h-10 text-2xl font-bold text-white bg-gradient-to-tr from-blue-300 to-blue-500 rounded-full shadow-lg">
                  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                    <ellipse cx="16" cy="16" rx="14" ry="14" fill="#60a5fa" />
                    <text
                      x="7"
                      y="23"
                      fontSize="12"
                      fill="#fff"
                      fontWeight="bold"
                    >
                      SQL
                    </text>
                  </svg>
                </span>
                <span className="mt-2 text-white font-medium">SQL</span>
              </div>
            </div>
          </div>
          {/* Libraries & Frameworks */}
          <div className="overflow-hidden relative p-5 h-40 bg-gradient-to-br from-pink-900/80 via-pink-800/60 to-pink-700/80 rounded-1xl border-pink-700/40 shadow-2xl transition-transform duration-300 group border hover:scale-105 hover:shadow-pink-400/40">
            <div className="absolute opacity-40 transition-opacity duration-300 pointer-events-none -top-8 -right-8 group-hover:opacity-70">
              <svg width="90" height="90" fill="none" viewBox="0 0 24 24">
                <rect
                  x="4"
                  y="4"
                  width="16"
                  height="16"
                  rx="4"
                  stroke="#f472b6"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <h3 className="flex items-center gap-3 mb-5 text-2xl font-bold text-pink-300 tracking-wide">
              <span className="inline-block w-3 h-3 bg-pink-400 rounded-full shadow-lg animate-pulse"></span>
              Libraries & Frameworks
            </h3>
            <div className="flex flex-wrap gap-4 mt-2">
              {[
                {
                  name: "Numpy",
                  color: "from-yellow-300 to-yellow-500",
                  icon: "🔢",
                },
                {
                  name: "Pandas",
                  color: "from-green-300 to-green-500",
                  icon: "🐼",
                },
                {
                  name: "React.js",
                  color: "from-blue-300 to-blue-500",
                  icon: "⚛️",
                },
                {
                  name: "Next.js",
                  color: "from-gray-300 to-gray-500",
                  icon: "⏭️",
                },
              ].map((lib) => (
                <div
                  key={lib.name}
                  className="flex flex-col items-center transition-transform duration-200 group-hover:scale-110"
                >
                  <span
                    className={`w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr ${lib.color} shadow-lg text-2xl`}
                  >
                    <span className="text-xl">{lib.icon}</span>
                  </span>
                  <span className="mt-2 text-white font-medium">
                    {lib.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Tools & Platforms */}
          <div className="overflow-hidden relative p-5 h-40 bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-700/80 rounded-1xl border-gray-700/40 shadow-2xl transition-transform duration-300 group border hover:scale-105 hover:shadow-gray-400/40">
            <div className="absolute opacity-40 transition-opacity duration-300 pointer-events-none -top-8 -right-8 group-hover:opacity-70">
              <svg width="90" height="90" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="#60a5fa"
                  strokeWidth="2"
                  d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 9V7a5 5 0 1110 0v2"
                />
              </svg>
            </div>
            <h3 className="flex items-center gap-3 mb-5 text-2xl font-bold text-gray-300 tracking-wide">
              <span className="inline-block w-3 h-3 bg-gray-400 rounded-full shadow-lg animate-pulse"></span>
              Tools & Platforms
            </h3>
            <div className="flex flex-wrap gap-4 mt-2">
              {[
                {
                  name: "Git",
                  color: "from-orange-400 to-orange-600",
                  icon: "🐙",
                },
                {
                  name: "Hostinger",
                  color: "from-green-400 to-green-600",
                  icon: "🌐",
                },
                {
                  name: "VS Code",
                  color: "from-blue-400 to-blue-600",
                  icon: "💻",
                },
                {
                  name: "JN",
                  color: "from-purple-400 to-purple-600",
                  icon: "📒",
                },
                {
                  name: "Basics of AWS",
                  color: "from-gray-400 to-gray-600",
                  icon: "☁️",
                },
              ].map((tool) => (
                <div
                  key={tool.name}
                  className="flex flex-col items-center transition-transform duration-200 group-hover:scale-110"
                >
                  <span
                    className={`w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr ${tool.color} shadow-lg text-2xl`}
                  >
                    <span className="text-xl">{tool.icon}</span>
                  </span>
                  <span className="mt-2 text-white font-medium text-center">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Decorative animated background blobs */}
        <div className="overflow-hidden absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
          <div className="absolute left-1/4 top-0 w-72 h-72 bg-gradient-to-br from-blue-500/30 via-purple-400/20 to-pink-400/30 rounded-full blur-3xl animate-blob1"></div>
          <div className="absolute right-1/4 bottom-0 w-72 h-72 bg-gradient-to-br from-pink-400/30 via-yellow-300/20 to-blue-400/30 rounded-full blur-3xl animate-blob2"></div>
        </div>
        <style jsx>{`
          @keyframes gradient-x {
            0%,
            100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 6s ease-in-out infinite;
          }
          @keyframes blob1 {
            0%,
            100% {
              transform: translateY(0) scale(1);
            }
            50% {
              transform: translateY(-30px) scale(1.1);
            }
          }
          .animate-blob1 {
            animation: blob1 8s ease-in-out infinite;
          }
          @keyframes blob2 {
            0%,
            100% {
              transform: translateY(0) scale(1);
            }
            50% {
              transform: translateY(30px) scale(1.1);
            }
          }
          .animate-blob2 {
            animation: blob2 10s ease-in-out infinite;
          }
        `}</style>
      </section>
      <section className="relative px-4 mx-auto py-16 max-w-4xl">
        <h2 className="mb-10 text-4xl font-extrabold text-center text-blue-500">
          <span className="inline-block align-middle">🌐</span> Online Presence
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center transition-transform duration-200 group hover:scale-110"
          >
            <span className="flex items-center justify-center mb-2 w-16 h-16 bg-gradient-to-tr from-gray-800 to-gray-600 rounded-full shadow-lg">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.42-.012 2.75 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"
                  fill="#fff"
                />
              </svg>
            </span>
            <span className="text-white font-medium transition-colors group-hover:text-blue-400">
              GitHub
            </span>
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center transition-transform duration-200 group hover:scale-110"
          >
            <span className="flex items-center justify-center mb-2 w-16 h-16 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-full shadow-lg">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" rx="4" fill="#2563eb" />
                <path
                  d="M7.75 8.5A1.25 1.25 0 1 1 7.75 6a1.25 1.25 0 0 1 0 2.5zm.13 2.25H6.12V18h1.76v-7.25zm3.13 0h-1.75V18h1.75v-3.5c0-.97.78-1.75 1.75-1.75s1.75.78 1.75 1.75V18h1.75v-3.75c0-2.07-1.68-3.75-3.75-3.75s-3.75 1.68-3.75 3.75V18h1.75v-7.25z"
                  fill="#fff"
                />
              </svg>
            </span>
            <span className="text-white font-medium transition-colors group-hover:text-blue-400">
              LinkedIn
            </span>
          </a>
          {/* LeetCode */}
          <a
            href="https://leetcode.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center transition-transform duration-200 group hover:scale-110"
          >
            <span className="flex items-center justify-center mb-2 w-16 h-16 bg-gradient-to-tr from-yellow-400 to-yellow-600 rounded-full shadow-lg">
              <svg width="36" height="36" viewBox="0 0 50 50" fill="none">
                <path
                  d="M25 4C13.42 4 4 13.42 4 25s9.42 21 21 21 21-9.42 21-21S36.58 4 25 4zm0 38c-9.37 0-17-7.63-17-17S15.63 8 25 8s17 7.63 17 17-7.63 17-17 17z"
                  fill="#fff"
                />
                <path
                  d="M32.5 32.5l-10-10 10-10"
                  stroke="#f59e0b"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-white font-medium transition-colors group-hover:text-yellow-400">
              LeetCode
            </span>
          </a>
          {/* HackerRank */}
          <a
            href="https://www.hackerrank.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center transition-transform duration-200 group hover:scale-110"
          >
            <span className="flex items-center justify-center mb-2 w-16 h-16 bg-gradient-to-tr from-green-500 to-green-700 rounded-full shadow-lg">
              <svg width="36" height="36" viewBox="0 0 50 50" fill="none">
                <rect
                  x="8"
                  y="8"
                  width="34"
                  height="34"
                  rx="8"
                  fill="#10b981"
                />
                <path
                  d="M20 16v18M30 16v18M16 20h18M16 30h18"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="text-white font-medium transition-colors group-hover:text-green-300">
              HackerRank
            </span>
          </a>
          {/* CodeChef */}
          <a
            href="https://www.codechef.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center transition-transform duration-200 group hover:scale-110"
          >
            <span className="flex items-center justify-center mb-2 w-16 h-16 bg-gradient-to-tr from-gray-700 to-yellow-800 rounded-full shadow-lg">
              <svg width="36" height="36" viewBox="0 0 50 50" fill="none">
                <ellipse cx="25" cy="25" rx="21" ry="21" fill="#fff" />
                <path
                  d="M15 35c0-5 5-9 10-9s10 4 10 9"
                  stroke="#a16207"
                  strokeWidth="2"
                  fill="none"
                />
                <ellipse cx="20" cy="23" rx="2" ry="3" fill="#a16207" />
                <ellipse cx="30" cy="23" rx="2" ry="3" fill="#a16207" />
                <rect
                  x="22"
                  y="32"
                  width="6"
                  height="2"
                  rx="1"
                  fill="#a16207"
                />
              </svg>
            </span>
            <span className="text-white font-medium transition-colors group-hover:text-yellow-400">
              CodeChef
            </span>
          </a>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
