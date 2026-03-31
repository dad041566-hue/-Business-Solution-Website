export default function Solutions() {
  const solutions = [
    {
      tag: 'CORE 01',
      title: '1인 라이브커머스 솔루션',
      description:
        '1인 진행 환경에서도 효율적인 상품 소개와 주문 유도가 가능하도록 라이브 판매 구조와 운영 기능을 제공합니다.',
      features: [
        '라이브 상품 노출 구조',
        '실시간 주문 유도 설계',
        '주문/결제 데이터 연계',
        '관리자 상품 운영 기능',
      ],
      featured: true,
    },
    {
      tag: 'CORE 02',
      title: 'QR테이블 주문 · 매출 연동 통합 시스템',
      description:
        '테이블별 QR 주문부터 주문 접수, 매출 집계, 운영 데이터 관리까지 매장 운영에 필요한 핵심 기능을 하나의 흐름으로 연결합니다.',
      features: [
        '테이블별 QR 주문',
        '메뉴/옵션 선택 및 주문 접수',
        '주문 현황 및 매출 데이터 연동',
        '운영 효율 및 회전율 개선',
      ],
      featured: true,
    },
    {
      tag: 'CORE 03',
      title: 'ERP 시스템 구축',
      description:
        '주문, 상품, 회원, 매출, 정산 데이터를 통합 관리할 수 있도록 기업 맞춤형 ERP/관리자 시스템을 구축합니다.',
      features: [
        '주문/매출 통합 관리',
        '상품/회원 데이터 관리',
        '정산 및 운영 프로세스 효율화',
        '관리자 대시보드 구성',
      ],
      featured: false,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-3">
            SOLUTIONS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            비즈 솔루션 핵심 서비스
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            QR테이블 주문 시스템과 매출 연동은 하나의 통합 운영 솔루션으로 제공합니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <article
              key={index}
              className={`p-8 rounded-2xl border-2 hover:shadow-xl transition-all ${
                solution.featured
                  ? 'bg-gradient-to-br from-blue-50 to-white border-blue-300'
                  : 'bg-white border-gray-200'
              }`}
            >
              <div className="inline-block px-4 py-1.5 bg-blue-600 text-white text-sm font-semibold rounded-full mb-4">
                {solution.tag}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
              <ul className="space-y-3">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
