// components/Skills.tsx
import { portfolioData } from '../data/content';

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-16 bg-white w-full">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8 text-center">
          Technical Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Frontend */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((skill) => (
                <span key={skill} className="bg-white border border-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map((skill) => (
                <span key={skill} className="bg-white border border-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">Cloud & DevOps</h3>
            <div className="flex flex-wrap gap-2">
              {skills.cloudAndDevOps.map((skill) => (
                <span key={skill} className="bg-white border border-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Data Science & AI */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">Data Science & AI</h3>
            <div className="flex flex-wrap gap-2">
              {skills.dataAndAI.map((skill) => (
                <span key={skill} className="bg-white border border-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}