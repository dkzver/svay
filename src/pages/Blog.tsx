import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'Как выбрать винтовые сваи для фундамента дома',
    date: '15 ноября 2024',
    readTime: '5 мин',
    category: 'Советы',
    excerpt: 'Разбираем основные критерии выбора винтовых свай: диаметр, длина, толщина стенки. Как не переплатить и получить надёжный фундамент.',
  },
  {
    id: 2,
    title: 'Свайно-винтовой фундамент: плюсы и минусы',
    date: '8 ноября 2024',
    readTime: '7 мин',
    category: 'Обзоры',
    excerpt: 'Подробный обзор свайно-винтовых фундаментов. Когда стоит выбирать этот тип фундамента, а когда лучше рассмотреть альтернативы.',
  },
  {
    id: 3,
    title: 'Монтаж свай зимой: особенности и преимущества',
    date: '1 ноября 2024',
    readTime: '4 мин',
    category: 'Технологии',
    excerpt: 'Можно ли устанавливать винтовые сваи зимой? Рассказываем о преимуществах зимнего монтажа и нюансах работы в холодное время года.',
  },
  {
    id: 4,
    title: 'Габионы: что это и где применяются',
    date: '25 октября 2024',
    readTime: '6 мин',
    category: 'Обзоры',
    excerpt: 'Всё о габионных конструкциях: виды, применение, преимущества. Подпорные стены, заборы, декоративные элементы из габионов.',
  },
  {
    id: 5,
    title: 'Как рассчитать количество свай для фундамента',
    date: '18 октября 2024',
    readTime: '8 мин',
    category: 'Советы',
    excerpt: 'Пошаговая инструкция по расчёту количества и расположения винтовых свай. Формулы, примеры, практические рекомендации.',
  },
  {
    id: 6,
    title: 'Фундамент для забора на винтовых сваях',
    date: '10 октября 2024',
    readTime: '5 мин',
    category: 'Технологии',
    excerpt: 'Почему винтовые сваи — идеальное решение для забора. Сравнение с ленточным фундаментом, экономия, долговечность.',
  },
];

export default function Blog() {
  return (
    <main className="pt-24 md:pt-32">
      {/* Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Блог</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">
            Полезные статьи и советы
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Делимся опытом и знаниями о фундаментах, сваях и строительстве. 
            Помогаем принять правильные решения.
          </p>
        </div>
      </section>

      {/* Blog posts */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Featured post */}
          <div className="mb-12">
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden card-hover group">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-[4/3] md:aspect-auto bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-4">
                      <Calendar size={32} className="text-accent" />
                    </div>
                    <span className="bg-accent/10 text-accent text-xs font-medium px-3 py-1 rounded-full">
                      {posts[0].category}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-sm text-text-muted mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {posts[0].date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {posts[0].readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {posts[0].title}
                  </h2>
                  <p className="text-text-muted mb-6">{posts[0].excerpt}</p>
                  <Link to="#" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
                    Читать статью <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden card-hover group"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative">
                  <Calendar size={40} className="text-primary/15" />
                  <span className="absolute top-3 left-3 bg-accent/10 text-accent text-xs font-medium px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-text-muted mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-semibold text-primary text-base mb-2 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-text-muted text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link to="#" className="inline-flex items-center gap-1 text-accent font-medium text-sm hover:gap-2 transition-all">
                    Читать <ChevronRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load more */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all">
              Загрузить ещё
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
