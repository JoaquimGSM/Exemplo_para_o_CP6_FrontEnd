import { useState } from 'react'
import siteConfig from '../config/siteConfig'

const estadoInicial = { nome: '', email: '', assunto: '', mensagem: '' }

export default function Contato() {
  const [formulario, setFormulario] = useState(estadoInicial)
  const [erros, setErros] = useState({})
  const [enviado, setEnviado] = useState(false)

  function atualizarCampo(evento) {
    const { name, value } = evento.target
    setFormulario((atual) => ({ ...atual, [name]: value }))
    setEnviado(false)
  }

  function validar() {
    const novosErros = {}
    if (formulario.nome.trim().length < 2) novosErros.nome = 'Digite seu nome.'
    if (!/^\S+@\S+\.\S+$/.test(formulario.email)) novosErros.email = 'Digite um e-mail válido.'
    if (formulario.assunto.trim().length < 3) novosErros.assunto = 'Informe o assunto.'
    if (formulario.mensagem.trim().length < 10) novosErros.mensagem = 'Escreva pelo menos 10 caracteres.'
    return novosErros
  }

  function enviarFormulario(evento) {
    evento.preventDefault()
    const novosErros = validar()
    setErros(novosErros)
    if (Object.keys(novosErros).length === 0) {
      setEnviado(true)
      setFormulario(estadoInicial)
    }
  }

  const campos = [
    { nome: 'nome', rotulo: 'Nome', tipo: 'text', placeholder: 'Seu nome' },
    { nome: 'email', rotulo: 'E-mail', tipo: 'email', placeholder: 'voce@exemplo.com' },
    { nome: 'assunto', rotulo: 'Assunto', tipo: 'text', placeholder: 'Como podemos ajudar?' },
  ]

  return (
    <main className="mx-auto grid w-full max-w-7xl flex-1 gap-10 px-4 py-10 sm:px-6 md:grid-cols-[0.75fr_1.25fr] md:gap-16 md:py-16 lg:px-8">
      <section className="md:pr-4">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-600">Contato</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.025em] text-[var(--cor-primaria-escura)] sm:text-5xl">Fale com a LojaBase</h1>
        <p className="mt-5 max-w-md leading-7 text-slate-600">Envie sua dúvida pelo formulário. Como este é um projeto demonstrativo, a confirmação acontece apenas na tela.</p>
        <address className="mt-9 border-y border-slate-300 text-sm not-italic">
          <p className="grid gap-1 border-b border-slate-300 py-4"><strong className="text-xs uppercase tracking-[0.1em] text-slate-600">E-mail</strong><span className="text-[var(--cor-primaria)]">{siteConfig.contato.email}</span></p>
          <p className="grid gap-1 border-b border-slate-300 py-4"><strong className="text-xs uppercase tracking-[0.1em] text-slate-600">Telefone</strong><span>{siteConfig.contato.telefone}</span></p>
          <p className="grid gap-1 py-4"><strong className="text-xs uppercase tracking-[0.1em] text-slate-600">Endereço</strong><span>{siteConfig.contato.endereco}</span></p>
        </address>
      </section>

      <section className="border-t border-slate-300 pt-8 md:border-l md:border-t-0 md:pl-12 md:pt-0">
        <h2 className="text-2xl font-semibold text-[var(--cor-primaria-escura)]">Escreva sua mensagem</h2>
        {enviado && <div className="mt-5 border-l-4 border-green-700 bg-green-50 p-4 text-sm font-medium text-green-900" role="status">Mensagem enviada com sucesso! Esta é uma confirmação simulada.</div>}
        <form className="mt-6 space-y-5" onSubmit={enviarFormulario} noValidate>
          {campos.map((campo) => (
            <div key={campo.nome}>
              <label htmlFor={campo.nome} className="mb-2 block text-sm font-semibold text-slate-700">{campo.rotulo}</label>
              <input id={campo.nome} name={campo.nome} type={campo.tipo} value={formulario[campo.nome]} onChange={atualizarCampo} placeholder={campo.placeholder} aria-invalid={Boolean(erros[campo.nome])} aria-describedby={erros[campo.nome] ? `${campo.nome}-erro` : undefined} className="w-full rounded-[2px] border border-slate-400 bg-white px-4 py-3 outline-none transition-colors placeholder:text-slate-500 focus:border-[var(--cor-primaria)] focus:ring-1 focus:ring-[var(--cor-primaria)]" />
              {erros[campo.nome] && <p id={`${campo.nome}-erro`} className="mt-1 text-sm text-red-600">{erros[campo.nome]}</p>}
            </div>
          ))}
          <div>
            <label htmlFor="mensagem" className="mb-2 block text-sm font-semibold text-slate-700">Mensagem</label>
            <textarea id="mensagem" name="mensagem" rows="5" value={formulario.mensagem} onChange={atualizarCampo} placeholder="Conte um pouco mais..." aria-invalid={Boolean(erros.mensagem)} aria-describedby={erros.mensagem ? 'mensagem-erro' : undefined} className="w-full resize-y rounded-[2px] border border-slate-400 bg-white px-4 py-3 outline-none transition-colors placeholder:text-slate-500 focus:border-[var(--cor-primaria)] focus:ring-1 focus:ring-[var(--cor-primaria)]" />
            {erros.mensagem && <p id="mensagem-erro" className="mt-1 text-sm text-red-600">{erros.mensagem}</p>}
          </div>
          <button type="submit" className="w-full rounded-[3px] bg-[var(--cor-primaria)] px-6 py-3 font-semibold text-white transition-colors hover:bg-[var(--cor-primaria-escura)] sm:w-auto">Enviar mensagem</button>
        </form>
      </section>
    </main>
  )
}
