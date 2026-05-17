import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronRight, 
  Cpu, 
  Globe, 
  Database, 
  Terminal,
  Search,
  ArrowUpRight
} from 'lucide-react';
import { PROJECTS, SKILLS } from './constants';
import { cn } from './lib/utils';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isScrolled, setIsScrolled] = useState(false);

  const categories = ['All', ...new Set(PROJECTS.map(p => p.category))];
  const filteredProjects = selectedCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === selectedCategory);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        isScrolled ? "bg-white/80 backdrop-blur-md py-4 border-slate-200" : "bg-transparent py-6 border-transparent"
      )}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tight text-indigo-600"
          >
            ASMITHA.P
          </motion.span>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="hover:text-indigo-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-all shadow-sm">
            Resume
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              4th Year B.Tech Student
            </div>
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Building the future with <span className="text-indigo-600">ML & AI.</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-lg mb-10">
              I'm Asmithapriyani, a passionate engineer specializing in Machine Learning, Website Development, and DevOps.
            </p>
            <div className="flex gap-4">
              <a 
                href="#projects"
                className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center gap-2"
              >
                View Projects <ChevronRight size={18} />
              </a>
              <div className="flex gap-2">
                {[Linkedin, Github, Mail].map((Icon, i) => (
                  <button key={i} className="p-4 rounded-2xl border border-slate-200 hover:bg-white hover:border-indigo-200 hover:text-indigo-600 transition-all">
                    <Icon size={20} />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] bg-indigo-100 overflow-hidden shadow-2xl relative group">
              <img 
                src="/src/assets/images/profile_avatar_1779006625806.png" 
                alt="Asmithapriyani" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/60 to-transparent text-white">
                <p className="text-sm font-medium opacity-80 mb-1">Current Focus</p>
                <p className="text-lg font-bold">ML Research & Scalable Web Apps</p>
              </div>
            </div>
            {/* Floating stats or labels */}
            <div className="absolute -top-6 -right-6 p-6 bg-white rounded-3xl shadow-xl border border-slate-100 hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-600">
                  <Cpu size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Experience</p>
                  <p className="font-bold text-slate-900">7+ Projects</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-slate-900">Core Expertise</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          {[
            { icon: Cpu, title: 'Machine Learning', desc: 'Predictive modeling, classification, and neural architectures.' },
            { icon: Globe, title: 'Web Development', desc: 'Modern, responsive interfaces with React and Node.js.' },
            { icon: Terminal, title: 'DevOps', desc: 'Automated CI/CD pipelines and containerized infrastructure.' },
            { icon: Database, title: 'Data Analysis', desc: 'Feature engineering and complex dataset exploration.' },
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div>
              <p className="text-indigo-600 font-bold tracking-widest uppercase text-xs mb-3">Portfolio</p>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Featured Work</h2>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "px-5 py-2 rounded-full text-sm font-medium transition-all",
                    selectedCategory === cat 
                      ? "bg-slate-900 text-white shadow-lg" 
                      : "bg-white text-slate-600 border border-slate-200 hover:border-indigo-300"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-slate-900">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group bg-white rounded-[2rem] border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-500"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-wider text-indigo-600 shadow-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-3 flex items-center justify-between">
                      {project.title}
                      <ArrowUpRight size={18} className="text-slate-300 group-hover:text-indigo-600 transition-colors" />
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map(t => (
                        <span key={t} className="text-[10px] font-semibold px-2 py-1 bg-slate-100 text-slate-600 rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-900 text-white rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-indigo-400 font-bold tracking-widest uppercase text-xs mb-3">Capabilities</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              Expertise in modern <br /> 
              <span className="text-indigo-400 italic font-serif text-slate-100">Tech Stacks.</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-10 max-w-md">
              I continuously refine my skills across the full spectrum of development, from core algorithms in Python to cloud-native DevOps practices.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-3xl bg-slate-800/50 border border-slate-700">
                <h4 className="text-2xl font-bold mb-1">01</h4>
                <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">Fast Learner</p>
              </div>
              <div className="p-6 rounded-3xl bg-slate-800/50 border border-slate-700">
                <h4 className="text-2xl font-bold mb-1">02</h4>
                <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">Problem Solver</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            {SKILLS.map((skill, i) => (
              <div key={i} className="space-y-3 font-sans">
                <div className="flex justify-between items-end">
                  <span className="text-lg font-bold">{skill.name}</span>
                  <span className="text-indigo-400 font-mono text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="h-full bg-indigo-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-20 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
            
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 relative z-10">
              Ready to collaborate <br className="hidden md:block" /> 
              on your next big idea?
            </h2>
            <p className="text-indigo-100 text-lg mb-12 max-w-xl mx-auto relative z-10 text-white">
              I'm currently looking for new opportunities and collaborations. Drop me a line and let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10 font-sans">
              <a 
                href="mailto:nallapuasmitha@gmail.com"
                className="bg-white text-indigo-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-indigo-50 transition-all flex items-center justify-center gap-2"
              >
                Get in Touch <Mail size={22} />
              </a>
              <button className="border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 text-sm">
            © 2026 Asmithapriyani. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Twitter', 'Instagram', 'Dribbble'].map(social => (
              <a key={social} href="#" className="text-slate-400 hover:text-indigo-600 text-sm font-medium transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
