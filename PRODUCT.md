# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Usuários Primários:** Avaliadores técnicos (Tech Leads, Desenvolvedores Sêniores e Professores Avaliadores).
  - *Situação de uso:* Avaliando o portfólio para contratação técnica ou validação acadêmica rigorosa, dispondo de tempo escasso e buscando validar proficiência em engenharia de software e frontend sem ruídos artificiais.
  - *Trabalho a ser feito (Job):* Identificar rapidamente as competências reais, a qualidade da arquitetura do código e o raciocínio por trás dos desafios técnicos e trade-offs dos projetos apresentados.
- **Usuários Secundários:** Recrutadores de RH e profissionais não-técnicos.
  - *Situação de uso:* Triagem inicial de candidatos para vagas de estágio ou júnior.
  - *Trabalho a ser feito (Job):* Localizar facilmente dados de contato, formação acadêmica (IFSP - ADS), links sociais (LinkedIn/GitHub) e baixar o currículo em PDF.

## Product Purpose

Apresentar de forma transparente, estruturada e verificável a trajetória, competências e projetos práticos de Fernando Rodrigues Pinto, comprovando proficiência em desenvolvimento frontend e engenharia de software. O sucesso é medido pela capacidade do avaliador entender os diferenciais técnicos em menos de 2 minutos de navegação.

## Positioning

Diferente de portfólios genéricos repletos de templates prontos ou afirmações vazias, este portfólio adota uma abordagem fundamentada em engenharia: cartões de projeto que explicam abertamente desafios técnicos e trade-offs de decisão, aliados a uma base construída do zero com Vanilla JS, CSS3 e HTML5 semântico sobre Bootstrap 5.

## Operating Context

- **Ambiente de visualização:** Navegadores desktop modernos e smartphones, frequentemente abertos em abas de triagem rápida durante processos seletivos.
- **Formato:** Aplicação web estática, independente de back-end dedicado ou servidores complexos, executável em qualquer servidor HTTP estático ou via `file://`.

## Capabilities and Constraints

- **Restrições Tecnológicas Estritas:** Obrigatório o uso exclusivo de HTML5 Semântico, CSS3, JavaScript Vanilla e Bootstrap 5 (utilitários e grid). É expressamente proibido o uso de frameworks SPA (React, Vue, Angular) ou utilitários CSS externos além do Bootstrap (zero Tailwind).
- **Estrutura de Seções:** Apresentação (Hero), Hard Skills, Projetos (com Trade-offs e Desafios), Experiências Relevantes, Formação Acadêmica, Hobbies (sem seção de "viagens", por decisão deliberada de escopo).
- **Interações Principais:** Download de CV em PDF, scroll suave entre seções, cards flutuantes com trade-offs técnicos e links externos com abertura segura (`target="_blank"` e `rel="noopener noreferrer"`).

## Brand Commitments

- **Identidade e Tom:** Estilo **Midimalista** (70% de base limpa, funcional e neutra; 30% de texturas e cores pontuais afetivas).
- **Voz:** Clara, profissional, orientada a dados e fatos de engenharia, sem jargões inflados.
- **Autor:** Fernando Rodrigues Pinto (IFSP - Campus Guarulhos, Análise e Desenvolvimento de Sistemas).

## Evidence on Hand

- Código-fonte completo em `index.html`, `css/style.css` e `js/script.js`.
- Documentação de requisitos, histórias de usuário (US) e backlog acionável em `docs/documentacao.md`.
- Currículo em PDF e assets visuais em `assets/`.
- Repositório versionado com histórico de commits no Git.

## Product Principles

1. **Evidência sobre Afirmação:** Cada habilidade e projeto citado deve ser respaldado por desafios reais resolvidos, links de código ou demonstrações funcionais.
2. **Clareza e Escaneabilidade Rápida:** Avaliadores técnicos devem absorver a hierarquia de competências sem esforço visual desnecessário.
3. **Fidelidade ao Midimalismo:** Manter 70% de estrutura sóbria e funcional, usando os 30% restantes para diferenciação afetiva controlada, sem cair em extravagâncias visuais.
4. **Respeito Estrito às Restrições:** Não adotar bibliotecas externas pesadas que firam as restrições acadêmicas e de engenharia estabelecidas.

## Accessibility & Inclusion

- Conformidade com padrões WCAG AA: contraste mínimo de 4.5:1 para textos, suporte completo a navegação por teclado (focus visible), atributos semânticos para leitores de tela e respeito à preferência de movimento reduzido (`prefers-reduced-motion`).
