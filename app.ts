import { Calculator, Server } from "./types.ts";

if(Deno.args.length) console.log( Calculator.calc(Deno.args) );
else                 Server.run();