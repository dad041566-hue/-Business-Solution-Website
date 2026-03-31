import { useState, FormEvent } from 'react';

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
    console.log('Form submitted:', formData);
  };

  const handleCheckboxChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(value)
        ? prev.services.filter((s) => s !== value)
        : [...prev.services, value],
    }));
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-indigo-700" id="contact">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="mb-8">
              <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-3">
                CONTACT
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                귀사 운영 방식에 맞는 솔루션을 제안드립니다
              </h2>
              <p className="text-lg text-gray-600">
                업종과 운영 구조에 따라 필요한 기능은 달라집니다.
                비즈 솔루션은 상담을 통해 가장 적합한 구축 방향을 제안합니다.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                  회사명
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="회사명을 입력하세요"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="manager" className="block text-sm font-semibold text-gray-700 mb-2">
                  담당자명
                </label>
                <input
                  type="text"
                  id="manager"
                  name="manager"
                  placeholder="담당자명을 입력하세요"
                  value={formData.manager}
                  onChange={(e) => setFormData({ ...formData, manager: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  연락처
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="연락처를 입력하세요"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="이메일을 입력하세요"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="industry" className="block text-sm font-semibold text-gray-700 mb-2">
                  업종
                </label>
                <input
                  type="text"
                  id="industry"
                  name="industry"
                  placeholder="예: 외식업, 유통, 브랜드"
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <fieldset>
                <legend className="block text-sm font-semibold text-gray-700 mb-3">
                  관심 서비스
                </legend>
                <div className="space-y-3">
                  {[
                    { value: 'live-commerce', label: '1인 라이브커머스' },
                    { value: 'qr-sales', label: 'QR테이블 주문 · 매출 연동' },
                    { value: 'erp', label: 'ERP 시스템' },
                    { value: 'admin', label: '관리자 시스템' },
                    { value: 'maintenance', label: '유지보수 / 고도화' },
                  ].map((service) => (
                    <label key={service.value} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="service"
                        value={service.value}
                        checked={formData.services.includes(service.value)}
                        onChange={() => handleCheckboxChange(service.value)}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                      />
                      <span className="text-gray-700">{service.label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  문의 내용
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="필요한 기능이나 현재 운영 상황을 입력해주세요"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                문의 접수하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
