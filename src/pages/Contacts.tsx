import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contacts() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '', consent: false });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Введите ваше имя';
    if (!formData.phone.trim()) newErrors.phone = 'Введите номер телефона';
    else if (!/^[+]?[\d\s()-]{10,}$/.test(formData.phone)) newErrors.phone = 'Некорректный номер телефона';
    if (!formData.consent) newErrors.consent = 'Необходимо согласие';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setIsSubmitted(true);
  };

  return (
    <main className="pt-24 md:pt-32">
      {/* Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Контакты</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">
            Свяжитесь с нами
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Оставьте заявку и мы перезвоним в течение 30 минут в рабочее время. 
            Или свяжитесь с нами любым удобным способом.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold text-primary mb-6">Контактная информация</h2>
              
              <div className="space-y-4">
                <a href="tel:+79241234567" className="flex items-start gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:border-accent/30 transition-colors group">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Phone size={22} className="text-accent" />
                  </div>
                  <div>
                    <span className="text-sm text-text-muted">Телефон</span>
                    <p className="font-semibold text-primary text-lg">+7 (924) 123-45-67</p>
                    <p className="text-sm text-text-muted">Звоните или пишите в WhatsApp</p>
                  </div>
                </a>

                <a href="mailto:info@svaya25.ru" className="flex items-start gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:border-accent/30 transition-colors group">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Mail size={22} className="text-accent" />
                  </div>
                  <div>
                    <span className="text-sm text-text-muted">Email</span>
                    <p className="font-semibold text-primary">info@svaya25.ru</p>
                    <p className="text-sm text-text-muted">Ответим в течение 2 часов</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-white border border-gray-100 rounded-xl">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={22} className="text-accent" />
                  </div>
                  <div>
                    <span className="text-sm text-text-muted">Адрес</span>
                    <p className="font-semibold text-primary">Приморский край</p>
                    <p className="text-sm text-text-muted">Работаем по всей территории РФ</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white border border-gray-100 rounded-xl">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={22} className="text-accent" />
                  </div>
                  <div>
                    <span className="text-sm text-text-muted">Режим работы</span>
                    <p className="font-semibold text-primary">Пн-Сб: 9:00 — 20:00</p>
                    <p className="text-sm text-text-muted">Вс: по предварительной записи</p>
                  </div>
                </div>
              </div>

              {/* Company details */}
              <div className="bg-gray-50 rounded-xl p-5 mt-6">
                <h3 className="font-semibold text-primary mb-3">Реквизиты</h3>
                <div className="space-y-2 text-sm text-text-muted">
                  <p>ООО «Свая 25»</p>
                  <p>ИНН: 2540123456</p>
                  <p>ОГРН: 1192540001234</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-primary mb-2">Оставить заявку</h2>
                <p className="text-text-muted mb-6">Заполните форму и мы свяжемся с вами для расчёта стоимости</p>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">Заявка отправлена!</h3>
                    <p className="text-text-muted">Мы перезвоним вам в течение 30 минут в рабочее время.</p>
                    <button
                      onClick={() => { setIsSubmitted(false); setFormData({ name: '', phone: '', message: '', consent: false }); }}
                      className="mt-6 text-accent font-medium hover:underline"
                    >
                      Отправить ещё одну заявку
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-primary mb-1.5">
                        Ваше имя *
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-400' : 'border-gray-200'} transition-all`}
                        placeholder="Иван Иванов"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-primary mb-1.5">
                        Телефон *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-400' : 'border-gray-200'} transition-all`}
                        placeholder="+7 (___) ___-__-__"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-primary mb-1.5">
                        Сообщение
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 transition-all resize-none"
                        placeholder="Опишите ваш проект: тип строения, размеры, местоположение..."
                      />
                    </div>

                    <div>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.consent}
                          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                          className="mt-1 w-4 h-4 rounded border-gray-300 text-accent focus:ring-accent"
                        />
                        <span className="text-sm text-text-muted">
                          Я согласен на обработку персональных данных в соответствии с{' '}
                          <a href="#" className="text-accent hover:underline">политикой конфиденциальности</a> *
                        </span>
                      </label>
                      {errors.consent && <p className="text-red-500 text-xs mt-1">{errors.consent}</p>}
                    </div>

                    <button type="submit" className="btn-primary w-full justify-center text-base">
                      <Send size={18} />
                      Отправить заявку
                    </button>

                    <p className="text-xs text-text-muted text-center">
                      Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">Мы на карте</h2>
          <div className="rounded-2xl overflow-hidden border border-gray-200 aspect-[21/9] bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-primary/20 mx-auto mb-2" />
              <p className="text-text-muted">Карта загружается...</p>
              <p className="text-sm text-text-muted mt-1">Приморский край, Россия</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
