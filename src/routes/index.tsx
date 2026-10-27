import { LandingMenu } from "@/components/landing-menu";
import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import DiagonalTiles from "@/components/diagonal-tiles";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarGroup } from "@/components/ui/avatar";
import { Check, Flame, UserRound, UsersCollaboration, X } from "lucide-react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div id="container">
      <LandingMenu />

      <div className="container mx-auto py-20 grid grid-cols-2 gap-12">
        <div className="flex flex-col gap-8 max-w-xl">
          <span className="text-muted-foreground font-mono text-sm">
            PARA DEVS QUE QUEREM CONSTÂNCIA
          </span>

          <h1 className="text-5xl font-bold leading-tight line-clamp-3">
            Transforme seus commits em um hábito visível
          </h1>

          <p className="text-muted-foreground">
            Acompanhe seu streak, desafie outros devs em grupos e tenha um
            perfil detalhado do seu trabalho no GitHub para compartilhar.
          </p>

          <div className="flex gap-4">
            <Button size="lg">
              <GitHubLogoIcon />
              Entrar com Github
            </Button>

            <Button variant="outline" size="lg">
              Ver perfil de exemplo
            </Button>
          </div>

          <span className="text-xs text-muted-foreground">
            Gratuito · acesso somente leitura · sem acesso ao seu código
          </span>
        </div>

        <div className="space-y-4">
          <div className="border rounded-md p-8 space-y-4">
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <div className="size-12 rounded-full bg-muted-foreground/40" />

                <div className="leading-tight">
                  <h4 className="font-bold">@usuario</h4>
                  <span className="text-sm text-muted-foreground">
                    Streak atual
                  </span>
                </div>
              </div>

              <div className="flex items-end gap-1">
                <h1 className="text-4xl font-bold">12</h1>
                <p>dias</p>
              </div>
            </div>

            <DiagonalTiles
              rows={7}
              cols={40}
              period={6}
              seed={7}
              jitter={0.15}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="border rounded-md p-4 space-y-2">
              <h3 className="font-mono">DESAFIO</h3>

              <p className="font-bold">30 dias de commits</p>
              <Progress value={80} />
              <p className="text-sm text-muted-foreground">
                Você está em 2º de 8
              </p>
            </div>

            <div className="border rounded-md p-4 space-y-2">
              <h3 className="font-mono">GRUPO</h3>

              <p className="font-bold">Devs do Vale</p>

              <AvatarGroup>
                {Array.from({ length: 3 }).map((_, index) => {
                  return (
                    <Avatar key={index}>
                      <AvatarFallback />
                    </Avatar>
                  );
                })}
              </AvatarGroup>

              <p className="text-sm text-muted-foreground">
                6 de 8 com streak ativo
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-muted/70 w-full border-y">
        <div className="container mx-auto py-20 grid grid-cols-3 gap-8">
          <div className="col-span-3 flex flex-col gap-4">
            <span className="text-muted-foreground font-mono">RECURSOS</span>
            <h2 className="text-4xl font-bold">
              Tudo o que o GitHub não mostra de uma vez
            </h2>
          </div>
          <div className="col-span-1 bg-card rounded-md shadow-md p-6 space-y-2">
            <div className="flex bg-muted rounded-md p-2 size-10 justify-center items-center">
              <Flame className="text-brand" />
            </div>
            <h1 className="text-xl font-bold">Streak e calendário</h1>
            <p className="text-muted-foreground">
              Dias consecutivos, recorde, aviso quando o streak está em risco e
              os horários em que você mais produz.
            </p>
          </div>

          <div className="col-span-1 bg-card rounded-md shadow-md p-6 space-y-2">
            <div className="flex bg-muted rounded-md p-2 size-10 justify-center items-center">
              <UsersCollaboration className="text-brand" />
            </div>
            <h1 className="text-xl font-bold">Grupos e desafios</h1>
            <p className="text-muted-foreground">
              Crie um grupo com amigos ou com o time, lance desafios de streak
              ou de PRs e acompanhe o ranking.
            </p>
          </div>

          <div className="col-span-1 bg-card rounded-md shadow-md p-6 space-y-2">
            <div className="flex bg-muted rounded-md p-2 size-10 justify-center items-center">
              <UserRound className="text-brand" />
            </div>
            <h1 className="text-xl font-bold">Perfil para compartilhar</h1>
            <p className="text-muted-foreground">
              Linguagens ao longo do tempo, repositórios em destaque e evolução
              por ano em um link público.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-20 grid grid-cols-3 gap-12">
        <div className="col-span-3">
          <span className="font-mono text-muted-foreground">COMO FUNCIONA</span>
          <h1 className="text-4xl font-bold">
            Três passos e você já vê seu histórico
          </h1>
        </div>

        <div>
          <h1 className="font-mono text-3xl text-muted-foreground/60">01</h1>
          <h2 className="text-2xl font-semibold">Conecte o Github</h2>
          <p className="text-muted-foreground">
            Login em um clique com a sua conta. Nenhum cadastro extra.
          </p>
        </div>
        <div>
          <h1 className="font-mono text-3xl text-muted-foreground/60">02</h1>
          <h2 className="text-2xl font-semibold">Veja o seu último ano</h2>
          <p className="text-muted-foreground">
            Importamos suas contribuições e calculamos o streak na hora.
          </p>
        </div>
        <div>
          <h1 className="font-mono text-3xl text-muted-foreground/60">03</h1>
          <h2 className="text-2xl font-semibold">Chame outros devs</h2>
          <p className="text-muted-foreground">
            Crie um grupo, envie o convite e comece o primeiro desafio.
          </p>
        </div>

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
            <div className="flex items-center gap-2">
              <Check className="text-brand" />
              <p className="text-muted-foreground font-medium">
                Lemos seu perfil público e suas contagens de contribuição
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Check className="text-brand" />
              <p className="text-muted-foreground font-medium">
                Repositórios privados entram no streak só se você ativar no
                GitHub
              </p>
            </div>

            <div className="flex items-center gap-2">
              <X className="text-destructive" />
              <p className="text-muted-foreground font-medium">
                Nunca lemos código nem pedimos acesso de escrita
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-foreground w-full">
        <div className="container mx-auto py-20 flex items-center justify-between">
          <div>
            <h1 className="text-4xl text-background font-bold">
              Comece seu streak hoje
            </h1>
            <p className="text-muted/60">Leva menos de um minuto</p>
          </div>

          <Button variant="secondary" size="lg">
            <GitHubLogoIcon />
            Entrar com Github
          </Button>
        </div>
      </div>

      <div className="container mx-auto py-6 flex items-center justify-between">
        <p className="text-muted-foreground">
          Git It Together · projeto open source
        </p>

        <Button variant="link">Github do projeto</Button>
      </div>
    </div>
  );
}
