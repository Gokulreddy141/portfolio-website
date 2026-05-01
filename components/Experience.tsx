// components/Experience.tsx
import { portfolioData } from '../data/content';

export default function Experience() {
  const technicalExperience = portfolioData.experience.filter((e: any) => e.type === "technical");
  const ukExperience = portfolioData.experience.filter((e: any) => e.type === "uk-work");

  const renderExpCard = (exp: any) => (
    <div key={exp.id} className="border-l-2 border-blue-600 pl-6 relative">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
      <div className="mb-1 flex flex-col md:flex-row md:items-center justify-between">
        <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
        <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
          {exp.duration}
        </span>
      </div>
      <p className="text-lg font-medium text-gray-700">{exp.company} — <span className="text-gray-500 font-normal">{exp.location}</span></p>
      <p className="mt-3 text-gray-600 leading-relaxed text-sm">
        {exp.description}
      </p>
    </div>
  );

  return (
    <section id="experience" className="py-16 bg-gray-50 w-full">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Technical Experience Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10">
            Software Engineering Experience
          </h2>
          <div className="space-y-12">
            {technicalExperience.map(renderExpCard)}
          </div>
        </div>

        {/* UK Part-Time Section */}
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-800 mb-8 flex flex-col sm:flex-row sm:items-center gap-2">
            Professional Experience in the UK
            <span className="text-sm font-normal text-gray-500 sm:ml-2">(Concurrent with MSc Studies)</span>
          </h2>
          <div className="space-y-10 opacity-90">
            {ukExperience.map(renderExpCard)}
          </div>
        </div>

      </div>
    </section>
  );
}