import { Link } from 'react-router-dom'
import siteConfig from '../config/siteConfig'
import { formatarPreco } from '../utils/formatadores'

export default function Hero({ produto }) {
  return (
    <section className="border-b border-slate-300 bg-[#ece8df]">
      <div className="mx-auto grid max-w-7xl items-stretch md:grid-cols-[1.05fr_0.95fr]">
        <div className="flex items-center px-4 py-14 sm:px-6 md:py-18 lg:px-8">
          <div className="max-w-xl border-l-4 border-[var(--cor-destaque)] pl-5 sm:pl-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--cor-primaria)]">{siteConfig.hero.etiqueta}</p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-[var(--cor-primaria-escura)] sm:text-5xl lg:text-[3.5rem]">{siteConfig.hero.titulo}</h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-slate-700 sm:text-lg">{siteConfig.hero.texto}</p>
            <Link to="/produtos" className="mt-8 inline-flex rounded-[3px] bg-[var(--cor-primaria)] px-6 py-3 font-semibold text-white transition-colors hover:bg-[var(--cor-primaria-escura)]">
              {siteConfig.hero.botao}
            </Link>
          </div>
        </div>
        <figure className="grid min-h-80 grid-rows-[1fr_auto] bg-[var(--cor-primaria)] md:min-h-[34rem]">
          <div className="min-h-0 overflow-hidden">
            <img src={produto.imagem} alt={`Produto em destaque: ${produto.nome}`} className="h-full w-full object-cover" />
          </div>
          <figcaption className="flex items-center justify-between gap-4 border-t border-white/20 px-5 py-4 text-sm text-white sm:px-7">
            <span><strong>{produto.nome}</strong> <span className="ml-2 text-slate-300">{produto.categoria}</span></span>
            <span className="font-semibold">{formatarPreco(produto.preco)}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
