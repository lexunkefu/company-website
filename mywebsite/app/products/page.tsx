'use client'

import { useState } from 'react'

// 产品数据
const productsData = [
  {
    id: 1,
    name: '智能监控设备A',
    category: '智能安防',
    description: '高清智能监控设备，支持人脸识别和移动侦测，适用于各种安防场景。',
    fullDescription: '这是一款先进的智能监控设备，具备4K高清画质、夜视功能、移动侦测和人脸识别技术。支持云存储和手机远程查看，安装简便，操作友好。',
    price: '¥1,299',
    originalPrice: '¥1,599',
    image: '/placeholder-product1.jpg',
    features: [
      '4K超高清画质',
      '全彩夜视功能',
      '智能移动侦测',
      '人脸识别技术',
      '云存储支持',
      '手机远程查看',
      '防水防尘设计',
      '无线连接'
    ],
    specs: {
      '分辨率': '3840×2160 (4K)',
      '传感器类型': 'CMOS',
      '夜视距离': '30米',
      '存储方式': '云存储/TF卡',
      '网络连接': 'Wi-Fi/以太网',
      '工作温度': '-20°C ~ 60°C',
      '防护等级': 'IP66',
      '电源输入': 'DC 12V/2A'
    },
    tags: ['热销', '新品', '智能'],
    stock: 45,
    rating: 4.8,
    reviews: 128
  },
  {
    id: 2,
    name: '工业控制器B',
    category: '工业自动化',
    description: '高性能工业控制器，支持多种工业协议，适用于自动化生产线。',
    fullDescription: '专为工业环境设计的高性能控制器，支持Modbus、Profinet、Ethernet/IP等多种工业协议。具备强大的数据处理能力和稳定的运行性能。',
    price: '¥3,800',
    originalPrice: '¥4,500',
    image: '/placeholder-product2.jpg',
    features: [
      '多协议支持',
      '高速数据处理',
      '工业级防护',
      '远程监控',
      '数据记录',
      '故障诊断',
      '扩展模块支持',
      '长寿命设计'
    ],
    specs: {
      '处理器': 'ARM Cortex-A9',
      '内存': '1GB DDR3',
      '存储': '8GB eMMC',
      '接口': '以太网×2, USB×2, RS485×2',
      '工作温度': '-40°C ~ 85°C',
      '防护等级': 'IP67',
      '电源输入': 'DC 24V',
      '尺寸': '120×90×35mm'
    },
    tags: ['工业级', '稳定', '高性能'],
    stock: 23,
    rating: 4.9,
    reviews: 56
  },
  {
    id: 3,
    name: '数据分析软件C',
    category: '软件产品',
    description: '专业数据分析软件，提供全面的数据可视化分析解决方案。',
    fullDescription: '强大的数据分析平台，支持多种数据源接入，提供丰富的数据分析工具和可视化图表，帮助企业做出数据驱动的决策。',
    price: '¥8,000/年',
    image: '/placeholder-product3.jpg',
    features: [
      '多数据源支持',
      '实时数据分析',
      '自定义报表',
      '数据预警',
      '团队协作',
      'API接口',
      '移动端支持',
      '数据安全加密'
    ],
    specs: {
      '支持数据源': 'MySQL, PostgreSQL, Oracle, Excel, CSV',
      '最大数据量': '无限制',
      '并发用户数': '50人',
      '报表类型': '50+种',
      'API支持': 'RESTful API',
      '移动端': 'iOS/Android App',
      '更新频率': '季度更新',
      '技术支持': '7×24小时'
    },
    tags: ['软件', '云服务', '企业版'],
    stock: 999,
    rating: 4.7,
    reviews: 89
  },
  {
    id: 4,
    name: '智能网关D',
    category: '物联网',
    description: '物联网智能网关，支持多种设备接入和云端数据传输。',
    price: '¥2,200',
    image: '/placeholder-product4.jpg',
    features: ['多协议支持', '边缘计算', '云端同步', '安全加密'],
    specs: { '接口': '多种', '协议': 'MQTT/HTTP' },
    tags: ['物联网', '网关'],
    stock: 67,
    rating: 4.6,
    reviews: 42
  },
  {
    id: 5,
    name: '传感器套装E',
    category: '传感器',
    description: '工业级传感器套装，包含多种环境监测传感器。',
    price: '¥5,600',
    image: '/placeholder-product5.jpg',
    features: ['高精度', '低功耗', '无线传输', '长寿命'],
    specs: { '精度': '高', '功耗': '低' },
    tags: ['传感器', '监测'],
    stock: 34,
    rating: 4.8,
    reviews: 31
  },
  {
    id: 6,
    name: '管理平台F',
    category: '软件产品',
    description: '一体化设备管理平台，实现设备的集中监控和管理。',
    price: '¥12,000',
    image: '/placeholder-product6.jpg',
    features: ['集中管理', '远程控制', '数据分析', '报警系统'],
    specs: { '设备支持': '多品牌', '用户数': '无限' },
    tags: ['管理平台', '企业级'],
    stock: 12,
    rating: 4.9,
    reviews: 27
  }
]

const categories = ['全部', '智能安防', '工业自动化', '软件产品', '物联网', '传感器']

export default function ProductsPage() {
  const [products] = useState(productsData)
  const [selectedCategory, setSelectedCategory] = useState('全部')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('default')
  const [selectedProduct, setSelectedProduct] = useState<typeof productsData[0] | null>(null)

  // 筛选和排序
  let filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === '全部' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // 排序
  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, '')))
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, '')))
  } else if (sortBy === 'rating') {
    filteredProducts.sort((a, b) => b.rating - a.rating)
  }

  const handleContactSales = (productName: string) => {
    alert(`即将联系销售顾问为您咨询 ${productName}`)
  }

  return (
    <div className="py-8">
      {/* 页面标题 */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">产品展示</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          探索我们全面的产品线，每一款产品都经过精心设计和严格测试
        </p>
      </div>

      {/* 筛选工具栏 */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
          {/* 搜索框 */}
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="搜索产品名称或描述..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-3 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="absolute left-4 top-3.5 text-gray-400">
                🔍
              </div>
            </div>
          </div>

          {/* 分类筛选 */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full transition-all ${selectedCategory === category 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* 排序选项 */}
          <div className="min-w-[180px]">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="default">默认排序</option>
              <option value="price-low">价格从低到高</option>
              <option value="price-high">价格从高到低</option>
              <option value="rating">评分最高</option>
            </select>
          </div>
        </div>
      </div>

      {/* 产品统计 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-blue-50 p-6 rounded-xl">
          <div className="text-3xl font-bold text-blue-600">{filteredProducts.length}</div>
          <div className="text-gray-600">当前产品</div>
        </div>
        <div className="bg-green-50 p-6 rounded-xl">
          <div className="text-3xl font-bold text-green-600">{categories.length}</div>
          <div className="text-gray-600">产品分类</div>
        </div>
        <div className="bg-purple-50 p-6 rounded-xl">
          <div className="text-3xl font-bold text-purple-600">100%</div>
          <div className="text-gray-600">质量保证</div>
        </div>
        <div className="bg-orange-50 p-6 rounded-xl">
          <div className="text-3xl font-bold text-orange-600">24h</div>
          <div className="text-gray-600">技术响应</div>
        </div>
      </div>

      {/* 产品网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <div 
            key={product.id} 
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
          >
            {/* 产品图片区域 */}
            <div className="relative h-64 bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl">
                  {product.category === '智能安防' ? '📷' : 
                   product.category === '工业自动化' ? '⚙️' : 
                   product.category === '软件产品' ? '💻' : 
                   product.category === '物联网' ? '📡' : '🔧'}
                </div>
              </div>
              
              {/* 标签 */}
              <div className="absolute top-4 left-4 flex gap-2">
                {product.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 bg-white/90 backdrop-blur-sm text-sm font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* 评分 */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="font-bold text-yellow-500">★ {product.rating}</span>
                <span className="text-gray-500 text-sm ml-1">({product.reviews})</span>
              </div>
            </div>

            {/* 产品信息 */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full mb-2">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
              
              {/* 价格 */}
              <div className="flex items-center mb-6">
                <span className="text-2xl font-bold text-red-600">{product.price}</span>
                {product.originalPrice && (
                  <span className="ml-3 text-gray-400 line-through">{product.originalPrice}</span>
                )}
                <span className="ml-auto text-sm text-gray-500">库存: {product.stock}件</span>
              </div>
              
              {/* 功能特性 */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-2">主要功能:</h4>
                <div className="flex flex-wrap gap-2">
                  {product.features.slice(0, 3).map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {feature}
                    </span>
                  ))}
                  {product.features.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      +{product.features.length - 3}更多
                    </span>
                  )}
                </div>
              </div>

              {/* 操作按钮 */}
              <div className="flex gap-3">
                <button 
                  onClick={() => setSelectedProduct(product)}
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  查看详情
                </button>
                <button 
                  onClick={() => handleContactSales(product.name)}
                  className="flex-1 border-2 border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                >
                  立即咨询
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 空状态 */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl shadow">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-semibold mb-2">未找到相关产品</h3>
          <p className="text-gray-600 mb-6">请尝试其他搜索关键词或分类</p>
          <button 
            onClick={() => {
              setSearchTerm('')
              setSelectedCategory('全部')
            }}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-medium"
          >
            重置筛选条件
          </button>
        </div>
      )}

      {/* 产品详情模态框 */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* 模态框头部 */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">{selectedProduct.name}</h2>
                  <div className="flex items-center mt-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full">
                      {selectedProduct.category}
                    </span>
                    <span className="ml-4 text-yellow-500 font-bold">★ {selectedProduct.rating}</span>
                    <span className="ml-1 text-gray-500">({selectedProduct.reviews} 条评价)</span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* 左侧：图片和基本信息 */}
                <div>
                  <div className="h-64 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <div className="text-8xl">
                      {selectedProduct.category === '智能安防' ? '📷' : 
                       selectedProduct.category === '工业自动化' ? '⚙️' : '💻'}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">产品描述</h3>
                    <p className="text-gray-600">{selectedProduct.fullDescription || selectedProduct.description}</p>
                  </div>

                  {/* 价格和库存 */}
                  <div className="bg-gray-50 p-6 rounded-xl mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-3xl font-bold text-red-600">{selectedProduct.price}</div>
                        {selectedProduct.originalPrice && (
                          <div className="text-gray-400 line-through">{selectedProduct.originalPrice}</div>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="text-gray-600">库存状态</div>
                        <div className={`font-bold ${selectedProduct.stock > 10 ? 'text-green-600' : 'text-orange-600'}`}>
                          {selectedProduct.stock > 10 ? '充足' : '紧张'} ({selectedProduct.stock}件)
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleContactSales(selectedProduct.name)}
                      className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-medium text-lg"
                    >
                      立即咨询购买
                    </button>
                  </div>
                </div>

                {/* 右侧：详细规格 */}
                <div>
                  {/* 功能特性 */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">功能特性</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedProduct.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 规格参数 */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">规格参数</h3>
                    <div className="space-y-3">
                      {Object.entries(selectedProduct.specs).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-3 border-b border-gray-100">
                          <span className="text-gray-600">{key}</span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 标签 */}
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-3">产品标签</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.tags.map(tag => (
                        <span key={tag} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 产品优势说明 */}
      <div className="mt-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-center mb-8">为什么选择我们的产品？</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🏆</div>
            <h4 className="text-xl font-semibold mb-2">品质保证</h4>
            <p className="text-gray-600">所有产品均通过严格的质量检测，确保稳定可靠</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🔧</div>
            <h4 className="text-xl font-semibold mb-2">专业支持</h4>
            <p className="text-gray-600">提供专业的技术支持和售后服务，解决您的后顾之忧</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">💡</div>
            <h4 className="text-xl font-semibold mb-2">持续创新</h4>
            <p className="text-gray-600">不断研发新技术，产品持续更新迭代</p>
          </div>
        </div>
      </div>
    </div>
  )
}