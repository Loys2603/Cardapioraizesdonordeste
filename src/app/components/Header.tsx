import { useState } from 'react';
import { Menu, X, MapPin, Phone } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b-4 border-primary">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">R</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Raízes do Nordeste</h1>
              <p className="text-xs text-muted-foreground">Sabor e Tradição</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('cardapio')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Cardápio
            </button>
            <button
              onClick={() => scrollToSection('fidelidade')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Fidelidade
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>(81) 3333-4444</span>
            </div>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3 border-t border-border pt-4">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('cardapio')}
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Cardápio
            </button>
            <button
              onClick={() => scrollToSection('fidelidade')}
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Fidelidade
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Contato
            </button>
            <div className="flex items-center gap-1 text-muted-foreground py-2">
              <Phone className="w-4 h-4" />
              <span>(81) 3333-4444</span>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
