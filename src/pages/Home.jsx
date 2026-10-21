import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ListaProdutos from '../components/ListaProdutos'
import siteConfig from '../config/siteConfig'

const beneficios = [
  { numero: '01', titulo: 'Catálogo enxuto', texto: 'Doze itens organizados para comparar sem pressa.' },
  { numero: '02', titulo: 'Informação direta', texto: 'Categoria, descrição e preço sempre à vista.' },
  { numero: '03', titulo: 'Navegação simples', texto: 'Busque, filtre e monte o carrinho sem sair do catálogo.' },
]

export default function Home({ produtos, onAdicionar }) {
  const destaques = produtos.filter((produto) => produto.destaque).slice(0, 4)
  const destaquePrincipal = destaques[destaques.length - 1]

  return (
    <>
      <Hero produto={destaquePrincipal} />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 border-b border-slate-300 pb-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-600">Como escolhemos</p>
            <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight text-[var(--cor-primaria-escura)] sm:text-4xl">Coisas úteis, apresentadas sem complicação.</h2>
          </div>
          <div className="md:pt-8">
            <p className="max-w-2xl text-lg leading-8 text-slate-700">{siteConfig.descricao}</p>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600">A coleção mistura peças para diferentes momentos do dia. O critério é simples: função clara, visual bem resolvido e informação suficiente para decidir.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3">
          {beneficios.map((beneficio) => (
            <article key={beneficio.titulo} className="border-b border-slate-300 py-7 md:border-b-0 md:border-r md:px-7 first:md:pl-0 last:md:border-r-0 last:md:pr-0">
              <span className="text-xs font-bold tracking-[0.14em] text-[var(--cor-destaque-escura)]" aria-hidden="true">{beneficio.numero}</span>
              <h3 className="mt-3 text-lg font-semibold text-[var(--cor-primaria-escura)]">{beneficio.titulo}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{beneficio.texto}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-300 bg-[#fbfaf7] py-14 lg:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-600">Recorte da coleção</p>
              <h2 className="mt-3 text-3xl font-semibold text-[var(--cor-primaria-escura)]">Quatro escolhas da edição atual</h2>
            </div>
            <Link to="/produtos" className="w-fit border-b border-[var(--cor-primaria)] pb-1 text-sm font-semibold text-[var(--cor-primaria)] hover:border-[var(--cor-destaque)]">Ver catálogo completo</Link>
          </div>
          <div className="mt-9"><ListaProdutos produtos={destaques} onAdicionar={onAdicionar} /></div>
        </div>
      </section>
    </>
  )
}
