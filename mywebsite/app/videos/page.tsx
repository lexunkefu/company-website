'use client'

import { useState } from 'react'

// 视频数据
const videosData = [
  {
    id: 1,
    title: '智能设备A - 安装配置教程',
    description: '详细讲解智能设备A的安装步骤、配置方法和注意事项',
    duration: '15:23',
    thumbnail: '/placeholder-video1.jpg',
    category: '安装教程',
    product: '智能设备A',
    date: '2024-01-15',
    views: 12456,
    likes: 1234,
    instructor: '张工程师',
    level: '初级',
    chapters: [
      { time: '00:00', title: '开箱检查' },
      { time: '02:30', title: '硬件安装' },
      { time: '07:45', title: '软件配置' },
      { time: '12:10', title: '功能测试' }
    ]
  },
  {
    id: 2,
    title: '工业控制器B - 编程入门',
    description: '从零开始学习工业控制器B的基础编程和逻辑控制',
    duration: '28:45',
    thumbnail: '/placeholder-video2.jpg',
    category: '编程教程',
    product: '工业控制器B',
    date: '2024-01-10',
    views: 8934,
    likes: 856,
    instructor: '王工程师',
    level: '初级',
    chapters: [
      { time: '00:00', title: '开发环境搭建' },
      { time: '05:20', title: '基础语法' },
      { time: '15:30', title: '逻辑控制' },
      { time: '22:10', title: '调试技巧' }
    ]
  },
  {
    id: 3,
    title: '数据分析软件C - 高级功能详解',
    description: '深入讲解数据分析软件C的高级功能和使用技巧',
    duration: '42:18',
    thumbnail: '/placeholder-video3.jpg',
    category: '高级教程',
    product: '软件产品C',
    date: '2024-01-05',
    views: 5678,
    likes: 512,
    instructor: '李专家',
    level: '高级',
    chapters: [
      { time: '00:00', title: '数据导入优化' },
      { time: '10:15', title: '高级分析函数' },
      { time: '25:30', title: '自定义报表' },
      { time: '35:45', title: '性能优化' }
    ]
  },
  {
    id: 4,
    title: '智能网关D - 物联网集成',
    description: '如何将智能网关D集成到现有的物联网系统中',
    duration: '21:34',
    thumbnail: '/placeholder-video4.jpg',
    category: '集成教程',
    product: '智能网关D',
    date: '2023-12-28',
    views: 4321,
    likes: 398,
    instructor: '赵架构师',
    level: '中级',
    chapters: [
      { time: '00:00', title: '系统架构' },
      { time: '06:45', title: '协议配置' },
      { time: '12:30', title: '设备接入' },
      { time: '18:15', title: '云端同步' }
    ]
  },
  {
    id: 5,
    title: '产品演示 - 智能设备A实际应用',
    description: '智能设备A在工业现场的实际应用案例演示',
    duration: '18:52',
    thumbnail: '/placeholder-video5.jpg',
    category: '应用案例',
    product: '智能设备A',
    date: '2023-12-20',
    views: 7890,
    likes: 645,
    instructor: '孙顾问',
    level: '中级',
    chapters: [
      { time: '00:00', title: '场景介绍' },
      { time: '03:20', title: '设备部署' },
      { time: '09:45', title: '功能演示' },
      { time: '15:30', title: '效果评估' }
    ]
  },
  {
    id: 6,
    title: '故障排除 - 常见问题解决',
    description: '针对常见故障的排查方法和解决方案',
    duration: '25:17',
    thumbnail: '/placeholder-video6.jpg',
    category: '故障排除',
    product: '通用',
    date: '2023-12-15',
    views: 6543,
    likes: 587,
    instructor: '周工程师',
    level: '中级',
    chapters: [
      { time: '00:00', title: '常见故障分类' },
      { time: '05:40', title: '诊断工具使用' },
      { time: '12:15', title: '解决方案实施' },
      { time: '20:30', title: '预防措施' }
    ]
  },
  {
    id: 7,
    title: '软件产品C - 新功能发布',
    description: '软件产品C最新版本的新功能演示和介绍',
    duration: '16:48',
    thumbnail: '/placeholder-video7.jpg',
    category: '产品发布',
    product: '软件产品C',
    date: '2023-12-10',
    views: 3210,
    likes: 289,
    instructor: '吴产品经理',
    level: '初级',
    chapters: [
      { time: '00:00', title: '版本概述' },
      { time: '03:15', title: '新功能演示' },
      { time: '10:30', title: '使用技巧' },
      { time: '14:20', title: '升级指南' }
    ]
  },
  {
    id: 8,
    title: '最佳实践 - 系统优化方案',
    description: '分享系统优化的最佳实践和经验总结',
    duration: '35:22',
    thumbnail: '/placeholder-video8.jpg',
    category: '最佳实践',
    product: '通用',
    date: '2023-12-05',
    views: 4321,
    likes: 398,
    instructor: '郑专家',
    level: '高级',
    chapters: [
      { time: '00:00', title: '优化原则' },
      { time: '08:45', title: '性能分析' },
      { time: '18:30', title: '优化实施' },
      { time: '28:15', title: '效果验证' }
    ]
  }
]

const categories = ['全部', '安装教程', '编程教程', '高级教程', '集成教程', '应用案例', '故障排除', '产品发布', '最佳实践']
const products = ['全部', '智能设备A', '工业控制器B', '软件产品C', '智能网关D', '通用']
const levels = ['全部', '初级', '中级', '高级']

export default function VideosPage() {
  const [selectedCategory, setSelectedCategory] = useState('全部')
  const [selectedProduct, setSelectedProduct] = useState('全部')
  const [selectedLevel, setSelectedLevel] = useState('全部')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('date')
  const [selectedVideo, setSelectedVideo] = useState<typeof videosData[0] | null>(null)
  const [playlist, setPlaylist] = useState<typeof videosData>([])

  // 过滤视频
  let filteredVideos = videosData.filter(video => {
    const matchesCategory = selectedCategory === '全部' || video.category === selectedCategory
    const matchesProduct = selectedProduct === '全部' || video.product === selectedProduct
    const matchesLevel = selectedLevel === '全部' || video.level === selectedLevel
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         video.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesProduct && matchesLevel && matchesSearch
  })

  // 排序
  if (sortBy === 'views') {
    filteredVideos.sort((a, b) => b.views - a.views)
  } else if (sortBy === 'date') {
    filteredVideos.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } else if (sortBy === 'duration') {
    filteredVideos.sort((a, b) => {
      const timeA = a.duration.split(':').reduce((acc, time) => (60 * acc) + +time)
      const timeB = b.duration.split(':').reduce((acc, time) => (60 * acc) + +time)
      return timeA - timeB
    })
  }

  // 添加到播放列表
  const addToPlaylist = (video: typeof videosData[0]) => {
    if (!playlist.find(v => v.id === video.id)) {
      setPlaylist([...playlist, video])
    }
  }

  // 统计数据
  const totalVideos = videosData.length
  const totalViews = videosData.reduce((sum, video) => sum + video.views, 0)
  const totalDuration = videosData.reduce((sum, video) => {
    const [minutes, seconds] = video.duration.split(':').map(Number)
    return sum + minutes * 60 + seconds
  }, 0)
  const totalHours = Math.floor(totalDuration / 3600)
  const totalMinutes = Math.floor((totalDuration % 3600) / 60)

  return (
    <div className="py-8">
      {/* 页面标题 */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">视频中心</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          观看专业的产品教程、应用案例和技术分享视频
        </p>
      </div>

      {/* 统计卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-lg">
          <div className="text-4xl font-bold">{totalVideos}</div>
          <div className="text-blue-100">视频总数</div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-2xl shadow-lg">
          <div className="text-4xl font-bold">{totalViews.toLocaleString()}</div>
          <div className="text-green-100">总观看量</div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-2xl shadow-lg">
          <div className="text-4xl font-bold">{totalHours}h {totalMinutes}m</div>
          <div className="text-purple-100">总时长</div>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-2xl shadow-lg">
          <div className="text-4xl font-bold">免费</div>
          <div className="text-orange-100">所有视频免费</div>
        </div>
      </div>

      {/* 筛选工具栏 */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <div className="space-y-6">
          {/* 搜索框 */}
          <div className="relative">
            <input
              type="text"
              placeholder="搜索视频标题或描述..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <div className="absolute left-4 top-3 text-gray-400 text-xl">
              🔍
            </div>
          </div>

          {/* 分类筛选 */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-700 mb-3">视频分类</h3>
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

            <div>
              <h3 className="font-semibold text-gray-700 mb-3">难度级别</h3>
              <div className="flex flex-wrap gap-2">
                {levels.map(level => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`px-4 py-2 rounded-full transition-all ${selectedLevel === level 
                      ? 'bg-purple-600 text-white shadow-md' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 排序选项 */}
          <div className="flex justify-between items-center">
            <div className="text-gray-600">
              找到 <span className="font-bold text-blue-600">{filteredVideos.length}</span> 个视频
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="date">按发布时间排序</option>
              <option value="views">按观看量排序</option>
              <option value="duration">按时长排序</option>
            </select>
          </div>
        </div>
      </div>

      {/* 视频网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredVideos.map(video => (
          <div 
            key={video.id} 
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
          >
            {/* 视频缩略图 */}
            <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl">🎬</div>
              </div>
              
              {/* 时长标签 */}
              <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-sm">
                {video.duration}
              </div>
              
              {/* 难度级别 */}
              <div className="absolute top-3 left-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  video.level === '初级' ? 'bg-green-100 text-green-600' :
                  video.level === '中级' ? 'bg-blue-100 text-blue-600' :
                  'bg-purple-100 text-purple-600'
                }`}>
                  {video.level}
                </span>
              </div>
              
              {/* 播放按钮 */}
              <button 
                onClick={() => setSelectedVideo(video)}
                className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity"
              >
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-3xl">
                  ▶
                </div>
              </button>
            </div>

            {/* 视频信息 */}
            <div className="p-5">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-800 line-clamp-2">{video.title}</h3>
              </div>
              
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <span className="mr-4">👤 {video.instructor}</span>
                <span>📅 {video.date}</span>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{video.description}</p>
              
              {/* 标签和统计 */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded">
                  {video.category}
                </span>
                <span className="px-2 py-1 bg-green-50 text-green-600 text-xs rounded">
                  {video.product}
                </span>
              </div>
              
              <div className="flex justify-between items-center text-sm text-gray-500">
                <div className="flex items-center">
                  <span className="mr-4">👁️ {video.views.toLocaleString()}</span>
                  <span>👍 {video.likes}</span>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => addToPlaylist(video)}
                    className="text-blue-600 hover:text-blue-800"
                    title="添加到播放列表"
                  >
                    📋
                  </button>
                  <button className="text-blue-600 hover:text-blue-800">
                    ⬇️
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 空状态 */}
      {filteredVideos.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl shadow">
          <div className="text-6xl mb-4">🎬</div>
          <h3 className="text-2xl font-semibold mb-2">未找到相关视频</h3>
          <p className="text-gray-600 mb-6">请尝试其他搜索关键词或分类</p>
          <button 
            onClick={() => {
              setSearchTerm('')
              setSelectedCategory('全部')
              setSelectedProduct('全部')
              setSelectedLevel('全部')
            }}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-medium"
          >
            重置筛选条件
          </button>
        </div>
      )}

      {/* 播放列表 */}
      {playlist.length > 0 && (
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800">我的播放列表 ({playlist.length})</h3>
            <button 
              onClick={() => setPlaylist([])}
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              清空列表
            </button>
          </div>
          
          <div className="space-y-3">
            {playlist.map((video, index) => (
              <div key={video.id} className="flex items-center p-3 hover:bg-gray-50 rounded-lg">
                <div className="w-12 text-center text-gray-500 font-medium">{index + 1}</div>
                <div className="flex-1">
                  <div className="font-medium">{video.title}</div>
                                    <div className="text-sm text-gray-500">{video.duration} • {video.instructor}</div>
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={() => setSelectedVideo(video)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    播放
                  </button>
                  <button 
                    onClick={() => setPlaylist(playlist.filter(v => v.id !== video.id))}
                    className="text-gray-400 hover:text-red-500"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 视频播放模态框 */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="bg-black rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
            {/* 模态框头部 */}
            <div className="flex justify-between items-center p-6 border-b border-gray-800">
              <div>
                <h3 className="text-2xl font-bold text-white">{selectedVideo.title}</h3>
                <div className="flex items-center gap-4 mt-2 text-gray-300">
                  <span>{selectedVideo.instructor}</span>
                  <span>•</span>
                  <span>{selectedVideo.date}</span>
                  <span>•</span>
                  <span>{selectedVideo.views.toLocaleString()} 次观看</span>
                </div>
              </div>
              <button 
                onClick={() => setSelectedVideo(null)}
                className="text-white hover:text-gray-300 text-2xl"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* 视频播放器 */}
              <div className="lg:col-span-2 p-6">
                <div className="aspect-video bg-gradient-to-br from-blue-900 to-purple-900 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">▶</div>
                    <div className="text-white text-2xl">视频播放器</div>
                    <div className="text-gray-400 mt-2">点击播放按钮开始观看</div>
                  </div>
                </div>
                
                {/* 视频控制 */}
                <div className="mt-6 flex justify-between">
                  <div className="flex gap-4">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                      ▶ 播放视频
                    </button>
                    <button 
                      onClick={() => addToPlaylist(selectedVideo)}
                      className="border border-gray-600 text-gray-300 px-6 py-2 rounded-lg hover:bg-gray-800"
                    >
                      📋 添加到列表
                    </button>
                  </div>
                  <div className="flex gap-2">
                    <button className="text-gray-300 hover:text-white">⬇️ 下载</button>
                    <button className="text-gray-300 hover:text-white">🔗 分享</button>
                  </div>
                </div>

                {/* 视频描述 */}
                <div className="mt-8">
                  <h4 className="text-xl font-semibold text-white mb-4">视频描述</h4>
                  <p className="text-gray-300">{selectedVideo.description}</p>
                </div>
              </div>

              {/* 章节和相关信息 */}
              <div className="lg:col-span-1 p-6 border-l border-gray-800">
                <h4 className="text-xl font-semibold text-white mb-6">视频章节</h4>
                <div className="space-y-3 mb-8">
                  {selectedVideo.chapters.map((chapter, idx) => (
                    <div key={idx} className="flex items-center p-3 hover:bg-gray-800 rounded-lg cursor-pointer">
                      <div className="w-12 text-gray-400">{chapter.time}</div>
                      <div className="text-gray-300">{chapter.title}</div>
                    </div>
                  ))}
                </div>

                {/* 视频信息 */}
                <div className="space-y-4">
                  <div>
                    <div className="text-gray-500 text-sm">分类</div>
                    <div className="text-white">{selectedVideo.category}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm">产品</div>
                    <div className="text-white">{selectedVideo.product}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm">难度级别</div>
                    <div className="text-white">{selectedVideo.level}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm">时长</div>
                    <div className="text-white">{selectedVideo.duration}</div>
                  </div>
                </div>

                {/* 相关视频 */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-white mb-4">相关视频</h4>
                  <div className="space-y-3">
                    {videosData
                      .filter(v => v.id !== selectedVideo.id && v.product === selectedVideo.product)
                      .slice(0, 3)
                      .map(video => (
                        <div 
                          key={video.id}
                          onClick={() => setSelectedVideo(video)}
                          className="flex items-center p-3 hover:bg-gray-800 rounded-lg cursor-pointer"
                        >
                          <div className="w-16 h-10 bg-gradient-to-r from-blue-800 to-purple-800 rounded mr-3"></div>
                          <div className="flex-1">
                            <div className="text-sm text-white line-clamp-1">{video.title}</div>
                            <div className="text-xs text-gray-400">{video.duration}</div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 学习路径推荐 */}
      <div className="mt-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-center mb-8">🎯 推荐学习路径</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h4 className="text-xl font-semibold mb-3">新手入门</h4>
            <ul className="text-gray-600 space-y-2 text-left">
              <li>✓ 产品安装配置</li>
              <li>✓ 基础功能使用</li>
              <li>✓ 常见问题解决</li>
              <li>✓ 最佳实践分享</li>
            </ul>
            <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              开始学习
            </button>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h4 className="text-xl font-semibold mb-3">进阶提升</h4>
            <ul className="text-gray-600 space-y-2 text-left">
              <li>✓ 高级功能详解</li>
              <li>✓ 系统集成方案</li>
              <li>✓ 性能优化技巧</li>
              <li>✓ 故障排查方法</li>
            </ul>
            <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              继续学习
            </button>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🏆</div>
            <h4 className="text-xl font-semibold mb-3">专家精通</h4>
            <ul className="text-gray-600 space-y-2 text-left">
              <li>✓ 架构设计原理</li>
              <li>✓ 二次开发指南</li>
              <li>✓ 性能调优实战</li>
              <li>✓ 企业级部署</li>
            </ul>
            <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              深入学习
            </button>
          </div>
        </div>
      </div>

      {/* 学习统计 */}
      <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600">500+</div>
            <div className="text-gray-600">学习时长(小时)</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600">2000+</div>
            <div className="text-gray-600">学员完成课程</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600">98%</div>
            <div className="text-gray-600">学员满意度</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600">免费</div>
            <div className="text-gray-600">所有内容免费</div>
          </div>
        </div>
      </div>

      {/* 订阅提醒 */}
      <div className="mt-12 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">📺 订阅视频更新</h3>
        <p className="mb-6 opacity-90 max-w-2xl mx-auto">
          订阅我们的视频频道，第一时间获取最新的产品教程和技术分享
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="请输入您的邮箱"
            className="flex-1 px-4 py-3 rounded-lg text-gray-800"
          />
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
            订阅更新
          </button>
        </div>
      </div>
    </div>
  )
}