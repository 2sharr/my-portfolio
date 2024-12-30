import React from 'react';

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, icon, skills, color }) => {
  return (
    <div className="group relative">
      <div className={`absolute -inset-1 bg-gradient-to-r ${color} to-transparent rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000`}></div>
      <div className="relative bg-white p-6 rounded-lg shadow-xl">
        <div className="flex items-center space-x-4 mb-4">
          {icon}
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <ul className="space-y-2">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-purple-600 mr-2"></div>
              <span className="text-gray-600">{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillCard;