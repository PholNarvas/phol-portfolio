import React from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import { Reveal } from '../Reveal';
export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <Reveal>
        {/* Projects Section */}
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          {/* Container grid for all of the project */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(50,30,246,0.1)] transition-all">
              <img src="/images/GymProject.jpg" alt="Gym Project" />
              <h3 className="text-xl font-bold mb-2 mt-[10px]">
                Gym Management System
              </h3>
              <p className="text-gray-400 mb-4">
                User Accounts and Role-Based Access: Members can create personal
                profiles, track progress, and sign up for classes, while staff
                can manage memberships, payments, and attendance based on their
                roles.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['React', 'FireBase', 'JavaScript', 'Tailwind'].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-amber-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              {/*Modal*/}
              <div className="hidden">
                <a> View Project →</a>
              </div>
            </div>
            {/* Second Project */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(50,30,246,0.1)] transition-all">
              <img
                src="/images/LNDProject.jpg"
                className="h-[205px] w-full"
                alt="Gym Project"
              />
              <h3 className="text-xl font-bold mb-2 mt-[10px]">
                Learning And Development (L&D) Platform
              </h3>
              <p className="text-gray-400 mb-4">
                User Accounts and Role-Based Access: Members can create personal
                profiles, track progress, and sign up for classes, while staff
                can manage memberships, payments, and attendance based on their
                roles.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['React', 'JavaScript', 'Tailwind'].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-amber-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {/* Third Project */}

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(50,30,246,0.1)] transition-all">
              <img src="/images/Rock-XL.png" alt="Gym Project" />
              <h3 className="text-xl font-bold mb-2 mt-[10px]">
                Rock Paper Scissors Game
              </h3>
              <p className="text-gray-400 mb-4">
                Classic game of Rock Paper Scissors, where you can challenge
                your friends or play against the computer! This fun and
                interactive game brings the timeless hand game to life in a
                digital format.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['HTML', 'CSS', 'JavaScript'].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-amber-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {/* Fourth Project */}

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(50,30,246,0.1)] transition-all">
              <img src="/images/TodoList-XL.png" alt="Gym Project" />
              <h3 className="text-xl font-bold mb-2 mt-[10px]">
                To-Do List Application
              </h3>
              <p className="text-gray-400 mb-4">
                allows users to organize and manage their tasks efficiently.
                Designed with user experience in mind, it provides an intuitive
                interface where users can add, edit, and remove tasks
                effortlessly.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['HTML', 'CSS', 'JavaScript'].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-amber-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
