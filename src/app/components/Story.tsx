import { Users, Store, Award } from 'lucide-react';

export function Story() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">Nossa História</h2>

          <div className="prose prose-lg max-w-none text-foreground/80 mb-12">
            <p className="mb-4">
              Há pouco mais de seis anos, Dona Francisca e seus dois filhos abriram as portas da primeira
              unidade da <strong>Raízes do Nordeste</strong> em um bairro tradicional de Recife. O que começou
              como um pequeno negócio familiar hoje se transformou em uma rede de lanchonetes nordestinas em
              franca expansão, presente em diferentes capitais e cidades do interior do Brasil.
            </p>
            <p className="mb-4">
              Nossa proposta sempre foi clara: levar a culinária nordestina para o dia a dia urbano, com
              rapidez, qualidade e identidade cultural. Tapiocas, cuscuz recheado, bolo de macaxeira, sucos
              regionais e cafés da manhã completos conquistaram um público fiel, desde trabalhadores que
              passam antes do expediente até famílias nos fins de semana.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Negócio Familiar</h3>
              <p className="text-sm text-muted-foreground">
                Comandado por Dona Francisca com amor e dedicação
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Store className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Expansão Nacional</h3>
              <p className="text-sm text-muted-foreground">
                Presente em diversas capitais e cidades do interior
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Qualidade Garantida</h3>
              <p className="text-sm text-muted-foreground">
                Padronização e rastreabilidade em todas as unidades
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
