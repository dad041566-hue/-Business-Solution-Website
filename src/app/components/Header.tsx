import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="top"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <h1 className="text-xl md:text-2xl font-bold text-blue-600">
            <a href="#top">BIZ SOLUTION</a>
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block" aria-label="주요 메뉴">
            <ul className="flex items-center gap-8">
              <li>
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                  회사소개
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-gray-700 hover:text-blue-600 transition-colors">
                  핵심솔루션
                </a>
              </li>
              <li>
                <a href="#industries" className="text-gray-700 hover:text-blue-600 transition-colors">
                  업종별도입
                </a>
              </li>
              <li>
                <a href="#cases" className="text-gray-700 hover:text-blue-600 transition-colors">
                  구축사례
                </a>
              </li>
              <li>
                <a href="#process" className="text-gray-700 hover:text-blue-600 transition-colors">
                  도입절차
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                  문의하기
                </a>
              </li>
            </ul>
          </nav>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="inline-block px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              상담문의
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="메뉴"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-200">
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  회사소개
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  핵심솔루션
                </a>
              </li>
              <li>
                <a
                  href="#industries"
                  className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  업종별도입
                </a>
              </li>
              <li>
                <a
                  href="#cases"
                  className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  구축사례
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  도입절차
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  문의하기
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="inline-block px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  상담문의
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
