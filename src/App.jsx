import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Carrinho from './components/Carrinho'
import Footer from './components/Footer'
import Header from './components/Header'
import siteConfig from './config/siteConfig'
import produtos from './data/produtos.json'
import Contato from './pages/Contato'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Produtos from './pages/Produtos'
import Sobre from './pages/Sobre'

function carregarCarrinho() {
  try {
    return JSON.parse(localStorage.getItem('lojabase-carrinho')) ?? []
  } catch {
    return []
  }
}

export default function App() {
  const [itensCarrinho, setItensCarrinho] = useState(carregarCarrinho)
  const [carrinhoAberto, setCarrinhoAberto] = useState(false)

  useEffect(() => {
    localStorage.setItem('lojabase-carrinho', JSON.stringify(itensCarrinho))
  }, [itensCarrinho])

  function adicionarAoCarrinho(produto) {
    setItensCarrinho((itensAtuais) => {
      const itemExistente = itensAtuais.find((item) => item.id === produto.id)
      if (itemExistente) {
        return itensAtuais.map((item) => item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item)
      }
      return [...itensAtuais, { ...produto, quantidade: 1 }]
    })
    setCarrinhoAberto(true)
  }

  function aumentarQuantidade(id) {
    setItensCarrinho((itens) => itens.map((item) => item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item))
  }

  function diminuirQuantidade(id) {
    setItensCarrinho((itens) => itens
      .map((item) => item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item)
      .filter((item) => item.quantidade > 0))
  }

  function removerDoCarrinho(id) {
    setItensCarrinho((itens) => itens.filter((item) => item.id !== id))
  }

  const totalItens = itensCarrinho.reduce((total, item) => total + item.quantidade, 0)
  const estilosDaMarca = {
    '--cor-primaria': siteConfig.cores.primaria,
    '--cor-primaria-escura': siteConfig.cores.primariaEscura,
    '--cor-destaque': siteConfig.cores.destaque,
    '--cor-destaque-escura': siteConfig.cores.destaqueEscuro,
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#f6f4ef]" style={estilosDaMarca}>
      <Header totalItens={totalItens} onAbrirCarrinho={() => setCarrinhoAberto(true)} />
      <Routes>
        <Route path="/" element={<Home produtos={produtos} onAdicionar={adicionarAoCarrinho} />} />
        <Route path="/produtos" element={<Produtos produtos={produtos} onAdicionar={adicionarAoCarrinho} />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Carrinho aberto={carrinhoAberto} itens={itensCarrinho} onFechar={() => setCarrinhoAberto(false)} onAumentar={aumentarQuantidade} onDiminuir={diminuirQuantidade} onRemover={removerDoCarrinho} />
    </div>
  )
}
