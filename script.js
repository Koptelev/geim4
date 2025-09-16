// Плавная прокрутка к секциям
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Анимации при прокрутке
function handleScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Добавляем классы анимации к элементам
    const elementsToAnimate = [
        { selector: '.game-overview', animation: 'fade-in' },
        { selector: '.element-card', animation: 'scale-in' },
        { selector: '.workflow-step', animation: 'slide-in-left' },
        { selector: '.department-card', animation: 'fade-in' },
        { selector: '.world-map', animation: 'scale-in' },
        { selector: '.world-description', animation: 'slide-in-right' },
        { selector: '.ceremony', animation: 'fade-in' },
        { selector: '.award', animation: 'scale-in' },
        { selector: '.join-content', animation: 'fade-in' }
    ];

    elementsToAnimate.forEach(({ selector, animation }) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element, index) => {
            element.classList.add(animation);
            element.style.animationDelay = `${index * 0.1}s`;
            observer.observe(element);
        });
    });
}

// Мобильное меню
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Закрываем меню при клике на ссылку
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Эффект параллакса для элементов стихий
function initParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const elements = document.querySelectorAll('.element');
        
        elements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Интерактивная карта мира будущего
function initWorldMap() {
    const worldElements = document.querySelectorAll('.world-element');
    
    worldElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            // Добавляем эффект свечения
            element.style.filter = 'drop-shadow(0 0 20px currentColor)';
            element.style.transform = 'scale(1.2)';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.filter = 'none';
            element.style.transform = 'scale(1)';
        });
    });
}

// Анимация прогресса для элементов мира
function animateWorldProgress() {
    const worldElements = document.querySelectorAll('.world-element');
    
    worldElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'scale(1)';
        }, index * 500);
    });
}

// Эффект печатающегося текста для заголовка
function typeWriterEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typeInterval = setInterval(() => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typeInterval);
        }
    }, 100);
}

// Анимация кольца объединения стихий
function animateUnitedRing() {
    const ring = document.querySelector('.united-ring');
    if (!ring) return;
    
    // Добавляем пульсацию
    ring.style.animation = 'rotate 20s linear infinite, pulse 3s ease-in-out infinite';
}

// Добавляем CSS для пульсации
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: translate(-50%, -50%) scale(1); }
        50% { transform: translate(-50%, -50%) scale(1.05); }
    }
    
    .nav-menu.active {
        display: flex !important;
        flex-direction: column;
        position: absolute;
        top: 70px;
        left: 0;
        width: 100%;
        background: rgba(10, 25, 41, 0.98);
        backdrop-filter: blur(10px);
        padding: 20px;
        gap: 20px;
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
`;
document.head.appendChild(style);

// Эффект частиц для фона
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    for (let i = 0; i < 100; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 3 + 1;
        const colors = ['#ff4757', '#00d2d3', '#2ed573', '#5f27cd'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: 50%;
            pointer-events: none;
            animation: float-particle ${3 + Math.random() * 4}s ease-in-out infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 2}s;
            box-shadow: 0 0 ${size * 2}px ${color};
        `;
        hero.appendChild(particle);
    }
}

// Добавляем CSS для частиц
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes float-particle {
        0%, 100% { 
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
        }
        50% { 
            transform: translateY(-30px) translateX(15px);
            opacity: 1;
        }
    }
    
    .energy-particles {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        overflow: hidden;
    }
`;
document.head.appendChild(particleStyle);

// Эффект свечения для кнопок
function initButtonEffects() {
    const buttons = document.querySelectorAll('.hero-cta, .join-button, .cta-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.boxShadow = '0 0 30px rgba(255, 71, 87, 0.5)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.boxShadow = '';
        });
    });
}

// Анимация счетчика для статистики (если будет добавлена)
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 секунды
        const increment = target / (duration / 16); // 60 FPS
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Эффект волн для секции воды
function createWaterWaves() {
    const waterElements = document.querySelectorAll('.element-water, .water-river');
    
    waterElements.forEach(element => {
        element.style.animation = 'water-wave 3s ease-in-out infinite';
    });
}

// Добавляем CSS для волн
const waveStyle = document.createElement('style');
waveStyle.textContent = `
    @keyframes water-wave {
        0%, 100% { transform: translateY(0px) scale(1); }
        50% { transform: translateY(-10px) scale(1.05); }
    }
`;
document.head.appendChild(waveStyle);

// Инициализация всех функций при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    // Основные функции
    initMobileMenu();
    handleScrollAnimations();
    initParallaxEffect();
    initWorldMap();
    initButtonEffects();
    
    // Анимации при загрузке
    setTimeout(() => {
        typeWriterEffect();
        animateUnitedRing();
        createParticles();
        animateWorldProgress();
        createWaterWaves();
        initLeaderboardAnimations();
        initElementGlows();
    }, 500);
    
    // Обработка кликов по кнопкам
    const joinButton = document.querySelector('.join-button');
    if (joinButton) {
        joinButton.addEventListener('click', () => {
            alert('Спасибо за интерес к гейму «Эра Четырёх»! Мы свяжемся с вами в ближайшее время.');
        });
    }
    
    // Эффект изменения навигации при прокрутке
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 25, 41, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 25, 41, 0.95)';
        }
    });
});

// Анимации для лидерборда
function initLeaderboardAnimations() {
    const leaderItems = document.querySelectorAll('.leader-item');
    
    leaderItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-50px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.6s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, index * 200);
    });
}

// Эффекты свечения для элементов стихий
function initElementGlows() {
    const elementCards = document.querySelectorAll('.element-card');
    
    elementCards.forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.element-icon');
            icon.style.boxShadow = '0 0 30px currentColor';
            icon.style.transform = 'scale(1.1)';
        });
        
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.element-icon');
            icon.style.boxShadow = 'none';
            icon.style.transform = 'scale(1)';
        });
    });
}

// Анимация прогресса недели
function animateWeekProgress() {
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
        const targetWidth = progressFill.style.width;
        progressFill.style.width = '0%';
        
        setTimeout(() => {
            progressFill.style.transition = 'width 2s ease';
            progressFill.style.width = targetWidth;
        }, 1000);
    }
}

// Эффект печатающегося текста для формул
function typeWriterFormulas() {
    const formulas = document.querySelectorAll('.week-formula code');
    
    formulas.forEach((formula, index) => {
        const text = formula.textContent;
        formula.textContent = '';
        
        setTimeout(() => {
            let i = 0;
            const typeInterval = setInterval(() => {
                if (i < text.length) {
                    formula.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typeInterval);
                }
            }, 50);
        }, index * 500);
    });
}

// Инициализация дополнительных эффектов
setTimeout(() => {
    animateWeekProgress();
    typeWriterFormulas();
}, 2000);

// Функция для сворачивания/разворачивания блоков
function toggleSection(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector('i');
    const text = button.querySelector('.expand-text');
    
    if (content.classList.contains('active')) {
        // Сворачиваем
        content.classList.remove('active');
        button.classList.remove('active');
        text.textContent = 'Подробнее';
    } else {
        // Разворачиваем
        content.classList.add('active');
        button.classList.add('active');
        text.textContent = 'Скрыть';
    }
}

// Дополнительные эффекты для интерактивности
window.addEventListener('load', () => {
    // Добавляем эффект появления элементов при загрузке
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
    
    // Анимация элементов стихий в фоне
    const backgroundElements = document.querySelectorAll('.element');
    backgroundElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'scale(0)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.8s ease';
            element.style.opacity = '0.3';
            element.style.transform = 'scale(1)';
        }, 1000 + (index * 200));
    });
});
