import { History, Axe, BookOpen, Video, Play, Factory, HardHat, Train, Lamp, Cpu, Palette, Globe } from 'lucide-react'

const Culture = ({ onNavigate }) => {
  const technologies = [
    { name: '三维激光扫描', description: '精确采集煤雕工艺品的尺寸、比例、曲面等全方位点云数据', icon: Cpu },
    { name: '3D可视化建模', description: '构建精度纳米级、架构网格化的三维模型', icon: Palette },
    { name: '工艺数据仓库', description: '分布式多源异构数据聚类，完成煤雕工艺流程全要素存储', icon: Factory },
    { name: 'VR/AR技术', description: '提供沉浸式虚拟展览体验，让观众身临其境地欣赏煤雕作品', icon: Globe },
    { name: '动态化展示', description: '借助GIF、HTML5、CSS3技术，实现工艺步骤动态化展现', icon: Axe },
    { name: '智能检索系统', description: 'B+Tree索引数据结构，实现数字化资源高精度管理', icon: HardHat },
  ]

  const culturalElements = [
    { name: '工匠精神', meaning: '精益求精、追求卓越的匠人精神' },
    { name: '煤雕艺术', meaning: '以煤精为原料进行雕刻创作，展现独特艺术之美' },
    { name: '吉祥文化', meaning: '以民间吉祥符号为素材，蕴含美好愿景' },
    { name: '历史传承', meaning: '承载中华优秀传统文化的厚重底蕴' },
    { name: '地域特色', meaning: '山西煤雕以石窟造像、宗教题材为特色' },
    { name: '创新发展', meaning: '传统工艺与现代科技的融合创新' },
  ]

  const videos = [
    { title: '煤雕工艺数字化', duration: '18:30', iframeSrc: '//player.bilibili.com/player.html?isOutside=true&aid=115297457544834&bvid=BV1dVHpztEA3&cid=32765904166&p=1', url: 'https://www.bilibili.com/video/BV1dVHpztEA3' },
    { title: '煤雕艺术欣赏', duration: '22:15', iframeSrc: '//player.bilibili.com/player.html?isOutside=true&aid=66762717&bvid=BV114411y7eP&cid=115780380&p=1', url: 'https://www.bilibili.com/video/BV114411y7eP' },
    { title: '非遗传承故事', duration: '25:00', iframeSrc: '//player.bilibili.com/player.html?isOutside=true&aid=25457657&bvid=BV1Ns411L73s&cid=43296106&p=1', url: 'https://www.bilibili.com/video/BV1Ns411L73s' },
  ]

  return (
    <div className="pt-16">
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 bg-cover bg-center opacity-30" 
          style={{ backgroundImage: `url('/images/md1.webp')` }}>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">煤雕文化</h1>
            <p className="text-xl text-white/90">探索煤雕艺术魅力，感受非遗文化传承</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-600 px-4 py-2 rounded-full mb-6">
                <History className="w-5 h-5" />
                <span className="font-medium">历史渊源</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">煤雕艺术的传承与创新</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  煤雕是一种以煤精为原料进行雕刻创作的传统艺术形式，具有独特的艺术魅力和文化价值。山西煤雕以石窟造像、宗教题材、神话故事等为雕刻主题，以民间的吉祥符号为雕刻素材。
                </p>
                <p>
                  作为国家级非物质文化遗产，煤雕承载着厚重的中华优秀传统文化。通过构建煤雕工艺步骤化、流程化、动态化梳理结构，实现煤雕文化活态传承。
                </p>
                <p>
                  本项目借助互联网和数字化平台，将煤雕工艺的相关知识以文字、图片、视频、动画等多种形式呈现，利用虚拟现实（VR）、增强现实（AR）等技术，让观众身临其境地欣赏煤雕作品。
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/md2.jpg"
                alt="煤雕艺术"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold">非遗</div>
                <div className="text-sm opacity-80">国家级文化遗产</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-accent-100 text-accent-600 px-4 py-2 rounded-full mb-6">
              <Cpu className="w-5 h-5" />
              <span className="font-medium">数字化技术</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">六大核心技术</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <tech.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-5 h-5" />
              <span className="font-medium">文化内涵</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">煤雕文化的独特魅力</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {culturalElements.map((element, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-primary-50 transition-colors">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⛏️</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{element.name}</h3>
                <p className="text-sm text-gray-500">{element.meaning}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-6">
              <Video className="w-5 h-5" />
              <span className="font-medium">视频资源</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">了解煤雕文化</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative aspect-video bg-gray-200">
                  <iframe
                    src={video.iframeSrc}
                    scrolling="no"
                    border="0"
                    frameBorder="no"
                    framespacing="0"
                    allowFullScreen="true"
                    className="w-full h-full"
                  ></iframe>
                  <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded text-xs flex items-center space-x-1">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.58 15.96c.23-.15.47-.3.7-.46-.09-.2-.18-.41-.25-.63.29-.18.56-.38.81-.6-.17-.29-.31-.6-.41-.91.31-.24.6-.5.86-.79-.14-.31-.24-.64-.3-.98.34-.27.65-.56.94-.87-.15-.36-.26-.74-.33-1.13C12.16 8.45 12.5 8 13 8c.52 0 1 .42 1 1 0 .43-.27.8-.67.93.12.38.27.77.46 1.15-.29.11-.6.2-.92.26-.06.35-.16.68-.3 1 .26.1.51.23.75.38-.1.31-.24.61-.41.89.22.15.45.32.69.5-.27.12-.56.21-.86.28-.08.36-.2.7-.36 1.04.24.16.49.33.76.5-.34.21-.71.39-1.1.52.08.3.19.58.33.85-.36.17-.74.3-1.14.38-.09.34-.22.66-.39.95.18.13.37.27.58.42-.23.14-.48.26-.74.37z"/>
                    </svg>
                    <span>B站</span>
                  </div>
                  <a href={video.url} target="_blank" rel="noopener noreferrer" className="absolute bottom-3 right-3 bg-black/60 text-white px-3 py-1 rounded-full text-sm hover:bg-black/80 transition-colors flex items-center space-x-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>查看详情</span>
                  </a>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{video.title}</h3>
                  <p className="text-sm text-gray-500">{video.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">探索煤雕文化之旅</h3>
          <p className="mb-6">了解更多煤雕文化知识，感受非遗艺术的独特魅力</p>
          <button onClick={() => onNavigate('contact')} className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            立即探索
          </button>
        </div>
      </section>
    </div>
  )
}

export default Culture