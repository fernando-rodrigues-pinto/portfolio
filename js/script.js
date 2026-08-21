/**
 * script.js
 * Lógica de interatividade principal do Portfólio
 */

document.addEventListener("DOMContentLoaded", () => {

    // 1. Scroll Fade-In (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-hidden').forEach(el => {
        observer.observe(el);
    });

    // 2. Copiar E-mail para a Área de Transferência
    const copyEmailBtn = document.getElementById('copy-email-btn');
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', () => {
            const emailText = 'fernandopinto.frp@gmail.com';
            navigator.clipboard.writeText(emailText).then(() => {
                const originalContent = copyEmailBtn.innerHTML;
                copyEmailBtn.innerHTML = `<span class="text-success fw-bold">E-mail copiado! ✔️</span>`;
                setTimeout(() => {
                    copyEmailBtn.innerHTML = originalContent;
                }, 2000);
            });
        });
    }

    // 3. Botão "Voltar ao Topo" com Smooth Scroll
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.remove('d-none');
                backToTopBtn.classList.add('d-flex');
            } else {
                backToTopBtn.classList.add('d-none');
                backToTopBtn.classList.remove('d-flex');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 4. Filtro Dinâmico de Skills
    const filterBtns = document.querySelectorAll('.filter-btn');
    const skillCards = document.querySelectorAll('.skill-item');

    if (filterBtns.length > 0 && skillCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Atualiza estilos dos botões
                filterBtns.forEach(b => {
                    b.classList.remove('btn-primary', 'active');
                    b.classList.add('btn-outline-primary');
                });
                
                btn.classList.remove('btn-outline-primary');
                btn.classList.add('btn-primary', 'active');

                const filterValue = btn.getAttribute('data-filter');

                // Filtra as habilidades
                skillCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                        card.style.animation = 'none';
                        card.offsetHeight; // Reflow
                        card.style.animation = 'fadeIn 0.5s ease forwards';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
});
