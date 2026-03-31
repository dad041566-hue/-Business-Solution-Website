export default function Strengths() {
  const strengths = [
    {
      number: '01',
      title: '단순 제작이 아닌 운영 중심 설계',
      description: '보여주기용이 아니라 실제 운영 흐름을 기준으로 시스템을 구성합니다.',
    },
    {
      number: '02',
      title: '주문부터 매출, ERP까지 연결',
      description: '각 기능이 따로 놀지 않도록 하나의 데이터 구조 안에서 설계합니다.',
    },
    {
      number: '03',
      title: '업종 맞춤형 구축 가능',
      description: '사업 모델과 운영 방식에 맞춰 필요한 기능 범위를 조정할 수 있습니다.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-3">
            WHY BIZ SOLUTION
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            비즈 솔루션이 다른 이유
          </h2>
        </div>

        <div className="space-y-8">
          {strengths.map((strength, index) => (
            <article
              key={index}
              className="flex flex-col md:flex-row gap-6 p-6 md:p-8 bg-gradient-to-r from-blue-50 to-white rounded-xl border border-blue-100 hover:shadow-lg transition-shadow"
            >
              <span className="text-5xl md:text-6xl font-bold text-blue-200 flex-shrink-0">
                {strength.number}
              </span>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  {strength.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">{strength.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
