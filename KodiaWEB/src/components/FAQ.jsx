// my-react-portfolio/src/components/FAQ.jsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import '../CSS/faq.css';
import BlurText from '../Efectos/BlurText'; // Importa el nuevo componente




const faqData = [
    {
        id: 1,
        question: "¿Cuánto cuesta una página web profesional?",
        answer: "El precio depende de las necesidades de tu proyecto. Una landing page informativa suele ser más económica, mientras que una tienda online o un sistema a medida requieren mayor inversión. Siempre preparo una cotización personalizada, adaptada a tu presupuesto y objetivos."
    },
    {
        id: 2,
        question: "¿En cuánto tiempo se entrega una página web?",
        answer: "Un sitio básico puede estar listo en 1 a 2 semanas, mientras que proyectos más complejos pueden tomar de 3 a 6 semanas. El plazo exacto se define al inicio según el alcance del proyecto."
    },
    {
        id: 3,
        question: "¿Qué incluye el servicio de desarrollo web?",
        answer: "Todos mis proyectos incluyen diseño responsive (adaptado a celulares y computadoras), optimización básica para buscadores (SEO) y asesoramiento sobre hosting y dominio. Además, garantizo un código limpio, rápido y escalable."
    },
    {
        id: 4,
        question: "¿Puedo actualizar mi página después de la entrega?",
        answer: "Sí. Desarrollo sitios administrables y escalables, lo que significa que en el futuro se pueden agregar secciones, funcionalidades o incluso convertir tu web en una tienda online sin rehacer todo desde cero."
    },
    {
        id: 5,
        question: "¿Ofreces hosting y dominio?",
        answer: "Sí, puedo gestionar hosting y dominio como servicio adicional. Si ya tienes uno contratado, me adapto a tu proveedor sin problema."
    },
    {
        id: 6,
        question: "¿Qué tecnologías utilizas en tus proyectos?",
        answer: "Trabajo con las tecnologías más modernas: HTML, CSS, JavaScript, React y Vite para frontend, y Node.js, Django o MySQL para backend, según las necesidades de cada proyecto."
    },
    {
        id: 7,
        question: "¿Puedo tener una tienda online o un sistema de reservas?",
        answer: "Claro. Mis desarrollos son escalables, por lo que es posible implementar comercio electrónico, pasarelas de pago, sistemas de reservas o cualquier funcionalidad a medida."
    },
    {
        id: 8,
        question: "¿Qué diferencia hay entre una web hecha con plantillas y una web a medida?",
        answer: "Una web con plantillas puede ser rápida y económica, pero tiene limitaciones. Una web a medida está pensada 100% para tu negocio, es más profesional, optimizada para buscadores y adaptable a futuro."
    }
];

const FAQ = () => {
    const [openId, setOpenId] = useState(null);

    const toggleFAQ = (id) => {
        setOpenId(openId === id ? null : id);
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.1,
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const answerVariants = {
        hidden: { opacity: 0, height: 0, padding: '0 1.5rem' },
        visible: {
            opacity: 1,
            height: "auto",
            padding: '1rem 1.5rem 2rem 1.5rem',
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section id="faq" className="faq-section">
            <motion.div
                className="container"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Aplicamos la animación de blur al título principal */}
                <BlurText
                    text="Preguntas frecuentes"
                    className="faq-title"
                    delay={100}
                    animateBy="words"
                />

                <div className="faq-list">
                    {faqData.map((faq) => (
                        <motion.div className="faq-item" key={faq.id} variants={itemVariants}>
                            <button
                                className={`faq-question ${openId === faq.id ? 'active' : ''}`}
                                onClick={() => toggleFAQ(faq.id)}
                                aria-expanded={openId === faq.id}
                            >
                                {/* Aplicamos la animación de blur a la pregunta */}
                                <BlurText text={faq.question} animateBy="words" delay={50} />

                                <motion.span
                                    className="faq-icon"
                                    animate={{ rotate: openId === faq.id ? 45 : 0 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    {openId === faq.id ? <FaMinus /> : <FaPlus />}
                                </motion.span>
                            </button>
                            <AnimatePresence>
                                {openId === faq.id && (
                                    <motion.div
                                        className="faq-answer-container"
                                        variants={answerVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                    >
                                        <p className="faq-answer">{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default FAQ;