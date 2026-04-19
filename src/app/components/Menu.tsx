import { useState } from 'react';
import { Coffee, UtensilsCrossed, IceCream, ShoppingCart } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Cuscuz Recheado',
    description: 'Cuscuz artesanal com recheio de carne de sol, queijo coalho e manteiga de garrafa',
    price: 18.90,
    category: 'cafes',
    image: 'https://images.unsplash.com/photo-1542379306-fe1b8bdcd83e?w=400'
  },
  {
    id: 2,
    name: 'Tapioca Completa',
    description: 'Massa fresca com queijo coalho, carne de sol desfiada e manteiga de garrafa',
    price: 16.50,
    category: 'cafes'
  },
  {
    id: 3,
    name: 'Café da Manhã Regional',
    description: 'Café passado, cuscuz, ovo mexido, queijo coalho, manteiga de garrafa e frutas',
    price: 24.90,
    category: 'cafes',
    image: 'https://images.unsplash.com/photo-1676515231566-eb804ac487c1?w=400'
  },
  {
    id: 4,
    name: 'Bolo de Macaxeira',
    description: 'Tradicional bolo de macaxeira com coco ralado, quentinho e fofinho',
    price: 8.90,
    category: 'cafes'
  },
  {
    id: 5,
    name: 'Baião de Dois',
    description: 'Arroz com feijão verde, queijo coalho, carne de sol e vinagrete',
    price: 28.90,
    category: 'pratos',
    image: 'https://images.unsplash.com/photo-1630413612328-29182aa41e79?w=400'
  },
  {
    id: 6,
    name: 'Carne de Sol Acebolada',
    description: 'Carne de sol grelhada com cebola caramelizada, macaxeira frita e arroz',
    price: 32.90,
    category: 'pratos'
  },
  {
    id: 7,
    name: 'Escondidinho de Carne Seca',
    description: 'Purê de macaxeira gratinado recheado com carne seca desfiada',
    price: 26.90,
    category: 'pratos'
  },
  {
    id: 8,
    name: 'Buchada de Bode',
    description: 'Prato tradicional nordestino servido com arroz, pirão e farofa',
    price: 35.90,
    category: 'pratos'
  },
  {
    id: 9,
    name: 'Suco de Cajá',
    description: 'Suco natural da fruta típica do Nordeste, refrescante e saboroso',
    price: 8.00,
    category: 'bebidas',
    image: 'https://images.unsplash.com/photo-1631606517999-3778ba6f7d0b?w=400'
  },
  {
    id: 10,
    name: 'Suco de Umbu',
    description: 'Suco natural de umbu, fruta do sertão nordestino',
    price: 8.00,
    category: 'bebidas'
  },
  {
    id: 11,
    name: 'Cajuína',
    description: 'Bebida tradicional do Piauí, clarificada e adocicada',
    price: 6.50,
    category: 'bebidas'
  },
  {
    id: 12,
    name: 'Café Passado',
    description: 'Café tradicional coado na hora, forte e aromático',
    price: 5.00,
    category: 'bebidas'
  }
];

const categories = [
  { id: 'cafes', name: 'Cafés da Manhã', icon: Coffee },
  { id: 'pratos', name: 'Pratos Principais', icon: UtensilsCrossed },
  { id: 'bebidas', name: 'Bebidas', icon: IceCream }
];

export function Menu() {
  const [activeCategory, setActiveCategory] = useState('cafes');
  const [cart, setCart] = useState<{ [key: number]: number }>({});

  const addToCart = (itemId: number) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const filteredItems = menuItems.filter(item => item.category === activeCategory);
  const cartCount = Object.values(cart).reduce((sum, count) => sum + count, 0);

  return (
    <section id="cardapio" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Nosso Cardápio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sabores autênticos do Nordeste brasileiro, preparados com ingredientes selecionados e muito carinho
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map(category => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-foreground hover:bg-primary/10'
                }`}
              >
                <Icon className="w-5 h-5" />
                {category.name}
              </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">
                    R$ {item.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => addToCart(item.id)}
                    className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors flex items-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Adicionar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {cartCount > 0 && (
          <div className="fixed bottom-6 right-6 bg-accent text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            <span className="font-semibold">{cartCount} {cartCount === 1 ? 'item' : 'itens'}</span>
          </div>
        )}
      </div>
    </section>
  );
}
