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
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold text-red-600 tracking-wide uppercase mb-3">
            PAIN POINT
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            이런 문제를 겪고 계신가요?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {problems.map((problem, index) => (
            <article
              key={index}
              className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{problem.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
