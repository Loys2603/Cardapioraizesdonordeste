export function Hero() {
  return (
    <section id="inicio" className="relative bg-gradient-to-br from-primary to-secondary py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quando Tradição Encontra Tecnologia
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            O cheiro de cuscuz quente, café passado na hora e manteiga de garrafa agora ao alcance de um clique.
            Da nossa família para a sua mesa, com toda a autenticidade nordestina.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('cardapio')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Ver Cardápio
            </button>
            <button
              onClick={() => document.getElementById('fidelidade')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Programa de Fidelidade
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
