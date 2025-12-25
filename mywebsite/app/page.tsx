export default function HomePage() {
  const features = [
    {
      title: '产品展示',
      description: '了解我们的全系列产品，查看详细规格和技术参数',
      icon: '📱',
      link: '/products',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: '下载中心',
      description: '获取产品手册、驱动程序、软件工具和技术文档',
      icon: '📥',
      link: '/downloads',
      color: 'bg-green-100 text-green-600'
    },
    {
      title: '客服中心',
      description: '获取技术支持、提交服务请求、查看常见问题解答',
      icon: '💬',
      link: '/support',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: '视频中心',
      description: '观看产品教程、应用案例和技术分享视频',
      icon: '🎬',
      link: '/videos',
      color: 'bg-red-100 text-red-600'
    },
    {
      title: '联系我们',
      description: '获取联系信息，发送合作咨询或产品询价',
      icon: '📞',
      link: '/contact',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      title: '关于我们',
      description: '了解公司发展历程、企业文化与团队介绍',
      icon: '🏢',
      link: '/about',
      color: 'bg-indigo-100 text-indigo-600'
    }
  ]

  const latestProducts = [
    { 
      name: '智能设备A', 
      category: '智能硬件', 
      desc: '高性能智能设备，支持多种连接方式',
      icon: '📱'
    },
    { 
      name: '工业控制器B', 
      category: '工业控制', 
      desc: '稳定可靠的工业级控制器',
      icon: '⚙️'
    },
    { 
      name: '管理软件C', 
      category: '软件产品', 
      desc: '功能强大的管理平台',
      icon: '💻'
    },
  ]

  const stats = [
    { value: '10+', label: '行业经验', icon: '📅' },
    { value: '500+', label: '服务客户', icon: '👥' },
    { value: '50+', label: '产品系列', icon: '📦' },
    { value: '7×24', label: '技术支持', icon: '🛡️' },
  ]

  return (
    <div>
      {/* 英雄区域 */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            专业产品，卓越服务
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90">
            我们致力于为客户提供最优质的产品解决方案和最专业的技术支持服务
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/products" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              查看产品
            </a>
            <a 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              联系我们
            </a>
          </div>
        </div>
      </section>

      {/* 统计数据 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 功能入口 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            快速访问
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <a 
                key={index}
                href={feature.link}
                className="group block bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center text-3xl mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-blue-600">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>
                <div className="text-blue-600 font-semibold flex items-center">
                  立即前往
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 最新产品 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">最新产品</h2>
            <a href="/products" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center">
              查看全部产品
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                  <div className="text-6xl">{product.icon}</div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                      <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{product.desc}</p>
                  <div className="flex justify-between items-center">
                    <a href={`/products#${product.name}`} className="text-blue-600 hover:text-blue-800 font-semibold">
                      查看详情
                    </a>
                    <a href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                      立即咨询
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 公司优势 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">我们的优势</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow">
              <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                🏆
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">专业技术</h3>
              <p className="text-gray-600">
                拥有多年的行业经验和技术积累，提供专业的解决方案
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                ⭐
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">优质服务</h3>
              <p className="text-gray-600">
                7×24小时技术支持，快速响应客户需求，提供全方位服务
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow">
              <div className="w-20 h-20 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                🔄
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">持续创新</h3>
              <p className="text-gray-600">
                不断研发新产品，优化现有产品，满足市场不断变化的需求
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 最新动态 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">最新动态</h2>
            <a href="/news" className="text-blue-600 hover:text-blue-800 font-semibold">
              查看更多
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-colors">
              <div className="text-sm text-blue-600 font-semibold mb-2">产品发布</div>
              <h3 className="text-lg font-bold mb-3">智能设备A v2.0发布</h3>
              <p className="text-gray-600 mb-4">新一代智能设备，性能提升40%，功能更加强大...</p>
              <div className="text-sm text-gray-500">2024年1月15日</div>
            </div>
            
            <div className="border border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-colors">
              <div className="text-sm text-green-600 font-semibold mb-2">技术分享</div>
              <h3 className="text-lg font-bold mb-3">工业物联网解决方案</h3>
              <p className="text-gray-600 mb-4">分享最新的工业物联网技术架构和应用案例...</p>
              <div className="text-sm text-gray-500">2024年1月10日</div>
            </div>
            
            <div className="border border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-colors">
              <div className="text-sm text-purple-600 font-semibold mb-2">客户案例</div>
              <h3 className="text-lg font-bold mb-3">XX制造企业成功案例</h3>
              <p className="text-gray-600 mb-4">我们的产品如何帮助客户提升生产效率30%...</p>
              <div className="text-sm text-gray-500">2024年1月5日</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA区域 */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">准备好开始合作了吗？</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            立即联系我们，获取专业的产品咨询和技术支持
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              立即联系
            </a>
            <a 
              href="tel:400-123-4567" 
              className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors"
            >
              拨打热线
            </a>
          </div>
        </div>
      </section>

      {/* 合作伙伴 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">合作伙伴</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-20 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                <div className="text-gray-400 font-semibold">合作伙伴 {i}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}