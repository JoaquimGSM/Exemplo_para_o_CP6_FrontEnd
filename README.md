# LojaBase — Projeto Coringa de Front-End

Projeto de e-commerce genérico criado como material de estudo e base reutilizável para provas práticas. O código prioriza clareza: React com JavaScript, componentes pequenos, dados em JSON e estilos com Tailwind CSS.

## Funcionalidades

- Home com Hero, destaques e benefícios.
- Catálogo com 12 produtos e imagens locais.
- Busca por nome e filtro por categoria funcionando juntos.
- Carrinho com adição, remoção, quantidades, subtotal e `localStorage`.
- Páginas Sobre, Contato e erro 404.
- Formulário controlado com validações e confirmação simulada.
- Menu responsivo e cuidados básicos de acessibilidade.
- Testes automatizados dos principais fluxos.

## Tecnologias

- React e JSX
- Vite
- Tailwind CSS v4 com `@tailwindcss/vite`
- React Router
- Vitest e Testing Library (testes)
- ESLint (qualidade)

## Como executar

É necessário ter Node.js instalado. No terminal, dentro da pasta do projeto:

```bash
npm install
npm run dev
```

O Vite mostrará o endereço local, geralmente `http://localhost:5173`.

Comandos de verificação:

```bash
npm run lint
npm test
npm run build
```

## Rotas

| Rota | Conteúdo |
|---|---|
| `/` | Home |
| `/produtos` | Catálogo, busca e filtros |
| `/sobre` | História, missão e valores |
| `/contato` | Formulário de contato |
| qualquer outra | Página 404 |

## Estrutura principal

```text
public/images/          imagens SVG locais
src/components/        componentes reutilizáveis
src/config/             identidade e textos centrais
src/data/               produtos em JSON
src/pages/              componentes de cada rota
src/test/               configuração e testes
src/utils/              funções auxiliares
src/App.jsx             rotas e estado compartilhado
src/index.css           Tailwind e estilos globais
```

## Como personalizar

1. Altere nome, textos, contato e cores em `src/config/siteConfig.js`.
2. Substitua os itens de `src/data/produtos.json`.
3. Coloque novas imagens em `public/images` e use caminhos como `/images/nome.jpg`.
4. Troque textos institucionais em `src/pages/Sobre.jsx` e `src/pages/Contato.jsx`.

As cores do arquivo de configuração viram variáveis CSS em `src/App.jsx`, então os componentes continuam usando as mesmas classes. Para detalhes e cenários, consulte [GUIA_ADAPTACAO.md](GUIA_ADAPTACAO.md).

## Organização de uma equipe de cinco pessoas

| Papel | Responsabilidade sugerida |
|---|---|
| Tech Lead | configuração, integração, revisão e conflitos |
| Layout | Header, Footer, Hero e responsividade |
| Componentes | cards e lista de produtos |
| Funcionalidades | busca, filtros, carrinho e estados |
| Páginas e dados | rotas, JSON, Sobre e Contato |

Cada integrante deve trabalhar em sua própria branch e abrir uma Pull Request. Veja [GUIA_GIT.md](GUIA_GIT.md).

## Observação

Este é um projeto acadêmico. O carrinho usa somente o navegador e o formulário não envia informações para um servidor. Não há login, banco de dados ou pagamento real.
