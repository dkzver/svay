import { Link } from 'react-router-dom';
import {
  Shield, Clock, Award, Users, ChevronRight, Star,
  Hammer, Building2, Layers, Truck, CheckCircle2, Phone
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-primary">
          <div className="absolute inset-0 hero-overlay"></div>
          {/* Decorative elements */}
          <div className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32 w-full">
          <div className="max-w-3xl">
            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-4 mb-6 animate-fade-in-up">
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white/90 px-3 py-1.5 rounded-full text-sm">
                <Clock size={14} className="text-accent" />
                С 2019 года
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white/90 px-3 py-1.5 rounded-full text-sm">
                <Award size={14} className="text-accent" />
                Гарантия 10 лет
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white/90 px-3 py-1.5 rounded-full text-sm">
                <CheckCircle2 size={14} className="text-accent" />
                1500+ проектов
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up delay-100">
              Производство и монтаж{' '}
              <span className="text-accent">винтовых свай</span>{' '}
              под ключ
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl animate-fade-in-up delay-200">
              Собственное производство свай. Профессиональный монтаж за 1 день. 
              Работаем по всей России с гарантией качества и прозрачными ценами.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <Link to="/contacts" className="btn-primary text-base">
                Рассчитать стоимость
                <ChevronRight size={18} />
              </Link>
              <Link to="/portfolio" className="btn-secondary text-base">
                Смотреть портфолио
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/10 animate-fade-in-up delay-400">
              {[
                { value: '6+', label: 'Лет на рынке' },
                { value: '1500+', label: 'Объектов' },
                { value: '10', label: 'Лет гарантии' },
                { value: '24ч', label: 'Расчёт сметы' },
              ].map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-accent">{stat.value}</div>
                  <div className="text-sm text-white/70 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Наши услуги</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">Что мы делаем</h2>
              <p className="text-text-muted mt-3 max-w-2xl mx-auto">
                Полный комплекс работ по устройству свайно-винтовых фундаментов
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Hammer,
                title: 'Монтаж винтовых свай',
                desc: 'Профессиональная установка свай любого диаметра с гарантией качества',
                price: 'от 1 500 ₽/шт',
              },
              {
                icon: Building2,
                title: 'Свайно-винтовой фундамент',
                desc: 'Фундамент под дом, баню, гараж или коммерческий объект',
                price: 'от 45 000 ₽',
              },
              {
                icon: Layers,
                title: 'Габионные конструкции',
                desc: 'Подпорные стены, заборы и декоративные элементы из габионов',
                price: 'от 3 000 ₽/м³',
              },
              {
                icon: Truck,
                title: 'Доставка и разгрузка',
                desc: 'Собственный автопарк для доставки материалов на объект',
                price: 'от 5 000 ₽',
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 card-hover border border-gray-100 group"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon size={28} className="text-accent" />
                </div>
                <h3 className="font-bold text-lg text-primary mb-2">{service.title}</h3>
                <p className="text-text-muted text-sm mb-4">{service.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-accent font-semibold text-sm">{service.price}</span>
                  <Link to="/services" className="text-primary text-sm font-medium hover:text-accent transition-colors flex items-center gap-1">
                    Подробнее <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services" className="btn-primary inline-flex">
              Все услуги
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Преимущества</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">
                Почему выбирают нас
              </h2>
              <div className="space-y-5">
                {[
                  {
                    icon: Factory,
                    title: 'Собственное производство',
                    desc: 'Изготавливаем сваи на своём заводе — контролируем качество на каждом этапе',
                  },
                  {
                    icon: Users,
                    title: 'Опытные монтажники',
                    desc: 'Бригада с опытом от 5 лет. Каждый объект — под контролем прораба',
                  },
                  {
                    icon: Shield,
                    title: 'Гарантия 10 лет',
                    desc: 'Даём письменную гарантию на все виды работ и материалы',
                  },
                  {
                    icon: Star,
                    title: 'Прозрачные цены',
                    desc: 'Фиксированная смета без скрытых платежей и доплат',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">{item.title}</h3>
                      <p className="text-text-muted text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats card */}
            <div className="bg-primary rounded-2xl p-8 md:p-10 text-white">
              <h3 className="text-2xl font-bold mb-6">Наши показатели</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '1500+', label: 'Завершённых проектов' },
                  { value: '98%', label: 'Довольных клиентов' },
                  { value: '24ч', label: 'Расчёт сметы' },
                  { value: '1 день', label: 'Монтаж фундамента' },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-3xl font-bold text-accent">{stat.value}</div>
                    <div className="text-sm text-white/70 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full bg-accent/30 border-2 border-primary flex items-center justify-center text-xs font-bold">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-white/70">
                    Более 1500 довольных клиентов по всей России
                  </p>
                </div>
              </div>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16 md:py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Портфолио</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">Наши работы</h2>
            </div>
            <Link to="/portfolio" className="mt-4 md:mt-0 text-primary font-medium hover:text-accent transition-colors flex items-center gap-1">
              Смотреть все проекты <ChevronRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Дом из бруса 8×10 м', location: 'Приморский край', type: 'Жилой дом' },
              { title: 'Баня 6×4 м на сваях', location: 'Хабаровск', type: 'Баня' },
              { title: 'Забор на винтовых сваях', location: 'Владивосток', type: 'Забор' },
              { title: 'Каркасный дом 10×12 м', location: 'Находка', type: 'Жилой дом' },
              { title: 'Терраса с габионами', location: 'Артём', type: 'Благоустройство' },
              { title: 'Коммерческий объект', location: 'Уссурийск', type: 'Коммерция' },
            ].map((project, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-primary/10 card-hover">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Building2 size={48} className="text-primary/20" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                  <span className="inline-block bg-accent/90 text-white text-xs font-medium px-2.5 py-1 rounded-full mb-2">
                    {project.type}
                  </span>
                  <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                  <p className="text-white/70 text-sm">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Отзывы</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">Что говорят клиенты</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Алексей Петров',
                text: 'Заказывал фундамент под дом 10×12. Ребята приехали вовремя, всё сделали за один день. Качество отличное, цены адекватные.',
                rating: 5,
              },
              {
                name: 'Мария Сидорова',
                text: 'Делали фундамент для бани. Очень довольны работой! Монтажники аккуратные, всё объяснили. Рекомендую!',
                rating: 5,
              },
              {
                name: 'Игорь Козлов',
                text: 'Ставили забор на сваях. Быстро, качественно, без лишних расходов. Уже порекомендовал знакомым.',
                rating: 5,
              },
            ].map((review, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-xl p-6 card-hover">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-text-muted text-sm mb-4 leading-relaxed">«{review.text}»</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">{review.name[0]}</span>
                  </div>
                  <span className="font-medium text-primary text-sm">{review.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Готовы начать строительство?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Получите бесплатную консультацию и расчёт стоимости вашего проекта. 
            Ответим в течение 30 минут в рабочее время.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contacts" className="btn-primary text-base">
              Получить консультацию
              <ChevronRight size={18} />
            </Link>
            <a
              href="tel:+79241234567"
              className="flex items-center gap-2 text-white font-semibold hover:text-accent transition-colors text-lg"
            >
              <Phone size={20} />
              +7 (924) 123-45-67
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function Factory({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2 20V8l4-4v6l4-4v6l4-4v8" />
      <path d="M14 20V4l6 4v12" />
      <path d="M2 20h20" />
    </svg>
  );
}
