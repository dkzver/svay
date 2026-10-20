import { Link } from 'react-router-dom';
import { Hammer, Building2, Layers, Truck, Wrench, ShieldCheck, ChevronRight, Phone } from 'lucide-react';

const services = [
  {
    icon: Hammer,
    title: 'Монтаж винтовых свай',
    desc: 'Профессиональная установка винтовых свай любого диаметра и длины. Работаем на любых грунтах — от песчаных до глинистых. Используем механический и ручной способ монтажа.',
    features: ['Сваи от 57 до 325 мм', 'Длина от 1.5 до 12 м', 'Монтаж за 1 день', 'Контроль вертикальности'],
    price: 'от 1 500 ₽/шт',
  },
  {
    icon: Building2,
    title: 'Свайно-винтовой фундамент',
    desc: 'Устройство фундамента на винтовых сваях под дома, бани, гаражи и коммерческие объекты. Включает проектирование, подбор свай и монтаж с обвязкой.',
    features: ['Под любой тип строения', 'Проект и расчёт', 'Обвязка брусом/швеллером', 'Гарантия 10 лет'],
    price: 'от 45 000 ₽',
  },
  {
    icon: Layers,
    title: 'Габионные конструкции',
    desc: 'Изготовление и монтаж габионных конструкций: подпорные стены, заборы, декоративные элементы, укрепление склонов. Используем сетку двойного кручения.',
    features: ['Подпорные стены', 'Заборы и ограждения', 'Укрепление склонов', 'Декоративные элементы'],
    price: 'от 3 000 ₽/м³',
  },
  {
    icon: Truck,
    title: 'Доставка материалов',
    desc: 'Доставка винтовых свай, оголовков, габионов и других материалов на объект. Собственный автопарк — манипуляторы, длинномеры.',
    features: ['Собственный автопарк', 'Манипулятор 5-7 тонн', 'Доставка по РФ', 'Разгрузка на объекте'],
    price: 'от 5 000 ₽',
  },
  {
    icon: Wrench,
    title: 'Усиление фундамента',
    desc: 'Усиление и реконструкция существующих фундаментов с помощью винтовых свай. Подъём и выравнивание строений.',
    features: ['Диагностика фундамента', 'Подъём строений', 'Усиление стен', 'Стабилизация грунта'],
    price: 'от 35 000 ₽',
  },
  {
    icon: ShieldCheck,
    title: 'Фундамент для забора',
    desc: 'Устройство фундамента на винтовых сваях для заборов любой высоты и конструкции. Быстрый монтаж без земляных работ.',
    features: ['Для профнастила', 'Для штакетника', 'Для сетки-рабицы', 'Любая высота'],
    price: 'от 2 000 ₽/пог.м',
  },
];

export default function Services() {
  return (
    <main className="pt-24 md:pt-32">
      {/* Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Услуги</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">
            Полный спектр услуг по устройству фундаментов
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            От производства свай до сдачи готового фундамента под ключ. 
            Работаем с частными и коммерческими заказчиками.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 card-hover group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <service.icon size={28} className="text-accent" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-primary">{service.title}</h2>
                    <span className="text-accent font-semibold">{service.price}</span>
                  </div>
                </div>
                <p className="text-text-muted text-sm leading-relaxed mb-4">{service.desc}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-text-main">
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-accent"></div>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contacts"
                  className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all"
                >
                  Заказать услугу <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Не нашли нужную услугу?
          </h2>
          <p className="text-text-muted mb-6">
            Свяжитесь с нами — подберём оптимальное решение для вашего проекта
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contacts" className="btn-primary">
              Получить консультацию
              <ChevronRight size={18} />
            </Link>
            <a href="tel:+79241234567" className="flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors">
              <Phone size={18} />
              +7 (924) 123-45-67
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
