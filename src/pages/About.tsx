import { Link } from 'react-router-dom';
import { Award, Users, Shield, Clock, Target, Heart, ChevronRight, Phone } from 'lucide-react';

export default function About() {
  return (
    <main className="pt-24 md:pt-32">
      {/* Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">О компании</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">
            Свая 25 — надёжный фундамент вашего дома
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            С 2019 года мы производим и устанавливаем винтовые сваи, создавая прочные фундаменты 
            для тысяч клиентов по всей России.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Наша история</h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  Компания «Свая 25» была основана в 2019 году с простой целью — обеспечить 
                  частных застройщиков и строительные организации качественными свайными фундаментами 
                  по доступным ценам.
                </p>
                <p>
                  Начав с небольшой бригады и одного комплекта оборудования, за 6 лет мы выросли 
                  в полноценное производство с собственным заводом, автопарком и штатом из 30+ 
                  квалифицированных специалистов.
                </p>
                <p>
                  Сегодня мы выполнили более 1500 проектов различной сложности — от фундаментов 
                  под небольшие бани до свайных полей для коммерческих объектов. Каждый проект 
                  для нас — это возможность доказать, что качественная работа не обязательно 
                  должна быть дорогой.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-10">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '2019', label: 'Год основания' },
                  { value: '30+', label: 'Сотрудников' },
                  { value: '1500+', label: 'Проектов' },
                  { value: '10', label: 'Лет гарантии' },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-3xl font-bold text-accent">{stat.value}</div>
                    <div className="text-sm text-text-muted mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">Наши ценности</h2>
            <p className="text-text-muted mt-3">Принципы, которыми мы руководствуемся в работе</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Качество',
                desc: 'Используем только сертифицированную сталь. Каждая свая проходит контроль качества перед отправкой на объект.',
              },
              {
                icon: Heart,
                title: 'Честность',
                desc: 'Прозрачное ценообразование без скрытых платежей. Фиксируем стоимость в договоре и не меняем её в процессе.',
              },
              {
                icon: Target,
                title: 'Ответственность',
                desc: 'Даём гарантию 10 лет на все работы. Если что-то не так — исправим за свой счёт. Это наш принцип.',
              },
              {
                icon: Clock,
                title: 'Оперативность',
                desc: 'Расчёт сметы за 24 часа. Выезд на объект в согласованные сроки. Монтаж фундамента за 1 день.',
              },
              {
                icon: Users,
                title: 'Командная работа',
                desc: 'Каждый объект ведёт прораб. Бригада монтажников с опытом от 5 лет. Координируем все этапы.',
              },
              {
                icon: Award,
                title: 'Профессионализм',
                desc: 'Постоянно обучаем сотрудников новым технологиям. Следим за инновациями в строительной отрасли.',
              },
            ].map((value, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 card-hover border border-gray-100">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon size={24} className="text-accent" />
                </div>
                <h3 className="font-bold text-primary text-lg mb-2">{value.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">Наша команда</h2>
            <p className="text-text-muted mt-3">Профессионалы, которые создают надёжные фундаменты</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Алексей Смирнов', role: 'Директор', exp: '12 лет в строительстве' },
              { name: 'Дмитрий Козлов', role: 'Главный инженер', exp: '8 лет опыта' },
              { name: 'Сергей Петров', role: 'Прораб', exp: '10 лет в монтаже' },
              { name: 'Андрей Волков', role: 'Менеджер проектов', exp: '5 лет в отрасли' },
            ].map((member, idx) => (
              <div key={idx} className="text-center">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">{member.name[0]}</span>
                </div>
                <h3 className="font-semibold text-primary">{member.name}</h3>
                <p className="text-accent text-sm font-medium">{member.role}</p>
                <p className="text-text-muted text-xs mt-1">{member.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">Сертификаты и лицензии</h2>
            <p className="text-text-muted mt-3">Подтверждение нашего профессионализма</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Сертификат соответствия', desc: 'ГОСТ 29319-2018 на винтовые сваи' },
              { title: 'Лицензия СРО', desc: 'Допуск к работам по устройству фундаментов' },
              { title: 'Сертификат качества', desc: 'ISO 9001:2015 система менеджмента качества' },
            ].map((cert, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 text-center border border-gray-100 card-hover">
                <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Award size={28} className="text-accent" />
                </div>
                <h3 className="font-semibold text-primary mb-2">{cert.title}</h3>
                <p className="text-text-muted text-sm">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Доверьте фундамент профессионалам
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Получите бесплатную консультацию и расчёт стоимости вашего проекта
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contacts" className="btn-primary text-base">
              Оставить заявку
              <ChevronRight size={18} />
            </Link>
            <a href="tel:+79241234567" className="flex items-center gap-2 text-white font-semibold hover:text-accent transition-colors text-lg">
              <Phone size={20} />
              +7 (924) 123-45-67
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
