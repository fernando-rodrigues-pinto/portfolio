# Design Brief: Reformulação Estrutural e Interativa do Portfólio

<!-- impeccable:shape-brief 1 -->

## 1. Job and Audience
- **Audiência Primária:** Tech Leads, Engenheiros Sêniores e Professores Avaliadores (IFSP).
  - *Modo do visitante:* Triagem técnica analítica, cética e com tempo escasso (< 2 minutos).
  - *Necessidade:* Validar competência real de desenvolvimento frontend, arquitetura de código e maturidade na tomada de decisões técnicas (trade-offs de engenharia).
- **Audiência Secundária:** Recrutadores de RH e Talent Acquisition.
  - *Modo do visitante:* Verificação rápida de fit cultural, formação acadêmica, dados de contato e download do CV.

## 2. Outcome and Proof
- **Ação Primária:** Explorar projetos e inspecionar imediatamente os desafios técnicos e os impactos de negócio sem fricção, além de navegar rapidamente entre as seções.
- **Critério de Sucesso:** Avaliador visualiza e compreende os trade-offs de engenharia em menos de 10 segundos por projeto, tanto no mobile via toque quanto no desktop via teclado.
- **Prova Real:** Projetos reais implementados (ex.: Sistema de Gestão de Frota, E-commerce de Livros, Portfólio) respaldados por decisões de arquitetura explícitas.

## 3. Selected Direction
- **Autoridade Visual:** *Midimalismo de Engenharia* (70% base limpa neutra Slate 50 / 30% acentos funcionais azul elétrico e verde esmeralda).
- **Tese Estrutural/Interativa:**
  1. *Projetos:* Substituição dos hover-cards flutuantes frágeis por **Abas Táteis Inline** integradas dentro de cada card (`[Desafio Técnico | Impacto no Negócio]`), alternando o conteúdo sem saltos de layout e com suporte total a clique, toque e teclado.
  2. *Navegação:* Inclusão de uma **Barra Superior Fixa Compacta (`sticky-top`)** com links âncora suaves (`Sobre`, `Skills`, `Projetos`, `Experiência`, `Formação`), indicador sutil da seção ativa e botão de destaque para download de currículo.
  3. *Hero:* Remoção do padrão pontilhado clichê (AI Slop) em favor de uma **superfície limpa neutra (Slate 50)** com iluminação suave difusa no topo, elevando o contraste tipográfico e destacando o badge de disponibilidade profissional.
  4. *Semântica e Acessibilidade:* Envolvimento do conteúdo principal na tag semântica `<main>`, adição de rodapé semântico `<footer>` e conformidade rigorosa com WCAG AA.

## 4. Scope and Boundaries
- **Alvo:** `index.html`, `css/style.css` e `js/script.js`.
- **Fidelidade:** Pronta para produção (production-ready), responsiva de 320px a 1920px+.
- **O que permanece intocado:** Os dados curriculares reais de Fernando, links do GitHub/LinkedIn, textos descritivos fundamentais e a restrição estrita de Vanilla JS + CSS3 + Bootstrap 5 (sem frameworks SPA ou Tailwind).
- **Anti-objetivos explícitos:**
  - NÃO utilizar modais ou drawers que ocultem o contexto da página.
  - NÃO utilizar hover como único gatilho de informação em nenhuma parte do site.
  - NÃO adicionar texturas de fundo pontilhadas clichês de IA.

## 5. States and Ranges
- **Card de Projetos (Abas de Trade-off):**
  - *Estado Padrão:* Aba "Desafio Técnico" ativa exibindo problema e decisão arquitetural.
  - *Estado Alternado:* Aba "Impacto no Negócio" selecionada via clique/teclado com borda e badge verde esmeralda.
  - *Foco/Teclado:* Anel de foco visível (`:focus-visible`) e suporte a teclas `Tab` e `Enter`/`Space`.
- **Navegação Fixa:**
  - *Desktop:* Links horizontais compactos com padding adequado.
  - *Mobile:* Menu hamburguer colapsável ou barra de toque acessível sem sobrepor o conteúdo.
  - *Scroll:* Transição suave (`backdrop-filter: blur(8px)`) ao rolar a página.

## 6. Interaction and Layout
- **Hierarquia:** Header (`<nav>`) -> Apresentação (`<section class="hero">`) -> `<main>` (`#skills`, `#projetos`, `#experiencias`, `#formacao`, `#hobbies`) -> Rodapé (`<footer>`).
- **Afordances:** Abas com formato de botões segmentados com indicação clara de estado ativo (cor de fundo e contraste WCAG AA).
- **Feedback:** Transições suaves de opacidade e cor (200ms ease), respeitando `prefers-reduced-motion`.

## 7. Constraints and Open Decisions
- **Restrições Vinculantes:** HTML5 Semântico, CSS3 e Vanilla JS; conformidade WCAG AA (mínimo 4.5:1 para texto normal); touch targets >= 44x44px.
- **Decisões Travadas:**
  - Trade-offs: Abas táteis inline.
  - Navbar: Barra superior fixa compacta (`sticky-top`).
  - Hero: Fundo limpo neutro Slate 50 com difusão suave de topo.
