export default function About() {
  return (
    <section className="py-16 md:py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-3">
            ABOUT
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            판매와 운영을 연결하는 통합 솔루션 기업
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            비즈 솔루션은 단순 제작사가 아니라 주문, 매출, 정산, 운영 데이터를 하나로 연결해
            실제 업무 효율을 높이는 시스템을 설계·구축합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <article className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">실무 중심 구축</h3>
            <p className="text-gray-600 leading-relaxed">
              현장에서 실제로 사용하는 운영 흐름을 기준으로 기능을 설계합니다.
            </p>
          </article>

          <article className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-xl border border-indigo-100 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">통합 데이터 구조</h3>
            <p className="text-gray-600 leading-relaxed">
              판매 채널과 관리자 시스템을 연결해 데이터가 끊기지 않도록 구성합니다.
            </p>
          </article>

          <article className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl border border-purple-100 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">업종 맞춤 커스터마이징</h3>
            <p className="text-gray-600 leading-relaxed">
              외식, 유통, 브랜드, 라이브 판매 환경에 맞는 맞춤형 구축이 가능합니다.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
