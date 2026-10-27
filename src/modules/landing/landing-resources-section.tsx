import {
  Flame,
  UserRound,
  UsersCollaboration,
  type LucideIcon,
} from "lucide-react";

type ResourcesItems = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const resourcesItems: ResourcesItems[] = [
  {
    icon: Flame,
    title: "Streak e calendário",
    description:
      "Dias consecutivos, recorde, aviso quando o streak está em risco e os horários em que você mais produz.",
  },
  {
    icon: UsersCollaboration,
    title: "Grupos e desafios",
    description:
      "Crie um grupo com amigos ou com o time, lance desafios de streak ou de PRs e acompanhe o ranking.",
  },
  {
    icon: UserRound,
    title: "Perfil para compartilhar",
    description:
      "Linguagens ao longo do tempo, repositórios em destaque e evolução por ano em um link público.",
  },
];

export function LandingResourcesSection() {
  return (
    <div className="bg-muted/70 w-full border-y">
      <div className="container mx-auto py-20 grid grid-cols-3 gap-8">
        <div className="col-span-3 flex flex-col gap-4">
          <span className="text-muted-foreground font-mono">RECURSOS</span>
          <h2 className="text-4xl font-bold">
            Tudo o que o GitHub não mostra de uma vez
          </h2>
        </div>

        {resourcesItems.map(({ icon: Icon, ...item }) => {
          return (
            <div
              key={item.title}
              className="col-span-1 bg-card rounded-md shadow-md p-6 space-y-2"
            >
              <div className="flex bg-muted rounded-md p-2 size-10 justify-center items-center">
                <Icon className="text-brand" />
              </div>
              <h1 className="text-xl font-bold">{item.title}</h1>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
