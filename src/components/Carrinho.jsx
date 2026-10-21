import { formatarPreco } from '../utils/formatadores'
import { IconeCarrinho } from './Icones'

export default function Carrinho({ aberto, itens, onFechar, onAumentar, onDiminuir, onRemover }) {
  if (!aberto) return null

  const subtotal = itens.reduce((total, item) => total + item.preco * item.quantidade, 0)

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-labelledby="titulo-carrinho">
      <button type="button" className="absolute inset-0 bg-slate-950/55" onClick={onFechar} aria-label="Fechar carrinho" />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-[#fbfaf7] shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-200 p-5">
          <div>
            <h2 id="titulo-carrinho" className="text-xl font-bold text-slate-900">Seu carrinho</h2>
            <p className="text-sm text-slate-600">{itens.reduce((total, item) => total + item.quantidade, 0)} unidade(s)</p>
          </div>
          <button type="button" onClick={onFechar} className="p-2 text-2xl text-slate-600 transition-colors hover:text-slate-900" aria-label="Fechar">×</button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {itens.length === 0 ? (
            <div className="grid h-full place-content-center text-center">
              <span className="mx-auto text-[var(--cor-primaria)]" aria-hidden="true"><IconeCarrinho className="h-10 w-10" /></span>
              <p className="mt-5 text-lg font-semibold text-slate-900">Seu carrinho está vazio</p>
              <p className="mt-1 text-sm text-slate-600">Adicione um produto para começar.</p>
            </div>
          ) : (
            <ul className="divide-y divide-slate-200 border-y border-slate-200">
              {itens.map((item) => (
                <li key={item.id} className="flex gap-4 py-4">
                  <img src={item.imagem} alt="" className="h-20 w-20 bg-slate-100 object-cover" />
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-bold text-slate-900">{item.nome}</h3>
                    <p className="text-sm font-semibold text-[var(--cor-primaria)]">{formatarPreco(item.preco)}</p>
                    <div className="mt-2 flex items-center justify-between gap-2">
                      <div className="flex items-center border border-slate-300">
                        <button type="button" onClick={() => onDiminuir(item.id)} className="px-3 py-1 hover:bg-slate-100" aria-label={`Diminuir quantidade de ${item.nome}`}>−</button>
                        <span className="min-w-8 text-center text-sm font-semibold" aria-label={`Quantidade: ${item.quantidade}`}>{item.quantidade}</span>
                        <button type="button" onClick={() => onAumentar(item.id)} className="px-3 py-1 hover:bg-slate-100" aria-label={`Aumentar quantidade de ${item.nome}`}>+</button>
                      </div>
                      <button type="button" onClick={() => onRemover(item.id)} className="text-sm font-semibold text-red-600 hover:text-red-800">Remover</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-slate-200 p-5">
          <div className="flex items-center justify-between text-lg font-bold text-slate-900">
            <span>Subtotal</span><span>{formatarPreco(subtotal)}</span>
          </div>
          <p className="mt-2 text-xs text-slate-600">Compra simulada. Este projeto não realiza pagamentos.</p>
          <button type="button" onClick={onFechar} className="mt-4 w-full rounded-[3px] bg-[var(--cor-primaria)] px-4 py-3 font-semibold text-white transition-colors hover:bg-[var(--cor-primaria-escura)]">Continuar comprando</button>
        </div>
      </aside>
    </div>
  )
}
