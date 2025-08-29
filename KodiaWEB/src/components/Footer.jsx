    import React from 'react';
    import { motion, useInView } from 'framer-motion';
    import { FaGithub, FaInstagram, FaTiktok } from 'react-icons/fa';
    import '../CSS/Footer.css';

    const Footer = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

    const footerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 15,
            delay: 0.3,
        },
        },
    };

    return (
        <motion.footer
        ref={ref}
        className="main-footer"
        variants={footerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        >
        <div className="footer-container">
            <div className="footer-content">
            <div className="footer-section about">
                <h2 className="logo-text">
                <span className="logo-k">K</span>
                <span className="logo-odia">odia</span>
                </h2>
                <p>
                Desarrollador Full Stack con pasión por crear experiencias digitales innovadoras y funcionales.
                </p>
            </div>

            <div className="footer-section social">
                <h3>Sígueme</h3>
                <div className="social-links">
                <a href="https://github.com/FranciscoBochkariov-1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/kodia.uy?igsh=cTRxdmRzOTdtdnB5" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram />
                </a>
                <a href="https://www.tiktok.com/@kodiadev?_t=ZM-8yXxtts81Uz&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                    <FaTiktok />
                </a>
                </div>
            </div>
            </div>

            <div className="footer-bottom">
            &copy; {new Date().getFullYear()} Todos los derechos reservados.
            </div>
        </div>
        </motion.footer>
    );
    };

    export default Footer;