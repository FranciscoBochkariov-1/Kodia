// my-react-portfolio/src/components/Header.jsx

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { gsap } from 'gsap';
import ThemeToggle from './ThemeToggle';
import '../CSS/header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const headerRef = useRef(null);
    const navItemsRef = useRef([]);

    // Animación de entrada con GSAP al cargar la página
    useEffect(() => {
        gsap.fromTo(headerRef.current, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' });
        
        // Stagger de los enlaces de navegación con GSAP
        gsap.fromTo(navItemsRef.current, { opacity: 0, y: -20 }, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            stagger: 0.1,
            delay: 0.5
        });

    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Variantes de Framer Motion para el menú móvil
    const navMenuVariants = {
        hidden: { x: '100vw', transition: { ease: 'easeInOut', duration: 0.5 } },
        visible: { x: 0, transition: { ease: 'easeInOut', duration: 0.5 } },
    };

    return (
        <>
            {/* Desktop Header */}
            <header
                ref={headerRef}
                className={`main-header ${isScrolled ? 'scrolled' : ''}`}
                aria-label="Navegación principal"
            >
                <div className="header-container">
                    <ScrollLink
                        to="hero"
                        smooth={true}
                        duration={500}
                        className="logo"
                        aria-label="Ir a la página de inicio de Kodia"
                    >
                        <motion.span
                            className="logo-mark"
                            whileHover={{ scale: 1.1, textShadow: '0 0 10px var(--k-logo-glow-color), 0 0 20px var(--k-logo-glow-color)' }}
                            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                        >
                            K
                        </motion.span>
                        <span className="logo-text">ODIA</span>
                    </ScrollLink>
                    
                    <nav className="desktop-nav" aria-label="Enlaces de navegación">
                        <ul className="nav-list">
                            {['Servicios', 'Portafolio','¿Como trabajo?', 'Acerca de', 'Contacto'].map((item, index) => (
                                <li key={item} ref={el => navItemsRef.current[index] = el}>
                                    <ScrollLink
                                        to={item.toLowerCase().replace(/ /g, '-')}
                                        smooth={true}
                                        duration={500}
                                        className="nav-link"
                                    >
                                        {item}
                                    </ScrollLink>
                                </li>
                            ))}
                        </ul>
                        <ThemeToggle />
                    </nav>

                    <button
                        className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                        aria-expanded={isMenuOpen}
                        aria-label="Abrir menú de navegación"
                    >
                        <FaBars className="icon-open" />
                        <FaTimes className="icon-close" />
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.nav
                        className="mobile-nav"
                        aria-label="Menú de navegación móvil"
                        variants={navMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <ul className="mobile-nav-list">
                            {['Servicios', 'Portafolio','¿Como trabajo?' ,  'Sobre Mí', 'Contacto'].map((item, index) => (
                                <li key={item}>
                                    <ScrollLink
                                        to={item.toLowerCase().replace(/ /g, '-')}
                                        smooth={true}
                                        duration={500}
                                        className="mobile-nav-link"
                                        onClick={closeMenu}
                                    >
                                        {item}
                                    </ScrollLink>
                                </li>
                            ))}
                        </ul>
                        <ThemeToggle />
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;