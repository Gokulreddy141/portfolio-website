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
      <main className="flex min-h-screen flex-col items-center">
        
        {/* 1. Hero Section */}
        <section className="flex flex-col items-center justify-center p-8 bg-gray-50 w-full min-h-[70vh]">
          <div className="max-w-5xl flex flex-col-reverse md:flex-row items-center justify-between gap-12 text-center md:text-left">
            
            {/* Text Content */}
            <div className="max-w-2xl">
              <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                Gokul Padmanabha Reddy Chennuru
              </h1>
              
              <h2 className="mt-6 text-2xl font-semibold text-blue-600">
                Full-Stack Developer & Data Scientist
              </h2>

              {/* Location & Work Status Tags */}
              <div className="mt-3 flex flex-wrap items-center justify-center md:justify-start gap-4 text-gray-500 font-medium text-sm">
                <div className="flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-400">
                    <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
                  </svg>
                  Based in the UK
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-50 text-green-700 border border-green-100">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-3.946-4.656a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0l-2.25-2.25a.75.75 0 011.06-1.06l1.72 1.72 3.72-3.72a.75.75 0 011.06 0z" clipRule="evenodd" />
                  </svg>
                  Right to Work (No Sponsorship Required)
                </div>
              </div>
              
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Bridging the gap between robust software engineering and advanced artificial intelligence. 
                Currently pursuing an MSc in Data Science and AI at Sheffield Hallam University.
              </p>
              
              {/* Call to Action Buttons & Social Icons */}
              <div className="mt-10 flex flex-wrap items-center justify-center md:justify-start gap-6">
                
                <div className="flex gap-4">
                  <Link 
                    href="#projects" 
                    className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
                  >
                    View My Work
                  </Link>
                  
                  {/* Download Resume Button */}
                  <a 
                    href="/resume.pdf"  // Ensure this matches the exact filename in your 'public' folder
                    download
                    className="rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors flex items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v6.879l2.22-2.22a.75.75 0 111.06 1.06l-3.5 3.5a.75.75 0 01-1.06 0l-3.5-3.5a.75.75 0 111.06-1.06l2.22 2.22V3.75A.75.75 0 0110 3z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M3 14.75a.75.75 0 01.75-.75h12.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                    </svg>
                    Resume
                  </a>
                </div>

                <div className="flex items-center gap-5 ml-2 border-l pl-6 border-gray-200">
                  <Link href="https://github.com/Gokulreddy141" target="_blank" className="text-gray-500 hover:text-gray-900 transition-colors">
                    <span className="sr-only">GitHub</span>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
                  </Link>

                  <Link href="https://www.linkedin.com/in/gokulreddy141/" target="_blank" className="text-gray-500 hover:text-blue-700 transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </Link>

                  <Link href="mailto:gokulreddy141@gmail.com" className="text-gray-500 hover:text-blue-500 transition-colors">
                    <span className="sr-only">Email</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" /><path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" /></svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Profile Photo */}
            <div className="flex-shrink-0">
              <Image
                src="/profile.jpeg" 
                alt="Gokul Padmanabha Reddy Chennuru"
                width={280}
                height={280}
                className="rounded-full shadow-xl border-4 border-white object-cover aspect-square"
                priority 
              />
            </div>

          </div>
        </section>

        {/* Portfolio Components */}
        <Skills />
        <Experience />
        <Projects />
        <Education />
        
      </main>
      
      <Footer />
    </>
  );
}