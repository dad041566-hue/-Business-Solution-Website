import { Rocket, Link as LinkIcon, Settings } from 'lucide-react';

export default function Strengths() {
  const strengths = [
    {
      number: '01',
      icon: Rocket,
      title: '단순 제작이 아닌 운영 중심 설계',
      description: '보여주기용이 아니라 실제 운영 흐름을 기준으로 시스템을 구성합니다.',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      number: '02',
      icon: LinkIcon,
      title: '주문부터 매출, ERP까지 연결',
      description: '각 기능이 따로 놀지 않도록 하나의 데이터 구조 안에서 설계합니다.',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      number: '03',
      icon: Settings,
      title: '업종 맞춤형 구축 가능',
      description: '사업 모델과 운영 방식에 맞춰 필요한 기능 범위를 조정할 수 있습니다.',
      gradient: 'from-teal-600 to-green-600',
    },
  ];

  return (
    <section className="relative py-12 md:py-24 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-teal-950/10 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-block px-4 py-2 bg-teal-600/20 border border-teal-500/30 rounded-full backdrop-blur-sm mb-4 md:mb-6">
            <span className="text-xs md:text-sm font-semibold text-teal-300">WHY CHOOSE US</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              비즈 솔루션이
            </span>
            <br />
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              다른 이유
            </span>
          </h2>
        </div>

        <div className="space-y-4 md:space-y-8">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;
            return (
              <div key={index} className="group relative">
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl md:rounded-3xl p-6 md:p-10 hover:border-teal-400/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
                    <div className="flex items-center gap-4 md:gap-6">
                      <div className="text-4xl md:text-8xl font-black bg-gradient-to-br from-white/20 to-white/5 bg-clip-text text-transparent">
                        {strength.number}
                      </div>
                      <div className={`inline-flex items-center justify-center w-14 h-14 md:w-20 md:h-20 bg-gradient-to-r ${strength.gradient} rounded-xl md:rounded-2xl shadow-2xl`}>
                        <Icon className="w-7 h-7 md:w-10 md:h-10 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-4xl font-bold text-white mb-2 md:mb-4">
                        {strength.title}
                      </h3>
                      <p className="text-sm md:text-xl text-gray-400 leading-relaxed">{strength.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}