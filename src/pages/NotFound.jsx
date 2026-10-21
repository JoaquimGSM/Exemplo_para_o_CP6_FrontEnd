import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="mx-auto grid min-h-[65vh] w-full max-w-7xl flex-1 place-items-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl border-y border-slate-300 py-12">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--cor-destaque-escura)]">Erro 404</p>
        <h1 className="mt-4 text-4xl font-semibold text-[var(--cor-primaria-escura)] sm:text-5xl">Esta página não faz parte do catálogo.</h1>
        <p className="mt-4 max-w-lg leading-7 text-slate-600">O endereço pode estar incorreto ou a página foi removida. A página inicial continua disponível.</p>
        <Link to="/" className="mt-7 inline-flex rounded-[3px] bg-[var(--cor-primaria)] px-6 py-3 font-semibold text-white transition-colors hover:bg-[var(--cor-primaria-escura)]">Voltar para a Home</Link>
      </div>
    </main>
  )
}
