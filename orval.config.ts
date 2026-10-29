import { defineConfig } from "orval";

export default defineConfig({
  api: {
    input: { target: "http://localhost:3000/docs-json" },
    output: {
      mode: "tags-split",
      target: "src/api/generated",
      schemas: "src/api/generated/model",
      client: "react-query",
      httpClient: "axios",
      clean: true,
      override: {
        mutator: { path: "src/lib/http.ts", name: "http" },
      },
    },
  },
});
