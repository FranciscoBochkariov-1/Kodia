import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaTiktok, FaChevronUp } from 'react-icons/fa';
import '../CSS/SocialMediaBar.css';

const SocialMediaBar = () => {
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    // Escucha el evento de scroll para mostrar u ocultar el botón
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) { // Muestra el botón después de 300px de scroll
                setShowScrollToTop(true);
            } else {
                setShowScrollToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Función para hacer scroll al inicio de la página
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Variantes de animación de Framer Motion
    const containerVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 10,
                delay: 1,
                when: 'beforeChildren',
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 },
    };

    const scrollToTopVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 },
    };

    return (
        <motion.div
            className="social-media-bar"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <AnimatePresence>
                {showScrollToTop && (
                    <motion.button
                        className="social-icon scroll-to-top"
                        onClick={scrollToTop}
                        variants={scrollToTopVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        aria-label="Ir al inicio"
                    >
                        <FaChevronUp />
                    </motion.button>
                )}
            </AnimatePresence>
            <motion.a
                href="https://wa.me/59892307450"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon whatsapp"
                variants={itemVariants}
                aria-label="Contactar por WhatsApp"
            >
                <FaWhatsapp />
            </motion.a>
            <motion.a
                href="https://www.instagram.com/kodia.uy?igsh=cTRxdmRzOTdtdnB5"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon instagram"
                variants={itemVariants}
                aria-label="Ver perfil de Instagram"
            >
                <FaInstagram />
            </motion.a>
            <motion.a
                href="https://www.tiktok.com/@kodiadev?_t=ZM-8yXxtts81Uz&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon tiktok"
                variants={itemVariants}
                aria-label="Ver perfil de TikTok"
            >
                <FaTiktok />
            </motion.a>
        </motion.div>
    );
};

export default SocialMediaBar;