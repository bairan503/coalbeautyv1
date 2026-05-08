import { useState } from 'react'
import { ShoppingCart, Heart, Star, Filter, Grid, List, Package, Truck, Shield, RotateCcw, Cpu, Palette, Globe } from 'lucide-react'

const Products = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const [sortBy, setSortBy] = useState('popular')

  const categories = [
    { id: 'all', name: '全部', count: 9 },
    { id: 'digital', name: '数字化服务', count: 3 },
    { id: 'crafts', name: '煤雕工艺', count: 3 },
    { id: 'education', name: '文化教育', count: 3 },
  ]

  const products = [
    { id: 1, name: 'VR虚拟展览', category: 'digital', price: 0, originalPrice: 0, rating: 4.9, sales: 528, reviews: 136, desc: '沉浸式虚拟展览体验，身临其境地欣赏煤雕艺术', image: 'VR%20virtual%20exhibition%20coal%20carving%20art%20immersive' },
    { id: 2, name: '3D数字建模', category: 'digital', price: 2999, originalPrice: 3999, rating: 4.8, sales: 89, reviews: 23, desc: '高精度三维建模服务，将煤雕作品数字化保存', image: '3D%20digital%20modeling%20coal%20sculpture%20technology' },
    { id: 3, name: '在线定制平台', category: 'digital', price: 0, originalPrice: 0, rating: 4.7, sales: 345, reviews: 89, desc: '个性化煤雕作品在线定制服务', image: 'online%20customization%20platform%20coal%20carving%20design' },
    { id: 4, name: '煤精雕刻摆件', category: 'crafts', price: 899, originalPrice: 1199, rating: 4.9, sales: 128, reviews: 36, desc: '精选优质煤精，手工雕刻，展现煤炭艺术之美', image: 'coal%20carving%20sculpture%20art%20craft%20black%20gemstone' },
    { id: 5, name: '煤雕笔筒', category: 'crafts', price: 399, originalPrice: 499, rating: 4.8, sales: 89, reviews: 23, desc: '实用与艺术结合，办公桌面装饰佳品', image: 'coal%20carving%20pen%20holder%20desk%20decor%20art' },
    { id: 6, name: '煤精印章', category: 'crafts', price: 259, originalPrice: 329, rating: 4.7, sales: 156, reviews: 34, desc: '可定制篆刻，收藏自用皆宜', image: 'coal%20seal%20stamp%20traditional%20chinese%20craft' },
    { id: 7, name: '线上课程', category: 'education', price: 199, originalPrice: 299, rating: 4.8, sales: 234, reviews: 67, desc: '煤雕工艺线上学习课程，传承非遗技艺', image: 'online%20course%20coal%20carving%20craftsmanship%20learning' },
    { id: 8, name: '文化手册', category: 'education', price: 68, originalPrice: 88, rating: 4.5, sales: 423, reviews: 98, desc: '煤雕文化详细解读，图文并茂', image: 'cultural%20book%20coal%20carving%20art%20guide' },
    { id: 9, name: '文创周边', category: 'education', price: 128, originalPrice: 168, rating: 4.6, sales: 356, reviews: 89, desc: '煤雕主题文创产品，传承文化之美', image: 'cultural%20creative%20products%20coal%20carving%20theme' },
  ]

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory)

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price
      case 'price-high': return b.price - a.price
      case 'rating': return b.rating - a.rating
      default: return b.sales - a.sales
    }
  })

  const services = [
    { icon: Truck, title: '全国包邮', desc: '满199元免运费' },
    { icon: Shield, title: '正品保障', desc: '100%品质保证' },
    { icon: RotateCcw, title: '七天退换', desc: '不满意可退换' },
    { icon: Package, title: '精美包装', desc: '礼盒包装赠送' },
  ]

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">产品与服务</h1>
            <p className="text-xl text-white/80 mb-4">数字引领传承，科技赋能非遗</p>
            <p className="text-white/60 max-w-2xl mx-auto">
              提供煤雕数字化相关的产品与服务，包括VR虚拟展览、3D建模、在线定制等，推动煤雕艺术的创造性转化与创新性发展。
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-meta-blue/10 rounded-full flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-meta-blue" />
                </div>
                <div>
                  <div className="font-medium text-dark-charcoal text-sm">{service.title}</div>
                  <div className="text-slate-gray text-xs">{service.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2 rounded-pill font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-meta-blue text-white'
                      : 'bg-soft-gray text-slate-gray hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-slate-gray" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-divider rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-meta-blue/20 bg-white"
                >
                  <option value="popular">按销量</option>
                  <option value="price-low">价格从低到高</option>
                  <option value="price-high">价格从高到低</option>
                  <option value="rating">按评分</option>
                </select>
              </div>
              <div className="flex bg-soft-gray rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-white shadow-subtle' : 'hover:bg-gray-200'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-white shadow-subtle' : 'hover:bg-gray-200'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            {sortedProducts.map((product) => (
              <div key={product.id} className={`bg-soft-gray rounded-card overflow-hidden hover-lift group ${viewMode === 'list' ? 'flex' : ''}`}>
                <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-48 h-48 flex-shrink-0' : 'aspect-square'}`}>
                  <img
                    src={`https://neeko-copilot.bytedance.net/api/text2image?prompt=${product.image}&image_size=square`}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.originalPrice > 0 && (
                    <div className="absolute top-3 left-3 bg-cherry text-white text-xs px-2 py-1 rounded-full">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button className="bg-white text-meta-blue w-12 h-12 rounded-full flex items-center justify-center hover:bg-meta-blue hover:text-white transition-colors mx-2">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="bg-meta-blue text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-meta-blue-hover transition-colors mx-2">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className={`p-5 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <h3 className="font-semibold text-dark-charcoal mb-2">{product.name}</h3>
                  <p className="text-slate-gray text-sm mb-3 line-clamp-2">{product.desc}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-warning-amber fill-current" />
                      <span className="text-sm text-dark-charcoal ml-1">{product.rating}</span>
                    </div>
                    <span className="text-slate-gray text-sm">|</span>
                    <span className="text-slate-gray text-sm">{product.sales}已售</span>
                    <span className="text-slate-gray text-sm">|</span>
                    <span className="text-slate-gray text-sm">{product.reviews}评价</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      {product.price > 0 ? (
                        <>
                          <span className="text-xl font-bold text-cherry">¥{product.price}</span>
                          {product.originalPrice > 0 && (
                            <span className="text-sm text-slate-gray line-through">¥{product.originalPrice}</span>
                          )}
                        </>
                      ) : (
                        <span className="text-xl font-bold text-meta-blue">免费</span>
                      )}
                    </div>
                    <button className="text-meta-blue text-sm font-medium hover:text-meta-blue-hover">
                      查看详情
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-slate-gray text-xl">暂无该分类产品</div>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-card p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-dark-charcoal mb-4">定制服务</h3>
                <p className="text-slate-gray mb-4">
                  我们提供个性化定制服务，根据您的需求定制专属煤雕数字化产品。无论是企业合作、文化项目还是个人收藏，我们都能为您量身打造。
                </p>
                <ul className="space-y-2 text-slate-gray mb-6">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-meta-blue rounded-full"></div>
                    <span>专业团队一对一沟通</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-meta-blue rounded-full"></div>
                    <span>先进技术支持</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-meta-blue rounded-full"></div>
                    <span>优质服务保障</span>
                  </li>
                </ul>
                <button onClick={() => onNavigate('contact')} className="btn-primary">
                  联系定制
                </button>
              </div>
              <div className="relative">
                <img
                  src="https://neeko-copilot.bytedance.net/api/text2image?prompt=custom%20coal%20craft%20workshop%20artisan%20handmade%20digital&image_size=landscape_4_3"
                  alt="定制服务"
                  className="w-full h-64 object-cover rounded-card"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products