// components/Education.tsx
import { portfolioData } from '../data/content';

export default function Education() { // Must be 'export default'
  return (
    <section id="education" className="py-16 bg-white w-full">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
          Education
        </h2>
        <div className="space-y-8">
          {portfolioData.education.map((edu) => (
            <div key={edu.id} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600"></div>
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 pl-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                  <p className="text-lg font-medium text-blue-600 mt-1">{edu.institution}</p>
                </div>
                <div className="mt-2 md:mt-0 text-left md:text-right">
                  <p className="text-sm font-semibold text-gray-600">{edu.duration}</p>
                  <p className="text-sm text-gray-500 mt-1">{edu.location}</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed pl-4 text-sm">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}