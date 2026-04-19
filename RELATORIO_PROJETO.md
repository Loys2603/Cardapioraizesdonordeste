# Relatório do Projeto: Cardápio Digital Raízes do Nordeste

## 1. Introdução

Este relatório apresenta a documentação completa do desenvolvimento do cardápio digital para a rede de lanchonetes **Raízes do Nordeste**. O projeto foi desenvolvido como uma aplicação web moderna que une a tradição da culinária nordestina com as tecnologias atuais, refletindo o tema "Quando Tradição Encontra Tecnologia".

A aplicação foi construída pensando em oferecer uma experiência digital acessível, responsiva e que transmita a identidade cultural nordestina através de cores, elementos visuais e conteúdo.

## 2. Tecnologias Utilizadas

### 2.1 React
Escolhi utilizar React como framework principal porque ele facilita muito a criação de interfaces interativas. Com React, consegui dividir a aplicação em componentes reutilizáveis, o que torna o código mais organizado e fácil de manter.

### 2.2 TypeScript
Optei por usar TypeScript ao invés de JavaScript puro porque ele adiciona tipagem ao código. Isso ajuda a evitar erros durante o desenvolvimento e torna o código mais seguro e previsível.

### 2.3 Tailwind CSS
Para a estilização, utilizei Tailwind CSS versão 4. Essa ferramenta permite aplicar estilos diretamente nos elementos através de classes utilitárias, o que acelera bastante o desenvolvimento e mantém um padrão visual consistente.

### 2.4 Lucide React
Para os ícones da aplicação, escolhi a biblioteca Lucide React, que oferece ícones modernos, leves e de fácil utilização.

## 3. Estrutura do Projeto

### 3.1 Organização dos Arquivos

```
src/
├── app/
│   ├── components/
│   │   ├── Header.tsx          # Cabeçalho e navegação
│   │   ├── Hero.tsx            # Seção de destaque inicial
│   │   ├── Story.tsx           # História da empresa
│   │   ├── Menu.tsx            # Cardápio digital
│   │   ├── Loyalty.tsx         # Programa de fidelidade
│   │   ├── Payment.tsx         # Informações de pagamento
│   │   ├── Contact.tsx         # Formulário de contato
│   │   └── Footer.tsx          # Rodapé
│   └── App.tsx                 # Componente principal
└── styles/
    └── theme.css               # Tema e cores personalizadas
```

Essa organização em componentes separados foi pensada para facilitar a manutenção. Se precisar alterar apenas o cardápio, por exemplo, basta mexer no arquivo `Menu.tsx` sem afetar o resto da aplicação.

## 4. Descrição dos Componentes

### 4.1 Header (Cabeçalho)

O componente Header é o primeiro elemento que o usuário vê ao acessar o site. Ele contém:

- **Logo da empresa**: Um círculo com a letra "R" e o nome "Raízes do Nordeste"
- **Menu de navegação**: Links para as principais seções (Início, Cardápio, Fidelidade, Contato)
- **Informações de contato**: Telefone visível para facilitar o contato
- **Menu responsivo**: Em telas menores (celulares), o menu se transforma em um botão hambúrguer

**Funcionalidade JavaScript implementada:**
```typescript
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  }
};
```

Essa função permite navegação suave entre as seções. Quando o usuário clica em um item do menu, a página rola suavemente até a seção desejada, criando uma experiência mais agradável.

### 4.2 Hero (Seção de Destaque)

A Hero é a primeira grande seção da página. Aqui apresento:

- O slogan principal: "Quando Tradição Encontra Tecnologia"
- Um texto que evoca os sentidos (cheiro de cuscuz, café passado)
- Botões de ação que direcionam para o cardápio e programa de fidelidade

O design utiliza um gradiente das cores primária e secundária (tons de terracota) para transmitir acolhimento e calor, características da cultura nordestina.

### 4.3 Story (Nossa História)

Este componente conta a trajetória da Raízes do Nordeste, desde sua fundação por Dona Francisca em Recife até se tornar uma rede em expansão. Incluí:

- Texto narrativo sobre a história da empresa
- Três cards destacando: Negócio Familiar, Expansão Nacional e Qualidade Garantida
- Ícones visuais que complementam cada informação

A ideia foi humanizar a marca, mostrando que por trás da tecnologia existe uma família real com história e tradição.

### 4.4 Menu (Cardápio Digital)

Este é um dos componentes mais importantes e interativos da aplicação. Suas funcionalidades incluem:

**Sistema de categorias:**
- Cafés da Manhã
- Pratos Principais
- Bebidas

Implementei um sistema de abas onde o usuário clica na categoria desejada e os pratos são filtrados dinamicamente:

```typescript
const filteredItems = menuItems.filter(item => item.category === activeCategory);
```

**Carrinho de compras:**
Quando o usuário adiciona itens, um contador aparece no canto inferior direito mostrando quantos itens foram selecionados. Usei o hook `useState` do React para gerenciar esse estado:

```typescript
const [cart, setCart] = useState<{ [key: number]: number }>({});

const addToCart = (itemId: number) => {
  setCart(prev => ({
    ...prev,
    [itemId]: (prev[itemId] || 0) + 1
  }));
};
```

**Apresentação dos pratos:**
Cada prato tem:
- Imagem (quando disponível)
- Nome
- Descrição detalhada
- Preço
- Botão "Adicionar" com ícone de carrinho

As imagens foram obtidas do Unsplash para dar um aspecto mais profissional e apetitoso ao cardápio.

### 4.5 Loyalty (Programa de Fidelidade)

O componente de fidelidade implementa os requisitos de LGPD e gamificação solicitados:

**Funcionalidades principais:**

1. **Tela de boas-vindas**: Convida o usuário a se cadastrar oferecendo 50 pontos iniciais

2. **Formulário de cadastro**: Coleta dados essenciais:
   - Nome completo
   - Email
   - Telefone
   - Data de nascimento (para segmentação por idade)
   - Checkbox de consentimento LGPD

3. **Sistema de pontos**: Mostra ao usuário:
   - Pontos acumulados
   - Próxima recompensa
   - Barra de progresso visual

4. **Benefícios escalonados**:
   - 100 pontos: 10% de desconto
   - 250 pontos: Café da manhã grátis
   - 500 pontos: 20% de desconto
   - 1000 pontos: Prato principal grátis

**Conformidade com LGPD:**
Incluí uma seção específica explicando:
- Como os dados são protegidos
- Para que serão usados (fidelização, ofertas personalizadas)
- Direito de exclusão dos dados
- Transparência total no uso das informações

Exemplo do texto de consentimento:
```typescript
<label htmlFor="lgpd-consent" className="text-xs text-muted-foreground">
  Concordo com a coleta e uso dos meus dados conforme a
  Lei Geral de Proteção de Dados (LGPD). Meus dados serão usados
  apenas para o programa de fidelidade e campanhas segmentadas.
</label>
```

**Modal interativo:**
Utilizei um modal (janela sobreposta) para o formulário de cadastro. Quando o usuário clica em "Cadastrar", o modal fecha e aparece uma tela de sucesso mostrando os pontos iniciais.

### 4.6 Payment (Formas de Pagamento)

Este componente explica a arquitetura de pagamentos da empresa, atendendo ao requisito do projeto:

**Métodos aceitos:**
- Cartões de crédito e débito
- PIX
- Dinheiro

**Explicação da arquitetura:**
Criei uma seção específica explicando que a Raízes do Nordeste não processa pagamentos diretamente. O fluxo funciona assim:

1. Sistema solicita pagamento ao processador externo
2. Processador realiza a transação segura
3. Sistema recebe confirmação ou negativa
4. Status do pedido é atualizado

**Benefícios destacados:**
- Maior segurança
- Conformidade PCI-DSS
- Redução de riscos
- Escalabilidade

Essa abordagem é considerada boa prática no mercado, já que empresas especializadas em pagamento têm mais recursos para garantir segurança e conformidade com regulamentações.

### 4.7 Contact (Formulário de Contato)

O formulário de contato é totalmente funcional e validado. Estruturei em duas colunas:

**Coluna esquerda - Informações:**
- Endereço da matriz em Recife
- Telefones de contato
- Emails
- Horário de funcionamento

**Coluna direita - Formulário:**
Campos incluídos:
- Nome completo (obrigatório)
- Email (obrigatório, com validação de formato)
- Telefone (opcional)
- Assunto (seleção obrigatória): Dúvida, Sugestão, Elogio, Reclamação, Franquia, Outro
- Mensagem (obrigatória, área de texto)

**Interatividade JavaScript:**
Implementei um sistema de feedback visual. Quando o usuário envia o formulário:

```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setSubmitted(true);
  setTimeout(() => {
    setSubmitted(false);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  }, 3000);
};
```

1. O formulário é substituído por uma mensagem de sucesso
2. Aparece um ícone de check verde
3. Após 3 segundos, retorna ao formulário vazio

Isso dá ao usuário confirmação clara de que a mensagem foi enviada.

### 4.8 Footer (Rodapé)

O rodapé completa a página com:
- Logo e descrição da empresa
- Links rápidos para todas as seções
- Informações de contato repetidas para conveniência
- Links para redes sociais (Facebook e Instagram)
- Informações legais (CNPJ, razão social, copyright)

## 5. Sistema de Cores e Identidade Visual

Para transmitir a identidade nordestina, personalizei completamente o tema de cores no arquivo `theme.css`:

### Paleta de Cores Escolhida:

```css
--background: #FFF9F0;        /* Bege claro (cor de areia)  */
--foreground: #2D1B0E;        /* Marrom escuro (texto) */
--primary: #D2691E;           /* Terracota (cor principal) */
--secondary: #F4A460;         /* Sandy brown (secundária) */
--accent: #228B22;            /* Verde floresta (destaque) */
```

**Justificativa das escolhas:**

- **Terracota (#D2691E)**: Remete ao barro, artesanato e arquitetura nordestina
- **Tons quentes**: Transmitem acolhimento e calor, característicos da hospitalidade nordestina
- **Verde**: Representa a vegetação do sertão e caatinga
- **Bege claro**: Evoca areia, praias e luminosidade do Nordeste

Essas cores foram aplicadas consistentemente em:
- Botões de ação
- Destaques e ênfases
- Fundos de seção
- Ícones e elementos decorativos

## 6. Responsividade

A aplicação foi desenvolvida com abordagem "mobile-first", garantindo boa experiência em todos os dispositivos:

### Técnicas utilizadas:

**Grid responsivo:**
```typescript
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
```

Isso significa:
- Móvel: 1 coluna
- Tablet (md): 2 colunas
- Desktop (lg): 3 colunas

**Menu hambúrguer:**
Em telas pequenas, o menu completo é substituído por um ícone que, ao ser clicado, expande as opções.

**Flexbox:**
Utilizado para organizar elementos que devem se reorganizar em telas menores:
```typescript
<div className="flex flex-col sm:flex-row gap-4">
```

## 7. Interatividade JavaScript

### 7.1 Navegação Suave (Smooth Scroll)
Implementei scroll suave para melhorar a experiência do usuário ao navegar entre seções.

### 7.2 Gerenciamento de Estado
Utilizei hooks do React (`useState`) para:
- Controlar abertura/fechamento do menu mobile
- Gerenciar categoria ativa no cardápio
- Manter contagem do carrinho
- Controlar envio do formulário de contato
- Gerenciar cadastro no programa de fidelidade

### 7.3 Modais Interativos
O modal de cadastro no programa de fidelidade:
- Aparece quando o usuário clica em "Cadastrar"
- Pode ser fechado clicando em "Cancelar"
- Possui validação de campos obrigatórios
- Mostra feedback visual após conclusão

## 8. Aspectos de Segurança e Privacidade

### 8.1 LGPD
Implementei conformidade com a Lei Geral de Proteção de Dados:

1. **Consentimento explícito**: Checkbox obrigatório
2. **Transparência**: Explicação clara do uso dos dados
3. **Finalidade específica**: Dados usados apenas para fidelização
4. **Direito de exclusão**: Mencionado explicitamente

### 8.2 Arquitetura de Pagamentos
Explicação clara de que:
- Empresa não armazena dados de cartão
- Processamento externo por especialistas
- Conformidade PCI-DSS
- Redução de superfície de ataque

## 9. Experiência do Usuário (UX)

### Decisões de design voltadas para UX:

1. **Cores contrastantes**: Garantem boa legibilidade
2. **Botões grandes**: Fáceis de clicar em dispositivos móveis
3. **Feedback visual**: Usuário sempre sabe o que está acontecendo
4. **Informações progressivas**: Não sobrecarrega o usuário com tudo de uma vez
5. **Calls-to-action claros**: Botões indicam claramente a ação

## 10. Possíveis Melhorias Futuras

Embora a aplicação esteja funcional e completa, algumas melhorias poderiam ser implementadas:

1. **Integração real de backend**: Atualmente o formulário e carrinho são simulados
2. **Sistema de pedidos online**: Permitir pedidos com entrega
3. **Geolocalização**: Mostrar unidade mais próxima do usuário
4. **Avaliações**: Sistema de reviews dos pratos
5. **Fotos próprias**: Substituir imagens do Unsplash por fotos dos pratos reais
6. **Animações**: Adicionar micro-interações para tornar a experiência mais fluida

## 11. Conclusão

O projeto do cardápio digital Raízes do Nordeste conseguiu unir tradição e tecnologia de forma harmoniosa. A identidade nordestina está presente em cada detalhe, desde as cores escolhidas até os textos e descrições dos pratos.

A aplicação atende todos os requisitos propostos:
- ✅ Front-end funcional e completo
- ✅ Tema de identidade nordestina
- ✅ Programa de fidelização com LGPD
- ✅ Explicação do sistema de pagamentos
- ✅ Interatividade JavaScript (menu dinâmico, formulário)
- ✅ Formulário de contato funcional
- ✅ Design responsivo
- ✅ Organização e padronização

A tecnologia utilizada (React + TypeScript + Tailwind) é moderna e amplamente adotada no mercado, garantindo que o código seja mantível e escalável conforme a empresa cresce.

O resultado é uma aplicação que Dona Francisca e seus filhos podem usar com orgulho para apresentar suas delícias nordestinas ao mundo digital, mantendo viva a essência e o calor que fizeram a Raízes do Nordeste conquistar corações desde sua primeira unidade em Recife.

---

**Desenvolvido em:** Abril de 2026
**Tecnologias:** React 18, TypeScript, Tailwind CSS v4
**Responsivo:** Sim (Mobile, Tablet, Desktop)
**Acessibilidade:** Implementada (labels, semântica HTML)
