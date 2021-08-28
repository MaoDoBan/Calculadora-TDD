import {
  Sum,
  Subtraction
} from "./types.ts";

const example = "! Exemplo: 2 + 2";

export class App{
  static run(command: string[]): string{

    if(command.length != 3) return "Só aceito 3 argumentos! Exemplo: 2 + 2";
    const operations: { [symbol: string]: (n1: number, n2: number) => number } = {
      "+": Sum.calc,
      "-": Subtraction.calc
    };

    const [ number1str, operation, number2str ] = command;
    const calculation = operations[operation];
    if(!calculation) return "O segundo argumento precisa ser uma operação"+example;

    const number1 = Number(number1str);
    if( isNaN(number1) ) return "O primeiro argumento precisa ser um número"+example;
    
    const number2 = Number(number2str);
    if( isNaN(number2) ) return "O terceiro argumento precisa ser um número"+example;

    return calculation(number1, number2)+"";
  }
}

console.log( App.run(Deno.args) );