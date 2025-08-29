// my-react-portfolio/src/components/ThemeToggle.jsx

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../CSS/themeToggle.css';

const ThemeToggle = () => {
    // El estado inicial es FALSE (modo claro), a menos que ya esté guardado en localstorage.
    // Usaremos un hook para manejar esto de manera más robusta,
    // pero para esta implementación simple, el valor por defecto es false.
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Al montar el componente, verifica si el usuario tenía el modo oscuro activado
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            setIsDarkMode(true);
        } else {
            // Por defecto, la página siempre carga en modo claro
            document.body.classList.remove('dark-mode');
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        const newIsDarkMode = !isDarkMode;
        setIsDarkMode(newIsDarkMode);

        if (newIsDarkMode) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    };

    // Variantes para la animación de la bombilla
    const bulbVariants = {
        off: { opacity: 0.3, scale: 0.8 },
        on: { opacity: 1, scale: 1 }
    };

    // Variantes para la animación de la cuerda: movimiento de péndulo constante
    const ropeVariants = {
        rest: {
            rotate: [-5, 5],
            transition: {
                rotate: {
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                }
            }
        },
        pull: {
            rotate: -15,
            y: 5, // Baja un poco más
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 10,
                mass: 1.5
            }
        }
    };
    
    return (
        <motion.div 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Alternar modo de tema (claro/oscuro)"
            role="button"
            tabIndex="0"
        >
            <div className="toggle-switch">
                <motion.div 
                    className="bulb"
                    variants={bulbVariants}
                    initial={isDarkMode ? "off" : "on"}
                    animate={isDarkMode ? "off" : "on"}
                    transition={{ duration: 0.5 }}
                />
                <motion.div 
                    className="rope"
                    variants={ropeVariants}
                    animate={isDarkMode ? "pull" : "rest"}
                >
                    <div className="pull-handle"></div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ThemeToggle;