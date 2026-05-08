import { Home } from 'lucide-react'

const UnderConstruction = ({ pageName, onNavigate }) => {
  return (
    <div className="pt-16 min-h-screen bg-gradient-meta flex items-center justify-center">
      <div className="text-center px-4 max-w-2xl mx-auto">
        <div className="inline-block bg-white/20 backdrop-blur-sm rounded-pill px-4 py-2 mb-6">
          <span className="text-white/90 text-sm">🚧 ERR 404 NOT FOUND</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {pageName}
        </h1>
        
        <div className="text-8xl mb-6">🔨</div>
        
        <p className="text-xl text-white/80 mb-4">
          啊哦！页面走丢了......
        </p>
        
        <p className="text-white/60 mb-8">
          我们正在努力找回这个网页，稍后来看看吧！
        </p>
        
        <button 
          onClick={() => onNavigate('home')}
          className="inline-flex items-center space-x-2 bg-white text-meta-blue px-8 py-3 rounded-pill font-semibold hover:bg-gray-100 transition-colors"
        >
          <Home className="w-5 h-5" />
          <span>返回首页</span>
        </button>
      </div>
    </div>
  )
}

export default UnderConstruction
