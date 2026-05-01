// app/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center bg-white selection:bg-blue-100 selection:text-blue-900">
        
        {/* 1. Hero Section */}
        <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center p-8 overflow-hidden">
          
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white" />
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 transform opacity-40 blur-3xl sm:opacity-50">
            <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
          </div>

          <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-16 text-center md:text-left z-10">
            
            {/* Text Content */}
            <div className="max-w-3xl flex-1">
              
              <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl mb-4">
                Gokul Padmanabha <br className="hidden md:block"/> Reddy Chennuru
              </h1>
              
              <h2 className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 sm:text-3xl">
                Full-Stack Developer & Data Scientist
              </h2>

              {/* Location & Work Status Tags (Moved below the title) */}
              <div className="mt-5 mb-6 flex flex-wrap items-center justify-center md:justify-start gap-3 text-sm font-medium">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 ring-1 ring-inset ring-slate-200">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-slate-500">
                    <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
                  </svg>
                  Based in Sheffield, UK
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-200/50">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-3.946-4.656a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0l-2.25-2.25a.75.75 0 011.06-1.06l1.72 1.72 3.72-3.72a.75.75 0 011.06 0z" clipRule="evenodd" />
                  </svg>
                  Right to Work (No Sponsorship Required)
                </span>
              </div>
              
              <p className="text-lg leading-8 text-slate-600 max-w-2xl mx-auto md:mx-0">
                Bridging the gap between scalable distributed systems and advanced artificial intelligence. 
                Currently elevating my expertise through an MSc in Data Science and AI at Sheffield Hallam University.
              </p>
              
              {/* Call to Action Buttons & Social Icons */}
              <div className="mt-10 flex flex-wrap items-center justify-center md:justify-start gap-6">
                
                <div className="flex gap-4">
                  <Link 
                    href="#projects" 
                    className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/20 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200"
                  >
                    View My Work
                  </Link>
                  
                  {/* Download Resume Button */}
                  <a 
                    href="/resume.pdf"  
                    download
                    className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50 hover:ring-slate-400 transition-all duration-200 flex items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-slate-500">
                      <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v6.879l2.22-2.22a.75.75 0 111.06 1.06l-3.5 3.5a.75.75 0 01-1.06 0l-3.5-3.5a.75.75 0 111.06-1.06l2.22 2.22V3.75A.75.75 0 0110 3z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M3 14.75a.75.75 0 01.75-.75h12.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                    </svg>
                    Resume
                  </a>
                </div>

                {/* Vertical Divider (Desktop only) */}
                <div className="hidden md:block h-8 w-px bg-slate-200 mx-2"></div>

                <div className="flex items-center gap-5">
                  <Link href="https://github.com/Gokulreddy141" target="_blank" className="text-slate-400 hover:text-slate-900 transition-colors">
                    <span className="sr-only">GitHub</span>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
                  </Link>

                  <Link href="https://www.linkedin.com/in/gokulreddy141/" target="_blank" className="text-slate-400 hover:text-[#0A66C2] transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </Link>

                  <Link href="mailto:gokulreddy141@gmail.com" className="text-slate-400 hover:text-blue-500 transition-colors">
                    <span className="sr-only">Email</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" /><path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" /></svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Profile Photo */}
            <div className="flex-shrink-0 relative">
              {/* Soft glow behind the image */}
              <div className="absolute inset-0 bg-blue-400 rounded-full blur-2xl opacity-20 transform scale-110"></div>
              <Image
                src="/profile.jpeg" 
                alt="Gokul Padmanabha Reddy Chennuru"
                width={300}
                height={300}
                className="relative rounded-full shadow-2xl border-4 border-white object-cover aspect-square z-10"
                priority 
              />
            </div>

          </div>
        </section>

        {/* Portfolio Components */}
        <div className="w-full bg-slate-50">
          <Skills />
        </div>
        <Experience />
        <div className="w-full bg-slate-50">
          <Projects />
        </div>
        <Education />
        
      </main>
      
      <Footer />
    </>
  );
}