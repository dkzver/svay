import { useState } from 'react';
import { X, MapPin, ChevronRight, Building2 } from 'lucide-react';

const categories = ['Все', 'Жилой дом', 'Баня', 'Забор', 'Коммерция', 'Благоустройство'];

const projects = [
  { id: 1, title: 'Дом из бруса 8×10 м', location: 'Приморский край, п. Кневичи', type: 'Жилой дом', date: 'Октябрь 2024', desc: 'Фундамент на 24 сваях СВЛ-108/2500. Монтаж за 1 день. Обвязка швеллером.', area: '80 м²' },
  { id: 2, title: 'Баня 6×4 м на сваях', location: 'Хабаровск', type: 'Баня', date: 'Сентябрь 2024', desc: 'Свайно-винтовой фундамент из 12 свай СВЛ-89/2500. Обвязка брусом 150×150.', area: '24 м²' },
  { id: 3, title: 'Забор на винтовых сваях', location: 'Владивосток', type: 'Забор', date: 'Август 2024', desc: 'Забор из профнастила длиной 120 м на сваях СВЛ-76/2000. Высота 2 м.', area: '120 пог.м' },
  { id: 4, title: 'Каркасный дом 10×12 м', location: 'Находка', type: 'Жилой дом', date: 'Июль 2024', desc: 'Фундамент из 36 свай СВЛ-108/3000 с обвязкой швеллером 20П. Сложный рельеф.', area: '120 м²' },
  { id: 5, title: 'Терраса с габионами', location: 'Артём', type: 'Благоустройство', date: 'Июнь 2024', desc: 'Подпорная стена из габионов высотой 2.5 м и длиной 15 м. Терраса 40 м².', area: '40 м²' },
  { id: 6, title: 'Коммерческий объект', location: 'Уссурийск', type: 'Коммерция', date: 'Май 2024', desc: 'Фундамент под складское помещение 15×20 м. 48 свай СВЛ-133/3500.', area: '300 м²' },
  { id: 7, title: 'Дачный дом 6×6 м', location: 'Спасск-Дальний', type: 'Жилой дом', date: 'Апрель 2024', desc: 'Фундамент из 9 свай СВЛ-89/2500 с обвязкой брусом. Бюджетный вариант.', area: '36 м²' },
  { id: 8, title: 'Забор с кирпичными столбами', location: 'Владивосток', type: 'Забор', date: 'Март 2024', desc: 'Сваи СВЛ-108/2500 под кирпичные столбы. 35 опор. Монтаж за 2 дня.', area: '70 пог.м' },
  { id: 9, title: 'Баня 8×6 с мансардой', location: 'Хабаровский край', type: 'Баня', date: 'Февраль 2024', desc: 'Усиленный фундамент из 16 свай СВЛ-108/3000. Зима — сложные условия.', area: '48 м²' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Все');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === 'Все'
    ? projects
    : projects.filter(p => p.type === activeCategory);

  return (
    <main className="pt-24 md:pt-32">
      {/* Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Портфолио</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">
            Наши реализованные проекты
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Более 1500 объектов по всей России. Каждый проект — это наша гордость и ответственность.
          </p>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-accent text-white'
                    : 'bg-gray-100 text-text-main hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-primary/5 cursor-pointer card-hover"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent z-10 group-hover:from-primary/90 transition-all"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Building2 size={56} className="text-primary/15 group-hover:scale-110 transition-transform" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                  <span className="inline-block bg-accent/90 text-white text-xs font-medium px-2.5 py-1 rounded-full mb-2">
                    {project.type}
                  </span>
                  <h3 className="text-white font-semibold text-lg mb-1">{project.title}</h3>
                  <div className="flex items-center gap-1 text-white/70 text-sm">
                    <MapPin size={12} />
                    {project.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 lightbox-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center rounded-t-2xl">
              <Building2 size={64} className="text-primary/20" />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
                aria-label="Закрыть"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6 md:p-8">
              <span className="inline-block bg-accent/10 text-accent text-xs font-medium px-2.5 py-1 rounded-full mb-3">
                {selectedProject.type}
              </span>
              <h2 className="text-2xl font-bold text-primary mb-2">{selectedProject.title}</h2>
              <div className="flex items-center gap-1 text-text-muted text-sm mb-4">
                <MapPin size={14} />
                {selectedProject.location}
              </div>
              <p className="text-text-muted mb-6">{selectedProject.desc}</p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="text-sm text-text-muted">Площадь</div>
                  <div className="font-semibold text-primary">{selectedProject.area}</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="text-sm text-text-muted">Дата</div>
                  <div className="font-semibold text-primary text-sm">{selectedProject.date}</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="text-sm text-text-muted">Тип</div>
                  <div className="font-semibold text-primary text-sm">{selectedProject.type}</div>
                </div>
              </div>
              <a
                href="tel:+79241234567"
                className="btn-primary w-full justify-center"
              >
                Обсудить похожий проект
                <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
