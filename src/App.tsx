import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Download } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParallaxBackground from './components/ParallaxBackground';
import TypedText from './components/TypedText';
import ProjectCard from './components/ProjectCard';

function App() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Brand Identity Design",
      description: "Complete brand identity design including logo, color palette, and guidelines.",
      imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
      link: "#",
      category: "Graphic Design"
    },
    {
      title: "3D Product Visualization",
      description: "Photorealistic 3D rendering of product concepts for marketing.",
      imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e",
      link: "#",
      category: "3D Design"
    },
    {
      title: "Motion Graphics Showreel",
      description: "Dynamic motion graphics for digital advertising campaigns.",
      imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
      link: "#",
      category: "Motion Design"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <ParallaxBackground />
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            My Name is Anas Ayari
          </motion.h1>
          <div className="text-2xl md:text-3xl text-gray-700 h-20">
            <TypedText
              strings={[
                "Graphic Designer",
                "Motion Designer",
                "3D Designer"
              ]}
              className="font-light"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              I'm a passionate designer with expertise in graphic design, motion graphics, and 3D visualization. 
              With years of experience in creating compelling visual content, I bring ideas to life through 
              creative and innovative design solutions.
            </p>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Download size={20} className="mr-2" />
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-8">
            Interested in working together? Let's discuss your project!
          </p>
          <motion.a
            href="mailto:ayarianas79@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-lg"
          >
            <Mail size={24} className="mr-2" />
            Send me an email
          </motion.a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
