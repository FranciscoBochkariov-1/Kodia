// my-react-portfolio/src/components/ContactSection.jsx

import React, { useState, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';
import '../CSS/contacto.css';

const ContactSection = () => {
    // URL de Getform.io. ¡Asegúrate de que esta URL sea la correcta!
    const GETFORM_ENDPOINT = "https://getform.io/f/ajjogova";

    // Hook para detectar la visibilidad de la sección
    const { ref: sectionRef, inView: sectionInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState('idle');

    // Inicializa la librería de partículas. Se usa useCallback para optimización.
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    // Callback para cuando las partículas terminan de cargar. Opcional.
    const particlesLoaded = useCallback(async (container) => {
        if (container) {
            console.log("Particles container loaded", container);
        }
    }, []);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('submitting');
        try {
            const response = await fetch(GETFORM_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setFormStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setFormStatus('error');
                const data = await response.json();
                console.error('Getform.io error:', data);
            }
        } catch (error) {
            setFormStatus('error');
            console.error('Submission error:', error);
        }
    };

    // Variantes de animación de Framer Motion
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="contact-section" id="contact" ref={sectionRef}>
            {/* Componente de partículas para el fondo animado */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: { value: "transparent" },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                        },
                        modes: {
                            repulse: {
                                distance: 100,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: { value: "#00b8d4" },
                        links: {
                            color: "#00b8d4",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
            
            <motion.div
                className="contact-container"
                initial="hidden"
                animate={sectionInView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                <motion.div className="contact-info-block">
                    <motion.h2 className="contact-title" variants={itemVariants}>
                        Hablemos de tu <span className="gradient-text glitch" data-text="proyecto">proyecto</span>
                    </motion.h2>
                    <motion.p className="contact-description" variants={itemVariants}>
                        Si tienes una idea en mente, un proyecto a desarrollar o simplemente quieres saludar, no dudes en contactarme.
                    </motion.p>
                    
                    <motion.div className="contact-details" variants={itemVariants}>
                        <div className="contact-detail">
                            <FaEnvelope className="detail-icon" />
                            <span>kodiaweb@outlook.es</span>
                        </div>
                        <div className="contact-detail">
                            <FaPhone className="detail-icon" />
                            <span>+598 92 307 450</span>
                        </div>
                        <div className="contact-detail">
                            <FaMapMarkerAlt className="detail-icon" />
                            <span>Paysandú, Uruguay</span>
                        </div>
                    </motion.div>
                    
                    <motion.div className="social-links" variants={itemVariants}>
                        <a href="https://wa.me/59892307450" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
                        <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                        <a href="https://github.com/FranciscoBochkariov-1" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                        <a href="https://www.instagram.com/kodia.uy?igsh=cTRxdmRzOTdtdnB5" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                        <a href="https://www.facebook.com/profile.php?id=61575283292387" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
                        <a href="https://www.tiktok.com/@kodiadev?_t=ZM-8yXxtts81Uz&_r=1" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><FaTiktok /></a>
                    </motion.div>
                </motion.div>

                <motion.form
                    className="contact-form glass-effect"
                    variants={itemVariants}
                    onSubmit={handleSubmit}
                >
                    <motion.div className="form-group" whileHover={{ scale: 1.01 }}>
                        <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
                        <label htmlFor="name">Nombre completo</label>
                    </motion.div>

                    <motion.div className="form-group" whileHover={{ scale: 1.01 }}>
                        <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
                        <label htmlFor="email">Correo electrónico</label>
                    </motion.div>

                    <motion.div className="form-group" whileHover={{ scale: 1.01 }}>
                        <input type="text" id="subject" name="subject" required value={formData.subject} onChange={handleChange} />
                        <label htmlFor="subject">Asunto</label>
                    </motion.div>

                    <motion.div className="form-group" whileHover={{ scale: 1.01 }}>
                        <textarea id="message" name="message" required value={formData.message} onChange={handleChange}></textarea>
                        <label htmlFor="message">Describe tu proyecto</label>
                    </motion.div>
                    
                    <motion.div className="form-status-messages">
                        {formStatus === 'success' && (
                            <p className="form-status-success">¡Mensaje enviado con éxito! Te responderé pronto.</p>
                        )}
                        {formStatus === 'error' && (
                            <p className="form-status-error">Hubo un error al enviar. Por favor, inténtalo de nuevo.</p>
                        )}
                    </motion.div>
                    
                    <motion.button
                        type="submit"
                        className="primary-btn submit-btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={formStatus === 'submitting'}
                    >
                        {formStatus === 'submitting' ? 'Enviando...' : 'Enviar mensaje'} <FaEnvelope />
                    </motion.button>
                </motion.form>
            </motion.div>
        </section>
    );
};

export default ContactSection;
