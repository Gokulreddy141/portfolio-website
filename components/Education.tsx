import { portfolioData } from '../data/content';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white w-full">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-16">Academic Foundation</h2>
        <div className="space-y-10">
          {portfolioData.education.map((edu) => (
            <div key={edu.id} className="relative bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 text-left hover:bg-blue-50/30 transition-colors group">
              <div className="absolute left-0 top-10 bottom-10 w-1.5 bg-blue-600 rounded-r-full scale-y-0 group-hover:scale-y-100 transition-transform origin-center"></div>
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{edu.degree}</h3>
                  <p className="text-blue-600 text-lg font-semibold mb-4">{edu.institution}</p>
                  <p className="text-slate-600 leading-relaxed text-sm max-w-2xl">{edu.description}</p>
                </div>
                <div className="text-left md:text-right shrink-0">
                  <span className="inline-block px-4 py-1.5 bg-white rounded-xl text-sm font-bold text-slate-700 shadow-sm border border-slate-200">
                    {edu.duration}
                  </span>
                  <p className="mt-3 text-slate-400 text-sm font-medium">{edu.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}