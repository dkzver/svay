import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Phone, ShoppingCart, Filter } from 'lucide-react';

const categories = ['Все', 'Винтовые сваи', 'Оголовки', 'Габионы', 'Комплектующие'];

const products = [
  { id: 1, name: 'Свая винтовая СВЛ-57/300', category: 'Винтовые сваи', diameter: '57 мм', length: '3000 мм', wall: '3.0 мм', blade: '200 мм', price: '1 200', unit: 'шт' },
  { id: 2, name: 'Свая винтовая СВЛ-76/250', category: 'Винтовые сваи', diameter: '76 мм', length: '2500 мм', wall: '3.5 мм', blade: '250 мм', price: '1 650', unit: 'шт' },
  { id: 3, name: 'Свая винтовая СВЛ-89/250', category: 'Винтовые сваи', diameter: '89 мм', length: '2500 мм', wall: '3.5 мм', blade: '250 мм', price: '1 900', unit: 'шт' },
  { id: 4, name: 'Свая винтовая СВЛ-108/300', category: 'Винтовые сваи', diameter: '108 мм', length: '3000 мм', wall: '4.0 мм', blade: '300 мм', price: '2 500', unit: 'шт' },
  { id: 5, name: 'Свая винтовая СВЛ-133/350', category: 'Винтовые сваи', diameter: '133 мм', length: '3500 мм', wall: '4.0 мм', blade: '350 мм', price: '3 200', unit: 'шт' },
  { id: 6, name: 'Свая винтовая СВЛ-159/400', category: 'Винтовые сваи', diameter: '159 мм', length: '4000 мм', wall: '5.0 мм', blade: '400 мм', price: '4 100', unit: 'шт' },
  { id: 7, name: 'Оголовок ОГ-57 (200×200)', category: 'Оголовки', diameter: '57 мм', length: '-', wall: '-', blade: '200×200 мм', price: '350', unit: 'шт' },
  { id: 8, name: 'Оголовок ОГ-76 (200×200)', category: 'Оголовки', diameter: '76 мм', length: '-', wall: '-', blade: '200×200 мм', price: '400', unit: 'шт' },
  { id: 9, name: 'Оголовок ОГ-89 (250×250)', category: 'Оголовки', diameter: '89 мм', length: '-', wall: '-', blade: '250×250 мм', price: '500', unit: 'шт' },
  { id: 10, name: 'Оголовок ОГ-108 (250×250)', category: 'Оголовки', diameter: '108 мм', length: '-', wall: '-', blade: '250×250 мм', price: '600', unit: 'шт' },
  { id: 11, name: 'Габион коробчатый 2×1×0.5', category: 'Габионы', diameter: '-', length: '2000×1000×500', wall: '-', blade: 'Сетка 2.7 мм', price: '1 800', unit: 'шт' },
  { id: 12, name: 'Габион коробчатый 3×1×1', category: 'Габионы', diameter: '-', length: '3000×1000×1000', wall: '-', blade: 'Сетка 2.7 мм', price: '3 500', unit: 'шт' },
  { id: 13, name: 'Геотекстиль Дорнит 300', category: 'Комплектующие', diameter: '-', length: 'Рулон 50 м²', wall: '-', blade: 'Плотность 300 г/м²', price: '2 200', unit: 'рулон' },
  { id: 14, name: 'Шуруп фундаментный СМ-76', category: 'Комплектующие', diameter: '76 мм', length: '600 мм', wall: '-', blade: 'Шнек 120 мм', price: '800', unit: 'шт' },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('Все');

  const filteredProducts = activeCategory === 'Все'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <main className="pt-24 md:pt-32">
      {/* Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Каталог</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">
            Винтовые сваи и комплектующие
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Собственное производство. Все сваи проходят контроль качества. 
            Доставка по всей России.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filters */}
          <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
            <Filter size={18} className="text-text-muted flex-shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-accent text-white'
                    : 'bg-gray-100 text-text-main hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden card-hover group"
              >
                {/* Product image placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto bg-primary/5 rounded-full flex items-center justify-center mb-2">
                      <ShoppingCart size={32} className="text-primary/30" />
                    </div>
                    <span className="text-xs text-text-muted">{product.category}</span>
                  </div>
                  <div className="absolute top-3 right-3 bg-accent text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    В наличии
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-primary text-base mb-3 group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>

                  <div className="grid grid-cols-2 gap-2 text-xs mb-4">
                    <div className="bg-gray-50 rounded-lg px-3 py-2">
                      <span className="text-text-muted block">Диаметр</span>
                      <span className="font-medium text-primary">{product.diameter}</span>
                    </div>
                    <div className="bg-gray-50 rounded-lg px-3 py-2">
                      <span className="text-text-muted block">Длина</span>
                      <span className="font-medium text-primary">{product.length}</span>
                    </div>
                    <div className="bg-gray-50 rounded-lg px-3 py-2">
                      <span className="text-text-muted block">Стенка</span>
                      <span className="font-medium text-primary">{product.wall}</span>
                    </div>
                    <div className="bg-gray-50 rounded-lg px-3 py-2">
                      <span className="text-text-muted block">Лопасть</span>
                      <span className="font-medium text-primary">{product.blade}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div>
                      <span className="text-2xl font-bold text-primary">{product.price} ₽</span>
                      <span className="text-text-muted text-sm">/{product.unit}</span>
                    </div>
                    <Link
                      to="/contacts"
                      className="bg-accent hover:bg-accent-hover text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
                    >
                      Заказать
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-text-muted">Товары в данной категории скоро появятся</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Нужна помощь с выбором?
          </h2>
          <p className="text-text-muted mb-6">
            Наши специалисты помогут подобрать сваи под ваш проект и рассчитают необходимое количество
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
