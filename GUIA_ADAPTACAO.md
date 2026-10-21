# Guia de Adaptação para a Prova

O projeto concentra as mudanças mais frequentes em dois arquivos:

- `src/config/siteConfig.js`: nome, slogan, Hero, contato e cores.
- `src/data/produtos.json`: produtos, categorias, preços, descrições e imagens.

As imagens ficam em `public/images`. Um arquivo chamado `camiseta.jpg` é referenciado no JSON como `/images/camiseta.jpg`.

## Adaptação rápida em 15 minutos

1. Leia o enunciado e marque páginas e funcionalidades obrigatórias.
2. Altere a identidade em `siteConfig.js`.
3. Troque os objetos de `produtos.json`, mantendo os mesmos nomes de campos.
4. Adicione as imagens e confirme cada caminho.
5. Ajuste os textos das páginas Home, Sobre e Contato.
6. Remova apenas o que o novo tema realmente não usa.
7. Execute `npm run build` e teste as rotas no navegador.

## Cenário A — Loja de brinquedos

- Nome: por exemplo, BrincaMundo.
- Categorias: Educativos, Bonecos, Jogos, Ar Livre.
- Imagens: brinquedos com fundo claro e proporção semelhante.
- Hero: destaque diversão, criatividade e faixa etária.
- Produtos: altere os 12 objetos do JSON; não coloque produtos diretamente no JSX.

## Cenário B — Loja de roupas

- Categorias: Feminino, Masculino, Infantil e Acessórios.
- Acrescente tamanho e cor ao JSON somente se o enunciado pedir.
- Troque o texto do Hero e use uma cor coerente com a marca.
- Cards podem continuar iguais; nome, preço, foto e descrição vêm por props.

## Cenário C — Loja de eletrônicos

- Categorias: Celulares, Áudio, Informática e Acessórios.
- Atualize preços e descrições com características objetivas.
- Use imagens consistentes e confira se nenhuma está quebrada.
- O carrinho, a busca e os filtros já funcionam sem mudança.

## Cenário D — Site institucional

Reutilize `Header`, `Footer`, `Hero`, `Sobre` e `Contato`. Remova o link Produtos, a rota `/produtos`, os produtos em destaque e o botão do carrinho. Em `App.jsx`, retire também o estado e as funções do carrinho. No lugar do catálogo, crie seções como equipe, projetos ou diferenciais.

Faça a remoção completa: não deixe imports, props ou botões sem função.

## Cenário E — Site de serviços

Uma adaptação pequena é renomear os conceitos:

- `produtos.json` → `servicos.json` (opcional, mas deixa o domínio claro).
- `CardProduto` → `CardServico`.
- `nome` → pode continuar `nome`.
- `preco` → `precoInicial` ou remova se o serviço não tiver valor público.
- Botão “Adicionar ao carrinho” → “Solicitar orçamento” ou “Saiba mais”.

Se trocar os campos do JSON, atualize também as props lidas pelo card e os filtros na página. Para uma prova curta, manter os campos existentes e mudar apenas os textos é mais rápido.

## Alterando a identidade visual

Edite somente as cores em `src/config/siteConfig.js`:

```js
cores: {
  primaria: '#7C3AED',
  primariaEscura: '#5B21B6',
  destaque: '#FBBF24',
  destaqueEscuro: '#A16207',
}
```

`App.jsx` transforma esses valores em variáveis CSS usadas pelos componentes. `destaque` serve para fundos, faixas e bordas; `destaqueEscuro` é a versão com contraste suficiente para textos pequenos e indicadores de foco. Ao trocar a paleta, verifique se as duas cores continuam legíveis nos fundos do site.

## Se o enunciado mudar a divisão da equipe

Distribua por arquivos independentes, não só por “quantidade de trabalho”. Exemplos:

- Se houver muitas páginas, duas pessoas cuidam de páginas diferentes.
- Se não houver carrinho, o responsável por funcionalidades assume formulário e interações.
- Se o foco for design, uma pessoa define o padrão e outra aplica responsividade.
- O Tech Lead mantém `App.jsx`, integra branches e executa as verificações.

## Checklist final

- [ ] Nome, logo textual e slogan
- [ ] Cores da marca
- [ ] Rotas pedidas no enunciado
- [ ] Imagens locais funcionando
- [ ] Produtos ou serviços corretos
- [ ] Categorias coerentes
- [ ] Textos do Hero, Sobre e Contato
- [ ] Busca e filtro combinados
- [ ] Botões com função
- [ ] Formulário validado
- [ ] Menu mobile
- [ ] Carrinho, se necessário
- [ ] Página 404
- [ ] Sem erros no console
- [ ] `npm run lint`, `npm test` e `npm run build`
