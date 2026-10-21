# Guia Git e GitHub

Este guia resume um fluxo seguro para uma equipe de cinco estudantes. A regra principal é simples: cada tarefa usa uma branch, e a integração acontece por Pull Request.

## Conceitos essenciais

- **Repositório:** pasta acompanhada pelo Git.
- **Commit:** registro de um conjunto pequeno e coerente de mudanças.
- **`main`:** versão integrada e estável do projeto. Evite trabalhar diretamente nela.
- **Branch:** linha de trabalho separada, usada para desenvolver sem interferir no restante da equipe.
- **Pull Request (PR):** pedido para revisar e juntar uma branch à `main`.

## Configuração inicial

Se o projeto ainda não usa Git:

```bash
git init
git add .
git commit -m "chore: criando estrutura inicial"
```

Para ligar o projeto a um repositório vazio do GitHub:

```bash
git remote add origin URL_DO_REPOSITORIO
git branch -M main
git push -u origin main
```

## Estratégia de branches

```text
main
├── feature/header
├── feature/componentes
├── feature/carrinho
├── feature/paginas
└── feature/estilizacao
```

Use nomes que expliquem a tarefa. Se o tema mudar, as branches também podem mudar: `feature/catalogo`, `feature/formulario`, `fix/menu-mobile` etc.

## Fluxo diário de cada integrante

Antes de começar, atualize a `main` e crie sua branch:

```bash
git switch main
git pull origin main
git switch -c feature/header
```

Durante o trabalho, verifique e registre mudanças:

```bash
git status
git add src/components/Header.jsx
git commit -m "feat: criando header responsivo"
```

Envie a branch pela primeira vez:

```bash
git push -u origin feature/header
```

Depois, abra uma Pull Request no GitHub. Um colega ou o Tech Lead revisa, pede ajustes se necessário e integra a alteração.

## Comandos úteis

```bash
git status                 # mostra arquivos alterados
git branch                 # lista branches locais
git switch nome-da-branch  # muda de branch
git switch -c nova-branch  # cria e já muda de branch
git add .                  # prepara todas as mudanças da pasta
git commit -m "mensagem"   # registra a mudança
git push                   # envia novos commits
git fetch origin           # consulta atualizações remotas
git pull                   # baixa e integra atualizações
git log --oneline          # exibe o histórico resumido
```

Prefira `git add caminho/do/arquivo` quando existirem mudanças que não pertencem ao seu commit.

## Como o Tech Lead integra o projeto

1. Confere se a PR modifica somente os arquivos esperados.
2. Executa `npm run lint`, `npm test` e `npm run build`.
3. Lê o código e testa a funcionalidade alterada.
4. Aprova e faz o merge da PR.
5. Avisa a equipe para atualizar a `main` antes do próximo trabalho.

Para reduzir conflitos, combine previamente quem altera `App.jsx`, `siteConfig.js` e `produtos.json`. Esses arquivos conectam várias partes e devem ter um responsável por vez.

## Resolvendo um conflito simples

Um conflito acontece quando duas branches alteram as mesmas linhas. Na sua branch:

```bash
git fetch origin
git merge origin/main
```

O arquivo mostrará marcadores como estes:

```text
<<<<<<< HEAD
sua versão
=======
versão da main
>>>>>>> origin/main
```

Converse com quem fez a outra mudança, escolha ou combine o conteúdo correto, apague todos os marcadores e teste novamente. Depois:

```bash
git add caminho/do/arquivo
git commit -m "fix: resolvendo conflito com a main"
git push
```

Não use `git reset --hard` ou `git push --force` como solução comum: esses comandos podem apagar trabalho. Em caso de dúvida, pare e peça ajuda ao Tech Lead.

## Dicas para a prova

- Faça commits pequenos após cada parte funcionar.
- Não deixe cinco pessoas editarem o mesmo arquivo ao mesmo tempo.
- Integre primeiro a estrutura; depois, as funcionalidades.
- Leia a PR antes do merge e teste a `main` integrada.
- Se o tempo for curto, priorize funcionamento e clareza, não efeitos visuais.
