// my-react-portfolio/src/components/Sobremi.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaGitAlt, FaJs, FaNodeJs, FaDatabase, FaCode } from 'react-icons/fa';
import { SiVite, SiMysql, SiDjango, SiMongodb, SiExpress } from 'react-icons/si';
import '../CSS/sobremi.css';
import myPhoto from '../assets/images-kodia/yoo.jpg';
import vbCertImage from '../assets/images-kodia/certificado-pcom-removebg-preview.png';

const Sobremi = () => {
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

    const textVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    };

    // Animación orbital para los iconos
    const orbitalVariants = {
        orbit: {
            rotate: 360,
            transition: {
                duration: 20,
                ease: "linear",
                repeat: Infinity
            }
        }
    };

    // Animación de pulso para los iconos internos
    const pulseVariants = {
        pulse: {
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    // Animación del holo-efecto
    const holoVariants = {
        active: {
            background: [
                "linear-gradient(45deg, rgba(0, 255, 255, 0.1) 0%, rgba(255, 0, 255, 0.1) 100%)",
                "linear-gradient(135deg, rgba(255, 0, 255, 0.1) 0%, rgba(0, 255, 128, 0.1) 100%)",
                "linear-gradient(225deg, rgba(0, 255, 128, 0.1) 0%, rgba(0, 255, 255, 0.1) 100%)",
                "linear-gradient(315deg, rgba(0, 255, 255, 0.1) 0%, rgba(255, 0, 255, 0.1) 100%)"
            ],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "linear"
            }
        }
    };

    // Datos de los iconos con sus posiciones orbitales - Frontend & Backend
    const techIcons = [
        // Frontend Technologies
        { Icon: FaHtml5, color: '#E34F26', angle: 0, radius: 180, delay: 0, category: 'frontend' },
        { Icon: FaCss3Alt, color: '#1572B6', angle: 36, radius: 160, delay: 0.2, category: 'frontend' },
        { Icon: FaJs, color: '#F7DF1E', angle: 72, radius: 200, delay: 0.4, category: 'frontend' },
        { Icon: FaReact, color: '#61DAFB', angle: 108, radius: 170, delay: 0.6, category: 'frontend' },
        { Icon: SiVite, color: '#646CFF', angle: 144, radius: 190, delay: 0.8, category: 'frontend' },
        
        // Backend Technologies
        { Icon: FaPython, color: '#3776AB', angle: 180, radius: 165, delay: 1, category: 'backend' },
        { Icon: SiDjango, color: '#092E20', angle: 216, radius: 185, delay: 1.2, category: 'backend' },
        { Icon: FaNodeJs, color: '#68A063', angle: 252, radius: 175, delay: 1.4, category: 'backend' },
        { Icon: SiExpress, color: '#000000', angle: 288, radius: 195, delay: 1.6, category: 'backend' },
        { Icon: SiMongodb, color: '#47A248', angle: 324, radius: 155, delay: 1.8, category: 'backend' },
        
        // DevOps & Tools
        { Icon: FaGitAlt, color: '#F05032', angle: 20, radius: 140, delay: 2, category: 'tools' },
        { Icon: FaDatabase, color: '#336791', angle: 340, radius: 140, delay: 2.2, category: 'tools' }
    ];

    return (
        <section id="sobre-mi" className="sobre-mi-section">
            <motion.div
                className="sobre-mi-container"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.div className="sobre-mi-info" variants={textVariants}>
                    <h2 className="sobre-mi-title">Sobre <span className="accent-word">Kodia</span></h2>
                    
                    <p className="sobre-mi-text">
                        En <strong>Kodia</strong> transformamos ideas en <strong>experiencias digitales únicas</strong>. Somos especialistas en <strong>desarrollo web profesional</strong>, creando <strong>páginas web modernas, responsivas y seguras</strong> que conectan marcas con personas.
                    </p>
                    
                    <p className="sobre-mi-text">
                        Soy <strong>Francisco Bochkariov</strong>, desarrollador web full-stack apasionado por la innovación digital. Mi enfoque combina <strong>diseños minimalistas y atractivos</strong> con <strong>tecnología de alto rendimiento</strong>, garantizando que cada proyecto sea rápido, funcional y escalable.
                    </p>
                    
                    <div className="pillars-container">
                        <h3 className="pillars-title">En Kodia nos enfocamos en tres pilares:</h3>
                        <ul className="pillars-list">
                            <li><strong>Diseño web moderno y minimalista</strong> para una identidad digital sólida.</li>
                            <li><strong>Desarrollo full-stack</strong> para soluciones completas y seguras.</li>
                            <li><strong>Experiencias digitales interactivas</strong> que mejoran la conexión con tus clientes.</li>
                        </ul>
                    </div>
                    
                    <p className="sobre-mi-text">
                        Kodia nace como un <strong>estudio de desarrollo web</strong> con visión de crecer en el futuro como agencia digital, manteniendo siempre un objetivo claro: ayudarte a destacar con una presencia online de calidad, profesional y adaptada a tu negocio.
                    </p>
                </motion.div>

                <motion.div 
                    className="futuristic-photo-container"
                    variants={textVariants}
                >
                    {/* Contenedor principal con holo-efecto */}
                    <motion.div 
                        className="holo-container"
                        variants={holoVariants}
                        animate="active"
                    >
                        {/* Anillos orbitales */}
                        <div className="orbital-rings">
                            <motion.div 
                                className="orbital-ring ring-1"
                                variants={orbitalVariants}
                                animate="orbit"
                            />
                            <motion.div 
                                className="orbital-ring ring-2"
                                variants={orbitalVariants}
                                animate="orbit"
                                style={{ animationDelay: '10s' }}
                            />
                            <motion.div 
                                className="orbital-ring ring-3"
                                variants={orbitalVariants}
                                animate="orbit"
                                style={{ animationDelay: '5s' }}
                            />
                        </div>

                        {/* Iconos orbitales con categorías */}
                        <motion.div className="tech-orbit" variants={orbitalVariants} animate="orbit">
                            {techIcons.map(({ Icon, color, angle, radius, delay, category }, index) => (
                                <motion.div
                                    key={index}
                                    className={`orbital-icon ${category}`}
                                    style={{
                                        '--angle': `${angle}deg`,
                                        '--radius': `${radius}px`,
                                        '--color': color
                                    }}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: delay, duration: 0.5 }}
                                    title={`${Icon.displayName || 'Tech'} - ${category.toUpperCase()}`}
                                >
                                    <motion.div
                                        variants={pulseVariants}
                                        animate="pulse"
                                        className="icon-wrapper"
                                    >
                                        <Icon />
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Hexágono central */}
                        <motion.div 
                            className="hexagon-container"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <div className="hexagon">
                                <div className="hexagon-inner">
                                    <div className="hexagon-core">
                                        <img src={myPhoto} alt="Francisco Bochkariov - Desarrollador Web Full-Stack en Kodia | Especialista en React, Python, Django y Node.js" className="profile-image" />
                                        <div className="scan-line"></div>
                                        <div className="glitch-overlay"></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Partículas flotantes */}
                        <div className="particles">
                            {Array.from({ length: 12 }, (_, i) => (
                                <div 
                                    key={i} 
                                    className="particle" 
                                    style={{ 
                                        '--delay': `${i * 0.5}s`,
                                        '--duration': `${3 + (i % 3)}s` 
                                    }}
                                />
                            ))}
                        </div>

                        {/* Grid de fondo */}
                        <div className="cyber-grid"></div>
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.div
                className="vb-cert-container"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <h3 className="vb-cert-title">Certificación Profesional en Programación</h3>
                <motion.div 
                    className="vb-cert-image-wrapper"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                >
                    <img src={vbCertImage} alt="Certificado Profesional de Programación Visual Basic - Francisco Bochkariov | Kodia Desarrollo Web" className="vb-cert-image" />
                    <div className="cert-glow"></div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Sobremi;