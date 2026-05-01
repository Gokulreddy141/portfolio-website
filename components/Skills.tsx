import { portfolioData } from '../data/content';

export default function Skills() {
  const { skills } = portfolioData;

  const categories = [
    { title: "Frontend", data: skills.frontend, icon: "🎨", color: "from-pink-500 to-rose-500" },
    { title: "Backend", data: skills.backend, icon: "⚙️", color: "from-blue-500 to-indigo-500" },
    { title: "Cloud & DevOps", data: skills.cloudAndDevOps, icon: "☁️", color: "from-cyan-500 to-blue-500" },
    { title: "Data Science & AI", data: skills.dataAndAI, icon: "🤖", color: "from-violet-500 to-purple-500" },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50 w-full">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">Technical Expertise</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <div key={cat.title} className="group bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-2xl mb-6 shadow-lg shadow-blue-500/10`}>
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.data.map((skill) => (
                  <span key={skill} className="bg-slate-50 border border-slate-100 text-slate-600 px-3 py-1 rounded-lg text-xs font-semibold group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-100 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}