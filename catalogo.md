# Catálogo de Comandos do Impeccable

Este catálogo reúne o estudo aprofundado dos 23 comandos especializados do ecossistema **[Impeccable](https://impeccable.style/docs/)** (além do comando central orquestrador `impeccable`), categorizados rigorosamente de acordo com sua função no ciclo de design e desenvolvimento de interfaces.

---

## Sumário das Categorias

- [1. Categoria: Criar](#1-categoria-criar) (`shape`, `impeccable`)
- [2. Categoria: Avaliar](#2-categoria-avaliar) (`audit`, `critique`)
- [3. Categoria: Refinar](#3-categoria-refinar) (`animate`, `bolder`, `colorize`, `delight`, `layout`, `overdrive`, `quieter`, `typeset`)
- [4. Categoria: Simplificar](#4-categoria-simplificar) (`adapt`, `clarify`, `distill`)
- [5. Categoria: Preparar](#5-categoria-preparar) (`harden`, `onboard`, `optimize`, `polish`)
- [6. Categoria: Sistematizar](#6-categoria-sistematizar) (`document`, `extract`, `generate`, `init`, `live`)

---

## 1. Categoria: Criar

### 1.1. shape
- **Nome:** `/impeccable shape` (ou `shape`)
- **Categoria:** Criar
- **Finalidade:** Transforma uma ideia inicial ou necessidade de funcionalidade em um design brief claro, delimitado e estruturado antes de escrever código. Evita implementações prematuras e suposições arbitrárias.
- **Momento de uso:** No início da concepção de uma nova página, componente ou fluxo interativo, quando se sabe *o que* deve ser feito, mas não *como* deve funcionar ou se comportar.
- **Exemplo:** `/impeccable shape uma seção de contato interativa onde recrutadores possam enviar uma mensagem rápida com validação imediata e feedback de envio sem recarregar a página.`
- **Riscos:** Estender demais a fase de ideação caso os requisitos sejam excessivamente abstratos, ou gerar premissas desalinhadas com as limitações técnicas reais do projeto.
- **Evidência:** Produção de um brief confirmado contendo objetivo, direção, escopo, estados a cobrir e pendências abertas, servindo de base sólida para a implementação.

### 1.2. impeccable (Orquestrador)
- **Nome:** `/impeccable` (ou `impeccable`)
- **Categoria:** Criar
- **Finalidade:** Ponto de entrada abrangente para criação ou redesign geral de interfaces. Analisa a intenção descrita pelo usuário e aplica as melhores práticas de design, eliminando padrões genéricos ou artificiais típicos de IA ("AI slop").
- **Momento de uso:** Ao iniciar um projeto do zero, ao criar uma página inteira ou quando uma tela existente precisa de intervenção ampla e não se sabe qual comando especialista específico utilizar.
- **Exemplo:** `/impeccable crie a página inicial do meu portfólio profissional de desenvolvimento web, destacando projetos de destaque e competências técnicas.`
- **Riscos:** Realizar modificações simultâneas e excessivamente amplas em múltiplos arquivos, podendo desconfigurar pequenos ajustes manuais pré-existentes.
- **Evidência:** Interface visualmente coerente, estruturada semanticamente e sem artefatos genéricos de IA, alinhada com as diretrizes do produto.

---

## 2. Categoria: Avaliar

### 2.1. audit
- **Nome:** `/impeccable audit` (ou `audit`)
- **Categoria:** Avaliar
- **Finalidade:** Inspeciona tecnicamente a implementação da interface em busca de falhas críticas de acessibilidade (a11y), desempenho, suporte a temas (dark/light), responsividade e integridade do código, classificando os achados por prioridade (P0 a P3) **sem alterar o código**.
- **Momento de uso:** Antes de lançar uma versão em produção, após grandes refatorações ou para checar se a interface cumpre padrões técnicos de conformidade e acessibilidade.
- **Exemplo:** `/impeccable audit a página inicial do portfólio e a navegação mobile.`
- **Riscos:** Se o ambiente de execução não carregar todos os estilos/scripts dinâmicos, pode gerar falsos positivos ou falsos negativos; pode gerar uma lista longa de itens menores que desvie o foco dos problemas bloqueantes.
- **Evidência:** Relatório estruturado de achados classificados de P0 (bloqueante) a P3 (polimento), acompanhado de notas setoriais (0 a 4) e sugestões claras de remediação.

### 2.2. critique
- **Nome:** `/impeccable critique` (ou `critique`)
- **Categoria:** Avaliar
- **Finalidade:** Realiza uma avaliação crítica do design visual, clareza, usabilidade e hierarquia de informação, apontando o que está enfraquecendo a experiência do usuário e recomendando pontos de melhoria prioritários **sem alterar o código**.
- **Momento de uso:** Quando a interface está implementada, mas parece visualmente genérica, monótona, confusa ou com baixa atratividade estética e você precisa entender a causa raiz.
- **Exemplo:** `/impeccable critique a seção de projetos do meu portfólio.`
- **Riscos:** Apontamentos que podem colidir com a preferência estilística pretendida pelo autor caso o contexto e a proposta de valor do projeto não estejam bem definidos em `PRODUCT.md`.
- **Evidência:** Diagnóstico salvo com avaliação de qualidade estética, pontuação de usabilidade, simulação de perspectivas de diferentes usuários e lista ordenada de prioridades para refinamento.

---

## 3. Categoria: Refinar

### 3.1. animate
- **Nome:** `/impeccable animate` (ou `animate`)
- **Categoria:** Refinar
- **Finalidade:** Emprega animações e transições intencionais para tornar mudanças de estado, relações espaciais e feedbacks interativos naturais e compreensíveis.
- **Momento de uso:** Em componentes que mudam dinamicamente de estado, como abertura de menus, expansão de cards, modais, acordes ou notificações.
- **Exemplo:** `/impeccable animate o menu hambúrguer mobile e o surgimento gradual dos cards de projetos na rolagem da página.`
- **Riscos:** Adicionar animações excessivas, demoradas (>300ms) ou intrusivas que causem desorientação, perda de foco ou náusea em pessoas sensíveis a movimento; esquecer a media query `prefers-reduced-motion`.
- **Evidência:** Transições suaves executadas exclusivamente via propriedades aceleradas por hardware (`transform`, `opacity`), sem layout shifts (CLS), com respeito a `prefers-reduced-motion`.

### 3.2. bolder
- **Nome:** `/impeccable bolder` (ou `bolder`)
- **Categoria:** Refinar
- **Finalidade:** Concede mais presença, peso visual, contraste e autoridade a uma seção ou elemento que atualmente passa despercebido, mantendo a identidade visual do projeto.
- **Momento de uso:** Quando um elemento central (ex: chamada principal/hero, botão de ação primário, título principal) parece fraco, tímido ou ofuscado por elementos secundários.
- **Exemplo:** `/impeccable bolder a seção hero e a tipografia do meu nome no topo do portfólio.`
- **Riscos:** Causar poluição visual ou sobrecarregar a hierarquia, fazendo múltiplos elementos competirem agressivamente pela atenção do usuário.
- **Evidência:** O elemento refinado atrai o olhar imediatamente no teste de 5 segundos de leitura visual, sem degradar a elegância dos elementos vizinhos.

### 3.3. colorize
- **Nome:** `/impeccable colorize` (ou `colorize`)
- **Categoria:** Refinar
- **Finalidade:** Utiliza cores de forma intencional e semântica para clarificar ações, status, estados e expressar a personalidade da marca/produto.
- **Momento de uso:** Quando a interface é monocromática em excesso, excessivamente neutra/fria, ou utiliza cores inconsistentes que não transmitem significado funcional claro.
- **Exemplo:** `/impeccable colorize as tags de tecnologias dos projetos e os botões de ação com base na paleta de acentos do design system.`
- **Riscos:** Quebrar o contraste mínimo de acessibilidade WCAG (mínimo 4.5:1 para texto comum) ou criar um efeito visual confuso ("arco-íris") que desoriente o usuário.
- **Evidência:** Paleta harmoniosa, cores de ação e status reconhecíveis de imediato e conformidade estrita com os critérios de contraste de acessibilidade.

### 3.4. delight
- **Nome:** `/impeccable delight` (ou `delight`)
- **Categoria:** Refinar
- **Finalidade:** Insere toques pontuais de surpresa, sofisticação e microinterações memoráveis que tornam momentos-chave da jornada do usuário agradáveis e distintos.
- **Momento de uso:** Em momentos de conclusão bem-sucedida de tarefas (ex: envio de formulário de contato), interações de hover em cartões de projetos ou estados vazios bem-humorados.
- **Exemplo:** `/impeccable delight o feedback de envio do formulário de contato com uma microinteração suave e mensagem acolhedora.`
- **Riscos:** Distrair o usuário de sua tarefa primordial, infantilizar o produto ou introduzir atrasos desnecessários em fluxos rápidos de produtividade.
- **Evidência:** O detalhe adicionado gera engajamento positivo e reforça a marca sem adicionar peso perceptível no carregamento da página nem atrapalhar o fluxo de uso.

### 3.5. layout
- **Nome:** `/impeccable layout` (ou `layout`)
- **Categoria:** Refinar
- **Finalidade:** Reestrutura a distribuição espacial, grids, alinhamentos e agrupamentos visuais (Princípio da Proximidade da Gestalt) para guiar o fluxo visual do leitor.
- **Momento de uso:** Quando as informações estão desorganizadas, o ritmo vertical da página está quebrado ou a ordem de leitura não orienta o olhar de forma natural.
- **Exemplo:** `/impeccable layout organize a grade de projetos em 2 colunas no desktop com espaçamento consistente e cards nivelados.`
- **Riscos:** Criar espaços em branco excessivos que obriguem rolagem desnecessária, ou comprimir dados essenciais em áreas restritas demais.
- **Evidência:** Leitura em F ou Z fluida, alinhamentos geométricos rigorosos e fácil distinção de onde começa e termina cada bloco de conteúdo.

### 3.6. overdrive
- **Nome:** `/impeccable overdrive` (ou `overdrive`)
- **Categoria:** Refinar
- **Finalidade:** Quebra intencionalmente o convencionalismo visual, aplicando técnicas estéticas arrojadas, contemporâneas e de alto impacto para criar uma interface extraordinária e inesquecível.
- **Momento de uso:** Em páginas de alto impacto de imagem (portfólios criativos, páginas de eventos, lançamentos de marcas inovadoras) que precisam se destacar radicalmente de templates genéricos.
- **Exemplo:** `/impeccable overdrive a seção hero do portfólio com tipografia display monumental, contrastes dramáticos e estética minimalista futurista.`
- **Riscos:** Prejudicar a usabilidade e a acessibilidade caso a forma se sobreponha à função; pode desagradar públicos que buscam interfaces corporativas ultra-tradicionais.
- **Evidência:** Design altamente autoral e marcante com retenção visual superior, mantendo navegabilidade e usabilidade funcionais.

### 3.7. quieter
- **Nome:** `/impeccable quieter` (ou `quieter`)
- **Categoria:** Refinar
- **Finalidade:** Diminui o ruído visual, suaviza contrastes excessivos e acalma a interface para destacar o que realmente importa sem apagar a identidade do projeto.
- **Momento de uso:** Quando a tela possui elementos demais disputando atenção ao mesmo tempo (bordas duras, sombras pesadas, cores conflitantes, fundos saturados).
- **Exemplo:** `/impeccable quieter a lista de habilidades e o rodapé, suavizando bordas e usando tonalidades neutras de fundo.`
- **Riscos:** Deixar a interface excessivamente apagada, insossa ou com contraste insuficiente para a leitura de textos secundários.
- **Evidência:** Redução drástica da carga cognitiva percebida e sensação de calma visual, mantendo a legibilidade e contraste plenamente acessíveis.

### 3.8. typeset
- **Nome:** `/impeccable typeset` (ou `typeset`)
- **Categoria:** Refinar
- **Finalidade:** Aperfeiçoa a tipografia em escala, entrelinha (line-height), comprimento de linha (measure) e peso para garantir máxima legibilidade, escaneabilidade e elegância textual.
- **Momento de uso:** Em páginas ricas em texto (sobre mim, descrições de projetos, estudos de caso) ou quando títulos e parágrafos parecem desproporcionais ou difíceis de ler.
- **Exemplo:** `/impeccable typeset a biografia profissional e os textos dos estudos de caso, ajustando tamanho de fonte, altura de linha e hierarquia de títulos.`
- **Riscos:** Alterar inadvertidamente as fontes institucionais da marca ou criar quebras de linha estranhas em larguras de tela intermediárias.
- **Evidência:** Leitura confortável com largura entre 45 e 75 caracteres por linha, entrelinhas proporcionais e distinção inequívoca entre H1, H2, H3 e texto base.

---

## 4. Categoria: Simplificar

### 4.1. adapt
- **Nome:** `/impeccable adapt` (ou `adapt`)
- **Categoria:** Simplificar
- **Finalidade:** Adapta uma interface existente para funcionar com excelência em diferentes resoluções, aparelhos (smartphones, tablets, telas ultrawide) e contextos de interação (touch vs mouse).
- **Momento de uso:** Quando a interface funciona bem no desktop, mas quebra, transborda (overflow horizontal) ou fica desconfortável em dispositivos móveis.
- **Exemplo:** `/impeccable adapt a navegação e a grade de cards de projetos para uma visualização móvel impecável em telas menores de 600px.`
- **Riscos:** Ocultar arbitrariamente funcionalidades essenciais na versão mobile apenas para simplificar o layout; quebrar o alinhamento em breakpoints intermediários.
- **Evidência:** Layout 100% responsivo, ausência de rolagem horizontal não planejada em todas as larguras (320px a 1920px+) e áreas de toque mínimas de 44x44px.

### 4.2. clarify
- **Nome:** `/impeccable clarify` (ou `clarify`)
- **Categoria:** Simplificar
- **Finalidade:** Ajuda o usuário a entender exatamente onde está, o que aconteceu após uma ação e qual deve ser o próximo passo lógico na jornada.
- **Momento de uso:** Em fluxos interativos, mensagens de confirmação, textos de ajuda em campos de formulário, títulos ambíguos ou botões com textos vagos (ex: "Enviar" vs "Enviar Mensagem de Contato").
- **Exemplo:** `/impeccable clarify o formulário de contato, adicionando instruções claras em cada campo e uma mensagem explícita de confirmação de envio.`
- **Riscos:** Excesso de texto explicativo que polua visualmente o formulário e trate o usuário como leigo em tarefas triviais.
- **Evidência:** Compreensão instantânea do fluxo sem hesitação, redução de dúvidas e ausência de mensagens de erro por preenchimento incorreto.

### 4.3. distill
- **Nome:** `/impeccable distill` (ou `distill`)
- **Categoria:** Simplificar
- **Finalidade:** Elimina distrações, decorações redundantes, elementos visuais desnecessários e texto em excesso para deixar em evidência o coração da proposta da página.
- **Momento de uso:** Quando uma página acumulou muitos detalhes com o tempo e se tornou pesada, difícil de escanear ou confusa.
- **Exemplo:** `/impeccable distill a seção de projetos, removendo metadados supérfluos e focando no título, screenshot, tecnologias essenciais e link direto.`
- **Riscos:** Remover elementos importantes de contexto ou diferenciais competitivos que ajudavam a convencer o visitante.
- **Evidência:** Interface enxuta, aumento da velocidade de escaneamento da página e foco absoluto nas ações de maior valor.

---

## 5. Categoria: Preparar

### 5.1. harden
- **Nome:** `/impeccable harden` (ou `harden`)
- **Categoria:** Preparar
- **Finalidade:** Torna a interface resistente e robusta contra cenários adversos de uso: falhas de conexão de rede, entradas de dados anômalas, estados de carregamento (loading), estados vazios (empty states) e limites de tamanho de conteúdo.
- **Momento de uso:** Na fase de preparação para produção, garantindo que o usuário nunca se depare com uma tela congelada, quebrada ou em branco.
- **Exemplo:** `/impeccable harden o envio do formulário de contato com desabilitação do botão durante envio, mensagem amigável de erro offline e tratamento de inputs longos.`
- **Riscos:** Adicionar camadas excessivas de código defensivo e tratamento de exceções para cenários puramente hipotéticos que não ocorrem na aplicação.
- **Evidência:** A interface mantém integridade visual e funcional completa mesmo simulando corte de rede, erro 500 do servidor ou ausência de dados.

### 5.2. onboard
- **Nome:** `/impeccable onboard` (ou `onboard`)
- **Categoria:** Preparar
- **Finalidade:** Conduz o novo usuário com suavidade até o seu primeiro momento de sucesso ou compreensão clara da proposta de valor, minimizando fricção e abandono.
- **Momento de uso:** Em páginas ou aplicações com recursos interativos que necessitam de direcionamento inicial para serem plenamente aproveitados.
- **Exemplo:** `/impeccable onboard novos visitantes do portfólio com uma mensagem de acolhimento rápida e atalhos diretos para os melhores projetos e formas de contato.`
- **Riscos:** Inserir modais ou popups intrusivos em cascata que frustrem o usuário que desejava apenas navegar diretamente pela página.
- **Evidência:** Aumento na taxa de permanência inicial e navegação fluida de novos visitantes rumo às seções principais sem confusão.

### 5.3. optimize
- **Nome:** `/impeccable optimize` (ou `optimize`)
- **Categoria:** Preparar
- **Finalidade:** Identifica gargalos de performance visual e de carregamento da interface, aplica as correções necessárias e valida as métricas de velocidade e eficiência (Core Web Vitals).
- **Momento de uso:** Na etapa final antes do deploy para produção ou quando são observadas lentidões na renderização de imagens, fontes ou scripts.
- **Exemplo:** `/impeccable optimize o carregamento de imagens dos projetos usando lazy loading, formatos modernos e redução de CSS desnecessário.`
- **Riscos:** Otimizações hiperagressivas de imagens que comprometam a qualidade visual percebida, ou adiamento indevido de CSS que gere flash de conteúdo sem estilo (FOUC).
- **Evidência:** Melhora sensível na pontuação do Google Lighthouse (Performance > 90), redução no peso total da página em KB e eliminação de mudanças abruptas de layout (CLS).

### 5.4. polish
- **Nome:** `/impeccable polish` (ou `polish`)
- **Categoria:** Preparar
- **Finalidade:** Aplica o toque final de excelência estética e funcional: ajusta microespaçamentos, sombras, cantos arredondados, estados de hover, foco por teclado e uniformidade visual geral.
- **Momento de uso:** Imediatamente antes de entregar o produto ou publicar o portfólio, quando toda a estrutura e as funcionalidades já estão prontas.
- **Exemplo:** `/impeccable polish toda a página do portfólio, afinando microalinhamentos, estados de foco e suavidade de interações.`
- **Riscos:** Perder tempo excessivo em microrrefinamentos imperceptíveis em detrimento de correções funcionais mais urgentes.
- **Evidência:** Aspecto visual impecável, sensação tátil de produto de alto padrão e coerência milimétrica em todos os componentes.

---

## 6. Categoria: Sistematizar

### 6.1. document
- **Nome:** `/impeccable document` (ou `document`)
- **Categoria:** Sistematizar
- **Finalidade:** Analisa o projeto e registra o sistema visual existente (tokens de design, paleta de cores, escala tipográfica, elevação, regras de componentes e boas práticas) no arquivo `DESIGN.md`.
- **Momento de uso:** Quando a identidade visual do projeto estiver consolidada, garantindo que futuras sessões com o agente de IA sigam as mesmas diretrizes de estilo.
- **Exemplo:** `/impeccable document` (ou `/impeccable document --seed` para inicializar um sistema em projeto novo).
- **Riscos:** Documentar escolhas acidentais ou estilos provisórios de uma página como se fossem diretrizes oficiais caso o desenvolvedor não revise o arquivo.
- **Evidência:** Geração de um arquivo `DESIGN.md` com YAML frontmatter válido e seções estruturadas documentando o vocabulário e os tokens do sistema.

### 6.2. extract
- **Nome:** `/impeccable extract` (ou `extract`)
- **Categoria:** Sistematizar
- **Finalidade:** Identifica trechos de CSS ou blocos de HTML duplicados em múltiplos lugares da aplicação e os consolida em componentes e classes reutilizáveis no design system.
- **Momento de uso:** Quando estilos ou estruturas idênticas (como botões, cards ou badges) foram implementados repetidamente em 3 ou mais telas de forma isolada.
- **Exemplo:** `/impeccable extract o padrão de cards de projetos e badges de tecnologia em classes utilitárias CSS compartilhadas.`
- **Riscos:** Criar abstrações prematuras ou componentes compartilhados rígidos demais que dificultem adaptações específicas futuras.
- **Evidência:** Redução no volume de código duplicado, código mais legível e capacidade de alterar o estilo visual em um único local refletindo em todos os usos.

### 6.3. generate
- **Nome:** `/impeccable generate` (ou `generate`)
- **Categoria:** Sistematizar
- **Finalidade:** Permite nomear um elemento da página e solicitar a geração de múltiplas variantes visuais (ex: mais arrojado, mais discreto, novo layout) para comparação imediata no navegador.
- **Momento de uso:** Ao explorar direções visuais alternativas para um componente específico (ex: o card de destaque ou a seção hero) diretamente no código da aplicação.
- **Exemplo:** `/impeccable generate 3 variações mais arrojadas do card de projetos em destaque.`
- **Riscos:** Paralisia por excesso de opções ou variantes que fujam da linguagem visual acordada para o restante da aplicação.
- **Evidência:** Conjunto de variantes funcionais testáveis no navegador, permitindo a seleção da versão favorita com atualização direta do código-fonte.

### 6.4. init
- **Nome:** `/impeccable init` (ou `init`)
- **Categoria:** Sistematizar
- **Finalidade:** Configura o contexto fundamental do produto (público-alvo, objetivo principal, restrições e compromissos de marca) salvando-os no arquivo `PRODUCT.md`.
- **Momento de uso:** Logo no primeiro contato com o Impeccable no repositório, antes de qualquer comando de modificação visual, ou após mudanças estruturais na proposta do produto.
- **Exemplo:** `/impeccable init`
- **Riscos:** Fornecer respostas rasas ou genéricas no formulário guiado, fazendo com que as próximas ações do agente não compreendam os diferenciais do projeto.
- **Evidência:** Criação do arquivo `PRODUCT.md` estruturado, com clareza dos usuários, da proposta de valor e das diretrizes essenciais do projeto.

### 6.5. live
- **Nome:** `/impeccable live` (ou `live`)
- **Categoria:** Sistematizar
- **Finalidade:** Abre o Live Mode interativo no navegador sobre o site em execução, permitindo inspecionar elementos, desenhar anotações e testar alterações em tempo real.
- **Momento de uso:** Durante sessões exploratórias de design, quando você deseja selecionar visualmente o que ajustar sem precisar formular prompts descritivos complexos no chat.
- **Exemplo:** `/impeccable live`
- **Riscos:** Dependência de um servidor de desenvolvimento web ativo e compatibilidade com políticas de segurança de conteúdo (CSP).
- **Evidência:** Barra de ferramentas do Live Mode acoplada ao navegador com controles visuais de seleção, geração de variações e botão "Accept" sincronizado com o código.
