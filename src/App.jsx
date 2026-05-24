import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaRocket, FaGlobe } from "react-icons/fa";
import { RiNewspaperLine } from "react-icons/ri";
import { FaGolang, FaAws, FaPython, FaDocker, FaNodeJs } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiKubernetes, SiHelm } from "react-icons/si";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// Animated Background Component
function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute inset-0 grid-background opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-carbon via-transparent to-carbon"></div>
    </div>
  );
}

// Now Widget - Current Focus
function NowWidget() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
      className="mb-12 bg-zinc-900/50 border border-emerald-500/20 rounded-lg p-6 relative overflow-hidden backdrop-blur-sm hover:border-emerald-500/40 transition-all duration-300 cursor-pointer"
      onClick={() => window.open("https://tinypay.in", "_blank")}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-3 h-3 bg-emerald-500 rounded-full"
            ></motion.div>
            <span className="text-emerald-500 font-mono text-sm font-semibold">LAUNCHING SOON</span>
          </div>
          <span className="text-zinc-500 text-xs font-mono">July 25, 2026</span>
        </div>
        <div className="flex items-center gap-3 mb-3">
          <h3 className="text-2xl text-white font-semibold font-mono">TinyPay</h3>
          <span className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded text-emerald-500 text-xs font-mono">Startup</span>
        </div>
        <p className="text-zinc-400 text-sm leading-relaxed mb-3">
          Payroll management system for tiny businesses with <span className="text-white font-semibold">Compliance as a Service</span>. 
          Automated calculations for PF, ESI, and Professional Tax—ensuring legal compliance without the complexity.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-zinc-800 border border-zinc-700 rounded text-zinc-400 text-xs font-mono">Go Backend</span>
          <span className="px-2 py-1 bg-zinc-800 border border-zinc-700 rounded text-zinc-400 text-xs font-mono">React</span>
          <span className="px-2 py-1 bg-zinc-800 border border-zinc-700 rounded text-zinc-400 text-xs font-mono">Secure System of Record</span>
        </div>
      </div>
    </motion.div>
  );
}

// Terminal Hero Component
function TerminalHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-zinc-950 bg-opacity-80 backdrop-blur-md border border-zinc-800 rounded-lg overflow-hidden mb-12 hover:border-electric/30 transition-all duration-300"
    >
      {/* Window Controls */}
      <div className="flex items-center gap-2 px-4 py-3 bg-surface border-b border-zinc-800">
        <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-red-500 cursor-pointer"></motion.div>
        <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer"></motion.div>
        <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-green-500 cursor-pointer"></motion.div>
        <span className="ml-3 text-sm text-zinc-500 font-mono">vivek@engineer ~ /portfolio</span>
      </div>
      
      {/* Terminal Content */}
      <div className="p-6 font-mono text-sm space-y-4">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-electric mb-2">$ whoami</div>
          <div className="text-zinc-400">
            Vivek Sharma — <span className="text-white">SDE-II @ Progress</span> | Full Stack Engineer
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="text-electric mb-2">$ cat specializations.txt</div>
          <div className="text-zinc-400">
            System Design • Backend Architecture • Cloud Infrastructure • DevOps
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center"
        >
          <span className="text-electric mr-2">$</span>
          <div className="text-zinc-300">
            <Typewriter
              options={{
                strings: [
                  "go run layerlint.go --check ./...",
                  "goforge init my-api --template=rest",
                  "kubectl apply -f deployment.yaml",
                  "docker-compose up --build -d",
                  "terraform apply -auto-approve"
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Project Card Component
function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`bg-zinc-900/50 backdrop-blur-sm border rounded-lg overflow-hidden transition-all duration-300 ${
        isHovered ? "border-electric glow-electric transform scale-[1.02]" : "border-zinc-800"
      }`}
    >
      {/* Card Header */}
      <div className="px-5 py-3 border-b border-zinc-800 bg-surface">
        <div className="text-xs text-zinc-500 font-mono mb-1">projects / {project.slug}</div>
        <h3 className="text-xl font-semibold text-white font-mono">{project.name}</h3>
      </div>
      
      {/* Stats Bar */}
      <div className="flex flex-wrap gap-4 px-5 py-2 bg-zinc-950/50 border-b border-zinc-800 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="text-zinc-500">Language:</span>
          <span className="text-electric font-semibold">{project.language}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-zinc-500">License:</span>
          <span className="text-zinc-400">{project.license}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-zinc-500">Status:</span>
          <motion.span
            animate={project.status === "Production" ? { opacity: [1, 0.6, 1] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
            className={project.status === "Production" ? "text-emerald-500 font-semibold" : "text-yellow-500 font-semibold"}
          >
            ● {project.status}
          </motion.span>
        </div>
      </div>
      
      {/* Description */}
      <div className="px-5 py-4">
        <p className="text-zinc-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        
        {/* Code Snippet */}
        {project.codeSnippet && (
          <div className="mb-4">
            <div className="text-xs text-zinc-500 font-mono mb-2">// Preview</div>
            <div className="rounded overflow-hidden border border-zinc-800">
              <SyntaxHighlighter
                language={project.language.toLowerCase()}
                style={vscDarkPlus}
                customStyle={{
                  margin: 0,
                  padding: "12px",
                  fontSize: "11px",
                  background: "#0B0D10",
                }}
              >
                {project.codeSnippet}
              </SyntaxHighlighter>
            </div>
          </div>
        )}
        
        {/* Action Buttons */}
        <div className="space-y-2">
          {project.website && (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open(project.website, "_blank")}
              className="w-full px-4 py-2.5 bg-electric text-carbon hover:bg-emerald-400 border border-electric text-sm font-mono font-semibold rounded transition-all flex items-center justify-center gap-2"
            >
              <FaGlobe />
              Visit Website
            </motion.button>
          )}
          {project.github ? (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open(project.github, "_blank")}
              className="w-full px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-electric text-white text-sm font-mono rounded transition-all flex items-center justify-center gap-2"
            >
              <FaGithub />
              View Repository
            </motion.button>
          ) : (
            <div className="w-full px-4 py-2.5 bg-zinc-800/50 border border-zinc-700 text-zinc-500 text-sm font-mono rounded flex items-center justify-center gap-2">
              <FaRocket />
              Coming Soon
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// System Status Bar Component
function SystemStatusBar() {
  const [uptime, setUptime] = useState("99.9%");
  
  useEffect(() => {
    const interval = setInterval(() => {
      const decimals = ["9", "8", "7"];
      const random = decimals[Math.floor(Math.random() * decimals.length)];
      setUptime(`99.${random}%`);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="scanline bg-carbon border-t border-zinc-800 py-3 px-4 md:px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0 text-xs font-mono text-electric">
        <div className="flex flex-wrap items-center gap-3 md:gap-6 justify-center md:justify-start">
          <span>SYSTEM: <span className="text-emerald-500 font-semibold">STABLE</span></span>
          <span>UPTIME: <span className="text-white font-semibold">{uptime}</span></span>
          <span className="hidden sm:inline">LOCATION: <span className="text-white">DELHI, IN</span></span>
        </div>
        <div className="flex items-center gap-2">
          <motion.span
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 bg-emerald-500 rounded-full"
          ></motion.span>
          <span className="font-semibold">ONLINE</span>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const sendEmail = () => {
    const recipient = "sharmavivek1709@gmail.com";
    const subject = encodeURIComponent("lets connect and create something");
    const body = encodeURIComponent(
      "Hey Vivek, I found your portfolio and wanted to connect!"
    );
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  const skills = [
    { icon: <FaGolang />, name: "Golang", color: "text-blue-400" },
    { icon: <TbBrandCpp />, name: "C++", color: "text-blue-400" },
    { icon: <FaPython />, name: "Python", color: "text-green-400" },
    { icon: <IoLogoJavascript />, name: "JavaScript", color: "text-yellow-400" },
    { icon: <IoLogoReact />, name: "React", color: "text-blue-400" },
    { icon: <RiTailwindCssFill />, name: "Tailwind", color: "text-blue-400" },
    { icon: <FaDocker />, name: "Docker", color: "text-blue-400" },
    { icon: <FaNodeJs />, name: "Node.js", color: "text-green-400" },
    { icon: <FaAws />, name: "AWS", color: "text-yellow-400" },
    { icon: <BiLogoPostgresql />, name: "Postgres", color: "text-blue-400" },
    { icon: <SiKubernetes />, name: "Kubernetes", color: "text-blue-400" },
    { icon: <SiHelm />, name: "Helm", color: "text-blue-400" },
  ];

  const projects = [
    {
      name: "LayerLint",
      slug: "layerlint",
      language: "Go",
      license: "MIT",
      status: "Production",
      description: "A high-performance architecture linting tool that enforces clean architecture boundaries in Go projects. Prevents circular dependencies and ensures proper layer separation with custom rule definitions.",
      codeSnippet: `package layerlint

func AnalyzeImports(path string) (*Report, error) {
    // Parse dependency graph
    graph := buildDependencyGraph(path)
    
    // Detect violations
    violations := detectLayerViolations(graph)
    
    return &Report{Violations: violations}, nil
}`,
      github: "https://github.com/vviveksharma/layerLint",
      website: "https://layerlint.in"
    },
    {
      name: "GoForge",
      slug: "goforge",
      language: "Go",
      license: "MIT",
      status: "Beta",
      description: "A modern CLI scaffolding tool for Go projects. Generates production-ready project structures with best practices, Docker configurations, CI/CD pipelines, and database migrations out of the box.",
      codeSnippet: `package main

func InitProject(name string, opts *Options) error {
    template := loadTemplate(opts.Template)
    
    // Generate project structure
    if err := scaffold(name, template); err != nil {
        return err
    }
    
    return nil
}`,
      github: "https://github.com/vviveksharma/Goforge-CLI"
    },
    {
      name: "GuardRail",
      slug: "guardrail",
      language: "Go",
      license: "Apache 2.0",
      status: "Beta",
      description: "A plug-and-play authentication and authorization middleware for microservices. Features JWT validation, role-based access control, and seamless integration with existing Go APIs.",
      codeSnippet: `package guardrail

func AuthMiddleware(roles ...string) gin.HandlerFunc {
    return func(c *gin.Context) {
        token := extractToken(c)
        claims, err := validateJWT(token)
        
        if !hasRequiredRole(claims, roles) {
            c.AbortWithStatus(403)
        }
    }
}`,
      github: "https://github.com/vviveksharma/GuardRail"
    }
  ];

  return (
    <div className="min-h-screen bg-carbon flex flex-col relative overflow-x-hidden">
      <AnimatedBackground />
      
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border-b border-zinc-800 bg-surface/90 backdrop-blur-md sticky top-0 z-50"
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-white font-mono text-lg font-semibold cursor-pointer hover:text-electric transition-colors"
              >
                vivek.sh
              </motion.span>
              <motion.button
                whileHover={{ scale: 1.05, x: 2 }}
                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-electric transition-colors font-mono"
                onClick={() => window.open("https://dev.to/vviveksharma", "_blank")}
              >
                <RiNewspaperLine />
                <span>/blog</span>
              </motion.button>
            </div>
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={sendEmail}
                className="text-zinc-400 hover:text-electric transition-colors"
              >
                <FaEnvelope size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open("https://github.com/vviveksharma", "_blank")}
                className="text-zinc-400 hover:text-electric transition-colors"
              >
                <FaGithub size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open("https://www.linkedin.com/in/vivek-sharma-207776187/", "_blank")}
                className="text-zinc-400 hover:text-electric transition-colors"
              >
                <FaLinkedin size={18} />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto px-6 py-12 w-full relative z-10">
        {/* Terminal Hero */}
        <TerminalHero />

        {/* Now Widget */}
        <NowWidget />

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm text-electric font-mono mb-4">// ABOUT</h2>
          <div className="text-zinc-300 space-y-4 leading-relaxed">
            <p className="text-lg text-white">
              Full-stack engineer specializing in <span className="text-electric font-semibold">system design</span> and <span className="text-electric font-semibold">backend architecture</span>.
            </p>
            <p className="text-zinc-400">
              Currently building scalable solutions at <span className="text-white font-semibold">Progress</span> as SDE-II.
              Previously architected Django-based systems at early-stage startups.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-electric font-mono text-sm">Focus areas:</span>
              {['Microservices', 'Cloud Infrastructure', 'DevOps', 'Clean Architecture'].map((area) => (
                <span key={area} className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 text-sm font-mono">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Projects Grid */}
        <section className="mb-16">
          <h2 className="text-sm text-electric font-mono mb-6 flex items-center gap-2">
            <FaRocket />
            // FEATURED_PROJECTS
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm text-electric font-mono mb-6">// TECH_STACK</h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="group relative"
              >
                <div className="flex items-center gap-2 px-4 py-2.5 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg hover:border-electric hover:bg-zinc-800/50 transition-all duration-300">
                  <motion.span
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`text-2xl ${skill.color}`}
                  >
                    {skill.icon}
                  </motion.span>
                  <span className="text-sm text-zinc-400 group-hover:text-white font-mono transition-colors">{skill.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-20 text-center"
        >
          <h2 className="text-sm text-electric font-mono mb-6">// CONTACT</h2>
          <p className="text-zinc-400 mb-8 text-lg">
            Open to interesting projects and collaborations
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={sendEmail}
            className="px-8 py-4 bg-electric text-carbon font-mono font-semibold rounded-lg hover:bg-emerald-400 transition-all duration-300 inline-flex items-center gap-3 glow-electric"
          >
            <FaEnvelope />
            sharmavivek1709@gmail.com
          </motion.button>
        </motion.section>
      </main>

      {/* System Status Bar */}
      <SystemStatusBar />
    </div>
  );
}
