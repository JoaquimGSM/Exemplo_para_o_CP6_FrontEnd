import siteConfig from '../config/siteConfig'

const valores = [
  { titulo: 'Clareza', texto: 'Informações simples e honestas em toda a jornada.' },
  { titulo: 'Qualidade', texto: 'Escolhas feitas com atenção aos detalhes.' },
  { titulo: 'Proximidade', texto: 'Pessoas e boas experiências vêm em primeiro lugar.' },
]

export default function Sobre() {
  return (
    <main className="flex-1">
      <section className="border-b border-slate-300 bg-[#ece8df]">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_0.8fr] md:items-end md:py-16 lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-600">Sobre · desde o primeiro rascunho</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.025em] text-[var(--cor-primaria-escura)] sm:text-5xl">Escolher bem também é saber deixar o excesso de lado.</h1>
          </div>
          <p className="max-w-md leading-7 text-slate-700 md:justify-self-end">A LojaBase organiza uma seleção curta e explica cada item com clareza. Sem urgência artificial, sem informação escondida.</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:gap-16 lg:px-8 lg:py-18">
        <figure className="border border-slate-300 bg-white">
          <img src="/images/produto-08.svg" alt="Ilustração do produto Origem Natural" className="aspect-[4/3] w-full object-cover" />
          <figcaption className="border-t border-slate-200 px-4 py-3 text-xs text-slate-600">Da coleção: Origem Natural</figcaption>
        </figure>
        <div className="md:pt-6">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-600">A proposta</p>
          <h2 className="mt-4 text-3xl font-semibold text-[var(--cor-primaria-escura)]">Uma vitrine que respeita o tempo de quem compra.</h2>
          <p className="mt-5 leading-7 text-slate-600">A {siteConfig.nome} é uma loja demonstrativa construída em torno de uma ideia simples: apresentar poucos produtos de forma organizada, com linguagem direta e navegação previsível.</p>
          <p className="mt-4 leading-7 text-slate-600">A seleção reúne objetos de diferentes categorias para a rotina. Cada item mostra o essencial — nome, uso, categoria e preço — sem promessas exageradas.</p>
          <blockquote className="mt-8 border-l-4 border-[var(--cor-destaque)] pl-5 text-xl leading-8 text-[var(--cor-primaria-escura)]">
            “Facilitar a escolha sem transformar a compra em espetáculo.”
          </blockquote>
        </div>
      </section>
      <section className="border-t border-slate-300 bg-[#fbfaf7] py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-600">Princípios de trabalho</p>
          <h2 className="mt-3 text-3xl font-semibold text-[var(--cor-primaria-escura)]">O que orienta cada decisão</h2>
          <div className="mt-8 grid border-y border-slate-300 md:grid-cols-3 md:divide-x md:divide-slate-300">
            {valores.map((valor, indice) => (
              <article key={valor.titulo} className="border-b border-slate-300 py-7 last:border-b-0 md:border-b-0 md:px-7 first:md:pl-0 last:md:pr-0">
                <span className="text-xs font-bold tracking-[0.14em] text-[var(--cor-destaque-escura)]">0{indice + 1}</span>
                <h3 className="mt-3 text-xl font-semibold text-[var(--cor-primaria-escura)]">{valor.titulo}</h3>
                <p className="mt-2 text-slate-600">{valor.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
