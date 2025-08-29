// my-react-portfolio/src/components/AcercaDe.jsx

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaExpandAlt, FaMobileAlt } from 'react-icons/fa';
import { FaGear } from 'react-icons/fa6';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../CSS/acercade.css';

// Registra el plugin de ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const AcercaDe = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const stepsRef = useRef([]);
    const pillarsRef = useRef([]);
    const lineFillRef = useRef(null);

    useEffect(() => {
        const title = titleRef.current;
        const steps = stepsRef.current;
        const pillars = pillarsRef.current;
        const lineFill = lineFillRef.current;

        // Animación de la línea de progreso (barra de progreso)
        gsap.fromTo(lineFill, { scaleY: 0 }, {
            scaleY: 1,
            transformOrigin: "top",
            ease: "none",
            scrollTrigger: {
                trigger: ".work-process-container",
                start: "top center",
                end: "bottom center",
                scrub: true,
            }
        });

        // Animación de los pasos individuales
        steps.forEach((step, index) => {
            // Animación de la entrada del paso
            gsap.fromTo(step, { x: -50, opacity: 0 }, {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: step,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            });

            // Animación del color del paso (borde y texto)
            gsap.to(step, {
                "--primary-color-step": "#00CFFF",
                "--text-light-step": "#00CFFF",
                "--border-color-step": "#00CFFF",
                duration: 0.5,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: step,
                    start: "top center",
                    end: "center center",
                    toggleActions: "play reverse play reverse",
                    scrub: true
                }
            });
        });

        // Animación de los pilares
        gsap.fromTo(pillars, { y: 50, opacity: 0 }, {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: '.pillars-grid',
                start: "top 80%",
            }
        });

    }, []);

    const processSteps = [
        {
            title: "Reunión inicial y preguntas clave",
            description: "Me reúno contigo para conocer tu proyecto a fondo. Hago preguntas clave para entender tu visión, el propósito de la web y el público al que va dirigida."
        },
        {
            title: "Wireframe y diseño en Figma",
            description: "Con esa información preparo un boceto interactivo en Figma. Esto te permite visualizar cómo se verá tu sitio antes de escribir una sola línea de código. Aquí revisamos juntos y ajustamos lo necesario."
        },
        {
            title: "Definición de tecnologías",
            description: "Según la complejidad del proyecto, elijo el stack ideal. Desde proyectos ligeros con HTML, CSS y JS, hasta aplicaciones dinámicas con React, Vite o Next.js, y backends sólidos con Node.js, Django o MySQL."
        },
        {
            title: "Desarrollo y construcción",
            description: "Una vez validado el diseño, paso al desarrollo. Implemento el frontend, conecto el backend y cuido cada detalle de la experiencia de usuario. Siempre optimizando para rendimiento y SEO."
        },
        {
            title: "Pruebas y optimización",
            description: "Antes del lanzamiento, realizo pruebas de usabilidad, compatibilidad en distintos dispositivos y ajustes de velocidad."
        },
        {
            title: "Entrega y soporte inicial",
            description: "Te entrego el proyecto funcionando y ofrezco soporte inicial para que te sientas acompañado en los primeros pasos."
        }
    ];

    return (
        <section id="acerca-de" className="acerca-de-section" ref={sectionRef}>
            <div className="container">
                <motion.h2 className="acerca-de-title" ref={titleRef}>
                    Mi proceso de <span className="gradient-underline">trabajo</span>
                </motion.h2>

                <div className="work-process-container">
                    <div className="process-line">
                        <div className="process-line-fill" ref={lineFillRef}></div>
                    </div>
                    {processSteps.map((step, index) => (
                        <div
                            key={index}
                            className={`process-step`}
                            ref={el => stepsRef.current[index] = el}
                        >
                            <div className="process-icon-wrapper">
                                <span className="process-number">{index + 1}</span>
                            </div>
                            <div className="process-content">
                                <h3 className="process-subtitle">{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <h3 className="pillars-title">
                    Pilares de cada <span className="gradient-underline">proyecto</span>
                </h3>

                <div className="pillars-grid">
                    <div className="pillar-card" ref={el => pillarsRef.current[0] = el}>
                        <FaShieldAlt className="pillar-icon" />
                        <h4>Seguro</h4>
                        <p>Construcciones digitales robustas y protegidas para tu tranquilidad.</p>
                    </div>
                    <div className="pillar-card" ref={el => pillarsRef.current[1] = el}>
                        <FaExpandAlt className="pillar-icon" />
                        <h4>Escalable</h4>
                        <p>Listo para crecer junto a tu negocio, sin límites ni complicaciones.</p>
                    </div>
                    <div className="pillar-card" ref={el => pillarsRef.current[2] = el}>
                        <FaMobileAlt className="pillar-icon" />
                        <h4>Responsive</h4>
                        <p>Diseño que se adapta a cualquier dispositivo, ofreciendo la mejor experiencia.</p>
                    </div>
                    <div className="pillar-card" ref={el => pillarsRef.current[3] = el}>
                        <FaGear className="pillar-icon" />
                        <h4>Funcional</h4>
                        <p>Pensado para funcionar a la perfección, no solo para verse bien.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AcercaDe;