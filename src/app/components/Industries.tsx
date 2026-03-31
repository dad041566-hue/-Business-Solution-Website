export default function Industries() {
  const industries = [
    {
      title: '외식 · 매장형 비즈니스',
      description: 'QR테이블 주문, 매출 연동, 매장 운영 자동화가 필요한 업종',
    },
    {
      title: '라이브커머스 운영사',
      description: '1인 라이브 판매와 주문·정산 흐름을 함께 설계해야 하는 기업',
    },
    {
      title: '브랜드 · 쇼핑몰 운영사',
      description: 'ERP 기반으로 상품, 회원, 주문, 매출 데이터를 통합 관리하려는 기업',
    },
    {
      title: '유통 · 도소매 사업자',
      description: '복수 판매 채널과 운영 데이터를 연결해 관리 효율을 높이려는 기업',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-3">
            INDUSTRIES
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            이런 업종에 적합합니다
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {industries.map((industry, index) => (
            <article
              key={index}
              className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                {industry.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{industry.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
