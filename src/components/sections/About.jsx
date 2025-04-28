import React from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import { Reveal } from '../Reveal';
export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <Reveal>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          {/* Container for Description */}
          <div className="rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I am a passionate web developer with a keen interest in creating
              beautiful and functional websites. I have experience in HTML, CSS,
              JavaScript, and React, Tailwind and I am always eager to learn new
              technologies and improve my skills.
            </p>
            {/* Skills Section */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-center">Stacks</h3>

                <div className="flex flex-col items-center gap-6">
                  {/* First Row - HTML, CSS, JS */}
                  <div className="flex justify-center items-center gap-6">
                    {/* HTML */}
                    <Reveal delay={0.1}>
                      <div className="relative group">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                          className="h-[60px] md:h-[85px] transition-all duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-2 hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]"
                          alt="HTML5"
                        />
                        <span
                          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2
                           bg-black text-white text-xs rounded py-1 px-2 opacity-0 
                           group-hover:opacity-100 transition-all whitespace-nowrap"
                        >
                          HTML5
                        </span>
                      </div>
                    </Reveal>

                    {/* CSS */}
                    <Reveal delay={0.3}>
                      <div className="relative group">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                          className="h-[60px] md:h-[85px] transition-all duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-2 hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]"
                          alt="CSS3"
                        />
                        <span
                          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2
                           bg-black text-white text-xs rounded py-1 px-2 opacity-0 
                           group-hover:opacity-100 transition-all whitespace-nowrap"
                        >
                          CSS3
                        </span>
                      </div>
                    </Reveal>

                    {/* JavaScript */}
                    <Reveal delay={0.5}>
                      <div className="relative group">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                          className="h-[60px] md:h-[85px] transition-all duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-2 hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]"
                          alt="JavaScript"
                        />
                        <span
                          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2
                           bg-black text-white text-xs rounded py-1 px-2 opacity-0 
                           group-hover:opacity-100 transition-all whitespace-nowrap"
                        >
                          JavaScript
                        </span>
                      </div>
                    </Reveal>
                  </div>

                  {/* Second Row - React, Tailwind, Firebase */}
                  <div className="flex justify-center items-center gap-6">
                    {/* React */}
                    <Reveal delay={0.7}>
                      <div className="relative group">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                          className="h-[60px] md:h-[85px] transition-all duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-2 hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]"
                          alt="React"
                        />
                        <span
                          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2
                           bg-black text-white text-xs rounded py-1 px-2 opacity-0 
                           group-hover:opacity-100 transition-all whitespace-nowrap"
                        >
                          React
                        </span>
                      </div>
                    </Reveal>

                    {/* Tailwind */}
                    <Reveal delay={0.9}>
                      <div className="relative group">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                          className="h-[60px] md:h-[85px] transition-all duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-2 hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]"
                          alt="TailwindCSS"
                        />
                        <span
                          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2
                           bg-black text-white text-xs rounded py-1 px-2 opacity-0 
                           group-hover:opacity-100 transition-all whitespace-nowrap"
                        >
                          TailwindCSS
                        </span>
                      </div>
                    </Reveal>
                    {/* Firebase */}
                    <Reveal delay={1}>
                      <div className="relative group">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
                          className="h-[60px] md:h-[85px] transition-all duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-2 hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]"
                          alt="Firebase"
                        />
                        <span
                          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2
                           bg-black text-white text-xs rounded py-1 px-2 opacity-0 
                           group-hover:opacity-100 transition-all whitespace-nowrap"
                        >
                          Firebase
                        </span>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.S in Information Technology</strong> - Our Lady Of
                  Fatima University (2025)
                </li>
                <li>
                  Web development, Networking, Software development, Database
                  management, and more...
                </li>
                <li>
                  <strong>Senior HighSchool</strong> - Sumulong Memorial High
                  School (2016)
                </li>
                <li>
                  <strong>High School</strong> - Sumulong Memorial High School
                  (2012)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💻 Work Experience</h3>
              <div className="space-y-4 text-gray-300 ">
                <div>
                  <h4 className="font-semibold">
                    Customer Service Representative at Alorica (2021-2022)
                  </h4>
                  <p>Assisted inquiries and resolve customer issues.</p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Technical Support Tier 2 at Sutherland Global Inc
                    (2022-2023)
                  </h4>
                  <p>
                    Handles detailed troubleshooting and works with engineering
                    team to resolve issues.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Internship: FrontEnd Developer at Spark Soft Solution Inc
                    (2025)
                  </h4>
                  <p>
                    Added interactivity to the website. And collaborate with the
                    backend developer to create a full stack application.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
