import { motion } from 'framer-motion';
import { Project } from './types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer"
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      layoutId={`project-${project.title}`}
    >
      <motion.img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;