import CardProduto from './CardProduto'
import { IconeBusca } from './Icones'

export default function ListaProdutos({ produtos, onAdicionar }) {
  if (produtos.length === 0) {
    return (
      <div className="border-y border-slate-300 px-6 py-14 text-center">
        <span className="mx-auto block w-fit text-[var(--cor-primaria)]" aria-hidden="true"><IconeBusca className="h-7 w-7" /></span>
        <h2 className="mt-4 text-xl font-semibold text-slate-900">Nenhum produto encontrado</h2>
        <p className="mt-2 text-slate-600">Tente outro nome ou selecione uma categoria diferente.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {produtos.map((produto) => <CardProduto key={produto.id} produto={produto} onAdicionar={onAdicionar} />)}
    </div>
  )
}
