import { WebSocket, isWebSocketCloseEvent } from "https://deno.land/std@0.106.0/ws/mod.ts";
import { Calculator } from "../types.ts";

export class History{
  static async run(serverSocket: WebSocket){
    console.log("Novo socket se conectou!");

    for await (const event of serverSocket){
      if(isWebSocketCloseEvent(event)) break;
  
      if(typeof event === "string"){
        let args = event.split(" ");
        if(args[0] == "")  args.shift();
        if(args[0] == "√") args = [args[1], "√", "2"];

        let result = Calculator.calc( args );
        if( result.startsWith("E") ) result = "error";
        serverSocket.send( result );
      }
    }
  }
}