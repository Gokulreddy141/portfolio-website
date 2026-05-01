// components/Projects.tsx
import { portfolioData } from '../data/content';

export default function Projects() {
  const fullStackProjects = portfolioData.projects.filter(p => p.category === "Full-Stack & Architecture");
  const aiProjects = portfolioData.projects.filter(p => p.category === "AI & Data Science");

  // Reusable GitHub Icon SVG
  const GitHubIcon = () => (
    <svg 
      viewBox="0 0 24 24" 
      aria-hidden="true" 
      className="h-6 w-6 fill-current"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );

  const renderProjectCard = (project: any) => (
    <div 
      key={project.id} 
      className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full group"
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {project.title}
      </h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech: string, index: number) => (
          <span 
            key={index} 
            className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
          >
            {tech}
          </span>
        ))}
      </div>
      <p className="text-gray-600 leading-relaxed text-sm flex-grow">
        {project.description}
      </p>
      
      {/* GitHub Link Section with Icon */}
      {project.githubUrl && (
        <div className="mt-6 pt-4 border-t border-gray-200 mt-auto flex justify-end">
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 transition-colors"
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
    <section id="projects" className="py-16 bg-white w-full">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Full-Stack Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-2 border-b-2 border-gray-100 pb-4">
            Full-Stack & Architecture
          </h2>
          <p className="text-gray-500 mb-8">Production-grade distributed systems and modern web applications.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fullStackProjects.map(renderProjectCard)}
          </div>
        </div>

        {/* AI & Data Science Section */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-2 border-b-2 border-gray-100 pb-4">
            AI & Data Science
          </h2>
          <p className="text-gray-500 mb-8">Machine learning models, computer vision, and complex data analysis.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiProjects.map(renderProjectCard)}
          </div>
        </div>

      </div>
    </section>
  );
}