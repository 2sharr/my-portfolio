import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { Project } from './types';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Tourism Management System",
      description: "A comprehensive tourism management system built with Python, featuring booking management and tour planning capabilities.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
      technologies: ["Python", "SQLite", "Tkinter"],
      features: [
        "User authentication and authorization",
        "Tour package management",
        "Booking system",
        "Payment integration"
      ]
    },
    {
      title: "Educational Courses Website",
      description: "An interactive educational platform for online courses using modern web technologies.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
      technologies: ["JavaScript", "PHP", "CSS", "MySQL"],
      features: [
        "Course catalog",
        "User progress tracking",
        "Interactive quizzes",
        "Certificate generation"
      ]
    },
    {
      title: "YouTube Video Summarizer",
      description: "AI-powered tool that generates concise summaries of YouTube videos using Python.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113",
      technologies: ["Python", "YouTube API", "Natural Language Processing"],
      features: [
        "Video transcription",
        "Text summarization",
        "Multiple language support",
        "Exportable summaries"
      ]
    },
    {
      title: "Coding Assistant Chatbot",
      description: "An intelligent chatbot that helps developers with coding queries and solutions.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      technologies: ["JavaScript", "HTML", "CSS", "MongoDB"],
      features: [
        "Real-time code suggestions",
        "Language syntax support",
        "Code snippet library",
        "Personalized responses"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial={{ y: -50 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
        >
          Featured <span className="text-purple-600">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        <ProjectModal
          project={selectedProject!}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </motion.div>
    </section>
  );
};

export default Projects;