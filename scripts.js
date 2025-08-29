document.addEventListener('DOMContentLoaded', () => {
    // --- Selectores Globales ---
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav .nav-link');
    const mainHeader = document.querySelector('.main-header');
    const contactForm = document.getElementById('contactForm') || document.querySelector('.contact-form');
    const scrollToTopBtn = createScrollToTopButton(); // Creado por una función
    let lastScroll = 0; // Para el efecto del header

    // --- Funcionalidad del Menú Móvil ---
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                    document.body.classList.remove('no-scroll');
                }
            });
        });
    }

    // --- Smooth Scrolling para Enlaces Ancla ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Cierra el menú móvil si está abierto
                if (mainNav && mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                    document.body.classList.remove('no-scroll');
                }

                const headerOffset = mainHeader ? mainHeader.offsetHeight : 0; // Obtén la altura del header
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Actualiza la URL sin recargar
                if (history.pushState) {
                    history.pushState(null, null, targetId);
                } else {
                    location.hash = targetId;
                }
            }
        });
    });

    // --- Sticky Header con Efecto de Scroll (Throttled para rendimiento) ---
    if (mainHeader) {
        const handleScrollHeader = throttle(() => {
            const currentScroll = window.pageYOffset;

            if (currentScroll <= 0) {
                mainHeader.classList.remove('scroll-up', 'scroll-down', 'scrolled');
                return;
            }

            if (currentScroll > lastScroll && !mainHeader.classList.contains('scroll-down')) {
                mainHeader.classList.remove('scroll-up');
                mainHeader.classList.add('scroll-down');
            } else if (currentScroll < lastScroll && mainHeader.classList.contains('scroll-down')) {
                mainHeader.classList.remove('scroll-down');
                mainHeader.classList.add('scroll-up');
            }

            // Añadir/quitar clase 'scrolled' para cambiar estilo del header
            if (currentScroll > 100) { // Puedes ajustar este valor
                mainHeader.classList.add('scrolled');
            } else {
                mainHeader.classList.remove('scrolled');
            }

            lastScroll = currentScroll;
        }, 100); // Throttling a 100ms

        window.addEventListener('scroll', handleScrollHeader);
    }

    // --- Animaciones al Hacer Scroll (Intersection Observer) ---
    // Usamos Intersection Observer para un rendimiento superior comparado con scrollReveal manual
    const animateOnScrollElements = document.querySelectorAll('[data-reveal]');

    if ('IntersectionObserver' in window) {
        const scrollObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    element.classList.add('revealed');

                    // Aplicar delay si está definido
                    const delay = element.getAttribute('data-reveal-delay');
                    if (delay) {
                        element.style.transitionDelay = `${delay}ms`;
                    }
                    observer.unobserve(element);
                }
            });
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.15 // Ajusta si es necesario
        });

        animateOnScrollElements.forEach(element => {
            scrollObserver.observe(element);
        });
    } else {
        // Fallback para navegadores antiguos: revela todo al cargar
        animateOnScrollElements.forEach(element => {
            element.classList.add('revealed');
        });
    }

    // --- Interacciones de Tarjetas de Servicio ---
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.service-icon');
            if (icon) icon.style.transform = 'rotate(5deg) scale(1.1)';

            const badges = this.querySelectorAll('.service-tech li');
            badges.forEach((badge, index) => {
                badge.style.transitionDelay = `${index * 50}ms`;
                badge.style.transform = 'translateY(-3px)';
            });
        });

        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.service-icon');
            if (icon) icon.style.transform = 'rotate(0) scale(1)';

            const badges = this.querySelectorAll('.service-tech li');
            badges.forEach(badge => {
                badge.style.transform = 'translateY(0)';
            });
        });
    });

    // --- Interacciones de Elementos del Portafolio ---
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            const overlay = this.querySelector('.portfolio-overlay');
            const content = this.querySelector('.portfolio-content');
            const image = this.querySelector('.portfolio-image');

            if (overlay) overlay.style.opacity = '1';
            if (content) content.style.transform = 'translateY(0)';
            if (image) image.style.transform = 'scale(1.05)';
        });

        item.addEventListener('mouseleave', function() {
            const overlay = this.querySelector('.portfolio-overlay');
            const content = this.querySelector('.portfolio-content');
            const image = this.querySelector('.portfolio-image');

            if (overlay) overlay.style.opacity = '0';
            if (content) content.style.transform = 'translateY(20px)';
            if (image) image.style.transform = 'scale(1)';
        });
    });

    // --- Validación y Envío de Formulario ---
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) { // Usar async para simular mejor
            e.preventDefault();

            const name = this.querySelector('#name')?.value.trim();
            const email = this.querySelector('#email')?.value.trim();
            const subject = this.querySelector('#subject')?.value.trim();
            const message = this.querySelector('#message')?.value.trim();

            if (!name || !email || !subject || !message) {
                showFormFeedback('Por favor completa todos los campos', 'error');
                return;
            }

            if (!validateEmail(email)) {
                showFormFeedback('Por favor ingresa un email válido', 'error');
                return;
            }

            const submitBtn = this.querySelector('.submit-btn');
            if (!submitBtn) return; // Asegúrate de que el botón exista

            const originalBtnText = submitBtn.innerHTML;

            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            submitBtn.disabled = true;

            try {
                // Aquí iría tu lógica de envío de formulario real (fetch/XMLHttpRequest)
                // Por ahora, simulamos con un retraso
                await new Promise(resolve => setTimeout(resolve, 1500)); // Espera 1.5 segundos

                showFormFeedback('Gracias por tu mensaje. Me pondré en contacto contigo pronto.', 'success');
                this.reset(); // Limpia el formulario

            } catch (error) {
                console.error('Error al enviar el formulario:', error);
                showFormFeedback('Hubo un error al enviar tu mensaje. Intenta de nuevo.', 'error');
            } finally {
                // Resetear botón después de un tiempo, independientemente del éxito o fracaso
                setTimeout(() => {
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.disabled = false;
                }, 3000);
            }
        });
    }

    // --- Visibilidad del Botón "Scroll to Top" ---
    if (scrollToTopBtn) {
        window.addEventListener('scroll', throttle(() => { // Throttled para rendimiento
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        }, 100)); // Throttling a 100ms

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // --- Animación de Entrada (GSAP) ---
    // Asegúrate de haber incluido la librería GSAP en tu HTML antes de este script.
    // Ejemplo: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
    if (typeof gsap !== 'undefined') {
        const tl = gsap.timeline(); // Usa una timeline para secuenciar animaciones

        tl.from('.main-header .logo, .main-nav .nav-link', { // Anima logo y enlaces
            duration: 0.8,
            y: -20,
            opacity: 0,
            stagger: 0.1, // Escalonado para enlaces
            ease: 'power3.out'
        })
        .from('.hero-headline', {
            duration: 1.2,
            y: 30,
            opacity: 0,
            ease: 'power3.out'
        }, "-=0.5") // Inicia 0.5s antes de que termine la animación anterior
        .from('.hero-subhead', {
            duration: 1,
            y: 20,
            opacity: 0,
            ease: 'power3.out'
        }, "-=0.6")
        .from('.hero-cta', {
            duration: 1,
            y: 20,
            opacity: 0,
            ease: 'power3.out'
        }, "-=0.7")
        .from('.scroll-indicator', {
            duration: 1,
            opacity: 0,
            y: 10,
            ease: 'power3.out'
        }, "-=0.5");
    }

    // --- Intersection Observer para Lazy Loading (Imágenes y Fondos) ---
    // Busca elementos con data-src (para <img>) o data-bg (para background-image)
    const lazyElements = document.querySelectorAll('[data-src], [data-bg]');

    if ('IntersectionObserver' in window) {
        const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const lazyElement = entry.target;

                    if (lazyElement.dataset.src) {
                        lazyElement.src = lazyElement.dataset.src;
                        // Opcional: añadir un evento 'load' para remover un loader si tuvieras
                        lazyElement.removeAttribute('data-src'); // Limpia el atributo
                    }

                    if (lazyElement.dataset.bg) {
                        lazyElement.style.backgroundImage = `url(${lazyElement.dataset.bg})`;
                        lazyElement.removeAttribute('data-bg'); // Limpia el atributo
                    }

                    observer.unobserve(lazyElement); // Deja de observar una vez cargado
                }
            });
        }, {
            rootMargin: '100px 0px', // Carga cuando estén a 100px del viewport
            threshold: 0.01 // Dispara cuando el 1% del elemento es visible
        });

        lazyElements.forEach(el => {
            lazyLoadObserver.observe(el);
        });
    } else {
        // Fallback simple para navegadores sin Intersection Observer
        lazyElements.forEach(el => {
            if (el.dataset.src) {
                el.src = el.dataset.src;
            }
            if (el.dataset.bg) {
                el.style.backgroundImage = `url(${el.dataset.bg})`;
            }
        });
    }

    // --- Año Dinámico en el Footer ---
    const copyrightElement = document.querySelector('.footer-bottom p');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        copyrightElement.textContent = copyrightElement.textContent.replace(/\d{4}/, currentYear); // Reemplaza cualquier año de 4 dígitos
    }
});

// =============================================
// Funciones Auxiliares
// =============================================

/**
 * Crea y añade el botón de "Scroll to Top" al body.
 * @returns {HTMLElement} El botón creado.
 */
function createScrollToTopButton() {
    const btn = document.createElement('button');
    btn.className = 'scroll-to-top';
    btn.innerHTML = '<i class="fas fa-arrow-up"></i>'; // Asume que Font Awesome está enlazado
    document.body.appendChild(btn);
    return btn;
}

/**
 * Función para validar un email.
 * @param {string} email - La cadena de email a validar.
 * @returns {boolean} True si el email es válido, false en caso contrario.
 */
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

/**
 * Muestra un mensaje de feedback en el formulario de contacto.
 * @param {string} message - El mensaje a mostrar.
 * @param {'success'|'error'} type - El tipo de mensaje (para aplicar estilos CSS).
 */
function showFormFeedback(message, type) {
    const contactForm = document.getElementById('contactForm') || document.querySelector('.contact-form');
    if (!contactForm) return;

    // Elimina feedback existente para evitar duplicados
    const existingFeedback = contactForm.querySelector('.form-feedback');
    if (existingFeedback) {
        existingFeedback.remove();
    }

    const feedback = document.createElement('div');
    feedback.className = `form-feedback ${type}`;
    feedback.textContent = message;

    // Inserta al principio del formulario
    contactForm.insertBefore(feedback, contactForm.firstChild);

    // Opcional: Desvanecer y remover después de un tiempo
    setTimeout(() => {
        feedback.style.opacity = '0';
        setTimeout(() => {
            feedback.remove();
        }, 300); // Pequeño retraso para que la transición de opacidad sea visible
    }, 5000);
}

/**
 * Debounce function to limit how often a function is called.
 * Useful for events like window resizing or search input.
 * @param {Function} func - The function to debounce.
 * @param {number} wait - Time to wait in milliseconds before executing the function.
 * @returns {Function} - The debounced function.
 */
function debounce(func, wait = 100) {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

/**
 * Throttle function to limit how often a function is called.
 * Useful for events like scrolling or mouse movement to improve performance.
 * @param {Function} func - The function to throttle.
 * @param {number} limit - Time limit in milliseconds during which the function will only be called once.
 * @returns {Function} - The throttled function.
 */
function throttle(func, limit = 100) {
    let inThrottle;
    let lastResult;
    return function() {
        const context = this;
        const args = arguments;
        if (!inThrottle) {
            lastResult = func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
        return lastResult;
    };
}