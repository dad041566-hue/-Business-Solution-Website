import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="top"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-blue-500/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <h1 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            <a href="#top" className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-blue-400" />
              BIZ SOLUTION
            </a>
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block" aria-label="주요 메뉴">
            <ul className="flex items-center gap-8">
              {[
                { href: '#about', label: '회사소개' },
                { href: '#solutions', label: '핵심솔루션' },
                { href: '#industries', label: '업종별도입' },
                { href: '#cases', label: '구축사례' },
                { href: '#process', label: '도입절차' },
                { href: '#contact', label: '문의하기' },
              ].map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className="text-gray-300 hover:text-blue-400 transition-all duration-300 relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-bold rounded-full overflow-hidden group"
            >
              <span className="relative z-10">무료 상담 신청</span>
              <Sparkles className="w-4 h-4 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white hover:text-blue-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="메뉴"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-white/10 bg-black/95 backdrop-blur-xl">
            <ul className="space-y-4">
              {[
                { href: '#about', label: '회사소개' },
                { href: '#solutions', label: '핵심솔루션' },
                { href: '#industries', label: '업종별도입' },
                { href: '#cases', label: '구축사례' },
                { href: '#process', label: '도입절차' },
                { href: '#contact', label: '문의하기' },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block py-2 text-gray-300 hover:text-blue-400 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="block px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-full text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  무료 상담 신청
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
