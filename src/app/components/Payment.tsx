import { CreditCard, Smartphone, Banknote, Shield } from 'lucide-react';

export function Payment() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Formas de Pagamento</h2>
            <p className="text-muted-foreground">
              Pagamentos seguros processados por parceiros especializados
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-muted/30 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Cartões</h3>
              <p className="text-sm text-muted-foreground">
                Crédito e Débito (Visa, Mastercard, Elo)
              </p>
            </div>

            <div className="bg-muted/30 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">PIX</h3>
              <p className="text-sm text-muted-foreground">
                Pagamento instantâneo e aprovação imediata
              </p>
            </div>

            <div className="bg-muted/30 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Banknote className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Dinheiro</h3>
              <p className="text-sm text-muted-foreground">
                Pagamento em espécie na unidade
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Segurança e Arquitetura de Pagamentos</h4>
                <p className="text-sm text-blue-800 mb-3">
                  A Raízes do Nordeste não processa pagamentos diretamente. Utilizamos uma arquitetura moderna
                  baseada em integração com serviços especializados externos.
                </p>
                <div className="text-sm text-blue-800 space-y-2">
                  <p><strong>Como funciona:</strong></p>
                  <ol className="ml-4 space-y-1">
                    <li>1. Nosso sistema solicita o pagamento ao processador externo</li>
                    <li>2. O processador realiza a transação de forma segura</li>
                    <li>3. Recebemos confirmação ou negativa da operação</li>
                    <li>4. O status do pedido é atualizado automaticamente</li>
                  </ol>
                  <p className="mt-3 text-xs">
                    <strong>Benefícios:</strong> Maior segurança, conformidade com normas PCI-DSS,
                    redução de riscos e melhor escalabilidade para atender todas as unidades da rede.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
