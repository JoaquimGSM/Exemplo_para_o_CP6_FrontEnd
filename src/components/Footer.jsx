import { Link } from 'react-router-dom'
import siteConfig from '../config/siteConfig'

export default function Footer() {
  return (
    <footer className="mt-auto border-t-4 border-[var(--cor-destaque)] bg-[var(--cor-primaria-escura)] text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_0.7fr_1fr] lg:px-8">
        <section>
          <p className="text-2xl font-bold text-white">{siteConfig.nome}</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-300">{siteConfig.slogan}</p>
        </section>
        <nav aria-label="Navegação do rodapé">
          <h2 className="font-semibold text-white">Navegue</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="underline-offset-4 hover:text-white hover:underline" to="/">Home</Link></li>
            <li><Link className="underline-offset-4 hover:text-white hover:underline" to="/produtos">Produtos</Link></li>
            <li><Link className="underline-offset-4 hover:text-white hover:underline" to="/sobre">Sobre</Link></li>
            <li><Link className="underline-offset-4 hover:text-white hover:underline" to="/contato">Contato</Link></li>
          </ul>
        </nav>
        <section>
          <h2 className="font-semibold text-white">Fale conosco</h2>
          <address className="mt-3 space-y-2 text-sm not-italic">
            <p>{siteConfig.contato.email}</p>
            <p>{siteConfig.contato.telefone}</p>
            <p>{siteConfig.contato.endereco}</p>
          </address>
        </section>
      </div>
      <div className="border-t border-white/15 px-4 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} {siteConfig.nome}. Projeto acadêmico demonstrativo.
      </div>
    </footer>
  )
}
