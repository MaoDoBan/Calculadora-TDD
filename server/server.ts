import { serve }     from "https://deno.land/std@0.106.0/http/server.ts";
import { serveFile } from "https://deno.land/std@0.106.0/http/file_server.ts";
import { acceptWebSocket, acceptable } from "https://deno.land/std@0.106.0/ws/mod.ts";
import { History } from "./history.ts";

export class Server{
  static async run(){
    const server = serve({ port: 8000 });
    console.log("Server running on: http://localhost:8000/");

    for await (const request of server) {
      try{
        if(request.url === "/ws"){
          if(!acceptable(request)) continue;
          acceptWebSocket({
            conn: request.conn,
            bufReader: request.r,
            bufWriter: request.w,
            headers: request.headers
          })
          .then(History.run);
          continue;
        }
        console.log("path:",request.url);
        const content = await serveFile(request, `./client${request.url}`);
        request.respond(content);
      }catch(error){
        console.error(error);
      }
    }
  }
}