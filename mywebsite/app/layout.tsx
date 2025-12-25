// app/layout.tsx
'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: '首页', path: '/' },
    { name: '产品展示', path: '/products' },
    { name: '下载中心', path: '/downloads' },
    { name: '客服中心', path: '/support' },
    { name: '视频中心', path: '/videos' },
    { name: '联系我们', path: '/contact' },
  ]

  return (
    <html lang="zh-CN" className={inter.className}>
      <head>
        <title>公司官网 - 专业产品与服务</title>
        <meta name="description" content="提供高质量的产品展示、技术下载、客户支持和联系我们服务" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-gray-50">
        {/* 导航栏 */}
        <header className="sticky top-0 z-50 bg-white shadow-md">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-blue-600 rounded-lg"></div>
                <a href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600">
                  公司Logo
                </a>
              </div>

              {/* 桌面导航 */}
              <nav className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.path}
                    href={item.path}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>

              {/* 移动端菜单按钮 */}
              <button
                className="md:hidden text-gray-700 hover:text-blue-600 p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "关闭菜单" : "打开菜单"}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* 移动端菜单 */}
            {mobileMenuOpen && (
              <div className="md:hidden mt-4 pb-4">
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <a
                      key={item.path}
                      href={item.path}
                      className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </header>

        {/* 主要内容区域 */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* 页脚 */}
        <footer className="bg-gray-800 text-white pt-12 pb-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* 公司信息 */}
              <div>
                <h3 className="text-2xl font-bold mb-4">公司名称</h3>
                <p className="text-gray-300">
                  致力于为客户提供最优质的产品和最专业的服务，创造更大价值。
                </p>
                <div className="mt-4 text-gray-300">
                  <div>© 2024 公司名称</div>
                  <div className="text-sm">保留所有权利</div>
                </div>
              </div>

              {/* 产品服务 */}
              <div>
                <h4 className="text-lg font-semibold mb-4">产品服务</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="/products" className="text-gray-300 hover:text-white transition-colors">
                      产品展示
                    </a>
                  </li>
                  <li>
                    <a href="/downloads" className="text-gray-300 hover:text-white transition-colors">
                      技术下载
                    </a>
                  </li>
                  <li>
                    <a href="/support" className="text-gray-300 hover:text-white transition-colors">
                      技术支持
                    </a>
                  </li>
                  <li>
                    <a href="/videos" className="text-gray-300 hover:text-white transition-colors">
                      视频教程
                    </a>
                  </li>
                </ul>
              </div>

              {/* 技术支持 */}
              <div>
                <h4 className="text-lg font-semibold mb-4">技术支持</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-2">📞</span>
                    <span>服务热线：400-123-4567</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">📧</span>
                    <span>技术支持：support@company.com</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">📧</span>
                    <span>销售咨询：sales@company.com</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🕒</span>
                    <span>工作日 9:00-18:00</span>
                  </li>
                </ul>
              </div>

              {/* 关注我们 */}
              <div>
                <h4 className="text-lg font-semibold mb-4">关注我们</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                    微
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                    博
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                    领
                  </a>
                </div>
                <div className="mt-6">
                  <div className="text-gray-300 mb-2">订阅我们的新闻</div>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="请输入邮箱"
                      className="flex-1 px-4 py-2 text-gray-800 rounded-l-lg focus:outline-none"
                    />
                    <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
                      订阅
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 分隔线 */}
            <div className="mt-12 pt-8 border-t border-gray-700"></div>

            {/* 底部链接 */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-6">
              <div className="text-gray-400 text-sm">
                地址：北京市海淀区xxx路xxx号科技大厦A座
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  隐私政策
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  使用条款
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  网站地图
                </a>
                <a href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                  联系我们
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}