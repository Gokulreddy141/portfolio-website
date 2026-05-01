import { portfolioData } from '../data/content';

export default function Experience() {
  const technicalExperience = portfolioData.experience.filter((e: any) => e.type === "technical");
  const ukExperience = portfolioData.experience.filter((e: any) => e.type === "uk-work");

  const renderExpCard = (exp: any) => (
    <div key={exp.id} className="relative pl-10 pb-12 last:pb-0 group">
      {/* Timeline Line */}
      <div className="absolute left-[11px] top-2 bottom-0 w-0.5 bg-slate-200 group-last:hidden"></div>
      {/* Timeline Dot */}
      <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-white border-2 border-blue-600 shadow-[0_0_0_4px_rgba(37,99,235,0.1)] z-10 group-hover:scale-125 transition-transform"></div>
      
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
            <p className="text-blue-600 font-semibold">{exp.company}</p>
          </div>
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold bg-slate-100 text-slate-700">
            {exp.duration}
          </span>
        </div>
        <p className="text-slate-500 text-sm mb-4 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          {exp.location}
        </p>
        <p className="text-slate-600 leading-relaxed text-sm bg-slate-50 p-4 rounded-2xl border border-slate-100">
          {exp.description}
        </p>
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-24 bg-white w-full">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Header */}
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl sticky top-24">
              Professional <br/> Journey
            </h2>
            <p className="mt-4 text-slate-500 leading-relaxed">
              A blend of core software engineering and adaptable professional roles in the UK.
            </p>
          </div>

          {/* Timeline Content */}
          <div className="lg:col-span-8">
            <div className="mb-16">
              <h4 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-8 px-2">Engineering Roles</h4>
              {technicalExperience.map(renderExpCard)}
            </div>
            
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-8 px-2">UK Concurrent Roles</h4>
              <div className="opacity-80">
                {ukExperience.map(renderExpCard)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}