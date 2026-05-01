// data/content.ts

export const portfolioData = {
  about: {
    title: "About Me",
    description: "I am a Full-Stack Developer and Data Scientist with a proven track record of building robust web applications and integrating advanced AI capabilities. I hold a B.E. in Computer Science and Engineering and am currently advancing my expertise through an MSc in Data Science and Artificial Intelligence. I am passionate about bridging the gap between scalable software architecture and intelligent systems."
  },
  experience: [
    {
      id: 1,
      role: "Associate Software Engineer",
      company: "L&T Technology Services",
      location: "Mumbai & Mysuru, India",
      duration: "Sept 2024 - Sept 2025",
      type: "technical",
      description: "Led a 19-member development team to build 'Unified Dev Suite,' an enterprise SaaS/CaaS platform utilizing a single-spa micro-frontend architecture. Architected a scalable Node.js backend with 190+ reusable REST APIs routed through an APISIX gateway. Deployed on the Azure Marketplace and delivered custom integrations for high-profile clients including Nokia and Patient Point."
    },
    {
      id: 2,
      role: "Team Member",
      company: "Popeyes Louisiana Kitchen",
      location: "Sheffield, UK",
      duration: "March 2026 - Present",
      type: "uk-work",
      description: "Delivering high-quality customer service in a fast-paced environment, managing transactions, and maintaining operational excellence while pursuing full-time postgraduate studies."
    },
    {
      id: 3,
      role: "Team Member / Sandwich Artist",
      company: "Subway",
      location: "Sheffield, UK",
      duration: "Oct 2025 - March 2026",
      type: "uk-work",
      description: "Managed food preparation and customer service operations, maintaining strict health and safety standards in a high-volume retail setting."
    }
  ],
  education: [
    {
      id: 1,
      degree: "MSc in Data Science and Artificial Intelligence",
      institution: "Sheffield Hallam University",
      location: "Sheffield, UK",
      duration: "Sept 2025 - Present",
      description: "Specializing in advanced machine learning, neural networks, and big data analytics. Final year project focuses on building an AI-Powered Interview Integrity Platform utilizing 29+ real-time detection algorithms."
    },
    {
      id: 2,
      degree: "B.E. in Computer Science and Engineering",
      institution: "Chennai Institute of Technology",
      location: "Chennai, India",
      duration: "Aug 2020 - May 2024",
      description: "Graduated with a strong foundation in scalable software engineering, full-stack web development, and database management."
    }
  ],
  projects: [
    {
      id: 1,
      title: "AI-Powered Interview Integrity Platform",
      category: "AI & Data Science",
      techStack: ["Next.js 14", "React 19", "TypeScript", "MediaPipe", "TensorFlow.js", "WebRTC", "Gemini 2.0 Flash"],
      description: "Engineered an advanced proctoring engine utilizing 29+ AI algorithms. Integrated MediaPipe and TensorFlow.js for real-time gaze, gesture, and object detection, alongside Silero VAD for audio spoofing analysis. Architected a behavioral analytics and integrity scoring system powered by Gemini 2.0 Flash and custom ML models.",
      githubUrl: "https://github.com/Gokulreddy141/SHU-AI-University-Project"
    },
    {
      id: 2,
      title: "Enterprise Cloud E-Commerce",
      category: "Full-Stack & Architecture",
      techStack: ["Next.js", ".NET 8", "Node.js", "PostgreSQL", "Redis", "Micro-Frontends"],
      description: "Developed a production-grade, distributed e-commerce platform utilizing a polyglot microservices architecture. Designed the system with a .NET 8/Neon PostgreSQL Catalog API for strict financial logic, a Node.js/Upstash Redis Cart API for high-speed caching, and decoupled the checkout process into a standalone React micro-frontend.",
      githubUrl: "https://github.com/Gokulreddy141/next-storefront"
    },
    {
      id: 3,
      title: "Real-Time Healthcare Compliance ETL Pipeline",
      category: "Full-Stack & Architecture",
      techStack: ["Apache Kafka", "PySpark", "MongoDB", "FastAPI", "Docker"],
      description: "Architected a distributed streaming data pipeline for ingesting and anonymizing high-velocity healthcare records. Leveraged Kafka for real-time data ingestion, PySpark Structured Streaming for on-the-fly PII redaction, and MongoDB to serve compliant records via a FastAPI backend.",
      githubUrl: "https://github.com/Gokulreddy141/healthcare-data-pipeline"
    },
    {
      id: 4,
      title: "AI Video Summarizer",
      category: "AI & Data Science",
      techStack: ["Next.js", "Node.js", "Python", "Redis", "Llama 3.1 (Groq)", "Docker"],
      description: "Built an enterprise-grade, event-driven application that bypasses YouTube subtitle restrictions to generate concise video summaries. Orchestrated a microservices architecture using a Redis message queue to handle asynchronous video processing via a Python worker, preventing HTTP timeouts during LLM inference.",
      githubUrl: "https://github.com/Gokulreddy141/ai-video-summarizer"
    },
    {
      id: 5,
      title: "Event-Driven .NET Microservices Architecture",
      category: "Full-Stack & Architecture",
      techStack: ["C# .NET 8", "Kubernetes", "RabbitMQ", "gRPC", "Ocelot Gateway"],
      description: "Designed a highly performant microservices ecosystem deployed to a local Kubernetes cluster. Implemented asynchronous messaging with RabbitMQ, synchronous data hydration via gRPC, and an Ocelot API Gateway featuring JWT authentication, rate limiting, and response caching.",
      githubUrl: "https://github.com/Gokulreddy141/MicroServices-CSharp"
    },
    {
      id: 6,
      title: "Multimodal Customer Intelligence Engine",
      category: "AI & Data Science",
      techStack: ["Python", "FastAPI", "TensorFlow/Keras", "NLP", "Scikit-Learn"],
      description: "Engineered a dual-branch neural network to predict e-commerce customer churn. Utilized the Keras Functional API to simultaneously process structured logistics data and unstructured semantic text reviews via TF-IDF vectorization. Deployed the model as a production-ready REST API using FastAPI.",
      githubUrl: "https://github.com/Gokulreddy141/Customer_Intelligence_Engine"
    },
    {
      id: 7,
      title: "Music Recommendation Engine & EDA Report",
      category: "AI & Data Science",
      techStack: ["Python (OOP)", "R", "Tkinter", "Data Visualization", "Machine Learning"],
      description: "Developed a Python-based Object-Oriented Music Recommendation Engine using Tkinter, featuring multiple distance metrics (Euclidean, Cosine, Pearson) to calculate artist and track similarities. Authored a comprehensive Exploratory Data Analysis report in R using tidyverse to uncover acoustic trends.",
      githubUrl: "https://github.com/Gokulreddy141/SHU-DS-Assignment"
    },
    {
      id: 8,
      title: "Data Analytics & Business Intelligence",
      category: "AI & Data Science",
      techStack: ["SQL", "Tableau", "PostgreSQL", "Data Engineering"],
      description: "A collection of business intelligence projects. Highlights include designing complex PostgreSQL queries for an IPL auction strategy to calculate advanced cricket metrics, and building interactive Tableau dashboards for a retail bike shop to track sales volume and regional performance.",
      githubUrl: "https://github.com/Gokulreddy141/DataScience"
    }
  ],
  skills: {
    frontend: ["React 19", "Next.js", "Angular", "TypeScript", "Micro-Frontends (single-spa)", "Tailwind CSS", "Vite"],
    backend: ["Node.js", "Express.js", "C# .NET 8 (ASP.NET Core)", "FastAPI", "gRPC", "RESTful APIs", "MongoDB", "PostgreSQL", "Redis"],
    cloudAndDevOps: ["Docker", "Kubernetes", "AWS (EC2, S3, Lambda)", "Azure", "CI/CD (GitHub Actions)", "Apache Kafka", "RabbitMQ", "APISIX", "Vercel"],
    dataAndAI: ["Python", "R", "PySpark", "Machine Learning (TensorFlow, Keras, Scikit-Learn)", "Computer Vision (MediaPipe, OpenCV)", "NLP", "LLMs (Gemini 2.0, Llama 3.1)", "Data Engineering (ETL Pipelines)", "SQL", "Pandas", "NumPy", "Data Visualization (Tableau)", "Neural Networks"]
  }
};