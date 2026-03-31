import { Video, QrCode, Database, CheckCircle, Zap } from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      tag: 'CORE 01',
      icon: Video,
      title: '1인 라이브커머스 솔루션',
      description:
        '1인 진행 환경에서도 효율적인 상품 소개와 주문 유도가 가능하도록 라이브 판매 구조와 운영 기능을 제공합니다.',
      features: [
        '라이브 상품 노출 구조',
        '실시간 주문 유도 설계',
        '주문/결제 데이터 연계',
        '관리자 상품 운영 기능',
      ],
      gradient: 'from-blue-600 to-cyan-600',
      featured: true,
    },
    {
      tag: 'CORE 02',
      icon: QrCode,
      title: 'QR테이블 주문 · 매출 연동',
      description:
        '테이블별 QR 주문부터 주문 접수, 매출 집계, 운영 데이터 관리까지 매장 운영에 필요한 핵심 기능을 하나의 흐름으로 연결합니다.',
      features: [
        '테이블별 QR 주문',
        '메뉴/옵션 선택 및 주문 접수',
        '주문 현황 및 매출 데이터 연동',
        '운영 효율 및 회전율 개선',
      ],
      gradient: 'from-purple-600 to-pink-600',
      featured: true,
    },
    {
      tag: 'CORE 03',
      icon: Database,
      title: 'ERP 시스템 구축',
      description:
        '주문, 상품, 회원, 매출, 정산 데이터를 통합 관리할 수 있도록 기업 맞춤형 ERP/관리자 시스템을 구축합니다.',
      features: [
        '주문/매출 통합 관리',
        '상품/회원 데이터 관리',
        '정산 및 운영 프로세스 효율화',
        '관리자 대시보드 구성',
      ],
      gradient: 'from-teal-600 to-green-600',
      featured: false,
    },
  ];

  return (
    <section className="relative py-12 md:py-24 bg-black overflow-hidden" id="solutions">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full backdrop-blur-sm mb-4 md:mb-6">
            <Zap className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />
            <span className="text-xs md:text-sm font-semibold text-blue-300">OUR SOLUTIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              비즈 솔루션
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              핵심 서비스
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${solution.gradient} opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500 rounded-3xl`}></div>
                <div className={`relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-2 rounded-2xl md:rounded-3xl p-6 md:p-8 transition-all duration-300 ${
                  solution.featured
                    ? 'border-blue-400/50 shadow-2xl shadow-blue-500/20'
                    : 'border-white/20 hover:border-blue-400/50'
                }`}>
                  {solution.featured && (
                    <div className="absolute -top-3 right-4 md:right-8 px-3 md:px-4 py-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold rounded-full shadow-lg">
                      BEST
                    </div>
                  )}

                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className={`inline-flex items-center justify-center w-10 h-10 md:w-14 md:h-14 bg-gradient-to-r ${solution.gradient} rounded-xl md:rounded-2xl shadow-lg`}>
                      <Icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                    </div>
                    <div className={`px-2 md:px-3 py-1 bg-gradient-to-r ${solution.gradient} text-white text-xs md:text-sm font-bold rounded-full`}>
                      {solution.tag}
                    </div>
                  </div>

                  <h3 className="text-lg md:text-2xl font-bold text-white mb-3 md:mb-4 leading-tight">
                    {solution.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6 leading-relaxed">{solution.description}</p>

                  <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 md:gap-3">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-xs md:text-base text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`block text-center py-2 md:py-3 bg-gradient-to-r ${solution.gradient} text-white text-sm md:text-base font-bold rounded-lg md:rounded-xl hover:shadow-xl transition-all duration-300`}
                  >
                    도입 문의하기
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}