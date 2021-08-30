import { serve } from "https://deno.land/std@0.106.0/http/server.ts";

export class Server{
  static async run(){
    const server = serve({ port: 8000 });
    console.log("Server running on: http://localhost:8000/");

    for await (const request of server) {
      if(request.url === "/"){
        request.respond({
          status: 200,
          body: await Deno.open("./client/index.html")
        });
      }
    }
  }
}