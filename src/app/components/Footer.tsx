import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary text-lg font-bold">R</span>
              </div>
              <div>
                <h3 className="font-bold">Raízes do Nordeste</h3>
                <p className="text-xs text-white/80">Sabor e Tradição</p>
              </div>
            </div>
            <p className="text-sm text-white/80">
              Levando a autêntica culinária nordestina para todo o Brasil desde 2020.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#cardapio" className="hover:text-white transition-colors">Cardápio</a>
              </li>
              <li>
                <a href="#fidelidade" className="hover:text-white transition-colors">Fidelidade</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">Contato</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Rua da Aurora, 123 - Recife/PE</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>(81) 3333-4444</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>contato@raizesdonordeste.com.br</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-sm text-white/80">Siga-nos para novidades e promoções exclusivas!</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6">
          <div className="text-center text-sm text-white/60">
            <p className="mb-2">
              © 2026 Raízes do Nordeste. Todos os direitos reservados.
            </p>
            <p className="text-xs">
              CNPJ: 12.345.678/0001-90 | Razão Social: Raízes do Nordeste Alimentação Ltda.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
