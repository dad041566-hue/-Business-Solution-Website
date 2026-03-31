import { Zap, TrendingUp, Shield, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20 md:pt-0">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-black to-purple-950"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full backdrop-blur-sm">
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-xs md:text-sm font-semibold text-blue-300">
                혁신적인 통합 비즈니스 솔루션
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                매출을 폭발시키는
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                스마트 솔루션
              </span>
            </h2>

            <p className="text-base md:text-xl text-gray-300 leading-relaxed">
              1인 라이브커머스부터 QR 테이블 주문, ERP 통합까지.
              <br className="hidden md:block" />
              <span className="text-blue-400 font-semibold">모든 판매 채널을 하나로 연결</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white text-base md:text-lg font-bold rounded-full overflow-hidden shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/80 transition-all duration-300"
              >
                <span className="relative z-10">지금 바로 시작하기</span>
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>

            {/* Stats - Hidden on mobile */}
            <div className="hidden md:grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  300%
                </div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">매출 증가</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  98%
                </div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">고객 만족도</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-4xl font-black bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
                  500+
                </div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">구축 사례</div>
              </div>
            </div>
          </div>

          {/* Visual Card - Simplified on mobile */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-semibold">실시간 연동 중</span>
                </div>

                <div className="space-y-4">
                  <div className="group p-6 bg-gradient-to-r from-blue-600/30 to-blue-500/20 border border-blue-400/30 rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingUp className="w-6 h-6 text-blue-400" />
                      <h3 className="text-xl font-bold text-white">Live Commerce</h3>
                    </div>
                    <p className="text-blue-200 text-sm">1인 라이브 방송 최적화</p>
                  </div>

                  <div className="group p-6 bg-gradient-to-r from-purple-600/30 to-purple-500/20 border border-purple-400/30 rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                      <Zap className="w-6 h-6 text-purple-400" />
                      <h3 className="text-xl font-bold text-white">QR Table Order</h3>
                    </div>
                    <p className="text-purple-200 text-sm">매출 연동 & 실시간 집계</p>
                  </div>

                  <div className="group p-6 bg-gradient-to-r from-teal-600/30 to-teal-500/20 border border-teal-400/30 rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                      <Shield className="w-6 h-6 text-teal-400" />
                      <h3 className="text-xl font-bold text-white">ERP System</h3>
                    </div>
                    <p className="text-teal-200 text-sm">통합 관리 & 자동화</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">총 연동 시스템</span>
                    <span className="text-white font-bold">3개 모듈</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}