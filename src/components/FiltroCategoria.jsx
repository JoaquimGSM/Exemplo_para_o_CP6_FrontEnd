export default function FiltroCategoria({ categorias, categoriaSelecionada, onFiltrar }) {
  return (
    <div>
      <label htmlFor="categoria" className="mb-2 block text-xs font-bold uppercase tracking-[0.1em] text-slate-600">Filtrar por categoria</label>
      <select id="categoria" value={categoriaSelecionada} onChange={(evento) => onFiltrar(evento.target.value)} className="w-full rounded-[2px] border border-slate-400 bg-white px-4 py-3 text-slate-900 outline-none transition-colors focus:border-[var(--cor-primaria)] focus:ring-1 focus:ring-[var(--cor-primaria)]">
        <option value="Todas">Todas as categorias</option>
        {categorias.map((categoria) => <option key={categoria} value={categoria}>{categoria}</option>)}
      </select>
    </div>
  )
}
