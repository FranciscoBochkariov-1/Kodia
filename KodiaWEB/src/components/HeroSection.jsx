    import React, { useState, useEffect } from 'react';
    import { motion } from 'framer-motion';
    import '../CSS/Hero2.css';

    const HeroSection = () => {
    const [currentText, setCurrentText] = useState(0);
    
    const heroTexts = [
        "Desarrollo sitios web increíbles",
        "Creo experiencias digitales únicas", 
        "Transformo ideas en código",
        "Impulso tu presencia online"
    ];

    // Efecto de texto rotativo
    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentText((prev) => (prev + 1) % heroTexts.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Variantes de animación para los elementos principales
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            duration: 0.6
        }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10
        }
        }
    };

    const floatingVariants = {
        float: {
        y: [-20, 20, -20],
        rotate: [0, 5, -5, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }
        }
    };

    const codeBlockVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 1.2,
            duration: 0.8,
            type: "spring",
            stiffness: 120
        }
        }
    };

    return (
        <section className="hero-section">
        {/* Elementos de fondo animados dinámicos */}
        <div className="hero-background">
            <motion.div 
            className="floating-element element-1"
            variants={floatingVariants}
            animate="float"
            />
            <motion.div 
            className="floating-element element-2"
            variants={floatingVariants}
            animate="float"
            transition={{ delay: 1 }}
            />
            <motion.div 
            className="floating-element element-3"
            variants={floatingVariants}
            animate="float"
            transition={{ delay: 2 }}
            />
            <motion.div 
            className="floating-element element-4"
            variants={floatingVariants}
            animate="float"
            transition={{ delay: 0.5 }}
            />
            <motion.div 
            className="floating-element element-5"
            variants={floatingVariants}
            animate="float"
            transition={{ delay: 1.5 }}
            />
            
            {/* Partículas dinámicas */}
            <div className="particles-container">
            {[...Array(15)].map((_, i) => (
                <motion.div
                key={i}
                className="particle"
                animate={{
                    y: [-20, -100, -20],
                    x: [0, Math.random() * 100 - 50, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                }}
                transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                    ease: "easeInOut"
                }}
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`
                }}
                />
            ))}
            </div>

            {/* Ondas de fondo */}
            <motion.div 
            className="wave wave-1"
            animate={{
                rotate: [0, 360]
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
            }}
            />
            <motion.div 
            className="wave wave-2"
            animate={{
                rotate: [360, 0]
            }}
            transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
            }}
            />
        </div>

        <div className="hero-container">
            <motion.div 
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            >
            <motion.div className="hero-badge" variants={itemVariants}>
                <span className="badge-text">💻 Desarrollador Full-Stack</span>
            </motion.div>

            <motion.h1 className="hero-title" variants={itemVariants}>
                <span className="title-line">Código que</span>
                <span className="title-line highlight">inspira</span>
                <span className="title-line">resultados</span>
            </motion.h1>

            <motion.div className="hero-subtitle" variants={itemVariants}>
                <motion.span 
                key={currentText}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="rotating-text"
                >
                {heroTexts[currentText]}
                </motion.span>
            </motion.div>

            <motion.p className="hero-description" variants={itemVariants}>
                <span className="description-highlight">Transformo ideas complejas en experiencias digitales simples y potentes.</span>
                <br />
                Especializado en React, Node.js y tecnologías modernas. 
                Ayudo a emprendimientos y empresas a crear su presencia digital 
                con soluciones escalables y resultados medibles.
            </motion.p>

            <motion.div className="hero-buttons" variants={itemVariants}>
                <motion.button 
                className="btn-primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                >
                Ver mis proyectos
                </motion.button>
                <motion.button 
                className="btn-secondary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                >
                Hablemos de tu proyecto
                </motion.button>
            </motion.div>

            <motion.div className="hero-stats" variants={itemVariants}>
                <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Proyectos completados</span>
                </div>
                <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Años de experiencia</span>
                </div>
                <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Clientes satisfechos</span>
                </div>
            </motion.div>
            </motion.div>

            <motion.div 
            className="hero-visual"
            variants={codeBlockVariants}
            initial="hidden"
            animate="visible"
            >
            <div className="code-window">
                <div className="window-header">
                <div className="window-controls">
                    <span className="control red"></span>
                    <span className="control yellow"></span>
                    <span className="control green"></span>
                </div>
                <span className="window-title">portfolio.js</span>
                </div>
                <div className="code-content">
                <pre>
                    <code>
    {`const developer = {
    name: "Tu Nombre",
    role: "Full-Stack Developer",
    skills: [
        "React", "Node.js", 
        "JavaScript", "Python"
    ],
    passion: "Creating amazing web experiences",
    
    build: () => {
        return "Something awesome! 🚀"
    }
    }`}
                    </code>
                </pre>
                </div>
            </div>
            </motion.div>
        </div>

        {/* Indicador de scroll */}
        <motion.div 
            className="scroll-indicator"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
        >
            <motion.div 
            className="scroll-mouse"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="scroll-text">Descubre más</span>
        </motion.div>
        </section>
    );
    };

    export default HeroSection;