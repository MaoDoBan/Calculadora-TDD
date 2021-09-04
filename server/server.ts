import { serve }     from "https://deno.land/std@0.106.0/http/server.ts";
import { serveFile } from "https://deno.land/std@0.106.0/http/file_server.ts";

export class Server{
  static async run(){
    const server = serve({ port: 8000 });
    console.log("Server running on: http://localhost:8000/");

    for await (const request of server) {
      try{
        console.log("path:",request.url);
        const content = await serveFile(request, `./client${request.url}`);
        request.respond(content);
      }catch(error){
        console.error(error);
      }
    }
  }
}