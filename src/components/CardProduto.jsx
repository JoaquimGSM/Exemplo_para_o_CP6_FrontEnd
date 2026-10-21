import { formatarPreco } from '../utils/formatadores'

export default function CardProduto({ produto, onAdicionar }) {
  return (
    <article className="group flex h-full flex-col border border-slate-300 bg-white transition-colors hover:border-[var(--cor-primaria)]">
      <div className="aspect-[4/3] overflow-hidden border-b border-slate-200 bg-slate-100">
        <img src={produto.imagem} alt={`Imagem de ${produto.nome}`} className="h-full w-full object-cover transition-opacity duration-200 group-hover:opacity-90" />
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-600">{produto.categoria}</p>
        <h2 className="mt-2 text-xl font-semibold text-[var(--cor-primaria-escura)]">{produto.nome}</h2>
        <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{produto.descricao}</p>
        <p className="mt-5 text-xl font-bold text-slate-900">{formatarPreco(produto.preco)}</p>
        <button type="button" onClick={() => onAdicionar(produto)} className="mt-4 rounded-[3px] border border-[var(--cor-primaria)] bg-[var(--cor-primaria)] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--cor-primaria-escura)]">
          Adicionar ao carrinho
        </button>
      </div>
    </article>
  )
}
