# Backlog

### Histórias de Usuário - Avaliador Técnico
- Como avaliador técnico, quero acessar o repositório no GitHub diretamente na página do projeto, para examinar a qualidade do código, organização da arquitetura e boas práticas adotadas.
```Critério de aceitação:``` Dado que o usuário está visualizando um projeto com código fonte público, quando o cartão do projeto for renderizado, então deve exibir uma badge visual indicando "Público", e deve conter o botão "Código Fonte" ativado, o qual, ao ser clicado, abre o repositório no GitHub em uma nova aba. Para o cenário de repositório privado, dado que o usuário está visualizando um projeto com código fonte privado, quando o cartão do projeto for renderizado, então deve exibir uma badge visual indicando "Privado", e o botão de código fonte deve estar desativado exibindo o texto "Código Privado / NDA".

- Como avaliador técnico, quero ler uma breve explicação do problema técnico e das decisões/trade-offs adotados em uma solução, para entender como o candidato raciocina e resolve problemas.
```Critério de aceitação:``` Dado que o usuário está na página do projeto, quando visualizar a seção "Desafio Técnico e Solução", então o bloco deve conter um texto conciso de até 200 palavras, e a explicação deve responder explicitamente qual era o problema principal, qual arquitetura/tecnologia foi escolhida e qual foi o principal trade-off adotado.

- Como avaliador técnico, quero acessar o link da aplicação rodando ao vivo e ver seu status (concluído vs. em andamento), para validar que o projeto funciona e entender seu estágio de maturidade.
```Critério de aceitação:``` Dado que o usuário está na página de um projeto, quando visualizar o cartão do projeto, então deve exibir uma badge visual indicando o status ("Concluído" ou "Em andamento"), e deve exibir um botão com a ação "Ver aplicação no ar" ou "Acessar demo", onde, ao clicar no botão, o usuário é redirecionado em uma nova aba para a URL onde a aplicação está hospedada.

- Como avaliador técnico, quero visualizar métricas simples de impacto (ex.: usuários ativos) de projetos reais, para diferenciar projetos de produção de projetos acadêmicos/pessoais.
```Critério de aceitação:``` Dado que o projeto possui a badge indicando o tipo "Projeto Real", quando a seção de métricas for renderizada, então deve conter uma área de destaque visual exibindo 2 métricas quantitativas ("Nº de usuários ativos" e "Processos facilitados"), e cada métrica deve apresentar um rótulo explicativo sobre o significado do dado. Para o cenário de projetos sem métricas de produção, dado que o projeto possui a badge indicando o tipo "Acadêmico/Pessoal", quando o cartão do projeto for renderizado, então a seção de métricas de produção não deve ser exigida.

### Histórias de Usuário - Recrutador RH

- Como recrutador de RH, quero ver um resumo claro do perfil, nível e principais tecnologias logo na dobra principal do site, para identificar em menos de 10 segundos se o candidato atende aos pré-requisitos da vaga.
```Critério de aceitação:``` Dado que o recrutador acessa a página inicial do portfólio, quando o site carregar completamente, então o nome completo, cargo pretendido e resumo profissional curto devem estar visíveis na primeira dobra sem necessidade de rolagem, e as principais tecnologias e linguagens devem ser apresentadas em destaque no formato de tags ou ícones visuais.

- Como recrutador de RH, quero entender o problema que o projeto resolveu em linguagem simples (não técnica), para avaliar a capacidade do candidato de gerar valor de negócio.
```Critério de aceitação:``` Dado que o recrutador acessa os detalhes de um projeto, quando visualizar o campo destacado "O problema do negócio", então o texto deve descrever o impacto da solução focando na experiência do usuário final, e o conteúdo não deve conter jargões estritamente técnicos.

- Como recrutador de RH, quero ter um botão visível para baixar o currículo em PDF e acessar o LinkedIn, para encaminhar a candidatura rapidamente para o gestor da vaga.
```Critério de aceitação:``` Dado que o recrutador está no cabeçalho do site, quando clicar no botão fixo de alto contraste "Baixar Currículo", então o download do arquivo em formato PDF deve ser iniciado imediatamente. Para o cenário de redirecionamento para redes e contatos, dado que o recrutador está visualizando o espaço dedicado no cabeçalho, quando clicar no ícone/link do LinkedIn ou do E-mail, então o canal de destino correspondente deve abrir em uma nova aba.

- Como recrutador de RH, quero visualizar a formação acadêmica e certificações de forma limpa e estruturada, para validar os critérios formais de educação solicitados pela empresa.
```Critério de aceitação:``` Dado que o recrutador acessa a seção "Formação & Certificações", quando a exibição da seção for acionada, então cada registro apresentado deve conter o nome do curso/grau, o nome da instituição de ensino e o ano de conclusão ou previsão de formatura. Para o cenário de ordenação dos itens, dado que existem múltiplos itens na lista de "Formação & Certificações", quando a seção for renderizada, então os registros devem ser apresentados em texto contínuo seguindo estritamente a ordem cronológica inversa, do mais recente para o mais antigo.