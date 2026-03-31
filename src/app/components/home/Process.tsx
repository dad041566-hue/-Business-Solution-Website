import { MessageSquare, Lightbulb, Code, TestTube, Headphones } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: MessageSquare,
      title: '상담 및 요구사항 분석',
      description: '업종, 운영 방식, 필요한 기능 범위를 확인합니다.',
    },
    {
      icon: Lightbulb,
      title: '맞춤 기획 및 구조 설계',
      description: '업무 흐름에 맞춰 기능 구조와 화면 구성을 제안합니다.',
    },
    {
      icon: Code,
      title: '개발 및 연동 구축',
      description: '솔루션 개발과 함께 주문, 매출, 운영 데이터를 연결합니다.',
    },
    {
      icon: TestTube,
      title: '테스트 및 오픈',
      description: '실사용 테스트를 거쳐 안정적으로 시스템을 운영할 수 있도록 지원합니다.',
    },
    {
      icon: Headphones,
      title: '운영 지원 및 유지관리',
      description: '오픈 이후에도 개선 및 유지보수가 가능하도록 운영합니다.',
    },
  ];

  return (
    <section className="relative py-12 md:py-24 bg-black overflow-hidden" id="process">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/10 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-block px-4 py-2 bg-indigo-600/20 border border-indigo-500/30 rounded-full backdrop-blur-sm mb-4 md:mb-6">
            <span className="text-xs md:text-sm font-semibold text-indigo-300">PROCESS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              간단하고 명확한
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              도입 프로세스
            </span>
          </h2>
        </div>

        <div className="relative">
          {/* Connection Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-600 via-purple-600 to-pink-600 -translate-x-1/2"></div>

          <div className="space-y-6 md:space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex items-center gap-4 md:gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`inline-block ${isEven ? 'md:ml-auto' : 'md:mr-auto'}`}>
                      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl p-4 md:p-8 hover:border-indigo-400/50 transition-all duration-300 max-w-md">
                        <div className={`flex items-center gap-3 md:gap-4 mb-3 md:mb-4 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                          <div className="inline-flex items-center justify-center w-10 h-10 md:w-14 md:h-14 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg md:rounded-xl shadow-lg">
                            <Icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                          </div>
                          <div className="text-2xl md:text-4xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            0{index + 1}
                          </div>
                        </div>
                        <h3 className="text-base md:text-2xl font-bold text-white mb-2 md:mb-3">
                          {step.title}
                        </h3>
                        <p className="text-xs md:text-base text-gray-400 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Center Circle - Hidden on mobile */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full border-4 border-black shadow-lg z-10">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block flex-1"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}