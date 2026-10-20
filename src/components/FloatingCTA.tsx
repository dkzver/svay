import { useState, useEffect } from 'react';
import { Phone, X, MessageCircle } from 'lucide-react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Expanded panel */}
      {isExpanded && (
        <div className="bg-white rounded-2xl shadow-2xl p-5 w-72 border border-gray-100 animate-fade-in-up">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-primary">Быстрая связь</h3>
            <button
              onClick={() => setIsExpanded(false)}
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              aria-label="Закрыть"
            >
              <X size={16} />
            </button>
          </div>
          <div className="space-y-3">
            <a
              href="tel:+79241234567"
              className="flex items-center gap-3 p-3 bg-green-50 rounded-xl hover:bg-green-100 transition-colors"
            >
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <Phone size={18} className="text-white" />
              </div>
              <div>
                <p className="font-medium text-primary text-sm">Позвонить</p>
                <p className="text-xs text-text-muted">+7 (924) 123-45-67</p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 p-3 bg-green-50 rounded-xl hover:bg-green-100 transition-colors"
            >
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle size={18} className="text-white" />
              </div>
              <div>
                <p className="font-medium text-primary text-sm">WhatsApp</p>
                <p className="text-xs text-text-muted">Написать в мессенджер</p>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isExpanded
            ? 'bg-gray-700 hover:bg-gray-800 rotate-0'
            : 'bg-accent hover:bg-accent-hover hover:scale-110'
        }`}
        aria-label="Быстрая связь"
      >
        {isExpanded ? (
          <X size={24} className="text-white" />
        ) : (
          <Phone size={24} className="text-white" />
        )}
      </button>
    </div>
  );
}
