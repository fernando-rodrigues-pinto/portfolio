# Documentação do Portfólio Pessoal

## 01. Definição do projeto

* **Nome do projeto:** Portfólio Pessoal
* **Problema ou necessidade atendida:** Necessidade de provar de maneira eficiente minhas capacidades na área de desenvolvimento de software, facilitando a análise tanto técnica quanto comportamental por parte de recrutadores.
* **Objetivo principal:** Provar de forma clara meu diferencial e nível técnico na área de atuação desejada, consolidando minhas informações de forma acessível.
* **Público-alvo:** Foco principal em avaliadores técnicos (Tech Leads, Desenvolvedores Sêniores) e foco secundário em recrutadores de RH (não técnicos).
* **Proposta visual:** Design midimalista (70% de base limpa e funcional com 30% de texturas, cores pontuais ou elementos afetivos), focado em tipografia legível e com paleta de cores clara, priorizando a escaneabilidade do conteúdo e reduzindo o ruído visual.
* **Conteúdo apresentado:** Identificação, Contato, Conhecimentos (Hard Skills), Projetos, Experiências Relevantes, Formação Acadêmica e Hobbies (nesta ordem exata).
* **Principais funcionalidades:** Navegação por scroll suave, download direto de currículo em PDF e redirecionamento ativo para redes profissionais, e-mail, repositórios do GitHub e aplicações ao vivo.
* **Tecnologias utilizadas:** HTML5 Semântico, CSS3, JavaScript e Bootstrap.

---

## 02. Prompts utilizados

### Prompt 01
- **Objetivo:** preparar estrutura inicial do projeto, já realizando BLO01.
- **Texto enviado à IA:**
```
Atue como um desenvolvedor front-end sênior. O nosso projeto é um Portfólio Pessoal.

CONTEXTO OBRIGATÓRIO:
Leia o arquivo `docs/documentacao.md` para entender as regras de negócio, a proposta visual, o público-alvo e o Backlog Acionável. Ele é a nossa fonte da verdade.

REGRA DE ESCOPO (MUITO IMPORTANTE):
Use a documentação APENAS como contexto passivo para manter a coerência do código (como nomes de classes, IDs, paleta de cores ou dependências). Você está estritamente proibido de implementar qualquer história de usuário, seção ou funcionalidade que não seja explicitamente solicitada na "TAREFA ATUAL" abaixo. Não antecipe passos do backlog.

---

TAREFA ATUAL: BLO01 - Montar estrutura de Apresentação/Contato inicial | US05, US07 | Must have | Nome, cargo, skills e links (CV/Linkedin) visíveis na primeira dobra.
Requisitos para esta etapa:
1. Crie o esqueleto base do arquivo `index.html` com HTML5 semântico, importando o CDN do Bootstrap 5, o arquivo local `css/style.css` e `js/script.js`.
2. Estruture o cabeçalho/primeira dobra da página (Hero Section) contendo:
   - Nome completo e cargo pretendido em destaque;
   - Resumo profissional curto e objetivo;
   - Bloco de principais tecnologias/skills em formato de badges ou tags visuais;
   - Botão em destaque para download do currículo (apontando para um arquivo PDF referenciado em `assets/`);
   - Links diretos para LinkedIn e E-mail configurados para abrir em nova aba (`target="_blank"` e `rel="noopener noreferrer"`).
3. Aplique as regras de estilo iniciais em `css/style.css` garantindo o design minimalista com paleta de cores clara e responsividade para dispositivos móveis.
4. NÃO implemente as demais seções do portfólio neste momento (mantenha o foco estrito na dobra inicial).
```
- **Análise Crítica:** A prompt resultou em uma resposta satisfatória, gerando a dobra inicial como indicado, com estilo minimalista e simples. Entretanto, dois problemas foram identificados:
1. Título (nome pessoal) foi feito de maneira que um nome completo fique preenchido em duas linhas ao invés de apenas uma.
2. O estilo minimalista indicado para a inteligência artificial foi levado ao extremo, construindo componentes que, de um ponto de vista de design, podem não ser tão agradáveis. 

- **Decisão Tomada e Ajustes Aplicados:**
1. Aumento do espaço disponível para preenchimento do nome pessoal.
2. Alteração do design de minimalista para midimalista, a fim de evitar interpretação extrema da IA.

### Prompt 02
- **Objetivo:** realizar BLO02.
- **Texto enviado a IA:**
```
TAREFA ATUAL: BLO02 - Estruturar seção de Conhecimentos (Hard Skills) | US11 | Must have | Grid visual limpo agrupando tecnologias dominadas.
```
- **Análise Crítica:** Prompt foi satisfatória, entretanto, não fez o suficiente visualmente para destacar a seção de skills da seção inicial de apresentação, que também menciona as tecnologias conhecidas.
- **Decisão Tomada e Ajustes Aplicados:**
1. Adição de ícones para cada tecnologia.
2. Adição de estrelas, de 1 a 3, referente ao nível de conhecimento em cada uma delas.

### Prompt 03
- **Objetivo:** realizar BLO03.
- **Texto enviado a IA:**
```
TAREFA ATUAL: BLO03 - Montar grid principal da seção de Projetos | US12 | Must have | Esqueleto dos cartões de projeto responsivos para receber os dados de projetos feitos. 
```
- **Análise Crítica:** Prompt foi satisfatória, cumpriu exatamente o que era esperado. Entretanto, também fez a mais, já realizando a task BLO07 que, apesar de referente a task BLO03, deveria ter sido feita posteriormente.
- **Decisão Tomada e Ajustes Aplicados:** Determinei improdutivo remover as alterações feitas referentes a BLO07 e, portanto, as mantive, apesar de que entendo que em um ambiente versionado isso seria incorreto.


### Prompt 04
- **Objetivo:** realizar BLO04.
- **Texto enviado a IA:**
```
TAREFA ATUAL: BLO04 | Implementar bloco de explicações e trade-offs técnicos nos projetos | US02 | Must have | Explicações exibidas em textos curtos dentro dos cartões/modais de projeto.
```
- **Anáise Crítica:** A prompt, apesar de simples, com base em todo o contexto presente anteriormente na conversa, foi capaz de realizar seu papel de maneira eficiente. Entretanto, devido a falta de especificações, acabou implementando de maneira que o UX é comprometido: por ser blocos colapsaveis em cards que compartilham a mesma row entre si, expandir um bloco de um card resultará em outro card ter um espaço em branco grande, já que todos os cards ocupam o mesmo espaço vertical.
- **Decisão Tomada e Ajustes Aplicados:** Mudança de blocos colápsaveis para cards flutuantes em hover.

### Prompts 05-08
- **Análise Crítica:** Todas estas prompts seguiram o padrão estabelecido anteriormente, informando a tarefa atual no mesmo formato do backlog acionável, porém com informações adicionais sobre conteúdo a ser preenchido. Todas tiveram o resultado esperado, fazendo exatamente o que foi pedido sem realizar nada a menos ou nada a mais; nenhuma alteração foi necessária para essas prompts.

### Prompt 09
- **Objetivo:** verificação do projeto.
- **Texto enviado a IA:**
```
Atue como um avaliador técnico sênior e professor de desenvolvimento web. Você tem acesso a todo o meu código-fonte, estrutura de pastas e documentação atual do projeto.

OBJETIVO:
Leia as diretrizes do arquivo "AC02-polished.pdf" e realize uma auditoria completa no meu projeto para avaliar se ele está 100% preparado para a entrega final.

REGRAS DE ESCOPO E RESTRIÇÕES (MUITO IMPORTANTE):
1. MODO SOMENTE LEITURA: Você está estritamente proibido de alterar, reescrever ou gerar qualquer código ou trecho de documentação. Sua função neste momento é exclusivamente me fornecer um diagnóstico de status do projeto.
2. EXCEÇÃO DE ESCOPO: O documento PDF menciona "viagens realizadas" como um possível conteúdo. A ausência dessa seção no meu portfólio é uma decisão deliberada de design e escopo da minha parte, portanto, NÃO aponte isso como uma falha, erro ou item faltante.

O QUE VOCÊ DEVE AVALIAR (CHECKLIST DE AUDITORIA):
Cruze o estado atual do meu projeto com os seguintes critérios do PDF:
- Restrições Técnicas: O projeto usa exclusivamente HTML, CSS, JS e Bootstrap 5? (Zero React, Tailwind, etc.).
- Estrutura do Repositório: As pastas e arquivos obrigatórios estão presentes e nomeados corretamente (`portfolio/index.html`, `css/style.css`, `js/script.js`, `assets/`, `docs/documentacao.md` e `README.md`)?
- Documentação Obrigatória: O arquivo `documentacao.md` contém todas as 7 seções exigidas (Definição, Prompts, Histórias, Critérios, MoSCoW, MVP, Backlog)?
- Rastreabilidade (O mais crítico): As funcionalidades definidas como "Must have" no MoSCoW e incluídas no MVP estão de fato implementadas e funcionando no código? Há coerência entre o planejado no backlog e o executado?
- Qualidade e Restrições Funcionais: O layout é responsivo? Existe HTML semântico? Existem links, botões ou funcionalidades simuladas (que não funcionam)? O `README.md` contém todas as informações exigidas?

FORMATO DE SAÍDA ESPERADO:
Me entregue um relatório de status claro e objetivo dividido em:
1. Status Geral: (Ex: "Pronto para entrega" ou "Requer ajustes críticos").
2. Auditoria da Estrutura e Código: (O que está certo e o que falta).
3. Auditoria da Documentação vs. Implementação: (Análise de rastreabilidade).
4. Bloqueantes para a Entrega: (Apenas liste de forma pontual o que eu preciso arrumar obrigatoriamente para não perder nota, se houver).
```
- **Análise Crítica:** A prompt foi capaz de cumprir exatamente às minhas expectativas, fazendo uma revisão geral do projeto com base no documento pdf disponibilizado como contexto. Por meio desta prompt, fui capaz de obter informações sobre o que faltava: o documento de README, assim como o nome de uma pasta que estava incorreto. 
- **Decisão Tomada e Ajustes Aplicados:** Com base nas informações providenciadas pela IA, certifiquei-me de editar o que era necessário para finalizar o projeto. 

---

## 03. Histórias de usuário

As histórias foram mapeadas com base nos papéis de **Avaliador Técnico** e **Recrutador de RH**.

* **US01:** Como avaliador técnico, quero acessar o repositório no GitHub diretamente na página do projeto, para examinar a qualidade do código, organização da arquitetura e boas práticas adotadas.
* **US02:** Como avaliador técnico, quero ler uma breve explicação do problema técnico e das decisões/trade-offs adotados em uma solução, para entender como o candidato raciocina e resolve problemas.
* **US03:** Como avaliador técnico, quero acessar o link da aplicação rodando ao vivo e ver seu status (concluído vs. em andamento), para validar que o projeto funciona e entender seu estágio de maturidade.
* **US04:** Como avaliador técnico, quero visualizar métricas simples de impacto (ex.: usuários ativos) de projetos reais, para diferenciar projetos de produção de projetos acadêmicos/pessoais.
* **US05:** Como recrutador de RH, quero ver um resumo claro do perfil, nível e principais tecnologias logo na dobra principal do site, para identificar em menos de 10 segundos se o candidato atende aos pré-requisitos da vaga.
* **US06:** Como recrutador de RH, quero entender o problema que o projeto resolveu em linguagem simples (não técnica), para avaliar a capacidade do candidato de gerar valor de negócio.
* **US07:** Como recrutador de RH, quero ter um botão visível para baixar o currículo em PDF e acessar o LinkedIn, para encaminhar a candidatura rapidamente para o gestor da vaga.
* **US08:** Como recrutador de RH, quero visualizar a formação acadêmica e certificações de forma limpa e estruturada, para validar os critérios formais de educação solicitados pela empresa.
* **US09:** Como recrutador de RH, quero visualizar as experiências profissionais relevantes do candidato em ordem cronológica reversa, para avaliar sua trajetória e tempo de atuação no mercado.
* **US10:** Como recrutador de RH, quero ler sobre os hobbies e interesses pessoais do candidato, para avaliar o alinhamento de perfil (fit cultural) com a empresa.

---

## 04. Critérios de aceitação

* **US01:** Dado que o usuário visualiza um projeto público, o cartão deve exibir a tag "Público" e o botão "Código Fonte", redirecionando para o GitHub numa nova aba. Se o projeto for privado, exibe a tag "Privado" e o botão desativado com texto "Código Privado / NDA".
* **US02:** Dado que o usuário está na seção do projeto, deve visualizar o bloco "Desafio Técnico e Solução" (máx. 200 palavras) respondendo explicitamente ao problema, tecnologia escolhida e trade-off adotado.
* **US03:** Dado que o usuário visualiza o projeto, o cartão deve indicar o status ("Concluído" ou "Em andamento") e possuir o botão "Ver aplicação no ar" abrindo a URL em uma nova aba.
* **US04:** Dado que o projeto possui a tag "Projeto Real", a interface deve destacar visualmente duas métricas (Nº de usuários, Processos facilitados). Para projetos "Acadêmico/Pessoal", a seção é ocultada.
* **US05:** Dado que o recrutador acessa o topo da página, nome completo, cargo, resumo e tecnologias principais (em tags/ícones) devem aparecer na primeira dobra de tela, sem necessidade de rolagem.
* **US06:** Dado que o usuário acessa o projeto, o bloco "Problema do Negócio" deve descrever o impacto na experiência do usuário final, sem jargões estritamente técnicos.
* **US07:** Dado que o usuário aciona o cabeçalho, clicar no botão fixo "Baixar Currículo" inicia o download em PDF; ícones de LinkedIn e E-mail abrem em nova guia.
* **US08:** Dado que o usuário acessa "Formação", os registros devem exibir curso, instituição e ano, ordenados cronologicamente do mais recente para o mais antigo.
* **US09:** Dado que o usuário visualiza a seção "Experiências Relevantes", cada registro deve exibir nome da empresa, cargo, período e breve descrição de responsabilidades, em ordem cronológica reversa.
* **US10:** Dado que o usuário chega até a seção "Hobbies", os interesses devem ser exibidos de forma sucinta e escaneável (ícones ou lista limpa).
* **US11:** Como recrutador, quero visualizar uma seção dedicada listando as principais tecnologias e ferramentas que o candidato domina, para facilitar o match com os requisitos da vaga.
* **US12:** Como avaliador técnico, quero ver um grid ou lista organizada dos projetos desenvolvidos, para ter uma visão geral do portfólio antes de aprofundar nos detalhes de cada um.

---

## 05. Priorização MoSCoW

A priorização definiu o foco do Produto Mínimo Viável (MVP), priorizando valor para o RH na primeira etapa de triagem técnica do funil de recrutamento.

* **Must Have** (Obrigatório para o núcleo do portfólio):
  * **US02 (Trade-offs):** Diferencial principal para o avaliador técnico.
  * **US05 (Resumo e skills):** Retém a atenção do recrutador nos primeiros 10 segundos.
  * **US09 (Experiências):** Fundamental para comprovar trajetória real de mercado.
  * **US11 (Conhecimentos/Hard Skills):** Estruturação do ecossistema técnico para facilitar o match de requisitos da vaga.
  * **US12 (Grid de Projetos):** Vitrine base para exibir e organizar os trabalhos desenvolvidos antes do detalhamento.
* **Should Have** (Importante, foco para a entrega atual):
  * **US03 (Aplicação no ar):** Transforma declarações em validações fáceis.
  * **US06 (Explicação para negócios):** Gera compreensão e valor para o RH.
  * **US07 (Currículo/Contato):** Imprescindível para conversão.
  * **US08 (Formação):** Auxilia check de requisitos pelo recrutador.
  * **US10 (Hobbies):** Demonstra personalidade e auxilia no fit cultural.
* **Could Have** (Desejável, se houver tempo e recursos):
  * **US01 (Acesso ao código):** Agrega, mas código complexo requer leitura profunda que nem sempre ocorre de imediato.
  * **US04 (Métricas):** Ótimo para projetos reais, porém nem todos os projetos possuem dados publicáveis.
* **Won't Have Now** (Mapeado, mas descartado do escopo atual):
  * **Modo Claro/Escuro:** Descartado para manter foco na estabilidade do layout de paleta clara escolhido e evitar complexidade inicial de CSS.
  * **Filtragem de projetos por linguagem:** Como o portfólio iniciará com os projetos chave mais recentes, um sistema de filtro adicionaria sobrecarga desnecessária na navegação no momento.

---

## 06. Descrição do MVP

O Produto Mínimo Viável do portfólio foca em garantir o fluxo principal: *“Eu exibo meus dados pessoais e provo meu diferencial técnico na área de atuação desejada.”*

* **Escopo e Seções disponíveis:** O MVP apresentará a página única (One-Page) englobando as seções de Apresentação (Resumo e Tecnologias), Projetos detalhados, Experiências, Formação e Hobbies. 
* **Interações implementadas:** Navegação via scroll suave, links responsivos para redes, abertura de projetos e ativação do download do CV em PDF.
* **Quais histórias fazem parte:** Todas as funcionalidades classificadas como **Must Have** e **Should Have** no MoSCoW formam o pacote fechado desta versão.
* **O que ficará de fora:** Temas visuais dinâmicos (Dark Mode), botões de filtro dinâmicos e, potencialmente, a seção de métricas avançadas das histórias *Could* e *Won't have*.
* **Condição de conclusão:** O MVP estará considerado concluído quando a interface estiver funcional nos navegadores atuais e em dispositivos móveis, com todas as histórias Must/Should Have devidamente estruturadas, sem nenhum link ou botão falso/simulado presente.

---

## 07. Backlog acionável

| ID | Item do backlog | História | Prioridade | Critérios de aceitação | Status |
|---|---|---|---|---|---|
| BLO01 | Montar estrutura de Apresentação/Contato inicial | US05, US07 | Must have | Nome, cargo, skills e links (CV/Linkedin) visíveis na primeira dobra. | Feito |
| BLO02 | Estruturar seção de Conhecimentos (Hard Skills) | US11 | Must have | Grid visual limpo agrupando tecnologias dominadas. | Feito |
| BLO03 | Montar grid principal da seção de Projetos | US12 | Must have | Esqueleto dos cartões de projeto responsivos para receber os dados de projetos feitos. | Feito |
| BLO04 | Implementar bloco de explicações e trade-offs técnicos nos projetos | US02 | Must have | Explicações exibidas em textos curtos dentro dos cartões/modais de projeto. | Feito |
| BLO05 | Estruturar seção de Experiências Relevantes | US09 | Must have | Listar cargo, empresa, data e atribuições, do atual para o mais antigo. | Feito |
| BLO06 | Criar cartão de projetos focado no valor de negócio | US06 | Should have | Apresentação em linguagem não técnica do problema de negócio. | Feito |
| BLO07 | Implementar botões de aplicação ao vivo e badges de status | US03 | Should have | Tags de status e link externo funcionando em nova aba. | Feito |
| BLO08 | Estruturar seção de Formação Acadêmica | US08 | Should have | Lista temporal decrescente com instituições e datas de conclusão. | Feito |
| BLO09 | Implementar apresentação visual para seção de Hobbies | US10 | Should have | Interesses expostos de forma visual limpa. | Feito |
| BLO10 | Inserir link para repositórios nos projetos e controle de botão NDA | US01 | Could have | Botão abre github ou fica cinza avisando NDA. | A Fazer |
| BLO11 | Criar blocos de destaque para métricas em projetos reais | US04 | Could have | Destaque numérico com descrição em projetos da respectiva categoria. | A Fazer |