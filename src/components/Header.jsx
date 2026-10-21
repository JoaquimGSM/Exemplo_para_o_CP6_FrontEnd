import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import siteConfig from '../config/siteConfig'
import { IconeCarrinho, IconeMenu } from './Icones'

const links = [
  { to: '/', texto: 'Home' },
  { to: '/produtos', texto: 'Produtos' },
  { to: '/sobre', texto: 'Sobre' },
  { to: '/contato', texto: 'Contato' },
]

export default function Header({ totalItens, onAbrirCarrinho }) {
  const [menuAberto, setMenuAberto] = useState(false)
  const classeLink = ({ isActive }) =>
    `border-b-2 px-1 py-2 text-sm font-semibold transition-colors ${isActive ? 'border-[var(--cor-destaque)] text-[var(--cor-primaria)]' : 'border-transparent text-slate-600 hover:text-[var(--cor-primaria)]'}`

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-[#fbfaf7] text-slate-900">
      <div className="mx-auto flex min-h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setMenuAberto(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-[2px] bg-[var(--cor-primaria)] text-sm font-bold text-white">LB</span>
          <span>
            <span className="block text-lg font-bold leading-none text-[var(--cor-primaria)]">{siteConfig.nome}</span>
            <span className="mt-1 hidden text-[10px] uppercase tracking-[0.16em] text-slate-600 sm:block">seleção cotidiana</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
          {links.map((link) => <NavLink key={link.to} to={link.to} className={classeLink}>{link.texto}</NavLink>)}
        </nav>

        <div className="flex items-center gap-2">
          <button type="button" onClick={onAbrirCarrinho} className="relative p-2 text-[var(--cor-primaria)] transition-colors hover:text-[var(--cor-destaque-escura)]" aria-label={`Abrir carrinho com ${totalItens} itens`}>
            <IconeCarrinho />
            {totalItens > 0 && <span className="absolute -right-1 -top-1 grid min-h-5 min-w-5 place-items-center rounded-full bg-[var(--cor-destaque)] px-1 text-xs font-bold text-[var(--cor-primaria-escura)]">{totalItens}</span>}
          </button>
          <button type="button" onClick={() => setMenuAberto(!menuAberto)} className="p-2 text-[var(--cor-primaria)] transition-colors hover:text-[var(--cor-destaque-escura)] md:hidden" aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuAberto}>
            <IconeMenu aberto={menuAberto} />
          </button>
        </div>
      </div>

      {menuAberto && (
        <nav className="border-t border-slate-200 px-4 pb-5 pt-3 md:hidden" aria-label="Navegação mobile">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {links.map((link) => <NavLink key={link.to} to={link.to} className={classeLink} onClick={() => setMenuAberto(false)}>{link.texto}</NavLink>)}
          </div>
        </nav>
      )}
    </header>
  )
}
