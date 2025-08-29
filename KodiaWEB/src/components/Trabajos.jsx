// my-react-portfolio/src/components/Trabajos.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Importa el componente Link
import '../CSS/trabajos.css';

// Importa la imagen del único proyecto que tienes
import autopiaImage from '../assets/images-trabajos/Autopia/Autopia.png';

const Trabajos = () => {
    // Definimos un solo objeto para el único proyecto
    const project = {
        title: "Autopia",
        subtitle: "Aplicación de Escritorio",
        description: "Aplicación de escritorio robusta para la gestión de alquiler de vehículos. Ofrece una interfaz intuitiva para simplificar el proceso para administradores y clientes.",
        image: autopiaImage,
        technologies: ["React" , "Vite", "CSS", "VB", "Acces DB"],
        github: "https://github.com/FranciscoBochkariov-1/Autopiapage",
        liveLink: "https://autopiauy.vercel.app/"
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.2,
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section id="trabajos" className="trabajos-section">
            <motion.div
                className="container"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="section-header">
                    <span className="title-badge">
                        <FaExternalLinkAlt /> Portafolio
                    </span>
                    <h2 className="section-title">
                        Mis últimos <span className="title-gradient">proyectos</span>
                    </h2>
                    <p className="section-description">
                        Explora mi trabajo más reciente y descubre cómo transformo ideas en soluciones digitales.
                    </p>
                </div>
                
                {/* Contenedor central para el único proyecto */}
                <motion.div className="trabajo-single-container">
                    <motion.div
                        className="trabajo-card"
                        variants={cardVariants}
                        whileHover="hover"
                    >
                        <div className="card-header">
                            <div className="card-image-container">
                                {/* Usa el componente Link para envolver la imagen */}
                                <Link to="/autopia-page">
                                    <img
                                        src={project.image}
                                        alt={`Imagen de ${project.title}`}
                                        className="card-img"
                                    />
                                    <div className="card-image-overlay"></div>
                                </Link>
                            </div>
                            <div className="card-links">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="Ver código en GitHub">
                                    <FaGithub size={24} />
                                </a>
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="Ver sitio en vivo">
                                    <FaExternalLinkAlt size={24} />
                                </a>
                            </div>
                        </div>
                        <div className="card-content">
                            <h3 className="card-title">{project.title}</h3>
                            <p className="card-description">{project.description}</p>
                            <div className="technologies-list">
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-badge">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Trabajos;