import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Mail, Brain, Server, Linkedin, Briefcase, Github } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import BentoBox from './components/BentoBox';
import StatBox from './components/StatBox';
import TechStack from './components/TechStack';
import ThemeToggle from './components/ThemeToggle';
import ExperienceCard from './components/ExperienceCard';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-[#F5F5F7] dark:bg-gray-900 transition-colors duration-200">
      <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      
      {/* Hero Section */}
      <header className="container mx-auto px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-7xl font-bold mb-6 tracking-tight dark:text-white">
            Hello, I'm <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Satyajit Sriram
            </span>
          </h1>
          <p className="text-2xl text-gray-500 dark:text-gray-400 max-w-2xl font-light leading-relaxed">
            Graduate Student at NYU, building technology to last.
          </p>
        </motion.div>
      </header>

      {/* Bento Grid */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BentoBox className="md:col-span-2 row-span-2">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative h-full"
            >
              <img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop"
                alt="Workspace"
                className="w-full h-full object-cover rounded-3xl brightness-[1.1] dark:brightness-[0.8]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h2 className="text-3xl font-bold mb-3 text-white">Software Engineer</h2>
                <p className="text-gray-200">Full Stack Development • Machine Learning • Cloud Architecture</p>
              </div>
            </motion.div>
          </BentoBox>

          <StatBox
            icon={<Trophy className="w-6 h-6" />}
            title="LeetCode"
            value="350+"
            subtitle="Problems Solved"
            href="https://leetcode.com/u/satyajit_sriram/"
            gradient="from-orange-400 to-pink-600"
            metrics={[
              { label: 'Contest Rating', value: '1650+' },
              { label: 'Global Rank', value: 'Top 15%' },
              { label: 'Streak', value: '30 days' },
              { label: 'Solutions', value: '200+' }
            ]}
          />

          <TechStack />

          <ProjectCard
            title="Mobile chat app"
            description="Developed an Android chat app using Java with secure authentication with Firebase for Google login and Firestore for advanced querying of user data and chat histories. Managed media sharing via Firebase Cloud Storage and employed Firebase Cloud Functions for backend logic, utilizing Google Cloud IAM
            for secure role-based access control"
            tech={['Java', 'Firebase', 'Google auth', 'Firestore']}
            // link="https://github.com/yourusername/project"
            icon={<Brain className="w-6 h-6" />}
          />

          <ProjectCard
            title="Portfolio website"
            description="Designed a portfolio website with React and Tailwind CSS, showcasing my projects, skills, and experiences. Integrated a dark mode toggle and deployed the site on Vercel for continuous integration and deployment."
            tech={['React', 'HTML','CSS', 'Node.js', 'Vercel', 'ESLint']}
            // link="https://github.com/yourusername/project"
            icon={<Server className="w-6 h-6" />}
          />

          <StatBox
            icon={<Linkedin className="w-6 h-6" />}
            title="LinkedIn"
            value="500+"
            subtitle="Connections"
            href="https://www.linkedin.com/in/satyajitsriram/"
            gradient="from-blue-500 to-blue-700"
            metrics={[
              { label: 'Profile Views', value: '1.2k+' },
              { label: 'Post Impressions', value: '5k+' },
              { label: 'Endorsements', value: '50+' },
              { label: 'Articles', value: '10+' }
            ]}
          />

          <ExperienceCard
            title="Software Engineer Intern"
            company="Care Validate"
            location="Atlanta, GA"
            duration="Jun 2024 - Aug 2024"
            description="Integrated Stripe API with PostgreSQL to manage payments, reducing payment failures by over 25%, thus driving higher revenue. Spearheaded the optimization of 20+ Vue.js components by integrating Vuex, streamlining state management, and executing efficient API
            integrations, resulting in a 30% reduction in data retrieval times across the application. Automated order placement using Google Cloud Functions, with PostgreSQL handling order data management, reducing manual
            intervention by about 40% and thus an increase in order processing capacity."
            skills={['Vue JS', 'Node.js', 'Strip API', 'PostgreSQL']}
          />

          <ExperienceCard
            title="Software Developer"
            company="Quantiphi"
            location="Mumbai, India"
            duration="Aug 2022 - Aug 2023"
            description="Optimized platform efficiency on AngularJS and Google Cloud Platform, reducing server response times by over 15% and improving
            platform performance through enhanced caching and API request handling. Refactored the codebase into modular Angular components using ES6 module syntax, implementing tree shaking and optimizing lazy loading
            to reduce initial load times and decrease bundle size, resulting in improved runtime performance. Leveraged CytoscapeJS within an Angular application to implement custom data-binding, enabling efficient real-time graph updates and
            enhancing rendering performance for seamless interaction with complex hierarchical datasets"
            skills={['Angular JS', 'Google Cloud Platform', 'CytoscapeJS', 'ES6']}
          />

          <ExperienceCard
            title="Analyst Intern"
            company="Deloitte"
            location="Hyderabad, India"
            duration="Jan 2022 - June 2022"
            description="Developed custom BAPI and ABAP programs to automate data extraction and reporting processes in SAP S/4 HANA, enhancing efficiency. Customized SAP S/4 HANA pipelines on client requirements, optimizing workflows to also improve data processing speeds. Optimized the ’Financial Insights Dashboard’ by streamlining SQL queries and enhancing database indexing, resulting in a 35% reduction in
            data retrieval times while collaborating closely with IT teams to boost financial data visibility"
            skills={['SAP S/4 HANA', 'ABAP', 'SQL']}
          />

          <ExperienceCard
            title="Software Developer Intern"
            company="Quantiphi"
            location="Mumbai, India"
            duration="July 2021 - October 2021"
            description="Translated client requirements into technical designs, building scalable cloud solutions on AWS. Integrated AWS Lambda and S3 in the ReactJS app, reducing operational costs and improving data retrieval efficiency. Revamped API Gateway & conducted load testing with AWS CloudWatch and X-Ray, improving load management and system performance"
            skills={['Python', 'Data Structures', 'Algorithms']}
          />

          <ExperienceCard
            title="Software Developer Intern"
            company="ConvergenSEE"
            location="Mumbai, India"
            duration="May 2021 - June 2021"
            description="Crafted dashboards in Google Data Studio, consolidating live data to analyze demographic trends and generate actionable business insights. Utilized Google Maps API, Google Cloud SQL, Google Analytics, and Google Sheets API, along with custom APIs and webhooks, to aggregate and visualize real-time data from multiple sources. Streamlined data workflows, enabling real-time insights and actionable business intelligence by enhancing API-driven data pipelines"
            skills={['Google Data Studio', 'Google Maps API', 'Google Cloud SQL', 'Google Analytics']}
          />

          <BentoBox className="p-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex flex-col h-full justify-between"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Connect With Me</h3>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/satyajitsriram/" className="hover:text-blue-600 transition-colors text-gray-700 dark:text-gray-300">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://github.com/satyajitsriram" className="hover:text-blue-600 transition-colors text-gray-700 dark:text-gray-300">
                  <Github className="w-6 h-6" />
                </a>
                <a href="mailto:ss17492@nyu.edu" className="hover:text-blue-600 transition-colors text-gray-700 dark:text-gray-300">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </BentoBox>

          <BentoBox className="p-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex flex-col h-full justify-between"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Current Focus 🎯</h3>
              <p className="text-gray-600 dark:text-gray-400">Exploring technology and its uses in real world at NYU</p>
            </motion.div>
          </BentoBox>
        </div>
      </main>
    </div>
  );
}

export default App;