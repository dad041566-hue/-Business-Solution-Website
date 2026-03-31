import { UtensilsCrossed, Video, ShoppingBag, Package } from 'lucide-react';

export default function Industries() {
  const industries = [
    {
      icon: UtensilsCrossed,
      title: '외식 · 매장형 비즈니스',
      description: 'QR테이블 주문, 매출 연동, 매장 운영 자동화가 필요한 업종',
      gradient: 'from-orange-600 to-red-600',
    },
    {
      icon: Video,
      title: '라이브커머스 운영사',
      description: '1인 라이브 판매와 주문·정산 흐름을 함께 설계해야 하는 기업',
      gradient: 'from-pink-600 to-purple-600',
    },
    {
      icon: ShoppingBag,
      title: '브랜드 · 쇼핑몰 운영사',
      description: 'ERP 기반으로 상품, 회원, 주문, 매출 데이터를 통합 관리하려는 기업',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      icon: Package,
      title: '유통 · 도소매 사업자',
      description: '복수 판매 채널과 운영 데이터를 연결해 관리 효율을 높이려는 기업',
      gradient: 'from-teal-600 to-green-600',
    },
  ];

  return (
    <section className="relative py-12 md:py-24 bg-gradient-to-b from-black via-purple-950/10 to-black overflow-hidden" id="industries">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-block px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full backdrop-blur-sm mb-4 md:mb-6">
            <span className="text-xs md:text-sm font-semibold text-purple-300">TARGET INDUSTRIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              이런 업종에
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              최적화되어 있습니다
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div key={index} className="group relative">
                <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl p-6 md:p-8 hover:border-purple-400/50 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${industry.gradient} rounded-xl md:rounded-2xl mb-4 md:mb-6 shadow-lg`}>
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-4">{industry.title}</h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">{industry.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}