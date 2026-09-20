/**
 * script.js
 * Lógica de interatividade principal do Portfólio
 */

document.addEventListener("DOMContentLoaded", () => {

    // 1. Scroll Fade-In (Intersection Observer com Fallback de Degradação Graciosa)
    if (!('IntersectionObserver' in window)) {
        document.querySelectorAll('.reveal-hidden').forEach(el => el.classList.add('reveal-visible'));
    } else {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                    obs.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-hidden').forEach(el => {
            observer.observe(el);
        });
    }

    // 2. Copiar E-mail para a Área de Transferência com Feedback Acessível (aria-live)
    const copyEmailBtn = document.getElementById('copy-email-btn');
    if (copyEmailBtn) {
        const emailText = 'fernandopinto.frp@gmail.com';
        const emailLabel = document.getElementById('copy-email-text');
        const emailStatus = document.getElementById('copy-email-status');

        const showCopySuccess = () => {
            if (emailLabel) emailLabel.textContent = 'E-mail copiado! ✓';
            if (emailStatus) emailStatus.textContent = 'E-mail copiado para a área de transferência com sucesso.';
            copyEmailBtn.classList.remove('text-secondary');
            copyEmailBtn.classList.add('text-success');

            setTimeout(() => {
                if (emailLabel) emailLabel.textContent = emailText;
                if (emailStatus) emailStatus.textContent = '';
                copyEmailBtn.classList.remove('text-success');
                copyEmailBtn.classList.add('text-secondary');
            }, 2500);
        };

        const fallbackCopy = (text) => {
            const tempInput = document.createElement('textarea');
            tempInput.value = text;
            tempInput.style.position = 'fixed';
            tempInput.style.opacity = '0';
            document.body.appendChild(tempInput);
            tempInput.focus();
            tempInput.select();
            try {
                document.execCommand('copy');
                showCopySuccess();
            } catch (err) {
                if (emailLabel) emailLabel.textContent = emailText;
            }
            document.body.removeChild(tempInput);
        };

        copyEmailBtn.addEventListener('click', () => {
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(emailText)
                    .then(showCopySuccess)
                    .catch(() => fallbackCopy(emailText));
            } else {
                fallbackCopy(emailText);
            }
        });
    }

    // 3. Botão "Voltar ao Topo" com Throttling e Event Listener Passivo
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        let isScrollTicking = false;
        window.addEventListener('scroll', () => {
            if (!isScrollTicking) {
                window.requestAnimationFrame(() => {
                    if (window.scrollY > 300) {
                        backToTopBtn.classList.remove('d-none');
                        backToTopBtn.classList.add('d-flex');
                    } else {
                        backToTopBtn.classList.add('d-none');
                        backToTopBtn.classList.remove('d-flex');
                    }
                    isScrollTicking = false;
                });
                isScrollTicking = true;
            }
        }, { passive: true });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 4. Filtro Dinâmico de Skills com Tratamento de Estado Vazio
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

                // Filtra as habilidades sem forçar reflow desnecessário
                let visibleCount = 0;
                skillCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                        visibleCount++;
                    } else {
                        card.style.display = 'none';
                    }
                });

                const emptyState = document.getElementById('skills-empty-state');
                if (emptyState) {
                    if (visibleCount === 0) {
                        emptyState.classList.remove('d-none');
                    } else {
                        emptyState.classList.add('d-none');
                    }
                }
            });
        });
    }

    // 5. Navegação por Âncoras com Alinhamento Milimétrico à Navbar
    const navbarCollapse = document.getElementById('navbarContent');
    const getNavbarHeight = () => {
        const header = document.querySelector('header.sticky-top') || document.querySelector('.main-navbar');
        return header ? Math.round(header.getBoundingClientRect().height) : 64;
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#' || targetId === '#main-content') return;

            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;

            e.preventDefault();

            // Fecha o menu mobile se estiver aberto
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const toggler = document.querySelector('.navbar-toggler');
                if (toggler) toggler.click();
            }

            // Se for o topo / sobre, vai para o topo absoluto (y = 0)
            if (targetId === '#sobre') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                const navHeight = getNavbarHeight();
                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = Math.round(elementPosition - navHeight);

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }

            if (history.pushState) {
                history.pushState(null, '', targetId);
            }
        });
    });

    // 6. Destaque Ativo na Barra de Navegação Conforme Rolagem (ScrollSpy Leve)
    const trackedSections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.main-navbar .nav-link');
    if (trackedSections.length > 0 && navLinks.length > 0) {
        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        } else {
                            link.classList.remove('active');
                        }
                    });
                }
            });
        }, { threshold: 0.35 });

        trackedSections.forEach(sec => navObserver.observe(sec));
    }

    // 7. Sincronização de Acessibilidade e Navegação por Teclado nas Abas Táteis (WAI-ARIA APG)
    const tradeoffTabs = document.querySelectorAll('.btn-tradeoff');
    tradeoffTabs.forEach(tab => {
        tab.addEventListener('shown.bs.tab', (e) => {
            const tablist = tab.closest('[role="tablist"]');
            if (tablist) {
                tablist.querySelectorAll('.btn-tradeoff').forEach(t => {
                    t.setAttribute('aria-selected', t === e.target ? 'true' : 'false');
                });
            }
        });
    });

    const tablists = document.querySelectorAll('[role="tablist"]');
    tablists.forEach(tablist => {
        const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
        tabs.forEach((tab, index) => {
            tab.addEventListener('keydown', (e) => {
                let nextIndex = null;
                if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                    e.preventDefault();
                    nextIndex = (index + 1) % tabs.length;
                } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                    e.preventDefault();
                    nextIndex = (index - 1 + tabs.length) % tabs.length;
                } else if (e.key === 'Home') {
                    e.preventDefault();
                    nextIndex = 0;
                } else if (e.key === 'End') {
                    e.preventDefault();
                    nextIndex = tabs.length - 1;
                }

                if (nextIndex !== null) {
                    tabs[nextIndex].focus();
                    tabs[nextIndex].click();
                }
            });
        });
    });

    // 8. Onboarding: Dica Contextual de Avaliação e Persistência LocalStorage
    const tradeoffsTip = document.getElementById('onboarding-tradeoffs-tip');
    const dismissTipBtn = document.getElementById('dismiss-tradeoffs-tip');
    if (tradeoffsTip) {
        try {
            if (localStorage.getItem('portfolio-tip-tradeoffs-dismissed') === 'true') {
                tradeoffsTip.classList.add('d-none');
            }
        } catch (e) {
            // Modo anônimo restritivo sem suporte a localStorage
        }

        if (dismissTipBtn) {
            dismissTipBtn.addEventListener('click', () => {
                tradeoffsTip.classList.add('d-none');
                try {
                    localStorage.setItem('portfolio-tip-tradeoffs-dismissed', 'true');
                } catch (e) {}
            });
        }
    }

    // 9. Onboarding: Navegação Rápida por Teclado (Teclas 1 a 5)
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.ctrlKey || e.altKey || e.metaKey) return;

        const keyMap = {
            '1': '#sobre',
            '2': '#conhecimentos',
            '3': '#projetos',
            '4': '#experiencias',
            '5': '#formacao'
        };

        if (keyMap[e.key]) {
            const target = document.querySelector(keyMap[e.key]);
            if (target) {
                e.preventDefault();
                const navHeight = getNavbarHeight();
                const pos = e.key === '1' ? 0 : Math.round(target.getBoundingClientRect().top + window.scrollY - navHeight);
                window.scrollTo({ top: pos, behavior: 'smooth' });
                if (history.pushState) history.pushState(null, '', keyMap[e.key]);
            }
        }
    });
});


