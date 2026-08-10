# FutureTech Hub

O FutureTech Hub é um laboratório digital de Engenharia de Software criado para transformar estudo em prática, experimentação e conhecimento compartilhado. A V1 apresenta publicamente a proposta, as áreas de conhecimento, trilhas, projetos, conteúdos e ferramentas que orientam a evolução do laboratório.

## Contexto e propósito

O projeto nasceu no contexto acadêmico dos estudos em Engenharia de Software. Seu objetivo público é organizar aprendizados, documentar decisões e experimentos, desenvolver projetos reais e compartilhar conhecimento técnico de forma clara, responsável e acessível.

O FutureTech Hub é uma iniciativa da **Luara Digital**.

## Tecnologias

- React 19
- Vite 8
- JavaScript com JSX
- CSS nativo, custom properties e media queries
- ESLint

## Arquitetura

A aplicação é uma página React componentizada. A composição principal fica em `src/App.jsx`; componentes reutilizáveis ficam em `src/components`; seções da página em `src/sections`; o conteúdo editorial em `src/data/content.js`; e o design system em `src/styles`, separado entre tokens, estilos base e estilos da aplicação.

Essa separação mantém conteúdo, estrutura e apresentação independentes sem adicionar complexidade desnecessária à V1.

## Funcionalidades da V1

- Header e navegação responsiva por âncoras
- Hero com apresentação do laboratório
- Áreas de conhecimento
- Trilhas de estudo
- FutureTech Lab e experimentos planejados
- Projetos práticos
- Conteúdos em preparação
- Ferramentas organizadas por contexto de uso
- Apresentação da visão futura do FutureAI
- Metodologia de aprendizagem
- Chamada para ação e rodapé institucional
- Metadados básicos de SEO e compartilhamento social

Recursos que ainda não estão disponíveis são identificados na interface como **Em breve**, **Em desenvolvimento**, **Em preparação** ou **planejado**. A V1 não simula ações nem apresenta funcionalidades futuras como se estivessem ativas.

## Acessibilidade

A V1 inclui HTML semântico, landmarks, hierarquia lógica de headings, link para pular ao conteúdo, foco visível, navegação por teclado, nomes acessíveis em controles, ícones decorativos ocultos para tecnologias assistivas e retorno de foco ao botão do menu quando ele é fechado com `Escape`.

A preferência `prefers-reduced-motion` desativa a rolagem suave e reduz animações e transições decorativas.

## UX/UI e responsividade

A interface utiliza um design system próprio com paleta escura, tipografia de sistema, escala fluida, espaçamento consistente e componentes responsivos. Os layouts se adaptam de telas móveis a desktops amplos, com atenção especial às larguras de 320, 375, 768 e 1024 pixels.

## Como executar

Pré-requisito: Node.js compatível com Vite 8 e npm.

```bash
cd frontend
npm install
npm run dev
```

O terminal exibirá o endereço local da aplicação.

Para verificar qualidade e gerar a versão de produção:

```bash
npm run lint
npm run build
npm run preview
```

## Estrutura

```text
frontend/
├── public/              # arquivos públicos e favicon próprio
├── src/
│   ├── components/      # componentes reutilizáveis
│   ├── data/            # conteúdo editorial estruturado
│   ├── sections/        # seções da landing page
│   ├── styles/          # tokens, base e estilos da aplicação
│   ├── App.jsx          # composição da página
│   ├── index.css        # entrada global de estilos
│   └── main.jsx         # bootstrap do React
├── index.html           # documento e metadados
├── eslint.config.js
├── package.json
└── vite.config.js
```

## Roadmap

- Publicar os primeiros estudos de caso e registros do laboratório
- Evoluir as trilhas com materiais e projetos associados
- Disponibilizar conteúdos técnicos completos
- Ampliar validações de acessibilidade e testes em dispositivos reais
- Definir hospedagem, domínio e estratégia de compartilhamento social
- Pesquisar e validar o FutureAI antes de qualquer implementação pública

## FutureAI

O FutureAI é uma visão futura de produto: uma possível camada inteligente para explicar conceitos, sugerir trilhas, apoiar planos de estudo e revisar conhecimento. Nenhuma IA ou chatbot está ativo na V1. Qualquer evolução deverá considerar transparência, segurança, privacidade, revisão humana e utilidade pedagógica.

## Status atual

**V1 tecnicamente finalizada para validação visual e publicação.** A aplicação possui estrutura, conteúdo institucional, responsividade, acessibilidade básica e build de produção. A definição de domínio, URL pública, imagem social e implementação do FutureAI permanece fora do escopo atual.
