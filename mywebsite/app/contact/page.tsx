'use client'

import { useState } from 'react'

// 部门联系方式
const departments = [
  { 
    name: '销售咨询', 
    email: 'sales@company.com', 
    phone: '400-111-2222',
    description: '产品报价、购买咨询、商务合作',
    icon: '💰',
    color: 'bg-blue-100 text-blue-600'
  },
  { 
    name: '技术支持', 
    email: 'support@company.com', 
    phone: '400-222-3333',
    description: '技术问题、使用指导、故障排查',
    icon: '🔧',
    color: 'bg-green-100 text-green-600'
  },
  { 
    name: '市场合作', 
    email: 'marketing@company.com', 
    phone: '400-333-4444',
    description: '市场活动、品牌合作、媒体联系',
    icon: '📢',
    color: 'bg-purple-100 text-purple-600'
  },
  { 
    name: '人力资源', 
    email: 'hr@company.com', 
    phone: '400-444-5555',
    description: '招聘咨询、人才合作、职业发展',
    icon: '👥',
    color: 'bg-orange-100 text-orange-600'
  }
]

// 分支机构
const branchOffices = [
  { 
    city: '北京总部', 
    address: '北京市海淀区中关村科技园创新大厦A座12层', 
    phone: '010-12345678',
    email: 'beijing@company.com',
    hours: '周一至周五 9:00-18:00',
    manager: '张经理',
    icon: '🏢'
  },
  { 
    city: '上海分公司', 
    address: '上海市浦东新区张江高科技园区科技路888号', 
    phone: '021-87654321',
    email: 'shanghai@company.com',
    hours: '周一至周五 9:00-18:00',
    manager: '王经理',
    icon: '🏙️'
  },
  { 
    city: '深圳分公司', 
    address: '深圳市南山区科技园南区腾讯大厦旁创新中心', 
    phone: '0755-12345678',
    email: 'shenzhen@company.com',
    hours: '周一至周五 9:00-18:00',
    manager: '李经理',
    icon: '🌉'
  },
  { 
    city: '成都办事处', 
    address: '成都市高新区天府软件园G区5栋3层', 
    phone: '028-87654321',
    email: 'chengdu@company.com',
    hours: '周一至周五 9:00-17:30',
    manager: '刘经理',
    icon: '🐼'
  }
]

// 联系表单类型
interface ContactForm {
  name: string
  email: string
  phone: string
  company: string
  department: string
  subject: string
  message: string
  subscribe: boolean
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    company: '',
    department: '',
    subject: '',
    message: '',
    subscribe: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // 模拟提交过程
    setTimeout(() => {
      console.log('表单提交:', formData)
      setSubmitted(true)
      setIsSubmitting(false)
      
      // 3秒后重置提交状态
      setTimeout(() => setSubmitted(false), 3000)
      
      // 重置表单
      setFormData({
        name: '', email: '', phone: '', company: '', 
        department: '', subject: '', message: '', 
        subscribe: false
      })
    }, 1500)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  return (
    <div className="py-8">
      {/* 页面标题 */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">联系我们</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          我们期待与您沟通，为您提供最专业的服务和支持
        </p>
      </div>

      {/* 主要联系方式 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div className="lg:col-span-1 space-y-8">
          {/* 总部信息 */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                🏢
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">总部信息</h3>
                <p className="text-gray-600">我们的核心办公地点</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-blue-600 mr-3 text-xl">📍</div>
                <div>
                  <div className="font-semibold text-gray-700">办公地址</div>
                  <div className="text-gray-600">北京市海淀区中关村科技园创新大厦A座12层</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-blue-600 mr-3 text-xl">📞</div>
                <div>
                  <div className="font-semibold text-gray-700">总机电话</div>
                  <div className="text-gray-600">010-12345678</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-blue-600 mr-3 text-xl">📧</div>
                <div>
                  <div className="font-semibold text-gray-700">公共邮箱</div>
                  <div className="text-gray-600">info@company.com</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-blue-600 mr-3 text-xl">🕒</div>
                <div>
                  <div className="font-semibold text-gray-700">工作时间</div>
                  <div className="text-gray-600">周一至周五 9:00-18:00</div>
                </div>
              </div>
            </div>

            {/* 地图占位 */}
            <div className="mt-8">
              <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🗺️</div>
                  <div className="text-gray-600">地图位置</div>
                  <button className="mt-2 text-blue-600 hover:text-blue-800 text-sm">
                    查看详细路线 →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 部门联系方式 */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">📋 部门联系方式</h3>
            <div className="space-y-6">
              {departments.map(dept => (
                <div key={dept.name} className="border-l-4 border-blue-500 pl-4 py-3 hover:bg-blue-50 transition-colors rounded-r-lg">
                  <div className="flex items-center mb-2">
                    <div className={`w-10 h-10 ${dept.color} rounded-lg flex items-center justify-center text-xl mr-3`}>
                      {dept.icon}
                    </div>
                    <div>
                      <div className="font-bold text-gray-800">{dept.name}</div>
                      <div className="text-sm text-gray-600">{dept.description}</div>
                    </div>
                  </div>
                  <div className="text-sm space-y-1 ml-13">
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2">📞</span>
                      <span>{dept.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2">📧</span>
                      <span>{dept.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 联系表单 */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                📝
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800">在线留言</h2>
                <p className="text-gray-600">填写表格，我们将尽快回复您</p>
              </div>
            </div>
            
            {submitted && (
              <div className="mb-8 p-4 bg-green-100 text-green-700 rounded-xl border border-green-200">
                <div className="flex items-center">
                  <div className="text-2xl mr-3">✅</div>
                  <div>
                    <div className="font-semibold">留言提交成功！</div>
                    <div className="text-sm">感谢您的留言，我们的工作人员会在24小时内与您联系。</div>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* 基本信息 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    姓名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="请输入您的姓名"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    邮箱 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    联系电话
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="请输入您的电话号码"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    公司名称
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="请输入您的公司名称"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    联系部门 <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">请选择联系部门</option>
                    <option value="sales">销售咨询</option>
                    <option value="support">技术支持</option>
                    <option value="marketing">市场合作</option>
                    <option value="hr">人力资源</option>
                    <option value="general">综合咨询</option>
                    <option value="other">其他</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    主题 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="请输入留言主题"
                  />
                </div>
              </div>

              {/* 留言内容 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  留言内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="请详细描述您的需求或问题，包括：\n• 具体需求\n• 项目背景\n• 期望时间\n• 预算范围\n• 其他要求"
                />
                <div className="mt-2 text-sm text-gray-500">
                  请尽可能详细描述，有助于我们更好地为您服务
                </div>
              </div>

              {/* 订阅选项 */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="subscribe"
                  checked={formData.subscribe}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                  id="subscribe"
                />
                <label htmlFor="subscribe" className="ml-3 text-gray-700">
                  订阅产品更新、技术资讯和公司动态
                </label>
              </div>

              {/* 隐私政策 */}
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600">
                  提交此表单即表示您同意我们的 <a href="#" className="text-blue-600 hover:text-blue-800">隐私政策</a>。我们会妥善保护您的个人信息，仅用于为您提供更好的服务。
                </div>
              </div>

              {/* 提交按钮 */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-12 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium text-lg disabled:opacity-50"
                >
                  {isSubmitting ? '提交中...' : '提交留言'}
                </button>
                <div className="mt-4 text-sm text-gray-500">
                  通常我们会在24小时内回复您的留言
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* 分支机构 */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">🏢 分支机构</h2>
          <p className="text-xl text-gray-600">我们在全国多个城市设有分支机构</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {branchOffices.map(office => (
            <div key={office.city} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">{office.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{office.city}</h3>
                    <div className="text-gray-600">{office.manager}</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="font-semibold text-gray-700 mb-1">地址</div>
                    <div className="text-gray-600">{office.address}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-700 mb-1">电话</div>
                    <div className="text-gray-600">{office.phone}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-700 mb-1">邮箱</div>
                    <div className="text-gray-600">{office.email}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-700 mb-1">工作时间</div>
                    <div className="text-gray-600">{office.hours}</div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 flex gap-4">
                  <button className="flex-1 bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium">
                    拨打电话
                  </button>
                  <button className="flex-1 border border-blue-600 text-blue-600 py-2.5 rounded-lg hover:bg-blue-50 text-sm font-medium">
                    查看地图
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 社交媒体和快速联系 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 社交媒体 */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6">🌐 关注我们</h3>
          <p className="mb-8 opacity-90">
            关注我们的社交媒体，获取最新产品信息和技术动态
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <a href="#" className="bg-white/20 hover:bg-white/30 rounded-xl p-4 text-center transition-colors">
              <div className="text-3xl mb-2">👥</div>
              <div className="font-semibold">微信公众号</div>
              <div className="text-sm opacity-90 mt-1">扫码关注</div>
            </a>
            <a href="#" className="bg-white/20 hover:bg-white/30 rounded-xl p-4 text-center transition-colors">
              <div className="text-3xl mb-2">📱</div>
              <div className="font-semibold">企业微信</div>
              <div className="text-sm opacity-90 mt-1">添加客服</div>
            </a>
            <a href="#" className="bg-white/20 hover:bg-white/30 rounded-xl p-4 text-center transition-colors">
              <div className="text-3xl mb-2">📢</div>
              <div className="font-semibold">新浪微博</div>
              <div className="text-sm opacity-90 mt-1">@公司名称</div>
            </a>
            <a href="#" className="bg-white/20 hover:bg-white/30 rounded-xl p-4 text-center transition-colors">
              <div className="text-3xl mb-2">💼</div>
              <div className="font-semibold">LinkedIn</div>
              <div className="text-sm opacity-90 mt-1">商务合作</div>
            </a>
          </div>
        </div>

        {/* 快速联系 */}
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6">⚡ 快速联系</h3>
          <p className="mb-8 opacity-90">
            需要即时帮助？选择最适合您的方式联系我们
          </p>
          
          <div className="space-y-4">
            <a 
              href="tel:4001234567" 
              className="flex items-center bg-white/20 hover:bg-white/30 p-4 rounded-xl transition-colors"
            >
              <div className="text-2xl mr-4">📞</div>
              <div className="flex-1">
                <div className="font-bold text-lg">拨打服务热线</div>
                <div className="opacity-90">400-123-4567</div>
              </div>
              <div>→</div>
            </a>
            <a 
              href="mailto:support@company.com" 
              className="flex items-center bg-white/20 hover:bg-white/30 p-4 rounded-xl transition-colors"
            >
              <div className="text-2xl mr-4">📧</div>
              <div className="flex-1">
                <div className="font-bold text-lg">发送邮件</div>
                <div className="opacity-90">support@company.com</div>
              </div>
              <div>→</div>
            </a>
            <a 
              href="/support" 
              className="flex items-center bg-white/20 hover:bg-white/30 p-4 rounded-xl transition-colors"
            >
              <div className="text-2xl mr-4">💬</div>
              <div className="flex-1">
                <div className="font-bold text-lg">在线客服</div>
                <div className="opacity-90">即时沟通，快速响应</div>
              </div>
              <div>→</div>
            </a>
          </div>
        </div>
      </div>

      {/* 联系信息统计 */}
      <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600">24/7</div>
            <div className="text-gray-600">技术支持</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600">30min</div>
            <div className="text-gray-600">平均响应时间</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600">98.5%</div>
            <div className="text-gray-600">问题解决率</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600">2000+</div>
            <div className="text-gray-600">服务客户</div>
          </div>
        </div>
      </div>
    </div>
  )
}