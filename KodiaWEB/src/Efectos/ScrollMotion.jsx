    // src/Efectos/ScrollMotion.jsx (versión avanzada)

    import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
    import { useEffect } from 'react';

    const SmoothScrollWrapper = ({ children }) => {
    const { scrollYProgress } = useScroll();
    
    // Crear un spring suave para el scroll
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Efecto parallax muy sutil
    const y = useTransform(scrollYProgress, [0, 1], [0, -30]);

    useEffect(() => {
        // Configuración de scroll suave nativo
        document.documentElement.style.scrollBehavior = 'smooth';
        
        // Interceptar clicks en enlaces ancla
        const handleAnchorClick = (e) => {
        const target = e.target.closest('a[href^="#"]');
        if (target && target.getAttribute('href') !== '#') {
            e.preventDefault();
            const targetId = target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
            }
        }
        };

        document.addEventListener('click', handleAnchorClick);
        
        return () => {
        document.documentElement.style.scrollBehavior = 'auto';
        document.removeEventListener('click', handleAnchorClick);
        };
    }, []);

    return (
        <>
        {/* Barra de progreso del scroll (opcional) */}
        <motion.div
            className="scroll-progress-bar"
            style={{ 
            scaleX,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
            transformOrigin: '0%',
            zIndex: 9999
            }}
        />
        
        {/* Wrapper con efecto parallax sutil */}
        <motion.div
            style={{ y }}
            transition={{
            type: "tween",
            ease: [0.25, 0.46, 0.45, 0.94], // Curva de Bézier personalizada
            duration: 0.6,
            }}
        >
            {children}
        </motion.div>
        </>
    );
    };

    export default SmoothScrollWrapper;