import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, ChevronRight } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Главная' },
  { path: '/services', label: 'Услуги' },
  { path: '/products', label: 'Товары' },
  { path: '/portfolio', label: 'Портфолио' },
  { path: '/blog', label: 'Блог' },
  { path: '/about', label: 'О компании' },
  { path: '/contacts', label: 'Контакты' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      {/* Top bar */}
      <div className="bg-primary text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <MapPin size={14} />
              Работаем по всей России
            </span>
            <span>С 2019 года — более 1500 объектов</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:info@svaya25.ru" className="hover:text-accent transition-colors">
              info@svaya25.ru
            </a>
            <span>|</span>
            <span>Пн-Сб: 9:00 - 20:00</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-accent font-black text-lg">С</span>
            </div>
            <div>
              <span className="text-primary font-bold text-xl leading-tight block">СВАЯ 25</span>
              <span className="text-xs text-text-muted leading-tight">Фундамент под ключ</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-accent bg-accent/10'
                    : 'text-primary hover:text-accent hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Phone & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+79241234567"
              className="flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              <Phone size={18} className="text-accent" />
              <span className="text-sm">+7 (924) 123-45-67</span>
            </a>
            <Link
              to="/contacts"
              className="btn-primary text-sm py-2.5 px-5"
            >
              Заказать звонок
              <ChevronRight size={16} />
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Открыть меню"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-white z-50 transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-accent font-black text-lg">С</span>
            </div>
            <span className="text-primary font-bold text-xl">СВАЯ 25</span>
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="w-11 h-11 flex items-center justify-center rounded-lg hover:bg-gray-100"
            aria-label="Закрыть меню"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 rounded-lg text-lg font-medium transition-all ${
                location.pathname === link.path
                  ? 'text-accent bg-accent/10'
                  : 'text-primary hover:bg-gray-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="p-4 border-t mt-4 space-y-4">
          <a
            href="tel:+79241234567"
            className="flex items-center gap-3 text-primary font-semibold text-lg"
          >
            <Phone size={20} className="text-accent" />
            +7 (924) 123-45-67
          </a>
          <Link
            to="/contacts"
            className="btn-primary w-full justify-center text-center"
          >
            Оставить заявку
          </Link>
        </div>
      </div>
    </header>
  );
}
