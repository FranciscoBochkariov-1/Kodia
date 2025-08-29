// my-react-portfolio/src/components/HeroSection.jsx

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Helmet } from 'react-helmet-async';
import Hyperspeed from './Hyperspeed/Hyperspeed';
import { hyperspeedPresets } from './Hyperspeed/hyperspeedPresets';
import '../CSS/hero.css';

// Variantes de animación de Framer Motion
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.5,
        }
    }
};

const titleVariants = {
    hidden: { 
        opacity: 0, 
        y: -20, // Animación sutil
        filter: "blur(10px)"
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            type: "spring",
            stiffness: 120,
            damping: 25,
            duration: 1
        }
    }
};

const subtitleVariants = {
    hidden: { 
        opacity: 0, 
        y: 20, // Animación sutil
        filter: "blur(10px)"
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.5,
            duration: 0.8
        }
    }
};

const ctaVariants = {
    hidden: { 
        opacity: 0, 
        y: 20,
        scale: 0.9
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 150,
            damping: 20,
            delay: 0.8
        }
    },
    hover: {
        scale: 1.05,
        boxShadow: "0 10px 30px rgba(0, 123, 255, 0.4)", // Sombra mejorada
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 10
        }
    },
    tap: {
        scale: 0.95
    }
};

const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: 1.2 + i * 0.2,
            duration: 0.6,
            ease: "easeOut"
        }
    })
};

const HeroSection = () => {
    const [mounted, setMounted] = useState(false);
    const [hyperspeedKey, setHyperspeedKey] = useState(0);

    useEffect(() => {
        setMounted(true);
        const timer = setTimeout(() => {
            setHyperspeedKey(1);
        }, 100);
        
        return () => clearTimeout(timer);
    }, []);

    const customHyperspeedConfig = {
        ...hyperspeedPresets.one,
        speedUp: 1.5,
        fov: 85,
        fovSpeedUp: 140,
        carLightsFade: 0.6,
        totalSideLightSticks: 30,
        lightPairsPerRoadWay: 50,
        colors: {
            roadColor: 0x0a0a0a,
            islandColor: 0x0d0d0d,
            background: 0x000000,
            shoulderLines: 0x1a1a2e,
            brokenLines: 0x16213e,
            leftCars: [0x00d4ff, 0x0099cc, 0x007bff],
            rightCars: [0xff6b6b, 0xe63946, 0xdc2626],
            sticks: 0x00d4ff,
        }
    };

    const features = [
        { text: 'Webs rápidas', iconClass: 'fas fa-rocket' },
        { text: 'Responsivas', iconClass: 'fas fa-mobile-alt' },
        { text: 'SEO optimizado', iconClass: 'fas fa-search' },
    ];

    return (
        <>
            <Helmet>
                <title>Kodia | Desarrollo Web Moderno y Personalizado</title>
                <meta 
                    name="description" 
                    content="Kodia crea páginas web únicas, rápidas y optimizadas para impulsar tu negocio. Soluciones digitales a medida para tu marca." 
                />
                <meta 
                    name="keywords" 
                    content="desarrollo web, Kodia, React, JavaScript, SEO, responsivo, web rápida, full stack, portafolio" 
                />
                <meta name="author" content="Kodia" />
                <meta property="og:title" content="Kodia | Desarrollo Web Moderno y Personalizado" />
                <meta property="og:description" content="En Kodia creo páginas web únicas, rápidas y optimizadas para que tu negocio crezca en el mundo digital." />
                <meta property="og:url" content="https://tu-dominio.com" />
                <meta property="og:site_name" content="Kodia - Desarrollador Web" />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="canonical" href="https://tu-dominio.com" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Kodia",
                        "jobTitle": "Desarrollo Web Moderno",
                        "url": "https://tu-dominio.com",
                        "sameAs": [
                            "https://linkedin.com/in/tu-perfil",
                            "https://github.com/tu-usuario"
                        ]
                    })}
                </script>
            </Helmet>

            <section 
                id="hero" 
                className="hero-section" 
                role="banner" 
                aria-label="Sección principal de bienvenida"
            >
                {mounted && (
                    <div className="hero-background-3d" aria-hidden="true">
                        <Hyperspeed 
                            key={hyperspeedKey}
                            effectOptions={customHyperspeedConfig} 
                        />
                    </div>
                )}
                
                <div className="hero-overlay" aria-hidden="true"></div>
                
                <motion.div
                    className="hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    role="main"
                >
                    <motion.h1
                        className="hero-title"
                        variants={titleVariants}
                    >
                        Desarrollo Web Moderno y Personalizado
                    </motion.h1>
                    
                    <motion.p
                        className="hero-subtitle"
                        variants={subtitleVariants}
                    >
                        En <span className="kodia-k">K</span>odia creo páginas web únicas, rápidas y optimizadas para que tu negocio crezca en el mundo digital.
                    </motion.p>

                    <motion.div
                        className="cta-container"
                        variants={containerVariants}
                    >
                        <motion.div
                            variants={ctaVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <ScrollLink
                                to="portfolio"
                                smooth={true}
                                duration={800}
                                className="hero-cta-button primary"
                                role="button"
                                aria-label="Ver portafolio de proyectos"
                            >
                                <i className="fas fa-eye"></i> Ver Proyectos
                            </ScrollLink>
                        </motion.div>
                        
                        <motion.div
                            variants={ctaVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <ScrollLink
                                to="contact"
                                smooth={true}
                                duration={800}
                                className="hero-cta-button secondary"
                                role="button"
                                aria-label="Contactar para trabajar juntos"
                            >
                                <i className="fas fa-paper-plane"></i> Contáctame
                            </ScrollLink>
                        </motion.div>
                    </motion.div>

                    <div className="features-container">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="feature-item"
                                custom={index}
                                variants={featureVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <i className={feature.iconClass}></i>
                                <span className="feature-text">{feature.text}</span>
                            </motion.div>
                        ))}
                    </div>

                </motion.div>
            </section>
        </>
    );
};

export default HeroSection;