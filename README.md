# 🚀 FutureTech Hub

<div align="center">

### Learn. Build. Evolve.

**Laboratório digital de Engenharia de Software, tecnologia e aprendizagem prática.**

Transformando estudos em projetos, experimentos, documentação e conhecimento compartilhado.

[🌐 Acessar projeto](https://futuretech-hub.vercel.app/) •
[💻 Repositório](https://github.com/joselysilva-dev/futuretech-hub)

</div>

---

## 📌 Sobre o projeto

O **FutureTech Hub** é um laboratório digital em desenvolvimento, criado para transformar o processo de aprendizagem em Engenharia de Software em uma experiência prática, organizada e compartilhável.

O projeto nasceu durante meus estudos em **Engenharia de Software** com o objetivo de reunir, em um único ecossistema:

- estudos técnicos;
- trilhas de aprendizagem;
- projetos práticos;
- experimentos;
- conteúdos;
- ferramentas;
- documentação;
- desenvolvimento de software;
- evolução profissional.

Mais do que uma landing page, o FutureTech Hub está sendo desenvolvido como uma **plataforma tecnológica em evolução**, onde conhecimento teórico é conectado à prática.

> **Aprender → Praticar → Construir → Documentar → Compartilhar → Evoluir**

O FutureTech Hub é uma iniciativa da **Luara Digital**.

---

# 🚧 Status do projeto

> **Em desenvolvimento ativo**

O projeto já possui uma primeira versão pública funcional, com interface responsiva, acessibilidade, navegação, design system, animações e deploy em produção.

Atualmente, o FutureTech Hub está entrando em sua **segunda fase de desenvolvimento**, com foco em:

- nova identidade visual;
- evolução da marca;
- criação da logo oficial;
- refinamento do design system;
- páginas internas;
- expansão das trilhas;
- evolução do laboratório;
- conteúdos técnicos;
- novos estudos de caso;
- arquitetura preparada para futuras funcionalidades.

A plataforma continuará evoluindo de forma incremental.

---

# ✨ Visão do produto

A proposta é construir gradualmente um ambiente onde estudantes e pessoas em formação na área de tecnologia possam encontrar conteúdos, projetos, experimentos e trilhas organizadas de maneira clara.

O Hub trabalha principalmente com áreas como:

- Engenharia de Software;
- Desenvolvimento Backend;
- Inteligência Artificial;
- Cloud Computing;
- DevOps;
- Banco de Dados;
- Segurança;
- Redes e Infraestrutura.

A plataforma foi projetada desde o início para crescer de forma incremental, evitando apresentar funcionalidades futuras como se já estivessem disponíveis.

---

# 🖥️ Preview

### FutureTech Hub

**Produto digital • Laboratório tecnológico • Plataforma educacional**

🌐 **Produção:**  
https://futuretech-hub.vercel.app/

---

# 🧩 Tecnologias

### Frontend

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Native-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### Qualidade e desenvolvimento

![ESLint](https://img.shields.io/badge/ESLint-Code%20Quality-4B32C3?style=for-the-badge&logo=eslint)
![Git](https://img.shields.io/badge/Git-Version%20Control-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)
![Vercel](https://img.shields.io/badge/Vercel-Deploy-000000?style=for-the-badge&logo=vercel)

---

# 🏗️ Arquitetura

O frontend foi organizado utilizando uma arquitetura componentizada e separação entre conteúdo, interface e estilos.

```text
frontend/
│
├── public/
│   └── favicon.svg
│
├── src/
│   │
│   ├── components/
│   │   └── componentes reutilizáveis
│   │
│   ├── data/
│   │   └── conteúdo estruturado da aplicação
│   │
│   ├── sections/
│   │   └── seções da experiência principal
│   │
│   ├── styles/
│   │   ├── tokens.css
│   │   ├── base.css
│   │   └── app.css
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── useReveal.js
│
├── index.html
├── eslint.config.js
├── package.json
└── vite.config.js


Responsabilidades

components/
Componentes reutilizáveis da interface.

sections/
Grandes blocos que compõem a experiência do Hub.

data/
Conteúdo editorial separado da estrutura visual.

styles/
Design system, tokens, estilos globais, responsividade e componentes visuais.

useReveal.js
Sistema reutilizável de animações de entrada baseado em IntersectionObserver.

🎨 UI/UX

A interface passou por um refinamento completo para assumir uma identidade de produto digital premium, mantendo o caráter educacional e tecnológico.

A direção visual combina:

dark interface;
estética SaaS premium;
laboratório tecnológico;
superfícies em diferentes níveis;
azul, violeta e ciano controlados;
tipografia fluida;
espaçamento consistente;
microinterações;
elementos inspirados em código, sistemas e arquitetura;
animações discretas.

O objetivo foi evitar tanto uma aparência de template genérico quanto uma estética excessivamente gamer.

✨ Motion Design

O projeto possui um sistema próprio de animações sem bibliotecas externas.

Foi utilizado:

IntersectionObserver
+
CSS transitions
+
CSS animations

O sistema de reveal on scroll identifica elementos entrando na viewport e aplica progressivamente:

opacity;
pequenos deslocamentos verticais;
escala mínima;
stagger entre elementos;
entrada de cards;
entrada de headings;
entrada de painéis.

Após o elemento ser revelado, ele deixa de ser observado.

Isso reduz processamento desnecessário durante a navegação.

♿ Acessibilidade

A acessibilidade faz parte da arquitetura do FutureTech Hub e não foi tratada apenas como acabamento visual.

A implementação contempla:

HTML semântico;
landmarks;
hierarquia lógica de headings;
skip link;
navegação por teclado;
focus-visible;
áreas de interação adequadas;
aria-expanded;
aria-controls;
fechamento do menu com Escape;
retorno de foco ao elemento acionador;
elementos decorativos ocultos para tecnologias assistivas;
contraste de interface;
experiência funcional mesmo sem animações.
🧘 Reduced Motion

O projeto respeita:

@media (prefers-reduced-motion: reduce)

Quando essa preferência está habilitada:

smooth scroll é removido;
animações contínuas são desativadas;
reveals aparecem imediatamente;
delays são removidos;
transforms decorativos são reduzidos;
transições são minimizadas.

Assim, movimento nunca é requisito para compreender ou utilizar a interface.

📱 Responsividade

A experiência foi refinada considerando diferentes categorias de dispositivo.

Foram avaliadas especialmente larguras próximas de:

320px
360px
375px
390px
430px
768px
1024px
1280px
1440px+

A interface não apenas reduz o tamanho dos elementos.

Layouts são reorganizados conforme o espaço disponível.

Exemplos
Hero reorganizado no mobile;
CTAs adaptados à largura disponível;
menu mobile próprio;
grids de 4 → 2 → 1 coluna;
terminal com overflow controlado;
FutureAI reorganizado;
metodologia convertida em stepper vertical;
proteção contra overflow horizontal.
🧭 Principais áreas
🏠 Hero

Apresenta imediatamente:

proposta do projeto;
contexto tecnológico;
chamada principal;
entrada para exploração da plataforma.

A composição utiliza elementos inspirados em:

terminal;
código;
build;
dados;
arquitetura;
deploy;
status de ambiente.
🧠 Áreas de conhecimento

O Hub organiza estudos em oito grandes áreas:

Engenharia de Software
Backend
Inteligência Artificial
Cloud
DevOps
Banco de Dados
Segurança
Redes
🛣️ Trilhas

A seção de trilhas representa evolução de aprendizagem por etapas.

Fundamentos
      ↓
Prática
      ↓
Projeto
      ↓
Deploy

A intenção é conectar teoria e construção prática.

🧪 FutureTech Lab

O FutureTech Lab representa a área de experimentação técnica da plataforma.

Sua interface foi inspirada em ambientes de desenvolvimento e terminal.

Exemplos de temas planejados:

API REST
Cloud
Database
Docker
CI/CD
Infraestrutura
IA
Automações

O laboratório foi projetado para documentar não apenas o resultado, mas também:

hipóteses;
arquitetura;
implementação;
falhas;
correções;
decisões;
aprendizados.

Engenharia também acontece durante o processo.

💻 Projetos

Os projetos apresentados no FutureTech Hub são tratados como estudos de caso técnicos.

Cada projeto poderá evoluir para documentar:

Contexto
↓
Problema
↓
Decisões
↓
Arquitetura
↓
Implementação
↓
Resultado
↓
Aprendizados

Isso transforma o Hub também em um registro da minha evolução como desenvolvedora.

📚 Conteúdos

A plataforma foi preparada para receber conteúdos técnicos em formato editorial.

Entre os formatos planejados estão:

artigos;
guias;
anotações técnicas;
estudos;
documentação;
explicações de conceitos;
registros de experimentos.

Conteúdos ainda indisponíveis permanecem claramente identificados como Em breve ou Em preparação.

🛠️ Ferramentas

O FutureTech Hub também apresenta ferramentas relacionadas ao processo de desenvolvimento e aprendizagem.

A organização considera contextos como:

desenvolvimento;
APIs;
banco de dados;
Cloud;
DevOps;
versionamento;
produtividade técnica.
🤖 FutureAI

O FutureAI é uma visão futura da plataforma.

A proposta é pesquisar uma possível camada de Inteligência Artificial capaz de auxiliar futuramente em tarefas como:

explicar conceitos;
sugerir trilhas;
organizar estudos;
apoiar revisão;
indicar próximos passos;
apoiar projetos;
conectar conteúdos.
Status

🚧 Em desenvolvimento conceitual

Nenhum chatbot ou sistema de IA é apresentado como funcional na versão atual.

Uma futura implementação deverá considerar:

transparência;
privacidade;
segurança;
revisão humana;
qualidade das respostas;
utilidade pedagógica.
⚡ Performance

O refinamento visual foi desenvolvido evitando dependências pesadas.

A experiência utiliza principalmente:

React
CSS
SVG
IntersectionObserver

Não foram adicionados:

frameworks de animação;
vídeos pesados;
imagens gigantes;
loops JavaScript de animação;
dependências apenas para efeitos visuais.

O objetivo é manter uma interface rica sem comprometer desempenho e manutenção.

🔍 SEO

A versão atual possui configuração básica de SEO, incluindo:

title;
description;
robots;
author;
Open Graph;
og:title;
og:description;
og:type;
og:locale.

A aplicação não utiliza URLs, métricas ou informações sociais fictícias.

🧪 Qualidade

Antes das versões publicadas são executados:

npm run lint
npm run build

No refinamento premium mais recente:

ESLint: aprovado
Build: aprovado
Erros: 0
Warnings: 0
🚀 Executando localmente
1. Clone o repositório
git clone https://github.com/joselysilva-dev/futuretech-hub.git
2. Entre no projeto
cd futuretech-hub/frontend
3. Instale as dependências
npm install
4. Execute em desenvolvimento
npm run dev
Build de produção
npm run build
Preview
npm run preview
Qualidade
npm run lint
☁️ Deploy

O frontend está publicado através da Vercel, com integração ao repositório GitHub.

GitHub
   ↓
main
   ↓
Vercel
   ↓
Build
   ↓
Production

🌐 Produção

https://futuretech-hub.vercel.app/

🗺️ Roadmap
✅ V1 — Foundation
 Arquitetura React
 Estrutura componentizada
 Hero
 Áreas de conhecimento
 Trilhas
 FutureTech Lab
 Projetos
 Conteúdos
 Ferramentas
 FutureAI conceitual
 Metodologia
 Responsividade
 Acessibilidade básica
 SEO
 Deploy
✅ V1.1 — Premium Experience
 Refinamento completo da interface
 Design system dark premium
 Navbar refinada
 Hero premium
 Microinterações
 Reveal on scroll
 IntersectionObserver
 Stagger em elementos
 FutureTech Lab refinado
 FutureAI refinado
 Mobile UX
 prefers-reduced-motion
 Performance audit
 Build validado
 Deploy em produção
🚧 V2 — Em desenvolvimento

A segunda versão do FutureTech Hub está atualmente em desenvolvimento.

Foco atual
 identidade visual oficial;
 logo FutureTech Hub;
 brand system;
 evolução do design system;
 nova experiência de navegação;
 páginas internas;
 trilhas completas;
 página de projetos;
 página do laboratório;
 hub de conteúdos;
 primeiros estudos de caso técnicos;
 documentação dos experimentos.
🔮 Evoluções futuras

Planejadas para fases posteriores:

backend;
persistência de dados;
autenticação;
área personalizada;
conteúdos dinâmicos;
APIs;
cloud;
CI/CD;
observabilidade;
FutureAI;
recursos de comunidade.

Cada nova funcionalidade será adicionada somente quando possuir uma necessidade real dentro da plataforma.

🎨 Identidade V2

A identidade visual definitiva do FutureTech Hub está sendo desenvolvida durante a construção da V2.

Conceito

Conexões que transformam estudo em construção.

A direção visual conecta:

Engenharia
+
Conhecimento
+
Tecnologia
+
Experimentação
+
Futuro
Personalidade

A marca busca ser:

tecnológica;
sofisticada;
moderna;
acessível;
inteligente;
acolhedora;
confiável;
orientada à construção.

A identidade evita excesso de neon e estética gamer, priorizando uma abordagem dark tech premium e profissional.

🎯 O que este projeto demonstra

O FutureTech Hub é também um projeto de portfólio e demonstra conhecimentos aplicados em:

estruturação de projetos React;
componentização;
organização de código;
JavaScript;
CSS;
design systems;
UI responsiva;
UX;
acessibilidade;
animações web;
IntersectionObserver;
performance;
SEO;
Git;
GitHub;
deploy;
documentação técnica;
evolução incremental de produto;
construção orientada a produto.
👩‍💻 Desenvolvimento

Projeto desenvolvido por Josely Silva durante sua formação em Engenharia de Software.

O FutureTech Hub está em desenvolvimento contínuo e acompanha minha evolução técnica, acadêmica e profissional na área de tecnologia.

O projeto segue um princípio simples:

Não estudar tecnologia apenas para conhecer.
Estudar para construir.

<div align="center">
FutureTech Hub
Learn. Build. Evolve.

Engenharia • Tecnologia • Conhecimento • Construção

🌐 Ver projeto •
💻 GitHub

Status: 🚧 Em desenvolvimento

Uma iniciativa da Luara Digital

</div> ```

Essa versão fica muito melhor para portfólio porque não tenta fingir que o produto está “pronto”. Ela mostra que já existe uma versão sólida publicada, mas que o projeto está em desenvolvimento ativo e evoluindo para a V2.
