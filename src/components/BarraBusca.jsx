import { IconeBusca } from './Icones'

export default function BarraBusca({ busca, onBuscar }) {
  return (
    <div>
      <label htmlFor="busca" className="mb-2 block text-xs font-bold uppercase tracking-[0.1em] text-slate-600">Buscar por nome</label>
      <div className="relative">
        <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400"><IconeBusca /></span>
        <input id="busca" type="search" value={busca} onChange={(evento) => onBuscar(evento.target.value)} placeholder="Ex.: Urban Plus" className="w-full rounded-[2px] border border-slate-400 bg-white py-3 pl-10 pr-4 text-slate-900 outline-none transition-colors placeholder:text-slate-500 focus:border-[var(--cor-primaria)] focus:ring-1 focus:ring-[var(--cor-primaria)]" />
      </div>
    </div>
  )
}
