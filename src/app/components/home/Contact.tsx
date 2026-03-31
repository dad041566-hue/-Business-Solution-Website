import { useState, FormEvent } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    company: '',
    manager: '',
    phone: '',
    email: '',
    industry: '',
    services: [] as string[],
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        company: '',
        manager: '',
        phone: '',
        email: '',
        industry: '',
        services: [],
        message: '',
      });
    }, 3000);
  };

  const handleCheckboxChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(value)
        ? prev.services.filter((s) => s !== value)
        : [...prev.services, value],
    }));
  };

  const serviceLabels: { [key: string]: string } = {
    'live-commerce': '1인 라이브커머스',
    'qr-sales': 'QR테이블 주문 · 매출 연동',
    'erp': 'ERP 시스템',
    'admin': '관리자 시스템',
    'maintenance': '유지보수 / 고도화',
  };

  return (
    <section className="relative py-12 md:py-24 bg-gradient-to-b from-black via-blue-950/20 to-black overflow-hidden" id="contact">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full backdrop-blur-sm mb-4 md:mb-6">
            <span className="text-xs md:text-sm font-semibold text-blue-300">GET IN TOUCH</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black mb-3 md:mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              지금 바로
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              무료 상담 신청하세요
            </span>
          </h2>
          <p className="text-sm md:text-xl text-gray-400">
            비즈 솔루션은 상담을 통해 가장 적합한 구축 방향을 제안합니다.
          </p>
        </div>

        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-2xl">
          {isSubmitted ? (
            <div className="text-center py-8 md:py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-green-600 rounded-full mb-4 md:mb-6">
                <CheckCircle className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">문의가 접수되었습니다!</h3>
              <p className="text-base md:text-xl text-gray-400">
                빠른 시일 내에 연락드리겠습니다.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="company" className="block text-xs md:text-sm font-bold text-white mb-2">
                    회사명 *
                  </label>
                  <input
                    type="text"
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/10 border border-white/20 rounded-lg md:rounded-xl text-sm md:text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="회사명을 입력하세요"
                  />
                </div>

                <div>
                  <label htmlFor="manager" className="block text-xs md:text-sm font-bold text-white mb-2">
                    담당자명 *
                  </label>
                  <input
                    type="text"
                    id="manager"
                    required
                    value={formData.manager}
                    onChange={(e) => setFormData({ ...formData, manager: e.target.value })}
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/10 border border-white/20 rounded-lg md:rounded-xl text-sm md:text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="담당자명을 입력하세요"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs md:text-sm font-bold text-white mb-2">
                    연락처 *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/10 border border-white/20 rounded-lg md:rounded-xl text-sm md:text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="연락처를 입력하세요"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs md:text-sm font-bold text-white mb-2">
                    이메일 *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/10 border border-white/20 rounded-lg md:rounded-xl text-sm md:text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="이메일을 입력하세요"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="industry" className="block text-xs md:text-sm font-bold text-white mb-2">
                  업종 *
                </label>
                <input
                  type="text"
                  id="industry"
                  required
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/10 border border-white/20 rounded-lg md:rounded-xl text-sm md:text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="예: 외식업, 유통, 브랜드"
                />
              </div>

              <fieldset>
                <legend className="block text-xs md:text-sm font-bold text-white mb-3">
                  관심 서비스
                </legend>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                  {[
                    { value: 'live-commerce', label: '1인 라이브커머스' },
                    { value: 'qr-sales', label: 'QR테이블 주문 · 매출 연동' },
                    { value: 'erp', label: 'ERP 시스템' },
                    { value: 'admin', label: '관리자 시스템' },
                    { value: 'maintenance', label: '유지보수 / 고도화' },
                  ].map((service) => (
                    <label
                      key={service.value}
                      className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-white/5 border border-white/10 rounded-lg md:rounded-xl cursor-pointer hover:bg-white/10 hover:border-blue-400/50 transition-all"
                    >
                      <input
                        type="checkbox"
                        value={service.value}
                        checked={formData.services.includes(service.value)}
                        onChange={() => handleCheckboxChange(service.value)}
                        className="w-4 h-4 md:w-5 md:h-5 text-blue-600 bg-white/10 border-white/20 rounded focus:ring-2 focus:ring-blue-500"
                      />
                      <span className="text-xs md:text-base text-gray-300">{service.label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div>
                <label htmlFor="message" className="block text-xs md:text-sm font-bold text-white mb-2">
                  문의 내용
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/10 border border-white/20 rounded-lg md:rounded-xl text-sm md:text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="필요한 기능이나 현재 운영 상황을 입력해주세요"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full relative group flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-5 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 text-white text-sm md:text-lg font-bold rounded-lg md:rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
              >
                <span className="relative z-10">무료 상담 신청하기</span>
                <Send className="w-4 h-4 md:w-5 md:h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}