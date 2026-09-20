---
target: "index.html"
date: "2026-09-20T20:47:30Z"
method: "dual-agent"
total_score: 19
max_score: 32
na_heuristics: "9,10"
p0_count: 2
p1_count: 6
p2_count: 5
p3_count: 2
---

# Design Critique: Fernando Rodrigues Pinto - Portfólio
Method: dual-agent (A: 004d2ec9-ceb2-4bab-977d-a2ce2dba9e7a · B: 50c8014a-00bd-46aa-b91a-f34ee978b4fc)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|:-----:|-----------|
| 1 | Visibility of System Status | 3/4 | Feedback de cópia de e-mail existe, mas faltam contadores nos filtros e estado ativo em cards de trade-off. |
| 2 | Match System / Real World | 3/4 | Boa linguagem técnica, mas estrelas de 1 a 3 são metáfora arbitrária para habilidades técnicas. |
| 3 | User Control and Freedom | 2/4 | Cards flutuantes de trade-off não fecham em telas touch; falta navegação para saltar entre seções. |
| 4 | Consistency and Standards | 2/4 | Cores de badges inconsistentes entre Hero e Projetos; Scrum categorizado sob "Backend & Infra". |
| 5 | Error Prevention | 2/4 | Links externos sem `rel="noopener noreferrer"`; clipboard sem fallback de erro. |
| 6 | Recognition Rather Than Recall | 2/4 | **Crítico:** Os trade-offs de engenharia estão ocultos sob hover em tag `<span>`, invisíveis no escaneamento rápido. |
| 7 | Flexibility and Efficiency | 2/4 | Ausência de navbar / atalhos de seção; avaliadores técnicos são forçados a rolar 3.500px linearmente. |
| 8 | Aesthetic and Minimalist Design | 3/4 | Base limpa em Slate, mas presença do padrão pontilhado no Hero (bannido no DESIGN.md como AI Slop). |
| 9 | Error Recovery | n/a | Superfície de portfólio estático sem fluxos transacionais ou formulários de entrada complexos. |
| 10 | Help and Documentation | n/a | Superfície autoexplicativa de apresentação profissional. |
| **Total** | | **19/32** | **Acceptable (59.4%)** |

## Design Specificity Verdict
- **LLM Assessment (Design Director):** O portfólio possui um excelente conceito de diferenciação técnica através dos trade-offs de projeto e da seção "Além do Código". No entanto, peca ao esconder seu maior diferencial dentro de tooltips frágeis e ao manter vícios de template genérico (título "Portfólio Pessoal", estrelas arbitrárias e dissonância entre "Fullstack" no Hero e "Frontend" na experiência).
- **Detector & Code Evidence:** 15 achados confirmados, incluindo 2 P0 (trade-offs inacessíveis em touch/teclado e botão de e-mail sem foco/semântica) e 6 P1 (violação direta da regra anti-slop de textura no Hero, falhas graves de contraste WCAG AA, ausência de `prefers-reduced-motion` e links inseguros).

## Priority Issues
1. **[P0] Trade-offs de Engenharia Inacessíveis em Mobile e Teclado**
   - *Por que prejudica:* O principal diferencial do candidato para Tech Leads está inacessível para quem navega por smartphone ou teclado.
   - *Correção:* Substituir os hover cards por um componente inline acessível (accordion, `<details>` ou abas).
   - *Comando sugerido:* `$impeccable layout`
2. **[P0] Botão de Copiar E-mail Inacessível por Teclado e Leitor**
   - *Por que prejudica:* Elemento `<div>` sem `tabindex` e sem listeners de teclado impede recrutadores com teclado de copiar o contato.
   - *Correção:* Converter para `<button type="button">` com gerenciamento de foco e `aria-live`.
   - *Comando sugerido:* `$impeccable clarify`
3. **[P1] Violação Normativa: Fundo Pontilhado Clichê de IA no Hero (AI Slop)**
   - *Por que prejudica:* Contraria expressamente a regra `The Anti-Slop Texture Rule` do `DESIGN.md`, passando impressão de template de IA não curado.
   - *Correção:* Remover o `radial-gradient` pontilhado em favor de superfície neutra limpa ou gradiente sutil de iluminação.
   - *Comando sugerido:* `$impeccable quieter`
4. **[P1] Falhas de Contraste WCAG AA (Mínimo 4.5:1 reprovado)**
   - *Por que prejudica:* Subtítulo do hero (`#0ea5e9` com 2.66:1) e badges de JavaScript (2.55:1) e React (3.76:1) são quase ilegíveis para pessoas com baixa visão.
   - *Correção:* Ajustar saturação e luminosidade das cores de texto das badges para atingir >= 4.5:1.
   - *Comando sugerido:* `$impeccable colorize`
5. **[P1] Ausência de Menu de Navegação Global (Navbar / Âncoras)**
   - *Por que prejudica:* Avaliadores técnicos e recrutadores com menos de 2 minutos não conseguem saltar diretamente para Projetos ou Formação.
   - *Correção:* Adicionar uma barra de navegação flutuante ou fixa compacta com atalhos de seção.
   - *Comando sugerido:* `$impeccable layout`
