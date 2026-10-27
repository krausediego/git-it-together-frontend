import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient, type TanstackRouter } from "./main";
import { RouterProvider } from "@tanstack/react-router";

type AppProps = {
  router: TanstackRouter;
};

export function App({ router }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
