import { useState } from 'react'
import BarraBusca from '../components/BarraBusca'
import FiltroCategoria from '../components/FiltroCategoria'
import ListaProdutos from '../components/ListaProdutos'

export default function Produtos({ produtos, onAdicionar }) {
  const [busca, setBusca] = useState('')
  const [categoria, setCategoria] = useState('Todas')
  const categorias = [...new Set(produtos.map((produto) => produto.categoria))].sort()

  const termo = busca.trim().toLocaleLowerCase('pt-BR')
  const produtosFiltrados = produtos.filter((produto) => {
    const correspondeBusca = produto.nome.toLocaleLowerCase('pt-BR').includes(termo)
    const correspondeCategoria = categoria === 'Todas' || produto.categoria === categoria
    return correspondeBusca && correspondeCategoria
  })

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 md:py-14 lg:px-8">
      <div className="grid gap-5 border-b border-slate-300 pb-8 md:grid-cols-[1fr_0.8fr] md:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-600">Catálogo · edição atual</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.025em] text-[var(--cor-primaria-escura)] sm:text-5xl">Todos os produtos</h1>
        </div>
        <p className="max-w-xl leading-7 text-slate-600 md:justify-self-end">Busque pelo nome ou escolha uma categoria. Os dois filtros podem ser usados ao mesmo tempo.</p>
      </div>

      <section className="grid gap-5 border-b border-slate-300 py-6 md:grid-cols-2" aria-label="Filtros de produtos">
        <BarraBusca busca={busca} onBuscar={setBusca} />
        <FiltroCategoria categorias={categorias} categoriaSelecionada={categoria} onFiltrar={setCategoria} />
      </section>

      <p className="my-6 text-sm font-medium text-slate-600" aria-live="polite">{produtosFiltrados.length} produto(s) encontrado(s)</p>
      <ListaProdutos produtos={produtosFiltrados} onAdicionar={onAdicionar} />
    </main>
  )
}
