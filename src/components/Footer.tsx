import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUp, Facebook, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-accent font-black text-lg">С</span>
              </div>
              <div>
                <span className="font-bold text-xl leading-tight block">СВАЯ 25</span>
                <span className="text-xs text-gray-400 leading-tight">Фундамент под ключ</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Производство и монтаж винтовых свай с 2019 года. Более 1500 реализованных проектов по всей России.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" aria-label="WhatsApp">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              {[
                { path: '/', label: 'Главная' },
                { path: '/services', label: 'Услуги' },
                { path: '/products', label: 'Товары' },
                { path: '/portfolio', label: 'Портфолио' },
                { path: '/blog', label: 'Блог' },
                { path: '/about', label: 'О компании' },
                { path: '/contacts', label: 'Контакты' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Монтаж винтовых свай</li>
              <li>Свайно-винтовой фундамент</li>
              <li>Производство свай</li>
              <li>Габионные конструкции</li>
              <li>Фундамент для забора</li>
              <li>Усиление фундамента</li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+79241234567" className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors text-sm">
                  <Phone size={16} className="text-accent flex-shrink-0" />
                  +7 (924) 123-45-67
                </a>
              </li>
              <li>
                <a href="mailto:info@svaya25.ru" className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors text-sm">
                  <Mail size={16} className="text-accent flex-shrink-0" />
                  info@svaya25.ru
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-gray-300 text-sm">
                  <MapPin size={16} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>Россия, работаем по всей территории РФ</span>
                </div>
              </li>
            </ul>
            <div className="mt-4">
              <span className="text-xs text-gray-400">Режим работы:</span>
              <p className="text-sm text-gray-300">Пн-Сб: 9:00 — 20:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© 2019–2025 Свая 25. Все права защищены.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-accent transition-colors">Политика конфиденциальности</a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
              aria-label="Наверх"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
