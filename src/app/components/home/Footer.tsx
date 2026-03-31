import { Sparkles, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10 py-8 md:py-12">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-blue-950/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
          <div>
            <h2 className="flex items-center gap-2 text-xl md:text-3xl font-black bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent mb-3 md:mb-4">
              <Sparkles className="w-5 h-5 md:w-7 md:h-7 text-blue-400" />
              BIZ SOLUTION
            </h2>
            <p className="text-gray-400 text-sm md:text-lg mb-4 md:mb-6">
              판매와 운영을 연결하는 통합 비즈니스 솔루션
            </p>
            <div className="space-y-2">
              <a
                href="mailto:dsd0415666@naver.com"
                className="flex items-center gap-2 text-sm md:text-base text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-3 h-3 md:w-4 md:h-4" />
                dsd0415666@naver.com
              </a>
              <a
                href="tel:010-6866-7176"
                className="flex items-center gap-2 text-sm md:text-base text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Phone className="w-3 h-3 md:w-4 md:h-4" />
                010 6866 7176
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:items-end justify-center">
            <div className="space-y-2 md:space-y-3">
              <a
                href="#about"
                className="block text-sm md:text-base text-gray-400 hover:text-blue-400 transition-colors"
              >
                회사소개
              </a>
              <a
                href="#solutions"
                className="block text-sm md:text-base text-gray-400 hover:text-blue-400 transition-colors"
              >
                핵심솔루션
              </a>
              <a
                href="#contact"
                className="block text-sm md:text-base text-gray-400 hover:text-blue-400 transition-colors"
              >
                문의하기
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-white/10 text-center">
          <p className="text-xs md:text-sm text-gray-500">
            © 2026 BIZ SOLUTION. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}