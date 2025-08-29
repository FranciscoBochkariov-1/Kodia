import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCode, FaRocket, FaDatabase, FaCheck, FaStar, FaArrowRight } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import '../CSS/servicios.css';

// Registrar el plugin de ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Servicios = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const cardsRef = useRef([]);
    const extrasRef = useRef(null);
    const finalCtaRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animación del título principal
            gsap.fromTo(titleRef.current,
                { opacity: 0, y: 25, scale: 0.8 },
                {
                    opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power3.out",
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Animación de las cards con stagger
            gsap.fromTo(cardsRef.current,
                { opacity: 0, y: 35, rotationX: 15, scale: 0.9 },
                {
                    opacity: 1, y: 0, rotationX: 0, scale: 1, duration: 1.2, ease: "power3.out", stagger: 0.2,
                    scrollTrigger: {
                        trigger: ".servicios-grid",
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Animación de extras
            gsap.fromTo(extrasRef.current,
                { opacity: 0, y: 25, scale: 0.95 },
                {
                    opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out",
                    scrollTrigger: {
                        trigger: extrasRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Animación del CTA final
            gsap.fromTo(finalCtaRef.current,
                { opacity: 0, y: 25 },
                {
                    opacity: 1, y: 0, duration: 1.2, ease: "power3.out",
                    scrollTrigger: {
                        trigger: finalCtaRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Efecto de flotación sutil en las cards
            cardsRef.current.forEach((card, index) => {
                gsap.to(card, {
                    y: -8, duration: 3, ease: "power2.inOut", repeat: -1, yoyo: true, delay: index * 0.3,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        toggleActions: "play pause resume pause"
                    }
                });
            });

        }, sectionRef.current);

        return () => ctx.revert();
    }, []);

    const serviceData = [
        {
            title: "Sitio Informativo",
            icon: <FaCode />,
            description: "Presencia web profesional y elegante para tu negocio. Diseño moderno con todas las funcionalidades esenciales.",
            price: "Desde $250 USD",
            popular: false,
            includes: ["Diseño responsive premium", "Formulario de contacto avanzado", "Integración completa redes sociales", "Optimización de velocidad", "SEO básico incluido", "Hosting + Dominio por 1 año", "SSL y seguridad configurada"],
            idealFor: "Negocios locales, emprendedores y profesionales que buscan presencia digital sólida",
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            delay: 0
        },
        {
            title: "Landing Page",
            icon: <FaRocket />,
            description: "Página de alto impacto diseñada específicamente para conversiones y captación de leads efectiva.",
            price: "Desde $450 USD",
            popular: true,
            includes: ["Diseño premium con animaciones", "Hasta 6 secciones dinámicas", "Formularios con validación avanzada", "Integración WhatsApp y redes", "SEO avanzado y optimización", "Analytics y tracking incluido", "Hosting premium + Dominio", "Soporte técnico 3 meses"],
            idealFor: "Campañas de marketing, lanzamientos de productos y captación masiva de clientes",
            gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            delay: 0.2
        },
        {
            title: "Desarrollo Completo",
            icon: <FaDatabase />,
            description: "Solución web completa y personalizada con backend robusto. E-commerce, sistemas de gestión y más.",
            price: "Desde $900 USD",
            popular: false,
            includes: ["Desarrollo full-stack Django + React", "Panel administrativo completo", "Sistema de usuarios y permisos", "Base de datos optimizada", "API REST personalizada", "Diseño responsive premium", "SEO profesional avanzado", "Hosting enterprise + Dominio", "Mantenimiento 6 meses incluido"],
            idealFor: "E-commerce, plataformas de gestión, sistemas empresariales y proyectos complejos",
            gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            delay: 0.4
        }
    ];

    const extraServices = [
        "Mantenimiento mensual y actualizaciones",
        "Correo corporativo profesional",
        "Google Analytics y métricas avanzadas",
        "Seguridad SSL y monitoreo 24/7",
        "Asesoramiento digital estratégico",
        "Integración con CRM y herramientas",
        "Capacitación en uso de la plataforma",
        "Soporte técnico prioritario"
    ];

    return (
        <section id="servicios" className="servicios-section" ref={sectionRef}>
            {/* Metadatos: Idealmente se manejan con React Helmet u otra biblioteca para SEO */}
            {/* <title>Servicios Web Profesionales - Tu Empresa</title> */}
            {/* <meta name="description" content="Ofrecemos desarrollo web profesional: sitios informativos, landing pages y soluciones completas. SEO, diseño y soporte técnico incluidos." /> */}

            <div className="services-container">
                {/* Elementos decorativos de fondo */}
                <div className="bg-decoration">
                    <div className="floating-shapes">
                        <div className="shape shape-1"></div>
                        <div className="shape shape-2"></div>
                        <div className="shape shape-3"></div>
                    </div>
                </div>

                {/* Título principal */}
                <div className="section-header" ref={titleRef}>
                    <div className="title-badge">
                        <HiSparkles className="sparkle-icon" />
                        <span>Servicios Premium</span>
                    </div>
                    <h2 className="section-title">
                        Soluciones Web
                        <span className="title-gradient"> Profesionales</span>
                    </h2>
                    <p className="section-description">
                        Desarrollo web moderno con tecnologías de vanguardia.
                        Desde sitios informativos hasta plataformas complejas.
                    </p>
                </div>

                {/* Grid de servicios */}
                <div className="servicios-grid">
                    {serviceData.map((service, index) => (
                        <div
                            key={index}
                            className={`service-card ${service.popular ? 'popular' : ''}`}
                            ref={el => cardsRef.current[index] = el}
                            style={{ '--delay': service.delay + 's' }}
                        >
                            {service.popular && (
                                <div className="popular-badge">
                                    <FaStar className="star-icon" />
                                    <span>Más Popular</span>
                                </div>
                            )}

                            <div className="card-header">
                                <div
                                    className="service-icon"
                                    style={{ background: service.gradient }}
                                    role="img"
                                    aria-label={`Ícono de ${service.title}`}
                                >
                                    {service.icon}
                                </div>
                                <div className="service-info">
                                    <h3 className="service-title">{service.title}</h3>
                                    <p className="service-description">{service.description}</p>
                                </div>
                            </div>

                            <div className="price-section">
                                <div className="price-container">
                                    <span className="current-price">{service.price}</span>
                                </div>
                                <span className="price-note">Precio inicial</span>
                            </div>

                            <div className="features-list">
                                <h4 className="features-title">✨ Incluye todo esto:</h4>
                                <ul className="features">
                                    {service.includes.map((feature, i) => (
                                        <li key={i} className="feature-item">
                                            <FaCheck className="check-icon" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="ideal-for">
                                <span className="ideal-label">💡 Perfecto para:</span>
                                <p className="ideal-text">{service.idealFor}</p>
                            </div>

                            <a
                                href="#contact"
                                className="cta-button"
                                role="button"
                                aria-label={`Empezar proyecto de ${service.title}`}
                            >
                                <span>Empezar Proyecto</span>
                                <FaArrowRight className="arrow-icon" />
                            </a>
                        </div>
                    ))}
                </div>

                {/* Servicios adicionales */}
                <div className="extras-section" ref={extrasRef}>
                    <div className="extras-content">
                        <div className="extras-header">
                            <h3 className="extras-title">
                                <HiSparkles className="sparkle-icon" />
                                Servicios Adicionales Premium
                            </h3>
                            <p className="extras-description">
                                Complementa tu proyecto con estos servicios profesionales
                            </p>
                        </div>

                        <div className="extras-grid">
                            {extraServices.map((service, index) => (
                                <div key={index} className="extra-item">
                                    <div className="extra-icon" role="img" aria-label="Icono de rayo">⚡</div>
                                    <span className="extra-text">{service}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA final */}
                <div className="final-cta" ref={finalCtaRef}>
                    <div className="cta-content">
                        <h3 className="cta-title">¿Listo para llevar tu negocio al siguiente nivel?</h3>
                        <p className="cta-description">
                            Hablemos de tu proyecto y encontremos la solución perfecta
                        </p>
                        <a
                            href="#contact"
                            className="primary-cta-button"
                            role="button"
                            aria-label="Contactar ahora para un proyecto"
                        >
                            <span>Contactar Ahora</span>
                            <FaArrowRight className="arrow-icon" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Servicios;