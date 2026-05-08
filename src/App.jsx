import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Culture from './pages/Culture'
import News from './pages/News'
import Contact from './pages/Contact'
import UnderConstruction from './pages/UnderConstruction'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />
      case 'about':
        return <UnderConstruction pageName="关于我们" onNavigate={setCurrentPage} />
      case 'products':
        return <UnderConstruction pageName="产品展示" onNavigate={setCurrentPage} />
      case 'culture':
        return <Culture onNavigate={setCurrentPage} />
      case 'news':
        return <UnderConstruction pageName="新闻动态" onNavigate={setCurrentPage} />
      case 'contact':
        return <Contact onNavigate={setCurrentPage} />
      default:
        return <Home onNavigate={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  )
}

export default App
