import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Globe, 
  Smartphone, 
  Database, 
  Terminal,
  ChevronRight,
  Download,
  Moon,
  Sun,
  Menu,
  X,
  Briefcase,
  GraduationCap,
  User,
  Layers
} from 'lucide-react';

// --- Types ---
interface Project {
  title: string;
  description: string;
  tech: { name: string; logo: string }[];
  github?: string;
  link?: string;
  image: string;
}

interface Experience {
  company: string;
  logo: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

interface SkillCategory {
  title: string;
  icon: any;
  skills: { name: string; logo: string }[];
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    title: "Enterprise Workflow Orchestration",
    description: "Architected a complex enterprise solution for STC integrating Full Stack, Angular, and Camunda BPMN for high-scale telecom workflows.",
    tech: [
      { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "Angular", logo: "https://cdn.simpleicons.org/angular/DD0031" },
      { name: "Camunda", logo: "https://cdn.simpleicons.org/camunda/FF6600" },
      { name: "REST APIs", logo: "https://cdn.simpleicons.org/insomnia/4000BF" }
    ],
    link: "#",
    image: "https://picsum.photos/seed/workflow/800/600"
  },
  {
    title: "Wholesale Banking Platform",
    description: "Led the ground-up design of a modular banking platform using Micro-frontend architecture and Spring Cloud microservices.",
    tech: [
      { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Spring Boot", logo: "https://cdn.simpleicons.org/springboot/6DB33F" },
      { name: "Spring Cloud", logo: "https://cdn.simpleicons.org/spring/6DB33F" },
      { name: "Kafka", logo: "https://cdn.simpleicons.org/apachekafka/231F20" }
    ],
    link: "#",
    image: "https://picsum.photos/seed/banking/800/600"
  },
  {
    title: "GUIDE Mobile App",
    description: "Engineered a React Native application for Walmart associates featuring facial recognition and location-based services.",
    tech: [
      { name: "React Native", logo: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Firebase", logo: "https://cdn.simpleicons.org/firebase/FFCA28" },
      { name: "Android", logo: "https://cdn.simpleicons.org/android/3DDC84" }
    ],
    link: "#",
    image: "https://picsum.photos/seed/mobile/800/600"
  },
  {
    title: "Citibank CIAP Portal",
    description: "Developed a high-performance SPA for server administration, focusing on intuitive UX and robust security.",
    tech: [
      { name: "Angular", logo: "https://cdn.simpleicons.org/angular/DD0031" },
      { name: "HTML5", logo: "https://cdn.simpleicons.org/html5/E34F26" },
      { name: "CSS3", logo: "https://cdn.simpleicons.org/css3/1572B6" },
      { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/F7DF1E" }
    ],
    link: "#",
    image: "https://picsum.photos/seed/admin/800/600"
  }
];

const EXPERIENCE: Experience[] = [
  {
    company: "Cisco",
    logo: "https://cdn.simpleicons.org/cisco/049BAF",
    role: "Senior Consulting Engineer",
    period: "Jul 2022 – Present",
    location: "Bengaluru, India",
    description: [
      "Architected enterprise solutions for STC using Full Stack and Camunda BPMN.",
      "Designed scalable Node.js RESTful APIs for complex workflow orchestration.",
      "Spearheaded Python automation for DU Telecom, enhancing operational efficiency.",
      "Provided technical leadership to cross-functional internal teams."
    ]
  },
  {
    company: "JP Morgan & Chase",
    logo: "https://cdn.simpleicons.org/jpmorgan/000000",
    role: "Application Developer - Senior Associate",
    period: "Dec 2019 – May 2022",
    location: "Bengaluru, India",
    description: [
      "Led architectural design of a wholesale banking platform from scratch.",
      "Implemented cloud-native microservices using Spring Boot and Spring Cloud.",
      "Championed Micro Frontend Architecture to decompose monoliths into agile units.",
      "Managed inter-service communication using Kafka and Feign Clients."
    ]
  },
  {
    company: "Walmart Labs",
    logo: "https://cdn.simpleicons.org/walmart/0071CE",
    role: "Individual Contributor 4",
    period: "Jan 2019 – Dec 2019",
    location: "Bengaluru, India",
    description: [
      "Designed and developed the GUIDE Mobile App using React Native.",
      "Integrated real-time employee profiles and store layouts via diverse APIs.",
      "Implemented facial recognition and location-based services.",
      "Oversaw deployment to Walmart's private app store."
    ]
  }
];

const SKILLS: SkillCategory[] = [
  {
    title: "Architecture",
    icon: Layers,
    skills: [
      { name: "Microservices", logo: "https://cdn.simpleicons.org/spring/6DB33F" },
      { name: "Micro Frontends", logo: "https://cdn.simpleicons.org/modulefederation/0175C2" },
      { name: "System Design", logo: "https://cdn.simpleicons.org/diagramsdotnet/F08705" },
      { name: "Cloud-Native", logo: "https://cdn.simpleicons.org/cloudnativecomputingfoundation/0086FF" },
      { name: "Scalability", logo: "https://cdn.simpleicons.org/googlecloud/4285F4" }
    ]
  },
  {
    title: "Frontend",
    icon: Globe,
    skills: [
      { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Angular", logo: "https://cdn.simpleicons.org/angular/DD0031" },
      { name: "React Native", logo: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Flutter", logo: "https://cdn.simpleicons.org/flutter/02569B" },
      { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "Material UI", logo: "https://cdn.simpleicons.org/mui/007FFF" }
    ]
  },
  {
    title: "Backend",
    icon: Terminal,
    skills: [
      { name: "Java", logo: "https://cdn.simpleicons.org/oracle/F80000" },
      { name: "Spring Boot", logo: "https://cdn.simpleicons.org/springboot/6DB33F" },
      { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "Express", logo: "https://cdn.simpleicons.org/express/000000" },
      { name: "PHP", logo: "https://cdn.simpleicons.org/php/777BB4" },
      { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB" }
    ]
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql/4479A1" },
      { name: "Redis", logo: "https://cdn.simpleicons.org/redis/DC382D" },
      { name: "Elastic Search", logo: "https://cdn.simpleicons.org/elasticsearch/005571" }
    ]
  }
];

interface PersonalProject {
  title: string;
  category: string;
  description: string;
  icon: any;
  link: string;
  color: string;
}

// --- Data ---
const PERSONAL_PROJECTS: PersonalProject[] = [
  {
    title: "Tech with Rajesh",
    category: "YouTube Channel",
    description: "Sharing insights on system design, microservices, and career growth in tech with 10k+ subscribers.",
    icon: Github, // Will replace with Youtube in component if available or use generic
    link: "https://youtube.com",
    color: "bg-red-500"
  },
  {
    title: "Architect's Journal",
    category: "Personal Blog",
    description: "Weekly deep dives into software patterns, leadership, and the future of cloud-native engineering.",
    icon: Globe,
    link: "https://blog.rajesh.com",
    color: "bg-blue-500"
  },
  {
    title: "Mindful Coding",
    category: "Mobile App",
    description: "A productivity app designed for developers to manage deep work sessions and mental well-being.",
    icon: Smartphone,
    link: "#",
    color: "bg-green-500"
  }
];

const HOBBIES = [
  { name: "Photography", icon: "📸" },
  { name: "Mountain Trekking", icon: "🏔️" },
  { name: "Chess Strategy", icon: "♟️" },
  { name: "Urban Sketching", icon: "🎨" },
  { name: "Cooking Fusion", icon: "🍳" },
];

// --- Components ---

const PersonalWork = () => {
  return (
    <section id="beyond" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Beyond the Code</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            When I'm not architecting systems, I'm creating content, building personal tools, and exploring the world.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {PERSONAL_PROJECTS.map((project, i) => (
            <motion.a 
              key={i}
              href={project.link}
              target="_blank"
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl block group border-b-4 border-transparent hover:border-indigo-500 transition-all"
            >
              <div className={`w-14 h-14 ${project.color} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg`}>
                <project.icon className="w-7 h-7" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-2">{project.category}</p>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-500 transition-colors">{project.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {project.description}
              </p>
            </motion.a>
          ))}
        </div>

        <div className="glass p-10 rounded-[40px] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <User className="w-40 h-40" />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <span className="mr-3">🏝️</span> Out of Office
            </h3>
            <div className="flex flex-wrap gap-4">
              {HOBBIES.map((hobby, i) => (
                <div 
                  key={i} 
                  className="px-6 py-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm flex items-center space-x-3 hover:scale-105 transition-transform cursor-default"
                >
                  <span className="text-2xl">{hobby.icon}</span>
                  <span className="font-bold text-sm">{hobby.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ThemeToggle = ({ isDark, toggle }: { isDark: boolean, toggle: () => void }) => (
  <button 
    onClick={toggle}
    className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
    aria-label="Toggle theme"
  >
    {isDark ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-slate-700" />}
  </button>
);

const Navbar = ({ isDark, toggleTheme }: { isDark: boolean, toggleTheme: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Beyond', href: '#beyond' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tighter text-gradient">
          RKJ.
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium hover:text-indigo-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <ThemeToggle isDark={isDark} toggle={toggleTheme} />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle isDark={isDark} toggle={toggleTheme} />
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Architecting Future-Proof Systems.";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold mb-6">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Available for Strategic Roles
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight min-h-[150px] md:min-h-[220px]">
            {text.split(' ').map((word, i) => (
              <span key={i} className={word === 'Future-Proof' ? 'text-gradient' : ''}>
                {word}{' '}
              </span>
            ))}
            <span className="animate-pulse">|</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
            I'm Rajesh Kumar Jha, a Senior Software Architect dedicated to building 
            scalable distributed systems and high-performance user experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/25 flex items-center">
              View Projects <ChevronRight className="ml-2 w-4 h-4" />
            </a>
            <button className="px-8 py-4 glass rounded-xl font-bold flex items-center hover:bg-white/10 transition-all">
              Download Resume <Download className="ml-2 w-4 h-4" />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden border-8 border-white/10 shadow-2xl animate-float">
            <img 
              src="https://picsum.photos/seed/architect/600/700" 
              alt="Rajesh Kumar Jha" 
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative floating cards */}
          <div className="absolute -top-6 -right-6 glass p-4 rounded-2xl shadow-xl z-20">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <Cpu className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs font-bold">Microservices</p>
                <p className="text-[10px] opacity-60">Spring Cloud Expert</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl shadow-xl z-20">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                <Code2 className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <p className="text-xs font-bold">Full Stack</p>
                <p className="text-[10px] opacity-60">React & Node.js</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <User className="mr-3 text-indigo-500" /> Professional Summary
            </h2>
            <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              <p>
                I am a highly accomplished and results-driven Software Professional with extensive experience in 
                architecture design, end-to-end solution development, and technical leadership.
              </p>
              <p>
                Throughout my career at global giants like <strong>Cisco</strong>, <strong>JP Morgan & Chase</strong>, 
                and <strong>Walmart Labs</strong>, I have proven my ability to lead cross-functional engineering teams 
                and drive technical innovation.
              </p>
              <p>
                My passion lies in leveraging deep expertise in microservices with Spring Cloud, micro frontends, 
                and modern full-stack development to architect transformative, high-scale applications that 
                solve real-world business challenges.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Years Experience', value: '12+' },
              { label: 'Projects Delivered', value: '50+' },
              { label: 'Companies', value: '6+' },
              { label: 'Tech Stack', value: '20+' },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="glass p-8 rounded-2xl text-center"
              >
                <p className="text-3xl font-bold text-indigo-500 mb-1">{stat.value}</p>
                <p className="text-sm font-medium opacity-60">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Arsenal</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and methodologies I've mastered over a decade of engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl hover:border-indigo-500/50 transition-all group"
            >
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <cat.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, j) => (
                  <div key={j} className="flex items-center px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-medium group/skill hover:bg-indigo-500 hover:text-white transition-all">
                    <img src={skill.logo} alt={skill.name} className="w-4 h-4 mr-2 object-contain dark:invert" referrerPolicy="no-referrer" />
                    {skill.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
            <Briefcase className="mr-3 text-indigo-500" /> Career Journey
          </h2>
        </div>

        <div className="space-y-12">
          {EXPERIENCE.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-indigo-500/30"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-indigo-500 rounded-full border-4 border-white dark:border-slate-900" />
              <div className="glass p-8 rounded-3xl">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-white rounded-2xl p-2 shadow-sm mr-4 flex items-center justify-center overflow-hidden">
                      <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{exp.role}</h3>
                      <p className="text-indigo-500 font-bold">{exp.company}</p>
                    </div>
                  </div>
                  <div className="text-left md:text-right text-sm">
                    <p className="font-bold">{exp.period}</p>
                    <p className="opacity-60">{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.description.map((item, j) => (
                    <li key={j} className="flex items-start text-slate-600 dark:text-slate-400">
                      <ChevronRight className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5 mr-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-slate-500 max-w-xl">
              A selection of high-impact solutions I've architected for global enterprises and startups.
            </p>
          </div>
          <a href="https://github.com/opencodes" target="_blank" className="flex items-center text-indigo-500 font-bold hover:underline">
            View all on GitHub <ExternalLink className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl overflow-hidden shadow-xl"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/60 to-transparent p-8 flex flex-col justify-end">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, j) => (
                    <span key={j} className="flex items-center px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
                      <img src={t.logo} alt={t.name} className="w-3 h-3 mr-1.5 object-contain invert" referrerPolicy="no-referrer" />
                      {t.name}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-300 text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex space-x-4">
                  <a href={project.link} className="p-3 bg-white text-slate-900 rounded-xl hover:bg-indigo-500 hover:text-white transition-all">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a href="https://github.com/opencodes" className="p-3 bg-white/10 backdrop-blur-md text-white rounded-xl hover:bg-white/20 transition-all">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-indigo-600 text-white overflow-hidden relative">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-900/30 rounded-full -ml-48 -mb-48 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Let's build something <br /> extraordinary together.
            </h2>
            <p className="text-indigo-100 text-lg mb-12 max-w-md">
              Whether you're looking for architectural guidance, a technical lead, or a full-stack expert, 
              I'm always open to discussing new opportunities.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:rajeshk@gmail.com" className="flex items-center group">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-white group-hover:text-indigo-600 transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-60">Email Me</p>
                  <p className="text-xl font-bold">rajeshk@gmail.com</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/rkjha-architect/" target="_blank" className="flex items-center group">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-white group-hover:text-indigo-600 transition-all">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-60">LinkedIn</p>
                  <p className="text-xl font-bold">rkjha-architect</p>
                </div>
              </a>
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-60">Call Me</p>
                  <p className="text-xl font-bold">+91-7022358966</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 text-slate-900 shadow-2xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-100 rounded-xl border-none focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 bg-slate-100 rounded-xl border-none focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold">Subject</label>
                <input type="text" className="w-full px-4 py-3 bg-slate-100 rounded-xl border-none focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="Project Inquiry" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-slate-100 rounded-xl border-none focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="Tell me about your project..."></textarea>
              </div>
              <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/25">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <p className="text-xl font-bold tracking-tighter text-gradient mb-2">RKJ.</p>
          <p className="text-sm text-slate-500">© 2026 Rajesh Kumar Jha. All rights reserved.</p>
        </div>
        <div className="flex space-x-6">
          <a href="https://github.com/opencodes" className="text-slate-400 hover:text-indigo-500 transition-colors"><Github /></a>
          <a href="https://www.linkedin.com/in/rkjha-architect/" className="text-slate-400 hover:text-indigo-500 transition-colors"><Linkedin /></a>
          <a href="mailto:rajeshk@gmail.com" className="text-slate-400 hover:text-indigo-500 transition-colors"><Mail /></a>
        </div>
        <div className="flex space-x-8 text-sm font-medium">
          <a href="#" className="hover:text-indigo-500 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-indigo-500 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default function Portfolio() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen font-sans ${isDark ? 'dark' : ''}`}>
      <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <PersonalWork />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
