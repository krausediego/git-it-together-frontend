import DiagonalTiles from "@/components/diagonal-tiles";
import { Avatar, AvatarFallback, AvatarGroup } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export function LandingHeader() {
  return (
    <div className="container mx-auto py-20 grid grid-cols-2 gap-12">
      <div className="flex flex-col gap-8 max-w-xl">
        <span className="text-muted-foreground font-mono text-sm">
          PARA DEVS QUE QUEREM CONSTÂNCIA
        </span>

        <h1 className="text-5xl font-bold leading-tight line-clamp-3">
          Transforme seus commits em um hábito visível
        </h1>

        <p className="text-muted-foreground">
          Acompanhe seu streak, desafie outros devs em grupos e tenha um perfil
          detalhado do seu trabalho no GitHub para compartilhar.
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

          <DiagonalTiles rows={7} cols={40} period={6} seed={7} jitter={0.15} />
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
  );
}
