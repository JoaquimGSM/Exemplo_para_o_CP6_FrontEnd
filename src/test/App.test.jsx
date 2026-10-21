import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import App from '../App'

function renderizarApp(rota = '/') {
  return render(
    <MemoryRouter initialEntries={[rota]}>
      <App />
    </MemoryRouter>,
  )
}

describe('LojaBase', () => {
  it('exibe os produtos e combina busca com filtro', async () => {
    const user = userEvent.setup()
    renderizarApp('/produtos')

    expect(screen.getAllByRole('article')).toHaveLength(12)
    await user.type(screen.getByLabelText('Buscar por nome'), 'eco')
    await user.selectOptions(screen.getByLabelText('Filtrar por categoria'), 'Sustentável')

    expect(screen.getByRole('heading', { name: 'Eco Flex' })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Origem Natural' })).not.toBeInTheDocument()
    expect(screen.getByText('1 produto(s) encontrado(s)')).toBeInTheDocument()
  })

  it('mostra uma mensagem quando a busca não encontra produto', async () => {
    const user = userEvent.setup()
    renderizarApp('/produtos')
    await user.type(screen.getByLabelText('Buscar por nome'), 'produto inexistente')
    expect(screen.getByText('Nenhum produto encontrado')).toBeInTheDocument()
  })

  it('adiciona, aumenta, diminui e remove item do carrinho', async () => {
    const user = userEvent.setup()
    renderizarApp('/produtos')
    const card = screen.getByRole('heading', { name: 'Essencial One' }).closest('article')
    await user.click(within(card).getByRole('button', { name: 'Adicionar ao carrinho' }))

    const dialogo = screen.getByRole('dialog')
    expect(dialogo).toBeInTheDocument()
    expect(within(dialogo).getAllByText('R$ 79,90')).toHaveLength(2)
    await user.click(screen.getByRole('button', { name: 'Aumentar quantidade de Essencial One' }))
    expect(within(dialogo).getByText('R$ 159,80')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Diminuir quantidade de Essencial One' }))
    expect(within(dialogo).getAllByText('R$ 79,90')).toHaveLength(2)
    await user.click(screen.getByRole('button', { name: 'Remover' }))
    expect(screen.getByText('Seu carrinho está vazio')).toBeInTheDocument()
  })

  it('valida e confirma o formulário de contato', async () => {
    const user = userEvent.setup()
    renderizarApp('/contato')
    await user.click(screen.getByRole('button', { name: 'Enviar mensagem' }))
    expect(screen.getByText('Digite seu nome.')).toBeInTheDocument()
    expect(screen.getByText('Digite um e-mail válido.')).toBeInTheDocument()

    await user.type(screen.getByLabelText('Nome'), 'Ana')
    await user.type(screen.getByLabelText('E-mail'), 'ana@exemplo.com')
    await user.type(screen.getByLabelText('Assunto'), 'Dúvida')
    await user.type(screen.getByLabelText('Mensagem'), 'Gostaria de mais informações.')
    await user.click(screen.getByRole('button', { name: 'Enviar mensagem' }))
    expect(screen.getByRole('status')).toHaveTextContent('Mensagem enviada com sucesso')
  })

  it('abre a página 404 para uma rota desconhecida', () => {
    renderizarApp('/nao-existe')
    expect(screen.getByRole('heading', { name: 'Esta página não faz parte do catálogo.' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Voltar para a Home' })).toHaveAttribute('href', '/')
  })

  it('abre e fecha o menu mobile', () => {
    renderizarApp('/')
    const botao = screen.getByRole('button', { name: 'Abrir menu' })
    fireEvent.click(botao)
    expect(screen.getByRole('navigation', { name: 'Navegação mobile' })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Fechar menu' }))
    expect(screen.queryByRole('navigation', { name: 'Navegação mobile' })).not.toBeInTheDocument()
  })
})
