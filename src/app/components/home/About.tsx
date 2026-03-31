import { Target, Layers, Sparkles } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Target,
      title: '실무 중심 구축',
      description: '현장에서 실제로 사용하는 운영 흐름을 기준으로 기능을 설계합니다.',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      icon: Layers,
      title: '통합 데이터 구조',
      description: '판매 채널과 관리자 시스템을 연결해 데이터가 끊기지 않도록 구성합니다.',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      icon: Sparkles,
      title: '업종 맞춤 커스터마이징',
      description: '외식, 유통, 브랜드, 라이브 판매 환경에 맞는 맞춤형 구축이 가능합니다.',
      gradient: 'from-teal-600 to-green-600',
    },
  ];

  return (
    <section className="relative py-12 md:py-24 bg-black overflow-hidden" id="about">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full backdrop-blur-sm mb-4 md:mb-6">
            <span className="text-xs md:text-sm font-semibold text-blue-300">ABOUT US</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              판매와 운영을 연결하는
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              통합 솔루션 기업
            </span>
          </h2>
          <p className="text-sm md:text-xl text-gray-400 max-w-3xl mx-auto">
            비즈 솔루션은 단순 제작사가 아니라 주문, 매출, 정산, 운영 데이터를 하나로 연결해
            <span className="text-blue-400 font-semibold"> 실제 업무 효율을 높이는 시스템</span>을 설계·구축합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl p-6 md:p-8 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
                  <div className={`inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${feature.gradient} rounded-xl md:rounded-2xl mb-4 md:mb-6 shadow-lg`}>
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-4">{feature.title}</h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}