import { TrendingUp, Zap, BarChart3 } from 'lucide-react';

export default function Cases() {
  const cases = [
    {
      icon: Zap,
      title: 'QR 주문 기반 매장 운영 자동화',
      description: '테이블 주문부터 매출 데이터 확인까지 하나의 흐름으로 구성',
      result: '인건비 40% 절감',
      gradient: 'from-orange-600 to-red-600',
    },
    {
      icon: TrendingUp,
      title: '라이브 판매와 주문 연동 구조 구축',
      description: '1인 라이브 진행 환경에 적합한 판매 흐름과 관리자 기능 설계',
      result: '매출 300% 증가',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      icon: BarChart3,
      title: 'ERP 기반 통합 운영 관리',
      description: '상품, 회원, 주문, 매출 데이터를 한 화면에서 관리할 수 있도록 구성',
      result: '업무시간 60% 단축',
      gradient: 'from-teal-600 to-green-600',
    },
  ];

  return (
    <section className="relative py-12 md:py-24 bg-gradient-to-b from-black via-green-950/10 to-black overflow-hidden" id="cases">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-block px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full backdrop-blur-sm mb-4 md:mb-6">
            <span className="text-xs md:text-sm font-semibold text-green-300">SUCCESS STORIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              실제 구축 사례로 보는
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              압도적인 성과
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {cases.map((caseItem, index) => {
            const Icon = caseItem.icon;
            return (
              <div key={index} className="group relative">
                <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl md:rounded-3xl p-6 md:p-8 hover:border-green-400/50 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${caseItem.gradient} rounded-xl md:rounded-2xl mb-4 md:mb-6 shadow-lg`}>
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold text-white mb-3 md:mb-4 leading-tight">
                    {caseItem.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6 leading-relaxed">{caseItem.description}</p>
                  <div className={`inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r ${caseItem.gradient} text-white font-bold rounded-full text-xs md:text-sm`}>
                    <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
                    {caseItem.result}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 md:mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white text-sm md:text-base font-bold rounded-full hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300"
          >
            우리도 이런 성과를 내고 싶다면?
            <TrendingUp className="w-4 h-4 md:w-5 md:h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}