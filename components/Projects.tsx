import { portfolioData } from '../data/content';

export default function Projects() {
  const fullStackProjects = portfolioData.projects.filter(p => p.category === "Full-Stack & Architecture");
  const aiProjects = portfolioData.projects.filter(p => p.category === "AI & Data Science");

  const GitHubIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );

  const renderProjectCard = (project: any) => (
    <div 
      key={project.id} 
      className="group flex flex-col h-full bg-white rounded-[2rem] border border-slate-200 p-8 shadow-sm hover:shadow-2xl hover:border-blue-200 transition-all duration-300 relative overflow-hidden"
    >
      {/* Subtle hover accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech: string, index: number) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider rounded-lg border border-blue-100"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-slate-600 leading-relaxed text-sm">
          {project.description}
        </p>
      </div>
      
      {project.githubUrl && (
        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest italic">Open Source</span>
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-900 transition-all hover:scale-110"
            title="View Source on GitHub"
          >
            <span className="sr-only">GitHub</span>
            <GitHubIcon />
          </a>
        </div>
      )}
    </div>
  );

  return (
    <section id="projects" className="py-24 bg-white w-full">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Full-Stack Section */}
        <div className="mb-24">
          <div className="mb-12">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
              Full-Stack & Architecture
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl">Production-grade distributed systems and modern web applications.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {fullStackProjects.map(renderProjectCard)}
          </div>
        </div>

        {/* AI & Data Science Section */}
        <div>
          <div className="mb-12">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
              AI & Data Science
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl">Machine learning models, computer vision, and complex data analysis.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {aiProjects.map(renderProjectCard)}
          </div>
        </div>

      </div>
    </section>
  );
}