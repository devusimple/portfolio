import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bar } from '@/components/ui/chart';

const skillsData = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'SQL', level: 70 },
];

const Skills = ({ setActiveSection }) => {
  useEffect(() => {
    setActiveSection('skills');
  }, [setActiveSection]);

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        <div className="w-full max-w-3xl mx-auto">
          <Bar
            data={skillsData}
            index="name"
            categories={['level']}
            colors={['#4299e1']}
            valueFormatter={(value) => `${value}%`}
            yAxisWidth={48}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
