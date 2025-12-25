'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Play, Clock, Calendar, Search, Filter } from 'lucide-react';

// 视频数据接口
interface Video {
  id: string;
  title: string;
  description: string;
  duration: string;
  date: string;
  category: string;
  thumbnail: string;
  youtubeId?: string;
  views: number;
  tags: string[];
}

export default function VideosPage() {
  // 状态管理
  const [sortBy, setSortBy] = useState<'title' | 'duration' | 'date' | 'views'>('date');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 9;

  // 示例视频数据
  const videos: Video[] = [
    {
      id: '1',
      title: '产品完整操作演示',
      description: '展示我们旗舰产品的所有功能和操作方法',
      duration: '8:45',
      date: '2024-01-20',
      category: '产品演示',
      thumbnail: '/images/video-thumb-1.jpg',
      youtubeId: 'abc123',
      views: 1245,
      tags: ['产品', '操作', '教程']
    },
    {
      id: '2',
      title: '客户成功案例分享',
      description: '了解我们的产品如何帮助客户提升业务效率',
      duration: '12:30',
      date: '2024-01-18',
      category: '客户案例',
      thumbnail: '/images/video-thumb-2.jpg',
      youtubeId: 'def456',
      views: 1890,
      tags: ['案例', '成功', '客户']
    },
    {
      id: '3',
      title: '安装与设置指南',
      description: '详细的产品安装和初始设置步骤',
      duration: '6:15',
      date: '2024-01-15',
      category: '教程',
      thumbnail: '/images/video-thumb-3.jpg',
      youtubeId: 'ghi789',
      views: 956,
      tags: ['安装', '设置', '指南']
    },
    {
      id: '4',
      title: '2024年新产品发布会',
      description: '观看我们的最新产品发布会直播回放',
      duration: '45:20',
      date: '2024-01-10',
      category: '发布会',
      thumbnail: '/images/video-thumb-4.jpg',
      youtubeId: 'jkl012',
      views: 3250,
      tags: ['新品', '发布', '2024']
    },
    {
      id: '5',
      title: '维护与保养教程',
      description: '学习如何正确维护和保养设备以延长使用寿命',
      duration: '10:05',
      date: '2024-01-05',
      category: '维护',
      thumbnail: '/images/video-thumb-5.jpg',
      youtubeId: 'mno345',
      views: 780,
      tags: ['维护', '保养', '教程']
    },
    {
      id: '6',
      title: '安全操作规范',
      description: '确保操作安全的重要规范和注意事项',
      duration: '7:30',
      date: '2023-12-28',
      category: '安全',
      thumbnail: '/images/video-thumb-6.jpg',
      youtubeId: 'pqr678',
      views: 1120,
      tags: ['安全', '操作', '规范']
    },
    {
      id: '7',
      title: '故障排除指南',
      description: '常见问题的诊断和解决方法',
      duration: '15:45',
      date: '2023-12-20',
      category: '故障排除',
      thumbnail: '/images/video-thumb-7.jpg',
      youtubeId: 'stu901',
      views: 1540,
      tags: ['故障', '排除', '维修']
    },
    {
      id: '8',
      title: '团队介绍与工厂参观',
      description: '深入了解我们的团队和生产设施',
      duration: '18:20',
      date: '2023-12-15',
      category: '公司介绍',
      thumbnail: '/images/video-thumb-8.jpg',
      youtubeId: 'vwx234',
      views: 890,
      tags: ['团队', '工厂', '公司']
    },
    {
      id: '9',
      title: '行业应用案例',
      description: '产品在不同行业中的实际应用展示',
      duration: '22:10',
      date: '2023-12-10',
      category: '应用案例',
      thumbnail: '/images/video-thumb-9.jpg',
      youtubeId: 'yza567',
      views: 2100,
      tags: ['行业', '应用', '案例']
    }
  ];

  // 所有分类
  const categories = ['all', '产品演示', '客户案例', '教程', '发布会', '维护', '安全', '故障排除', '公司介绍', '应用案例'];

  // 将时长字符串转换为秒数的函数
  const durationToSeconds = (duration: string): number => {
    const parts = duration.split(':').map(part => parseInt(part, 10));
    
    if (parts.length === 3) {
      // HH:MM:SS
      return parts[0] * 3600 + parts[1] * 60 + parts[2];
    } else if (parts.length === 2) {
      // MM:SS
      return parts[0] * 60 + parts[1];
    } else {
      // SS 或无效格式
      return parts[0] || 0;
    }
  };

  // 过滤和排序视频
  const filteredAndSortedVideos = useMemo(() => {
    let filtered = videos.filter(video => {
      // 搜索过滤
      const matchesSearch = searchTerm === '' || 
        video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      // 分类过滤
      const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });

    // 排序
    return [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'duration':
          return durationToSeconds(a.duration) - durationToSeconds(b.duration);
        case 'date':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'views':
          return b.views - a.views;
        default:
          return 0;
      }
    });
  }, [videos, searchTerm, selectedCategory, sortBy]);

  // 分页计算
  const totalPages = Math.ceil(filteredAndSortedVideos.length / videosPerPage);
  const startIndex = (currentPage - 1) * videosPerPage;
  const paginatedVideos = filteredAndSortedVideos.slice(startIndex, startIndex + videosPerPage);

  // 格式化日期
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // 格式化观看次数
  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`;
    }
    return views.toString();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面标题部分 */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">产品视频库</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl">
            观看我们的产品演示、教程和客户案例，了解产品如何帮助您的业务增长
          </p>
          
          {/* 搜索框 */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="搜索视频标题、描述或标签..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-12 pr-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 内容区域 */}
      <div className="container mx-auto px-4 py-8">
        {/* 控制面板 */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Filter size={20} className="text-gray-500" />
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-full ${selectedCategory === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  全部
                </button>
                {categories.filter(cat => cat !== 'all').map(category => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setCurrentPage(1);
                    }}
                    className={`px-4 py-2 rounded-full ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-gray-600">排序方式:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="date">最新发布</option>
                <option value="title">标题顺序</option>
                <option value="duration">视频时长</option>
                <option value="views">观看次数</option>
              </select>
            </div>
          </div>
        </div>

        {/* 视频统计 */}
        <div className="mb-6">
          <p className="text-gray-600">
            找到 <span className="font-bold text-blue-600">{filteredAndSortedVideos.length}</span> 个视频
            {selectedCategory !== 'all' && `（${selectedCategory}分类）`}
            {searchTerm && `（搜索: "${searchTerm}"）`}
          </p>
        </div>

        {/* 视频网格 */}
        {paginatedVideos.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {paginatedVideos.map(video => (
                <div
                  key={video.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* 视频缩略图 */}
                  <div className="relative aspect-video bg-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center group hover:bg-white hover:scale-110 transition-transform duration-300">
                        <Play className="text-blue-600 ml-1" size={24} />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-sm px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>

                  {/* 视频信息 */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
                        {video.category}
                      </span>
                      <span className="text-sm text-gray-500">{formatViews(video.views)} 观看</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                      {video.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {video.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{formatDate(video.date)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{video.duration}</span>
                        </div>
                      </div>
                      
                      <Link
                        href={`/videos/${video.id}`}
                        className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                      >
                        观看视频
                        <Play size={16} />
                      </Link>
                    </div>

                    {/* 标签 */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {video.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                          onClick={() => {
                            setSearchTerm(tag);
                            setCurrentPage(1);
                          }}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 分页控件 */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  上一页
                </button>
                
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-10 h-10 rounded-lg ${currentPage === pageNum ? 'bg-blue-600 text-white' : 'border hover:bg-gray-50'}`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  下一页
                </button>
                
                <span className="text-gray-600 ml-4">
                  第 {currentPage} / {totalPages} 页
                </span>
              </div>
            )}
          </>
        ) : (
          // 无结果状态
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={40} className="text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">未找到相关视频</h3>
              <p className="text-gray-600 mb-6">
                没有找到与“{searchTerm}”相关的视频内容
                {selectedCategory !== 'all' && `，请尝试选择其他分类或清除筛选条件`}
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setCurrentPage(1);
                }}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                清除所有筛选
              </button>
            </div>
          </div>
        )}

        {/* 热门标签 */}
        <div className="mt-12 bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">热门标签</h3>
          <div className="flex flex-wrap gap-3">
            {['产品', '教程', '案例', '安装', '维护', '安全', '故障', '操作', '演示', '新品'].map(tag => (
              <button
                key={tag}
                onClick={() => {
                  setSearchTerm(tag);
                  setCurrentPage(1);
                }}
                className="px-4 py-2 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 rounded-full transition-colors"
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 页脚CTA */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">需要定制视频内容？</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            我们可以根据您的具体需求，制作专业的产品介绍、使用教程或案例视频
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            联系我们定制视频
          </Link>
        </div>
      </div>
    </div>
  );
}