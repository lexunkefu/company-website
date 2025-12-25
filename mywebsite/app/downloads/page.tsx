'use client'

import { useState } from 'react'

// 下载文件数据
const downloadsData = [
  {
    id: 1,
    title: '智能设备A 用户手册 v2.0',
    description: '详细的智能设备A使用说明、技术参数、安装指南和故障排除',
    fileType: 'PDF',
    fileSize: '2.4 MB',
    downloadUrl: '#',
    version: '2.0.1',
    date: '2024-01-15',
    category: '用户手册',
    downloads: 1245,
    language: '中文',
    product: '智能设备A',
    md5: 'a1b2c3d4e5f6g7h8i9j0',
    requirements: 'Adobe Reader 或兼容PDF阅读器'
  },
  {
    id: 2,
    title: '设备驱动程序包 v1.2.3',
    description: '适用于 Windows 10/11 的驱动程序，包含所有必要的系统组件',
    fileType: 'ZIP',
    fileSize: '45.2 MB',
    downloadUrl: '#',
    version: '1.2.3',
    date: '2024-01-10',
    category: '驱动程序',
    downloads: 892,
    language: '多语言',
    product: '智能设备A',
    md5: 'b2c3d4e5f6g7h8i9j0k1',
    requirements: 'Windows 10/11, .NET Framework 4.8'
  },
  {
    id: 3,
    title: '产品技术白皮书',
    description: '深入的技术原理、架构说明和性能分析文档',
    fileType: 'PDF',
    fileSize: '5.1 MB',
    downloadUrl: '#',
    version: '1.0',
    date: '2024-01-05',
    category: '技术文档',
    downloads: 567,
    language: '中文',
    product: '通用',
    md5: 'c3d4e5f6g7h8i9j0k1l2'
  },
  {
    id: 4,
    title: '配置工具软件 v3.1',
    description: '设备配置和管理工具，支持批量配置和设备监控',
    fileType: 'EXE',
    fileSize: '32.8 MB',
    downloadUrl: '#',
    version: '3.1.0',
    date: '2023-12-28',
    category: '软件工具',
    downloads: 1203,
    language: '多语言',
    product: '智能设备A',
    md5: 'd4e5f6g7h8i9j0k1l2m3',
    requirements: 'Windows 10/11, 4GB RAM'
  },
  {
    id: 5,
    title: 'SDK开发包 v2.1',
    description: '二次开发接口、示例代码和API文档，支持多种编程语言',
    fileType: 'ZIP',
    fileSize: '78.9 MB',
    downloadUrl: '#',
    version: '2.1.0',
    date: '2023-12-20',
    category: '开发工具',
    downloads: 456,
    language: '英文',
    product: '智能设备A',
    md5: 'e5f6g7h8i9j0k1l2m3n4',
    requirements: 'Visual Studio 2019+, Python 3.8+'
  },
  {
    id: 6,
    title: '安全认证证书',
    description: '产品通过的安全认证相关文件和测试报告',
    fileType: 'PDF',
    fileSize: '1.2 MB',
    downloadUrl: '#',
    version: '2024',
    date: '2023-12-15',
    category: '认证证书',
    downloads: 789,
    language: '中文/英文',
    product: '智能设备A',
    md5: 'f6g7h8i9j0k1l2m3n4o5'
  },
  {
    id: 7,
    title: '固件升级包 v1.5',
    description: '设备固件升级文件，包含性能优化和新功能',
    fileType: 'BIN',
    fileSize: '15.6 MB',
    downloadUrl: '#',
    version: '1.5.2',
    date: '2023-12-10',
    category: '固件',
    downloads: 654,
    language: '二进制',
    product: '智能设备A',
    md5: 'g7h8i9j0k1l2m3n4o5p6',
    requirements: '专用升级工具'
  },
  {
    id: 8,
    title: 'API接口文档 v2.0',
    description: '完整的RESTful API接口文档和调用示例',
    fileType: 'PDF',
    fileSize: '3.8 MB',
    downloadUrl: '#',
    version: '2.0.0',
    date: '2023-12-05',
    category: '技术文档',
    downloads: 321,
    language: '英文',
    product: '软件产品C',
    md5: 'h8i9j0k1l2m3n4o5p6q7'
  }
]

const categories = ['全部', '用户手册', '驱动程序', '软件工具', '固件', '技术文档', '开发工具', '认证证书']
const products = ['全部', '智能设备A', '工业控制器B', '软件产品C', '通用']

export default function DownloadsPage() {
  const [selectedCategory, setSelectedCategory] = useState('全部')
  const [selectedProduct, setSelectedProduct] = useState('全部')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('date')
  const [selectedFile, setSelectedFile] = useState<typeof downloadsData[0] | null>(null)

  // 过滤数据
  let filteredDownloads = downloadsData.filter(item => {
    const matchesCategory = selectedCategory === '全部' || item.category === selectedCategory
    const matchesProduct = selectedProduct === '全部' || item.product === selectedProduct
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesProduct && matchesSearch
  })

  // 排序
  filteredDownloads.sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      case 'downloads':
        return b.downloads - a.downloads
      case 'name':
        return a.title.localeCompare(b.title)
      case 'size':
        return parseFloat(b.fileSize) - parseFloat(a.fileSize)
      default:
        return 0
    }
  })

  // 统计数据
  const totalDownloads = downloadsData.reduce((sum, item) => sum + item.downloads, 0)
  const totalFiles = downloadsData.length

  const handleDownload = (item: typeof downloadsData[0]) => {
    alert(`开始下载: ${item.title}\n文件大小: ${item.fileSize}`)
    // 这里实际应该触发下载
  }

  const getFileIcon = (fileType: string) => {
    switch (fileType) {
      case 'PDF': return '📄'
      case 'ZIP': return '🗜️'
      case 'EXE': return '⚙️'
      case 'BIN': return '🔧'
      default: return '📎'
    }
  }

  return (
    <div className="py-8">
      {/* 页面标题 */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">下载中心</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          获取最新的产品文档、驱动程序、软件工具和技术资源，助力您的项目成功
        </p>
      </div>

      {/* 统计卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-lg">
          <div className="text-4xl font-bold">{totalFiles}</div>
          <div className="text-blue-100">文件总数</div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-2xl shadow-lg">
          <div className="text-4xl font-bold">{totalDownloads.toLocaleString()}</div>
          <div className="text-green-100">总下载量</div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-2xl shadow-lg">
          <div className="text-4xl font-bold">24/7</div>
          <div className="text-purple-100">支持服务</div>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-2xl shadow-lg">
          <div className="text-4xl font-bold">100%</div>
          <div className="text-orange-100">安全可靠</div>
        </div>
      </div>

      {/* 筛选工具栏 */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <div className="space-y-6">
          {/* 搜索框 */}
          <div>
            <div className="relative">
              <input
                type="text"
                placeholder="搜索文档、驱动程序或工具..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-3 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="absolute left-4 top-3 text-gray-400 text-xl">
                🔍
              </div>
            </div>
          </div>

          {/* 分类和产品筛选 */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-700 mb-3">文档分类</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full transition-all ${selectedCategory === category 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700 mb-3">产品筛选</h3>
              <div className="flex flex-wrap gap-2">
                {products.map(product => (
                  <button
                    key={product}
                    onClick={() => setSelectedProduct(product)}
                    className={`px-4 py-2 rounded-full transition-all ${selectedProduct === product 
                      ? 'bg-green-600 text-white shadow-md' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  >
                    {product}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 排序选项 */}
          <div className="flex justify-between items-center">
            <div className="text-gray-600">
              找到 <span className="font-bold text-blue-600">{filteredDownloads.length}</span> 个文件
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="date">按日期排序</option>
              <option value="downloads">按下载量排序</option>
              <option value="name">按名称排序</option>
              <option value="size">按大小排序</option>
            </select>
          </div>
        </div>
      </div>

      {/* 文件列表 */}
      <div className="space-y-6">
        {filteredDownloads.map(item => (
          <div 
            key={item.id} 
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* 文件图标 */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                    <div className="text-4xl">{getFileIcon(item.fileType)}</div>
                  </div>
                </div>

                {/* 文件信息 */}
                <div className="flex-grow">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                        <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
                          v{item.version}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                    </div>
                    <div className="flex items-center gap-2 mb-4 lg:mb-0">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {item.category}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        {item.product}
                      </span>
                    </div>
                  </div>

                  {/* 文件详情 */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4 lg:mb-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">文件类型:</span>
                        <span className="font-semibold">{item.fileType}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">文件大小:</span>
                        <span>{item.fileSize}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">更新日期:</span>
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">语言:</span>
                        <span>{item.language}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">下载次数:</span>
                        <span className="font-bold text-blue-600">{item.downloads.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* 操作按钮 */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleDownload(item)}
                        className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium"
                      >
                        <span className="text-xl">⬇️</span>
                        立即下载
                      </button>
                      <button
                        onClick={() => setSelectedFile(item)}
                        className="flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 font-medium"
                      >
                        <span className="text-xl">ℹ️</span>
                        查看详情
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 空状态 */}
      {filteredDownloads.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl shadow">
          <div className="text-6xl mb-4">📭</div>
          <h3 className="text-2xl font-semibold mb-2">未找到相关文件</h3>
          <p className="text-gray-600 mb-6">请尝试其他搜索关键词或分类</p>
          <button 
            onClick={() => {
              setSearchTerm('')
              setSelectedCategory('全部')
              setSelectedProduct('全部')
            }}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-medium"
          >
            重置筛选条件
          </button>
        </div>
      )}

      {/* 文件详情模态框 */}
      {selectedFile && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{selectedFile.title}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                      {selectedFile.category}
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                      {selectedFile.product}
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                      v{selectedFile.version}
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedFile(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">文件描述</h4>
                  <p className="text-gray-600">{selectedFile.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="text-sm text-gray-500">文件类型</div>
                    <div className="font-medium">{selectedFile.fileType}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="text-sm text-gray-500">文件大小</div>
                    <div className="font-medium">{selectedFile.fileSize}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="text-sm text-gray-500">更新日期</div>
                    <div className="font-medium">{selectedFile.date}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="text-sm text-gray-500">下载次数</div>
                    <div className="font-medium">{selectedFile.downloads.toLocaleString()}</div>
                  </div>
                </div>

                {selectedFile.requirements && (
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">系统要求</h4>
                    <p className="text-gray-600">{selectedFile.requirements}</p>
                  </div>
                )}

                {selectedFile.md5 && (
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">MD5校验码</h4>
                    <code className="bg-gray-100 text-gray-800 px-3 py-2 rounded font-mono text-sm">
                      {selectedFile.md5}
                    </code>
                  </div>
                )}

                <div className="flex gap-4 pt-6 border-t">
                  <button
                    onClick={() => handleDownload(selectedFile)}
                    className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-medium"
                  >
                    立即下载
                  </button>
                  <button
                    onClick={() => setSelectedFile(null)}
                    className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 font-medium"
                  >
                    关闭
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 下载须知 */}
      <div className="mt-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-center mb-8">📋 下载须知</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-gray-700 mb-4">下载说明</h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>所有文件均经过病毒扫描，安全可靠</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>建议使用最新版本的解压软件</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>下载前请确保有足够的磁盘空间</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>遇到下载问题可尝试更换浏览器</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-4">技术支持</h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">📞</span>
                <span>技术热线: 400-123-4567</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">📧</span>
                <span>支持邮箱: support@company.com</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🕒</span>
                <span>服务时间: 周一至周日 9:00-21:00</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">💬</span>
                <span>在线客服: 点击网站右下角图标</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}