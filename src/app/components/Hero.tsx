export default function Hero() {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <p className="text-sm md:text-base text-blue-600 font-semibold tracking-wide">
              1인 라이브커머스 · QR테이블 주문 · ERP 통합 구축
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              주문부터 매출 연동,
              <br />
              ERP 운영까지 하나로 연결합니다
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              비즈 솔루션은 1인 라이브커머스 구축, QR테이블 주문·매출 연동 통합 시스템,
              ERP/관리자 시스템까지 판매와 운영을 하나로 연결하는 실무형 비즈니스 솔루션을 제공합니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                서비스 상담 신청
              </a>
              <a
                href="#solutions"
                className="inline-block px-8 py-4 bg-white text-blue-600 text-center border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                솔루션 보기
              </a>
            </div>

            <ul className="flex flex-wrap gap-3" aria-label="핵심 키워드">
              {[
                '1인 라이브커머스',
                'QR테이블 주문',
                '매출 연동',
                'ERP 시스템',
                '통합 운영관리',
                '맞춤 구축',
              ].map((badge) => (
                <li
                  key={badge}
                  className="px-4 py-2 bg-white border border-blue-200 text-blue-700 rounded-full text-sm"
                >
                  {badge}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual Card */}
          <div aria-label="서비스 시각 영역">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl border border-gray-100">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                통합 운영 구조
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-lg text-gray-800">Live Commerce</span>
                </li>
                <li className="flex items-center gap-3 p-4 bg-indigo-50 rounded-lg">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-lg text-gray-800">QR Table Order + Sales Sync</span>
                </li>
                <li className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-lg text-gray-800">ERP / Admin Dashboard</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
