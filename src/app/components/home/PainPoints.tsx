import { AlertCircle, XCircle } from 'lucide-react';

export default function PainPoints() {
  const problems = [
    {
      title: '주문과 매출 관리가 분리됨',
      description: '채널별 주문은 들어오지만 매출 집계와 정산 관리가 따로 운영되고 있습니다.',
    },
    {
      title: '라이브커머스 운영 시스템 부재',
      description: '1인 라이브 판매를 시작하고 싶지만 주문·운영을 받쳐줄 시스템이 부족합니다.',
    },
    {
      title: '매장 주문 업무 비효율',
      description: '인력 의존 주문 방식으로 인해 주문 누락, 대기, 운영 부담이 커지고 있습니다.',
    },
    {
      title: 'ERP 연동 부족으로 수작업 증가',
      description: '상품, 주문, 회원, 매출 데이터가 분리되어 업무가 반복적으로 발생합니다.',
    },
  ];

  return (
    <section className="relative py-12 md:py-24 bg-gradient-to-b from-black via-red-950/10 to-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-500/30 rounded-full backdrop-blur-sm mb-4 md:mb-6">
            <AlertCircle className="w-3 h-3 md:w-4 md:h-4 text-red-400" />
            <span className="text-xs md:text-sm font-semibold text-red-300">PAIN POINTS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              이런 문제로
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              고민하고 계신가요?
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-red-950/30 to-orange-950/20 backdrop-blur-sm border border-red-500/20 rounded-xl md:rounded-2xl p-6 md:p-8 hover:border-red-400/50 transition-all duration-300"
            >
              <div className="absolute top-4 right-4">
                <XCircle className="w-5 h-5 md:w-6 md:h-6 text-red-400/50 group-hover:text-red-400 transition-colors" />
              </div>
              <h3 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-4 pr-8">
                {problem.title}
              </h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-16 text-center">
          <a
            href="#solutions"
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white text-sm md:text-base font-bold rounded-full hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300"
          >
            이 모든 문제, 우리가 해결합니다
          </a>
        </div>
      </div>
    </section>
  );
}