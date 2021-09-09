import { WebSocket } from "https://deno.land/std@0.106.0/ws/mod.ts";

export class History{
  static async run(ws: WebSocket){
    console.log("Novo socket se conectou!");
  }
}