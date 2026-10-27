import { Check, X, type LucideIcon } from "lucide-react";

type StepsItems = {
  step: number;
  title: string;
  description: string;
};

type PrivacyItems = {
  icon: LucideIcon;
  text: string;
};

const stepsItems: StepsItems[] = [
  {
    step: 1,
    title: "Conecte o Github",
    description: "Login em um clique com a sua conta. Nenhum cadastro extra.",
  },
  {
    step: 2,
    title: "Veja o seu último ano",
    description: "Importamos suas contribuições e calculamos o streak na hora.",
  },
  {
    step: 3,
    title: "Chame outros devs",
    description: "Crie um grupo, envie o convite e comece o primeiro desafio.",
  },
];

const privacyItems: PrivacyItems[] = [
  {
    icon: Check,
    text: "Lemos seu perfil público e suas contagens de contribuição",
  },
  {
    icon: Check,
    text: "Repositórios privados entram no streak só se você ativar no GitHub",
  },
  {
    icon: X,
    text: "Nunca lemos código nem pedimos acesso de escrita",
  },
];

export function LandingHowItWorkSection() {
  return (
    <div className="container mx-auto py-20 grid grid-cols-3 gap-12">
      <div className="col-span-3">
        <span className="font-mono text-muted-foreground">COMO FUNCIONA</span>
        <h1 className="text-4xl font-bold">
          Três passos e você já vê seu histórico
        </h1>
      </div>

      {stepsItems.map((item) => {
        return (
          <div key={item.step}>
            <h1 className="font-mono text-3xl text-muted-foreground/60">
              0{item.step}
            </h1>
            <h2 className="text-2xl font-semibold">{item.title}</h2>
            <p className="text-muted-foreground">{item.description}</p>
          </div>
        );
      })}

      <div className="border rounded-lg p-8 col-span-3 grid grid-cols-2 gap-12">
        <div className="flex flex-col gap-4">
          <span className="text-muted-foreground font-mono">PRIVACIDADE</span>
          <h1 className="text-2xl font-bold">
            Seu trabalho privado continua privado
          </h1>
          <p>
            Pedimos só acesso de leitura ao seu perfil. Contribuições em
            repositórios privados e de empresas aparecem apenas como contagem,
            sem nomes de repositórios.
          </p>
        </div>

        <div className="flex flex-col justify-between">
          {privacyItems.map(({ icon: Icon, text }) => {
            return (
              <div key={text} className="flex items-center gap-2">
                <Icon className="text-destructive" />
                <p className="text-muted-foreground font-medium">{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
