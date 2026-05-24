import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
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

// Terminal Hero Component
function TerminalHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-zinc-950 bg-opacity-80 backdrop-blur-md border border-zinc-800 rounded-lg overflow-hidden mb-12"
    >
      {/* Window Controls */}
      <div className="flex items-center gap-2 px-4 py-3 bg-surface border-b border-zinc-800">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="ml-3 text-sm text-zinc-500 font-mono">vivek@engineer ~ /portfolio</span>
      </div>
      
      {/* Terminal Content */}
      <div className="p-6 font-mono text-sm">
        <div className="text-electric mb-2">$ whoami</div>
        <div className="text-zinc-400 mb-4">
          Vivek Sharma — SDE-II @ Progress | Full Stack Engineer
        </div>
        
        <div className="text-electric mb-2">
          $ cat specializations.txt
        </div>
        <div className="text-zinc-400 mb-4">
          System Design • Backend Architecture • Cloud Infrastructure
        </div>
        
        <div className="text-electric flex items-center">
          <span className="mr-2">$</span>
          <Typewriter
            options={{
              strings: [
                "go run layerlint.go",
                "goforge init my-api",
                "kubectl apply -f deployment.yaml",
                "docker-compose up --build"
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
            }}
          />
        </div>
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
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`bg-zinc-900 border rounded-lg overflow-hidden transition-all duration-300 ${
        isHovered ? "border-emerald-500 shadow-lg shadow-emerald-500/20" : "border-zinc-800"
      }`}
    >
      {/* Card Header */}
      <div className="px-5 py-3 border-b border-zinc-800 bg-surface">
        <div className="text-xs text-zinc-500 font-mono mb-1">projects / {project.slug}</div>
        <h3 className="text-xl font-semibold text-white font-mono">{project.name}</h3>
      </div>
      
      {/* Stats Bar */}
      <div className="flex gap-4 px-5 py-2 bg-zinc-950 border-b border-zinc-800 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="text-zinc-500">Language:</span>
          <span className="text-electric">{project.language}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-zinc-500">License:</span>
          <span className="text-zinc-400">{project.license}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-zinc-500">Status:</span>
          <span className={project.status === "Production" ? "text-emerald-500" : "text-yellow-500"}>
            {project.status}
          </span>
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
        
        {/* Action Button */}
        {project.github && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open(project.github, "_blank")}
            className="w-full px-4 py-2 bg-slate-ui hover:bg-zinc-700 border border-zinc-700 text-white text-sm font-mono rounded transition-colors flex items-center justify-center gap-2"
          >
            <FaGithub />
            View Repository
          </motion.button>
        )}
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
    <div className="scanline bg-carbon border-t border-zinc-800 py-2 px-6">
      <div className="flex items-center justify-between text-xs font-mono text-electric">
        <div className="flex items-center gap-6">
          <span>SYSTEM: <span className="text-emerald-500">STABLE</span></span>
          <span>UPTIME: {uptime}</span>
          <span>LOCATION: DELHI, IN</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          <span>ONLINE</span>
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
      github: "https://github.com/vviveksharma"
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
      github: "https://github.com/vviveksharma"
    },
    {
      name: "Guard Rail",
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
      github: null
    },
    {
      name: "Password Management System",
      slug: "password-mgmt",
      language: "Python",
      license: "MIT",
      status: "Production",
      description: "RSA and AES-based encryption system for secure password storage. Implements zero-knowledge architecture with client-side encryption and secure key derivation.",
      codeSnippet: `from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2

def derive_key(password: str, salt: bytes) -> bytes:
    kdf = PBKDF2(algorithm=hashes.SHA256(),
                 length=32, salt=salt, iterations=100000)
    return kdf.derive(password.encode())`,
      github: "https://github.com/Password-Management"
    },
    {
      name: "BlockChain",
      slug: "blockchain",
      language: "Go",
      license: "MIT",
      status: "Archived",
      description: "A proof-of-concept blockchain implementation in Go. Features include proof-of-work consensus, transaction validation, and a peer-to-peer network layer.",
      codeSnippet: `type Block struct {
    Timestamp     int64
    Transactions  []*Transaction
    PrevBlockHash []byte
    Hash          []byte
    Nonce         int
}

func (b *Block) CalculateHash() []byte {
    // Mining implementation
}`,
      github: "https://github.com/vviveksharma/BlockChain"
    }
  ];

  return (
    <div className="min-h-screen bg-carbon flex flex-col">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border-b border-zinc-800 bg-surface bg-opacity-80 backdrop-blur-md sticky top-0 z-50"
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <span className="text-white font-mono text-lg font-semibold">vivek.sh</span>
              <button
                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-electric transition-colors font-mono"
                onClick={() => window.open("https://medium.com/@sharmavivek1709", "_blank")}
              >
                <RiNewspaperLine />
                <span>/blog</span>
              </button>
            </div>
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={sendEmail}
                className="text-zinc-400 hover:text-electric transition-colors"
              >
                <FaEnvelope size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open("https://github.com/vviveksharma", "_blank")}
                className="text-zinc-400 hover:text-electric transition-colors"
              >
                <FaGithub size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
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
      <main className="flex-1 max-w-6xl mx-auto px-6 py-12 w-full">
        {/* Terminal Hero */}
        <TerminalHero />

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm text-electric font-mono mb-4">// ABOUT</h2>
          <div className="text-zinc-300 space-y-3 leading-relaxed">
            <p className="text-lg">
              Full-stack engineer specializing in system design and backend architecture.
            </p>
            <p className="text-zinc-400">
              Currently building scalable solutions at <span className="text-white font-semibold">Progress</span> as SDE-II.
              Previously architected Django-based systems at early-stage startups.
            </p>
            <p className="text-zinc-400">
              Focus areas: Microservices • Cloud Infrastructure • DevOps • Clean Architecture
            </p>
          </div>
        </motion.section>

        {/* Projects Grid */}
        <section className="mb-16">
          <h2 className="text-sm text-electric font-mono mb-6">// PROJECTS</h2>
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
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-electric transition-colors">
                  <span className={`text-2xl ${skill.color}`}>{skill.icon}</span>
                  <span className="text-sm text-zinc-400 font-mono">{skill.name}</span>
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
            className="px-8 py-4 bg-electric text-carbon font-mono font-semibold rounded-lg hover:bg-emerald-400 transition-colors inline-flex items-center gap-3"
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
