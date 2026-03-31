export default function Cases() {
  const cases = [
    {
      title: 'QR 주문 기반 매장 운영 자동화',
      description: '테이블 주문부터 매출 데이터 확인까지 하나의 흐름으로 구성',
    },
    {
      title: '라이브 판매와 주문 연동 구조 구축',
      description: '1인 라이브 진행 환경에 적합한 판매 흐름과 관리자 기능 설계',
    },
    {
      title: 'ERP 기반 통합 운영 관리',
      description: '상품, 회원, 주문, 매출 데이터를 한 화면에서 관리할 수 있도록 구성',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="cases">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-3">
            PORTFOLIO
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            구축 사례 및 적용 예시
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <article
              key={index}
              className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                {caseItem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{caseItem.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
