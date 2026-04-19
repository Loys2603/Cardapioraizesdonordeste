import { useState } from 'react';
import { Gift, Star, TrendingUp, Shield, CheckCircle } from 'lucide-react';

export function Loyalty() {
  const [points, setPoints] = useState(0);
  const [showRegistration, setShowRegistration] = useState(false);
  const [registered, setRegistered] = useState(false);

  const benefits = [
    { points: 100, reward: '10% de desconto', icon: Gift },
    { points: 250, reward: 'Café da manhã grátis', icon: Star },
    { points: 500, reward: '20% de desconto', icon: TrendingUp },
    { points: 1000, reward: 'Prato principal grátis', icon: Gift }
  ];

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistered(true);
    setShowRegistration(false);
    setPoints(50);
  };

  return (
    <section id="fidelidade" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Programa de Fidelidade</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Acumule pontos a cada compra e ganhe descontos progressivos e recompensas exclusivas
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {!registered ? (
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white text-center mb-8">
              <Gift className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Faça Parte do Clube Raízes!</h3>
              <p className="mb-6">
                Cadastre-se gratuitamente e comece a acumular pontos em suas compras.
                Ganhe 50 pontos de boas-vindas!
              </p>
              <button
                onClick={() => setShowRegistration(true)}
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Quero me Cadastrar
              </button>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-accent to-accent/80 rounded-2xl p-8 text-white text-center mb-8">
              <CheckCircle className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Bem-vindo ao Clube Raízes!</h3>
              <p className="mb-4">Você já tem {points} pontos acumulados</p>
              <div className="bg-white/20 rounded-lg p-4 inline-block">
                <p className="text-sm">Próxima recompensa em {100 - points} pontos</p>
                <div className="bg-white/30 rounded-full h-2 w-64 mt-2">
                  <div
                    className="bg-white rounded-full h-2 transition-all"
                    style={{ width: `${(points / 100) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          {showRegistration && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-2xl p-8 max-w-md w-full">
                <h3 className="text-2xl font-bold mb-6">Cadastro Clube Raízes</h3>
                <form onSubmit={handleRegistration} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome Completo</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefone</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="(81) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Data de Nascimento</label>
                    <input
                      type="date"
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      required
                      className="mt-1"
                      id="lgpd-consent"
                    />
                    <label htmlFor="lgpd-consent" className="text-xs text-muted-foreground">
                      Concordo com a coleta e uso dos meus dados conforme a{' '}
                      <a href="#" className="text-primary underline">Lei Geral de Proteção de Dados (LGPD)</a>.
                      Meus dados serão usados apenas para o programa de fidelidade e campanhas segmentadas.
                    </label>
                  </div>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setShowRegistration(false)}
                      className="flex-1 px-6 py-3 border border-border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Cadastrar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-muted/30 rounded-lg p-6 flex items-center gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">{benefit.points} pontos</div>
                    <div className="text-sm text-muted-foreground">{benefit.reward}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Seus Dados Estão Protegidos</h4>
                <p className="text-sm text-blue-800">
                  Respeitamos sua privacidade. Seus dados são coletados e armazenados de acordo com a LGPD
                  (Lei Geral de Proteção de Dados). Usamos suas informações apenas para:
                </p>
                <ul className="text-sm text-blue-800 mt-2 space-y-1 ml-4">
                  <li>• Acumular e resgatar pontos do programa de fidelidade</li>
                  <li>• Enviar ofertas personalizadas baseadas em seu perfil e frequência</li>
                  <li>• Melhorar sua experiência em nossas unidades</li>
                </ul>
                <p className="text-xs text-blue-700 mt-3">
                  Você pode solicitar a exclusão dos seus dados a qualquer momento através do nosso contato.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
