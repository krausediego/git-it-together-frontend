import { LogoPrimaryWithName } from "@/components/logo-primary-with-name";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { authClient } from "@/lib/auth-client";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { createFileRoute } from "@tanstack/react-router";
import { Check, X } from "lucide-react";

export const Route = createFileRoute("/sign-in")({
  component: RouteComponent,
});

function RouteComponent() {
  const handleSignIn = async () => {
    const { error } = await authClient.signIn.social({
      provider: "github",
      callbackURL: "http://localhost:5173/dashboard",
    });

    if (error) {
      throw new Error(error.message);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-muted-foreground/10">
      <div className="rounded-md shadow-md p-8 w-full max-w-105 bg-card flex flex-col items-center gap-4">
        <LogoPrimaryWithName />
        <h1 className="text-3xl font-bold">Entre para ver seu streak</h1>
        <p className="text-muted-foreground text-center">
          Usamos a sua conta do GitHub. Não há senha nem cadastro separado.
        </p>
        <Button size="lg" className="w-full" onClick={handleSignIn}>
          <GitHubLogoIcon />
          Continuar com Github
        </Button>
        <Separator orientation="horizontal" className="w-full h-px" />

        <div className="w-full space-y-4">
          <p className="text-xs font-mono text-muted-foreground">
            O QUE VAMOS ACESSAR
          </p>

          <div className="flex items-center gap-2">
            <Check className="size-4 text-brand" />
            <p className="text-sm">
              Seu perfil público e e-mail, para criar sua conta
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Check className="size-6 text-brand" />
            <p className="text-sm">
              Contagens de contribuição, incluindo privadas se você ativar no
              GitHub
            </p>
          </div>

          <div className="flex items-center gap-2">
            <X className="size-4 text-destructive" />
            <p className="text-sm">
              Nada de acesso ao seu código ou permissão de escrita
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
