import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

export default function PricingSection() {
  const plans = [
    {
      title: 'Felicidade Solo',
      price: 'R$4.99',
      description: 'Um único e perfeito brownie para um mimo pessoal.',
      features: ['receita de bronwie estilo Nova York classico e saboroso', 'PDF com secretos para o brownie perfeito'],
    },
    {
      title: 'Caixa da Felicidade',
      price: 'R$24.99',
      isPopular: true,
      description: 'Uma caixa com 6 brownies. Misture e combine seus favoritos!',
      features: ['6 Brownies à sua escolha', 'Ótimo para compartilhar', '10% de Desconto'],
    },
    {
      title: 'Pacote de Festa',
      price: 'R$44.99',
      description: 'Um pacote tamanho festa com 12 brownies para qualquer celebração.',
      features: ['12 Brownies à sua escolha', 'Melhor custo-benefício', 'Perfeito para eventos'],
    },
  ];

  return (
    <section id="pricing">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">
              Escolha Seu Pacote de Felicidade
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Temos o pacote perfeito para cada ocasião e desejo. Preços simples e transparentes.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.title} className={`flex flex-col ${plan.isPopular ? 'border-primary ring-2 ring-primary shadow-lg' : ''}`}>
              {plan.isPopular && <div className="bg-primary text-primary-foreground text-sm font-semibold text-center py-1 rounded-t-lg">Mais Popular</div>}
              <CardHeader>
                <CardTitle className="font-headline">{plan.title}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-6">
                <div className="text-4xl font-bold">{plan.price}</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.isPopular ? 'default' : 'secondary'}>Comprar Agora</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
