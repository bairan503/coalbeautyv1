import { ArrowRight, Mountain, Factory, Palette, History, Users, Sparkles, Globe, Leaf, Cpu } from 'lucide-react'

const Home = ({ onNavigate }) => {

  const features = [
    {
      title: '器物数字化',
      description: '借助三维激光扫描、3D可视化建模等技术，将煤雕作品转化为数字形态，实现从现实到虚拟的转变。',
      color: 'bg-meta-blue/10 text-meta-blue',
      icon: Cpu,
    },
    {
      title: '工艺数字化',
      description: '通过数字库建设、工序动态化展示，让煤雕工艺突破时空局限，吸引更多人关注和传承。',
      color: 'bg-cherry/10 text-cherry',
      icon: Factory,
    },
    {
      title: '平台数字化',
      description: '构建综合性、数字化跨时空交互平台，提供沉浸式体验，实现煤雕文化的创新传播。',
      color: 'bg-grape/10 text-grape',
      icon: Globe,
    },
  ]

  const services = [
    {
      title: '虚拟展览',
      description: '步进式、三维式线上云展览',
      icon: Sparkles,
    },
    {
      title: '在线定制',
      description: '个性化煤雕作品定制服务',
      icon: Palette,
    },
    {
      title: '文化传承',
      description: '煤雕工艺数字化传承与教育',
      icon: History,
    },
  ]


  return (
    <div className="pt-16">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 bg-cover bg-center opacity-40" 
          style={{ backgroundImage: `url('/images/mdhome.jpg')` }}>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-pill px-4 py-2 mb-6">
            <span className="text-white/90 text-sm">跨时空·跨生命的煤雕艺术之美</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            煤美与共
          </h1>
          <p className="text-xl text-white/90 mb-4 max-w-2xl mx-auto">
            数字引领传承，科技赋能非遗
          </p>
          <p className="text-base text-white/70 mb-8 max-w-2xl mx-auto">
            团队秉持"数字引领传承"的理念，专注于煤雕数字化相关成果的研发、展示和销售。借助虚拟现实（VR）和增强现实（AR）技术，为用户带来沉浸式体验，拓展煤雕艺术的市场，为煤雕文化传承与创新开辟新途径。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => onNavigate('culture')} className="btn-primary inline-flex items-center justify-center space-x-2">
              <span>深入了解</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button onClick={() => onNavigate('about')} className="btn-secondary">
              探索产品
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-dark-charcoal mb-4">三大数字化方向</h2>
            <p className="text-slate-gray max-w-2xl mx-auto">通过技术创新，实现煤雕艺术的创造性转化与创新性发展</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card-feature elevation-1 hover:elevation-2">
                <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-dark-charcoal mb-3">{feature.title}</h3>
                <p className="text-slate-gray">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-dark-charcoal mb-4">核心服务</h2>
            <p className="text-slate-gray">为煤雕艺术传承提供全方位数字化解决方案</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-8 bg-soft-gray rounded-card hover-lift">
                <div className="w-16 h-16 bg-meta-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-meta-blue" />
                </div>
                <h3 className="text-lg font-semibold text-dark-charcoal mb-2">{service.title}</h3>
                <p className="text-slate-gray">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">愿景</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            在数字化浪潮下，将煤雕传承融合多元技术，拓展多种应用场景，推动煤雕工艺创造性转化、创新性发展
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => onNavigate('contact')} className="bg-white text-meta-blue px-8 py-3 rounded-pill font-semibold hover:bg-gray-100 transition-colors">
              联系我们
            </button>
            <button onClick={() => onNavigate('culture')} className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-pill font-semibold hover:bg-white/10 transition-colors">
              了解文化
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home