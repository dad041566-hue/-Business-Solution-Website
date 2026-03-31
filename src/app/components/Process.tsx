export default function Process() {
  const steps = [
    {
      title: '상담 및 요구사항 분석',
      description: '업종, 운영 방식, 필요한 기능 범위를 확인합니다.',
    },
    {
      title: '맞춤 기획 및 구조 설계',
      description: '업무 흐름에 맞춰 기능 구조와 화면 구성을 제안합니다.',
    },
    {
      title: '개발 및 연동 구축',
      description: '솔루션 개발과 함께 주문, 매출, 운영 데이터를 연결합니다.',
    },
    {
      title: '테스트 및 오픈',
      description: '실사용 테스트를 거쳐 안정적으로 시스템을 운영할 수 있도록 지원합니다.',
    },
    {
      title: '운영 지원 및 유지관리',
      description: '오픈 이후에도 개선 및 유지보수가 가능하도록 운영합니다.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-3">
            PROCESS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">도입 절차</h2>
        </div>

        <ol className="space-y-6">
          {steps.map((step, index) => (
            <li
              key={index}
              className="flex flex-col md:flex-row gap-6 p-6 md:p-8 bg-gradient-to-r from-blue-50 to-white rounded-xl border border-blue-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white text-xl font-bold rounded-full flex-shrink-0">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
