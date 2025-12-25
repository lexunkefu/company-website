'use client'

import { useState } from 'react'

// FAQ数据
const faqCategories = ['常见问题', '产品使用', '技术支持', '售后服务', '购买咨询', '其他问题']

const faqData = {
  '常见问题': [
    {
      q: '如何购买贵公司的产品？',
      a: '您可以通过以下几种方式购买我们的产品：\n1. 官网在线咨询购买\n2. 拨打销售热线：400-123-4567\n3. 联系当地代理商\n4. 发送邮件至 sales@company.com\n我们的销售团队会在24小时内与您联系。'
    },
    {
      q: '产品的保修期是多久？',
      a: '所有产品均提供1年质保服务。部分高端产品提供延长保修选项。在保修期内，因产品质量问题导致的故障，我们提供免费维修或更换服务。'
    },
    {
      q: '支持货到付款吗？',
      a: '是的，我们支持货到付款服务。具体支付方式包括：\n• 银行转账\n• 在线支付（支付宝、微信支付）\n• 对公账户\n• 信用卡支付\n• 货到付款（部分区域）'
    }
  ],
  '产品使用': [
    {
      q: '设备安装需要注意什么？',
      a: '设备安装注意事项：\n1. 请仔细阅读用户手册中的安装指南\n2. 确保电源电压符合设备要求\n3. 安装环境应干燥、通风、无强磁场干扰\n4. 建议由专业技术人员进行安装\n5. 安装完成后进行功能测试'
    },
    {
      q: '如何升级设备固件？',
      a: '固件升级步骤：\n1. 在下载中心获取最新固件文件\n2. 使用专用升级工具连接设备\n3. 按照升级向导完成操作\n4. 升级过程中请勿断电\n5. 升级完成后重启设备\n建议在技术人员指导下进行。'
    }
  ],
  '技术支持': [
    {
      q: '技术支持的工作时间？',
      a: '我们的技术支持服务时间为：\n• 周一至周五：9:00-18:00\n• 周六：9:00-17:00\n• 紧急技术支持：7×24小时\n紧急问题可拨打：400-888-9999'
    },
    {
      q: '如何获取远程技术支持？',
      a: '远程技术支持获取方式：\n1. 通过官网在线客服预约\n2. 拨打技术支持热线\n3. 发送邮件描述问题\n4. 提供远程访问权限（可选）\n我们的工程师会在2小时内响应。'
    }
  ]
}

// 联系方式数据
const contactMethods = [
  {
    title: '客服热线',
    description: '专业客服团队为您服务',
    details: '400-123-4567',
    icon: '📞',
    color: 'bg-blue-100 text-blue-600',
    hours: '周一至周日 9:00-21:00',
    action: 'tel:4001234567'
  },
  {
    title: '技术支持邮箱',
    description: '技术问题邮件支持',
    details: 'support@company.com',
    icon: '📧',
    color: 'bg-green-100 text-green-600',
    response: '24小时内回复',
    action: 'mailto:support@company.com'
  },
  {
    title: '在线客服',
    description: '实时在线沟通',
    details: '点击开始对话',
    icon: '💬',
    color: 'bg-purple-100 text-purple-600',
    status: '当前在线',
    action: '#chat'
  },
  {
    title: '微信客服',
    description: '扫码添加企业微信',
    details: '扫描二维码',
    icon: '📱',
    color: 'bg-green-100 text-green-600',
    qrCode: true,
    action: '#wechat'
  }
]

// 服务流程
const serviceProcess = [
  { step: 1, title: '问题反馈', description: '通过电话、邮件或在线表单提交问题' },
  { step: 2, title: '技术响应', description: '工程师1小时内联系您，了解详细情况' },
  { step: 3, title: '问题诊断', description: '远程或现场诊断问题，制定解决方案' },
  { step: 4, title: '方案实施', description: '执行解决方案，确保问题得到解决' },
  { step: 5, title: '服务确认', description: '确认问题解决，收集服务反馈' }
]

export default function SupportPage() {
  const [activeCategory, setActiveCategory] = useState('常见问题')
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)
  const [showChat, setShowChat] = useState(false)
  const [ticketForm, setTicketForm] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    issueType: '',
    description: '',
    priority: 'normal',
    attachment: null as File | null
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmitTicket = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // 模拟提交过程
    setTimeout(() => {
      console.log('提交工单:', ticketForm)
      alert('工单提交成功！我们的技术支持人员会在24小时内与您联系。')
      setTicketForm({
        name: '', email: '', phone: '', product: '', 
        issueType: '', description: '', priority: 'normal',
        attachment: null
      })
      setIsSubmitting(false)
    }, 1500)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setTicketForm({...ticketForm, attachment: e.target.files[0]})
    }
  }

  const currentFAQs = faqData[activeCategory as keyof typeof faqData] || []

  return (
    <div className="py-8">
      {/* 页面标题 */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">客服中心</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          我们随时为您提供专业的技术支持和客户服务
        </p>
      </div>

      {/* 联系卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {contactMethods.map((method, index) => (
          <div 
            key={index} 
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-100"
          >
            <div className={`w-16 h-16 ${method.color} rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4`}>
              {method.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{method.title}</h3>
            <p className="text-gray-600 mb-3 text-sm">{method.description}</p>
            <div className="font-semibold text-lg mb-3">{method.details}</div>
            
            {method.hours && (
              <div className="text-sm text-gray-500 mb-3">{method.hours}</div>
            )}
            {method.response && (
              <div className="text-sm text-green-600 mb-3">{method.response}</div>
            )}
            {method.status && (
              <div className="text-sm text-green-600 mb-4">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                {method.status}
              </div>
            )}
            
            {method.qrCode ? (
              <div className="mt-4">
                <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto flex items-center justify-center mb-2">
                  <span className="text-gray-500">微信二维码</span>
                </div>
                <div className="text-xs text-gray-500">扫码添加客服</div>
              </div>
            ) : (
              <a 
                href={method.action}
                className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                立即联系
              </a>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 左侧：FAQ和工单提交 */}
        <div className="lg:col-span-2 space-y-8">
          {/* FAQ区域 */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800">常见问题解答</h2>
              <div className="text-gray-600">
                已解答 <span className="font-bold text-blue-600">156</span> 个问题
              </div>
            </div>
            
            {/* FAQ分类 */}
            <div className="flex flex-wrap gap-3 mb-8">
              {faqCategories.map(category => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category)
                    setOpenFaqIndex(0)
                  }}
                  className={`px-5 py-2.5 rounded-full transition-all ${activeCategory === category 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* FAQ列表 */}
            <div className="space-y-4">
              {currentFAQs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 flex justify-between items-center transition-colors"
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  >
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-4 font-bold">
                        Q
                      </div>
                      <span className="text-lg font-semibold">{faq.q}</span>
                    </div>
                    <span className="text-2xl text-gray-500 transition-transform duration-300">
                      {openFaqIndex === index ? '−' : '+'}
                    </span>
                  </button>
                  {openFaqIndex === index && (
                    <div className="p-6 bg-white">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mr-4 font-bold flex-shrink-0">
                          A
                        </div>
                        <div className="text-gray-700 whitespace-pre-line">{faq.a}</div>
                      </div>
                      <div className="mt-6 flex gap-4">
                        <button className="text-blue-600 hover:text-blue-800 text-sm">
                          👍 这个回答有帮助
                        </button>
                        <button className="text-gray-500 hover:text-gray-700 text-sm">
                          👎 没有帮助
                        </button>
                        <button className="text-gray-500 hover:text-gray-700 text-sm">
                          💬 需要更多帮助
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* 没有FAQ的情况 */}
            {currentFAQs.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🤔</div>
                <h3 className="text-xl font-semibold mb-2">暂无相关问题</h3>
                <p className="text-gray-600 mb-6">您可以尝试其他分类或直接提交工单</p>
              </div>
            )}

            {/* 搜索更多问题 */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="relative">
                <input
                  type="text"
                  placeholder="搜索更多问题..."
                  className="w-full px-6 py-3 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <div className="absolute left-4 top-3 text-gray-400">
                  🔍
                </div>
                <button className="absolute right-2 top-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                  搜索
                </button>
              </div>
            </div>
          </div>

          {/* 提交工单表单 */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">提交技术支持工单</h2>
            
            <form onSubmit={handleSubmitTicket} className="space-y-8">
              {/* 基本信息 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    姓名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={ticketForm.name}
                    onChange={(e) => setTicketForm({...ticketForm, name: e.target.value})}
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
                    value={ticketForm.email}
                    onChange={(e) => setTicketForm({...ticketForm, email: e.target.value})}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    电话
                  </label>
                  <input
                    type="tel"
                    value={ticketForm.phone}
                    onChange={(e) => setTicketForm({...ticketForm, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="请输入您的电话号码"
                  />
                </div>
              </div>

              {/* 问题信息 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    产品型号
                  </label>
                  <input
                    type="text"
                    value={ticketForm.product}
                    onChange={(e) => setTicketForm({...ticketForm, product: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="例如：智能设备A-2024"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    问题类型 <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={ticketForm.issueType}
                    onChange={(e) => setTicketForm({...ticketForm, issueType: e.target.value})}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">选择问题类型</option>
                    <option value="technical">技术问题</option>
                    <option value="usage">使用问题</option>
                    <option value="bug">软件缺陷</option>
                    <option value="hardware">硬件故障</option>
                    <option value="purchase">购买咨询</option>
                    <option value="warranty">保修服务</option>
                    <option value="other">其他</option>
                  </select>
                </div>
              </div>

              {/* 优先级和附件 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    问题优先级
                  </label>
                  <select
                    value={ticketForm.priority}
                    onChange={(e) => setTicketForm({...ticketForm, priority: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="low">低 - 一般咨询</option>
                    <option value="normal">中 - 普通问题</option>
                    <option value="high">高 - 影响使用</option>
                    <option value="urgent">紧急 - 生产中断</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    附件上传
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <div className="text-4xl mb-2">📎</div>
                      <div className="text-gray-600">点击或拖拽上传文件</div>
                      <div className="text-sm text-gray-500 mt-1">支持图片、日志文件等，最大10MB</div>
                    </label>
                    {ticketForm.attachment && (
                      <div className="mt-4 text-sm text-blue-600">
                        已选择: {ticketForm.attachment.name}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* 问题描述 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  问题详细描述 <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={ticketForm.description}
                  onChange={(e) => setTicketForm({...ticketForm, description: e.target.value})}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="请详细描述您遇到的问题，包括：\n• 问题现象\n• 发生时间\n• 复现步骤\n• 期望结果\n• 已尝试的解决方法"
                />
                <div className="mt-2 text-sm text-gray-500">
                  请尽可能详细描述问题，有助于我们更快为您解决
                </div>
              </div>

              {/* 提交按钮 */}
              <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                <div className="text-gray-600 text-sm">
                  提交后，您将收到确认邮件，我们的工程师会在24小时内回复
                </div>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setTicketForm({
                      name: '', email: '', phone: '', product: '', 
                      issueType: '', description: '', priority: 'normal',
                      attachment: null
                    })}
                    className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium"
                  >
                    重置表单
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium disabled:opacity-50"
                  >
                    {isSubmitting ? '提交中...' : '提交工单'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* 右侧：服务信息和流程 */}
        <div className="space-y-8">
          {/* 服务承诺 */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">🔧 服务承诺</h3>
            <ul className="space-y-4">
              {[
                '7×24小时紧急技术支持',
                '1小时内响应客户问题',
                '专业工程师一对一服务',
                '远程诊断与快速解决',
                '定期回访与服务优化',
                '满意度100%保障'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 服务流程 */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">🔄 服务流程</h3>
            <div className="space-y-6">
              {serviceProcess.map((step) => (
                <div key={step.step} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                      {step.step}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{step.title}</h4>
                    <p className="text-gray-600 text-sm mt-1">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 紧急支持 */}
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">🚨 紧急支持</h3>
            <p className="mb-6 opacity-90">
              对于生产环境紧急问题，请立即联系我们，我们将优先处理
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="text-2xl mr-3">📞</div>
                <div>
                  <div className="font-bold text-2xl">400-888-9999</div>
                  <div className="text-sm opacity-90">24小时紧急热线</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-2xl mr-3">📧</div>
                <div>
                  <div className="font-bold">emergency@company.com</div>
                  <div className="text-sm opacity-90">紧急问题邮箱</div>
                </div>
              </div>
            </div>
            <button className="mt-6 w-full bg-white text-red-600 py-3 rounded-lg font-bold hover:bg-gray-100">
              立即拨打紧急热线
            </button>
          </div>

          {/* 服务统计 */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">📊 服务数据</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold">99.2%</div>
                <div className="text-sm opacity-90">问题解决率</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">2.3h</div>
                <div className="text-sm opacity-90">平均响应时间</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">98.7%</div>
                <div className="text-sm opacity-90">客户满意度</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">1500+</div>
                <div className="text-sm opacity-90">服务客户</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 在线客服浮窗 */}
      {showChat && (
        <div className="fixed bottom-6 right-6 w-96 bg-white rounded-2xl shadow-2xl z-50">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                💬
              </div>
              <div>
                <div className="font-bold">在线客服</div>
                <div className="text-sm opacity-90">正在为您服务</div>
              </div>
            </div>
            <button 
              onClick={() => setShowChat(false)}
              className="text-white hover:text-gray-200 text-2xl"
            >
              ✕
            </button>
          </div>
          <div className="p-4 h-80 overflow-y-auto">
            <div className="text-center py-12">
              <div className="text-6xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-2">正在连接客服...</h3>
              <p className="text-gray-600">请稍候，客服将很快为您服务</p>
            </div>
          </div>
          <div className="border-t p-4">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="输入您的问题..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                发送
              </button>
            </div>
            <div className="text-xs text-gray-500 mt-2 text-center">
              在线时间：周一至周日 9:00-21:00
            </div>
          </div>
        </div>
      )}

      {/* 底部提示 */}
      <div className="mt-12 text-center">
        <button
          onClick={() => setShowChat(true)}
          className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl hover:shadow-lg transition-shadow"
        >
          <span className="text-2xl">💬</span>
          <div className="text-left">
            <div className="font-bold">需要即时帮助？</div>
            <div className="text-sm opacity-90">点击开始在线对话</div>
          </div>
        </button>
      </div>
    </div>
  )
}