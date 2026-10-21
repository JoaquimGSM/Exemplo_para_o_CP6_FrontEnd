# Guia de Estudos — React na LojaBase

Este guia aponta exemplos reais do projeto. Leia a explicação, abra o arquivo indicado e altere pequenas partes para praticar.

## 1. Componente

Um componente é uma função que retorna JSX. Ele representa uma parte reutilizável da interface.

```jsx
export default function Footer() {
  return <footer>Conteúdo do rodapé</footer>
}
```

Onde ver: `src/components/Footer.jsx`. As páginas em `src/pages` também são componentes.

## 2. Importar e exportar

`export default` disponibiliza o componente; `import` permite usá-lo em outro arquivo.

```jsx
// Footer.jsx
export default function Footer() { /* ... */ }

// App.jsx
import Footer from './components/Footer'
```

Onde ver: imports no início de `src/App.jsx`.

## 3. Props

Props são informações que o componente pai passa ao filho. O card não conhece produtos fixos: ele recebe `produto` e `onAdicionar`.

```jsx
<CardProduto produto={produto} onAdicionar={onAdicionar} />
```

```jsx
function CardProduto({ produto, onAdicionar }) {
  return <button onClick={() => onAdicionar(produto)}>Adicionar</button>
}
```

Onde ver: `src/components/ListaProdutos.jsx` e `src/components/CardProduto.jsx`.

## 4. `useState`

`useState` guarda um valor que pode mudar e faz a tela ser renderizada novamente após a mudança.

```jsx
const [busca, setBusca] = useState('')
```

Onde ver: busca e categoria em `src/pages/Produtos.jsx`, formulário em `src/pages/Contato.jsx`, menu em `src/components/Header.jsx` e carrinho em `src/App.jsx`.

## 5. `useEffect`

Use um efeito para sincronizar o React com algo externo. Aqui, ele grava o carrinho no armazenamento do navegador sempre que os itens mudam.

```jsx
useEffect(() => {
  localStorage.setItem('lojabase-carrinho', JSON.stringify(itensCarrinho))
}, [itensCarrinho])
```

Onde ver: `src/App.jsx`. Essa persistência é opcional; o carrinho continuaria funcionando sem ela, mas seria apagado ao atualizar a página.

## 6. `.map()`

`map` transforma cada item de um array em JSX. A `key` ajuda o React a identificar cada elemento.

```jsx
produtos.map((produto) => (
  <CardProduto key={produto.id} produto={produto} />
))
```

Onde ver: `src/components/ListaProdutos.jsx`.

## 7. `.filter()`

`filter` cria outro array somente com os itens que atendem à condição.

```jsx
const destaques = produtos.filter((produto) => produto.destaque)
```

Onde ver: destaques em `src/pages/Home.jsx` e busca combinada com categoria em `src/pages/Produtos.jsx`.

## 8. `onClick`

Executa uma função quando o usuário clica. Passe uma função; não execute imediatamente.

```jsx
<button onClick={() => onAdicionar(produto)}>Adicionar</button>
```

Onde ver: `src/components/CardProduto.jsx` e botões de quantidade em `src/components/Carrinho.jsx`.

## 9. `onChange`

Captura mudanças em inputs e selects.

```jsx
<input
  value={busca}
  onChange={(evento) => onBuscar(evento.target.value)}
/>
```

Onde ver: `src/components/BarraBusca.jsx`, `FiltroCategoria.jsx` e `src/pages/Contato.jsx`.

## 10. `onSubmit`

O evento do formulário reúne sua validação e envio. `preventDefault()` evita que o navegador recarregue a página.

```jsx
function enviarFormulario(evento) {
  evento.preventDefault()
  // validação e confirmação
}

<form onSubmit={enviarFormulario}>...</form>
```

Onde ver: `src/pages/Contato.jsx`.

## 11. Rotas

`BrowserRouter` envolve a aplicação em `src/main.jsx`. `Routes` escolhe a primeira `Route` compatível.

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/produtos" element={<Produtos />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

Onde ver: `src/main.jsx` e `src/App.jsx`.

## 12. Navegar com `Link` e `NavLink`

Para rotas internas, use `Link` em vez de `<a>`, assim a página não recarrega. `NavLink` também informa se o link está ativo.

```jsx
<Link to="/produtos">Ver produtos</Link>
<NavLink to="/sobre">Sobre</NavLink>
```

Onde ver: `src/components/Header.jsx`, `Footer.jsx` e `Hero.jsx`.

## 13. Importar JSON

Os dados ficam separados da interface e são importados como um array JavaScript.

```jsx
import produtos from './data/produtos.json'
```

Onde ver: `src/App.jsx` e `src/data/produtos.json`.

## 14. Classes Tailwind

As classes descrevem o estilo diretamente no JSX.

```jsx
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
```

- `grid`: ativa grid.
- `gap-6`: cria espaçamento.
- `sm:grid-cols-2`: duas colunas a partir da tela pequena.
- `lg:grid-cols-4`: quatro colunas em telas grandes.

Onde ver: quase todos os componentes. O Tailwind v4 é carregado com `@import "tailwindcss"` em `src/index.css` e com o plugin em `vite.config.js`.

## 15. Layout responsivo

Comece pelo celular e acrescente mudanças em telas maiores com `sm:`, `md:` e `lg:`.

```jsx
className="flex flex-col gap-4 sm:flex-row sm:items-center"
```

Onde ver: grid de produtos em `ListaProdutos.jsx`, menu em `Header.jsx` e páginas em `src/pages`.

## 16. Compartilhar estado

Quando Header, páginas e Carrinho precisam dos mesmos dados, o estado sobe para o ancestral em comum: `App`.

```jsx
const [itensCarrinho, setItensCarrinho] = useState([])

<Header totalItens={totalItens} />
<Home onAdicionar={adicionarAoCarrinho} />
<Carrinho itens={itensCarrinho} />
```

Onde ver: `src/App.jsx`. Este projeto usa props, sem Context API, pois a árvore é pequena.

## 17. Renderização condicional

Uma expressão decide o que aparece.

```jsx
{menuAberto && <nav>...</nav>}
```

Outros exemplos:

- carrinho vazio em `src/components/Carrinho.jsx`;
- nenhum resultado em `src/components/ListaProdutos.jsx`;
- confirmação de envio em `src/pages/Contato.jsx`;
- menu aberto em `src/components/Header.jsx`.

## Erros comuns no React

- **Esquecer `key` no `map`:** use um ID estável, não o índice.
- **Alterar o estado diretamente:** use `setEstado` e crie novo array/objeto.
- **Executar a função no JSX:** prefira `onClick={() => remover(id)}`.
- **Hook dentro de `if` ou loop:** hooks ficam no início do componente.
- **Input sem `value`/`onChange`:** em formulário controlado, os dois trabalham juntos.
- **Usar `<a>` em rota interna:** use `Link` ou `NavLink`.
- **Import não usado:** remova-o; o ESLint aponta esse erro.
- **Caminho de imagem quebrado:** arquivos de `public/images` usam `/images/arquivo.ext`.
- **Misturar Tailwind v3 e v4:** este projeto usa v4; não precisa de `tailwind.config.js` para este caso.

## Roteiro curto para estudar

1. Abra `produtos.json` e cadastre um produto.
2. Mude o nome e as cores em `siteConfig.js`.
3. Acompanhe uma prop de `App` até `CardProduto`.
4. Digite na busca e relacione a mudança com `useState` e `filter`.
5. Adicione um item e acompanhe o estado do carrinho.
6. Crie uma rota de teste e um link para ela.
7. Execute `npm test`, que valida esses mesmos fluxos automaticamente.
