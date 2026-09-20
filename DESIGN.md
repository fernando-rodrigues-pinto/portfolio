---
name: Fernando Rodrigues Pinto - Portfólio
description: Sistema de Design Midimalista de Engenharia Frontend
colors:
  primary: "#0284c7"
  primary-hover: "#0369a1"
  text-main: "#1e293b"
  text-muted: "#64748b"
  neutral-bg: "#f8fafc"
  border-light: "#e2e8f0"
  border-mid: "#cbd5e1"
  slate-chip-bg: "#f1f5f9"
  slate-chip-text: "#334155"
  accent-business: "#059669"
  success: "#10b981"
  star-gold: "#fbbf24"
  onboarding-bg: "#f0f9ff"
  onboarding-border: "#bae6fd"
typography:
  display:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2rem, 4vw + 1rem, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "2rem"
    fontWeight: 700
    lineHeight: 1.3
  title:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 600
    letterSpacing: "0.05em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  xl: "16px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "10px 24px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "#ffffff"
    textColor: "{colors.text-main}"
    rounded: "{rounded.md}"
    padding: "10px 24px"
  tradeoff-tab:
    backgroundColor: "{colors.slate-chip-bg}"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.md}"
    padding: "8px 14px"
  tradeoff-tab-active:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
  tradeoff-tab-biz-active:
    backgroundColor: "{colors.accent-business}"
    textColor: "#ffffff"
  chip-slate:
    backgroundColor: "{colors.slate-chip-bg}"
    textColor: "{colors.slate-chip-text}"
    rounded: "{rounded.md}"
    padding: "6px 12px"
  card-project:
    backgroundColor: "#ffffff"
    rounded: "{rounded.xl}"
    padding: "24px"
  callout-projeto-real:
    backgroundColor: "{colors.neutral-bg}"
    rounded: "{rounded.md}"
    padding: "16px"
  hobby-card:
    backgroundColor: "#ffffff"
    rounded: "{rounded.xl}"
    padding: "24px"
  cta-closing:
    backgroundColor: "{colors.neutral-bg}"
    rounded: "{rounded.xl}"
    padding: "40px"
---

# Design System: Fernando Rodrigues Pinto - Portfólio

## Overview

**Creative North Star: "Midimalismo de Engenharia"**

O sistema visual é projetado sob o princípio do **Midimalismo de Engenharia**: uma base sóbria, limpa e funcional (70%) em tons neutros de ardósia e branco puro, enriquecida por 30% de elementos táteis afetivos, cores semânticas de alto contraste e microinterações de rigor técnico. Ele rejeita a frieza estéril de interfaces utilitárias genéricas e elimina qualquer exibicionismo visual clichê gerado por IA.

A experiência é tátil, rápida e resiliente. Cartões, botões e abas respondem com precisão física e alinhamento milimétrico à barra de navegação superior fixa. O foco primordial é a **escaneabilidade técnica de alto valor**: um recrutador (Persona Jordan) deve localizar currículo, localização e contatos em menos de 30 segundos, enquanto um líder técnico (Persona Alex) audita a stack e disseca decisões de arquitetura e trade-offs de negócio com zero atrito cognitivo.

**Anti-referências expressamente banidas:**
- Texturas pontilhadas repetitivas de fundo (`radial-gradient dot pattern`), banidas como clichê de "AI Slop".
- Bloqueio de informações cruciais por `:hover` de mouse (informações críticas como desafios técnicos são sempre visíveis inline e táteis).
- Mosaicos saturados de badges multicolores aleatórias (unificadas em chips de ardósia com contraste AAA de 9.6:1).

---

## Colors

A paleta equilibra a serenidade profissional de tons de ardósia (Slate) com a autoridade do Azul Céu Sky 600 e o Verde Esmeralda para entregas práticas e valor de negócio.

### Primary & Hover
- **Sky 600** (`#0284c7`): Cor primária normativa para botões de ação, links interativos em foco, acentos de destaque acadêmico e estados ativos. Contraste calibrado em **4.54:1** (WCAG AA).
- **Sky 700** (`#0369a1`): Estado de hover e engajamento físico dos controles primários.

### Neutral
- **Slate 800 / Text Main** (`#1e293b`): Títulos e textos de leitura principal; legibilidade confortável com alto contraste sem o peso do preto absoluto.
- **Slate 500 / Text Muted** (`#64748b`): Subtítulos, metadados secundários e parágrafos de apoio.
- **Slate 50 / Neutral BG** (`#f8fafc`): Fundo suave de seções alternadas e painéis de trade-off.
- **Slate 100 / Chip BG** (`#f1f5f9`): Fundo dos chips refinados de competências e abas inativas.
- **Slate 700 / Chip Text** (`#334155`): Texto dos chips com contraste AAA de **9.6:1**.
- **Slate 200 / Border Light** (`#e2e8f0`): Bordas delimitadoras de cartões, divisores e contêineres táteis.

### Functional & Semantic
- **Emerald 600** (`#059669`): Reservado para as abas ativas de **Impacto no Negócio** e para o callout de **Projeto com Cliente Real**, simbolizando resultado prático de mercado.
- **Sky 50 / Sky 200** (`#f0f9ff` / `#bae6fd`): Fundo e borda dedicados do componente contextual de Onboarding.
- **Ouro Âmbar** (`#fbbf24`): Estrelas preenchidas da escala de proficiência técnica semântica.

---

## Typography

**Display Font:** `Inter`, system-ui, -apple-system, sans-serif  
**Body Font:** `Inter`, system-ui, -apple-system, sans-serif  
**Mono / Key Font:** `monospace` (para marcação de atalhos `<kbd>`)

A tipografia utiliza a família `Inter` com escala modular, entrelinhas generosas e proteção contra estouro de layout (`overflow-wrap: break-word; word-break: break-word; min-width: 0;`).

### Hierarchy
- **Display / Hero Title:** 700 bold, `clamp(2rem, 4vw + 1rem, 3.5rem)`, line-height 1.2, letter-spacing `-0.02em`. Usado no nome pessoal do topo.
- **Headline / H2:** 700 bold, `2rem` (32px), line-height 1.3. Títulos estruturais de seção.
- **Title / H5:** 600 semibold, `1.25rem` (20px), line-height 1.4. Títulos de cartões de projeto, cargos e formação acadêmica.
- **Body / Lead:** 400 normal, `1.15rem` (18.4px), line-height 1.6, max-width `65ch`. Resumo profissional e bio.
- **Body Regular:** 400 normal, `1rem` (16px), line-height 1.6. Parágrafos descritivos.
- **Label / Small / Badges:** 600 semibold, `0.82rem` - `0.85rem`. Chips de habilidades, abas e metadados.

---

## Layout

O layout baseia-se no grid de 12 colunas do Bootstrap 5, ancorado por landmarks semânticos rigorosos (`<header>`, `<main id="main-content">`, `<section id="...">`, `<footer>`).

- **Barra de Navegação Compacta Fixa:** Altura real padronizada `--navbar-height: 64px`, garantindo que saltos de âncora exibam exatamente o início da seção sem sobreposição.
- **Menu Mobile Adaptado (< 992px):** Cartão flutuante sólido com sombra suave e touch targets mínimos de `44x44px`.
- **Pontos de Quebra Especiais:**
  - `< 576px`: Padding reduzido (`p-3`) e ícones ajustados para evitar quebras de texto em aparelhos de 360px a 414px.
  - `< 768px`: Margem de segurança na linha do tempo para proteger o marcador de corte lateral.
- **Folha de Estilos de Impressão (`@media print`):** Ocultação de elementos interativos (navbar, filtros, abas, botão topo) e exibição limpa em folha A4 com URLs de links impressos.

---

## Elevation & Depth

O sistema adota o princípio de **sombras calmas e elevações suaves**:

### Shadow Vocabulary
- **Sombra Difusa Leve (`shadow-sm`):** `0 1px 3px rgba(0, 0, 0, 0.05)` — Repouso natural de cartões de projeto e formação.
- **Elevação em Hover:** Deslocamento atenuado de `-2px` com `0 6px 14px -2px rgba(0, 0, 0, 0.04)`, evitando saltos visuais agressivos.
- **Brilho Primário Calibrado:** `0 3px 8px rgba(2, 132, 199, 0.2)` no hover do botão primário.
- **Anel de Foco Acessível (`:focus-visible`):** `outline: 2px solid var(--primary-color) !important; outline-offset: 2px !important;` em todos os elementos acionáveis por teclado (WCAG 2.4.7).

---

## Shapes

O vocabulário formal combina cantos arredondados orgânicos e precisos:
- **`4px` / `rounded-1`:** Teclas `<kbd>` e marcadores mínimos.
- **`8px` / `rounded-2`:** Botões de ação, abas de trade-off e chips de competência.
- **`12px` / `rounded-3`:** Painéis internos de trade-off, callouts práticos e alerta de onboarding.
- **`16px` / `rounded-4`:** Cartões de projetos, histórico de formação acadêmica e caixas de hobbies.
- **`rounded-pill`:** Badges de período temporal, status de graduação e filtros de stack.

---

## Components

### 1. Barra de Navegação Superior (`.main-navbar`)
Header compacto com fundo branco puro, borda inferior sutil e links com padding tátil e feedback `:hover` com transparência suave (`rgba(2, 132, 199, 0.08)`).

### 2. Abas Táteis Inline de Trade-offs (`.trade-off-tabs`)
Substituição definitiva de hover cards por abas acessíveis:
- Aba **Desafio Técnico** (`#0284c7` ativo) com ícone de processador / arquitetura.
- Aba **Impacto no Negócio** (`#059669` ativo) com ícone de maleta / negócios.
- Painel com `role="tabpanel"`, suporte completo a toque e navegação nativa por teclado via setas (`ArrowLeft`/`ArrowRight`/`Home`/`End`).

### 3. Destaque Acadêmico e Projeto com Cliente Real
- `.formacao-card.formacao-destaque`: Borda superior de 3px em Sky 600, badge com ponto de status ativo ("Graduação Atual · Em Andamento") e chips de eixos formativos.
- `.callout-projeto-real`: Caixa destacada com acento lateral verde esmeralda evidenciando a entrega de sistema para cliente real ponta a ponta.

### 4. Resiliência de Imagens e Estado Vazio
- `.img-fallback-container`: Contêiner substituto com ícone SVG sutil caso imagens externas ou locais falhem.
- `#skills-empty-state`: Região acessível com `aria-live="polite"` que orienta o usuário caso um filtro resulte em zero itens.

### 5. Onboarding e Atalhos de Teclado
- `#onboarding-tradeoffs-tip`: Micro-banner contextual dispensável com persistência no `localStorage`.
- Teclas numéricas `1` a `5` para saltos diretos entre seções.
- Legenda semântica com `<kbd>` no rodapé.

### 6. Cartões de Hobbies e Fechamento Peak-End
- `.hobby-card`: Cartões brancos elevados com ícones SVG semânticos contextualizados.
- `.cta-closing-card`: Card conclusivo acolhedor com botões diretos de e-mail e LinkedIn.

---

## Do's and Don'ts

### Do:
- **Do** manter a proporção 70% neutro e 30% acentos afetivos em qualquer evolução futura.
- **Do** garantir touch targets mínimos de 44x44px em todos os controles interativos.
- **Do** manter o anel de foco `:focus-visible` de 2px visível para conformidade WCAG 2.4.7.
- **Do** evidenciar trade-offs técnicos e de negócio em todos os projetos apresentados.
- **Do** usar fallbacks defensivos para imagens e detecção de APIs modernas (`IntersectionObserver`, `localStorage`).

### Don't:
- **Don't** reintroduzir texturas pontilhadas (`dot pattern`), gradientes agressivos ou halos brilhantes (AI Slop).
- **Don't** esconder informações cruciais dentro de tooltips que exigem mouse hover.
- **Don't** violar o piso de contraste WCAG AA (mínimo 4.5:1 para texto normal, 3:1 para controles).
- **Don't** importar frameworks externos pesados; manter a arquitetura puramente Vanilla JS + CSS3 + Bootstrap 5.
