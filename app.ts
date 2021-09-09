import { Calculator, Server } from "./types.ts";

if(Deno.args.length){
  const [ firstArg, ...otherArgs ] = Deno.args;
  console.log( Calculator.calc(otherArgs) );
}
else Server.run();