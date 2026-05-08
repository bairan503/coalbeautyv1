import { History, Users, Award, Target, Leaf, Heart, Globe, TrendingUp, Cpu, Palette } from 'lucide-react'

const About = ({ onNavigate }) => {
  const milestones = [
    { year: '2024.10', title: '项目启动', description: '组建煤美与共项目团队，明确数字化传承方向' },
    { year: '2024.11', title: '技术研发', description: '开展三维激光扫描、3D建模等技术研究' },
    { year: '2024.12', title: '平台搭建', description: '构建煤雕数字化交互平台框架' },
    { year: '2025.01', title: '内容采集', description: '采集煤雕工艺品数据，建立数字档案' },
    { year: '2025.02', title: '功能开发', description: '开发VR虚拟展览、在线定制等核心功能' },
    { year: '2025.03', title: '上线测试', description: '平台上线测试，邀请工艺师入驻' },
  ]

  const team = [
    { name: '项目负责人', role: '统筹规划', experience: '全面负责项目战略规划与管理', desc: '带领团队推进煤雕数字化建设' },
    { name: '技术研发组', role: '技术攻坚', experience: '三维扫描与建模技术研发', desc: '负责器物数字化与平台技术开发' },
    { name: '文化传承组', role: '工艺研究', experience: '煤雕工艺数字化整理', desc: '挖掘煤雕文化内涵，整理工艺流程' },
    { name: '运营推广组', role: '市场拓展', experience: '品牌运营与市场推广', desc: '负责平台运营与品牌推广' },
  ]

  const values = [
    { icon: Heart, title: '文化传承', desc: '坚持文化自信，传承煤雕艺术精髓' },
    { icon: Cpu, title: '技术创新', desc: '运用前沿技术，赋能非遗传承' },
    { icon: Globe, title: '开放共享', desc: '构建开放平台，促进文化交流' },
    { icon: Palette, title: '创意设计', desc: '推动煤雕艺术创造性转化' },
  ]

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">关于我们</h1>
            <p className="text-xl text-white/80 mb-6">
              数字引领传承，科技赋能非遗
            </p>
            <p className="text-white/70">
              本项目秉持"数字引领传承"的理念，专注于煤雕数字化相关成果的研发、展示和销售。通过器物数字化、工艺数字化、平台数字化三大方向，实现煤雕艺术的创造性转化与创新性发展。
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-meta-blue/10 text-meta-blue px-4 py-2 rounded-full mb-6">
                <History className="w-5 h-5" />
                <span className="font-medium">项目概述</span>
              </div>
              <h2 className="text-3xl font-bold text-dark-charcoal mb-6">项目背景与目标</h2>
              <div className="space-y-4 text-slate-gray">
                <p>
                  为顺应当今时代趋势，响应国家政策，我们于2024年10月组建了煤美与共项目团队。煤雕作为国家级非物质文化遗产，承载着厚重的中华优秀传统文化。
                </p>
                <p>
                  本项目旨在打破传统煤雕展示和销售的地域、时间限制，借助虚拟现实（VR）和增强现实（AR）技术，为用户带来沉浸式体验，包括虚拟观赏、在线定制等功能，拓展煤雕艺术的市场。
                </p>
                <p>
                  通过三维激光扫描、数字建模等技术，将煤雕作品转化为数字形态，实现永久性保存与活态传承，为煤雕文化传承与创新开辟新途径。
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://neeko-copilot.bytedance.net/api/text2image?prompt=3d%20scanning%20coal%20carving%20digital%20preservation%20technology&image_size=portrait_4_3"
                alt="煤雕数字化"
                className="w-full h-80 object-cover rounded-card shadow-elevated"
              />
              <div className="absolute -bottom-6 -left-6 bg-meta-blue text-white p-6 rounded-card shadow-elevated">
                <div className="text-4xl font-bold">3</div>
                <div className="text-sm opacity-80">大数字化方向</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-charcoal mb-4">项目历程</h2>
            <p className="text-slate-gray">从启动到上线，稳步推进煤雕数字化建设</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-meta-blue/20"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-block bg-white rounded-card p-6 shadow-subtle ${index % 2 === 0 ? 'ml-auto' : ''}`}>
                      <div className="text-meta-blue font-bold text-lg mb-2">{milestone.year}</div>
                      <div className="text-dark-charcoal font-semibold mb-1">{milestone.title}</div>
                      <div className="text-slate-gray text-sm">{milestone.description}</div>
                    </div>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-meta-blue rounded-full border-4 border-white shadow"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-charcoal mb-4">项目团队</h2>
            <p className="text-slate-gray">专业团队，推动煤雕数字化传承</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="bg-soft-gray rounded-card p-6 hover-lift">
                <div className="w-20 h-20 bg-meta-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-meta-blue" />
                </div>
                <h3 className="text-lg font-semibold text-dark-charcoal mb-1 text-center">{member.name}</h3>
                <div className="text-meta-blue font-medium mb-2 text-center text-sm">{member.role}</div>
                <div className="text-slate-gray text-sm mb-2 text-center">{member.experience}</div>
                <p className="text-slate-gray text-xs text-center">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-charcoal mb-4">核心价值观</h2>
            <p className="text-slate-gray">我们坚守的理念与追求</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-card p-6 text-center hover-lift">
                <div className="w-14 h-14 bg-meta-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-meta-blue" />
                </div>
                <h3 className="text-lg font-semibold text-dark-charcoal mb-2">{value.title}</h3>
                <p className="text-slate-gray text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-charcoal mb-4">使命与愿景</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-soft-gray rounded-card p-8">
              <div className="w-16 h-16 bg-meta-blue/10 rounded-card flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-meta-blue" />
              </div>
              <h3 className="text-xl font-semibold text-dark-charcoal mb-4">使命</h3>
              <p className="text-slate-gray">
                挖掘煤雕文化价值，通过数字化技术实现煤雕艺术的创造性转化与创新性发展，为非遗传承开辟新途径。
              </p>
            </div>
            <div className="bg-soft-gray rounded-card p-8">
              <div className="w-16 h-16 bg-cherry/10 rounded-card flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-cherry" />
              </div>
              <h3 className="text-xl font-semibold text-dark-charcoal mb-4">愿景</h3>
              <p className="text-slate-gray">
                在数字化浪潮下，将煤雕传承融合多元技术，拓展多种应用场景，推动煤雕工艺创造性转化、创新性发展。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">加入我们的行列</h3>
          <p className="text-white/80 mb-6">无论您是工艺师、设计师还是文化爱好者，我们都期待与您携手</p>
          <button onClick={() => onNavigate('contact')} className="bg-white text-meta-blue px-8 py-3 rounded-pill font-semibold hover:bg-gray-100 transition-colors">
            联系我们
          </button>
        </div>
      </section>
    </div>
  )
}

export default About