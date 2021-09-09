import {
  sum,
  subtraction,
  multiplication,
  division,
  exponentiation,
  logarithm,
  squareRoot
} from "../../types.ts";

const example = "! Exemplo: 2 + 2";

export class Calculator{
  static operations: { [symbol: string]: (n1: number, n2: number) => number } = {
    "+":   sum,
    "-":   subtraction,
    "*":   multiplication,
    "/":   division,
    "^":   exponentiation,
    "log": logarithm,
    "√":   squareRoot
  };

  static calc(command: string[]): string{
    if(command.length != 3) return "ERRO: Só aceito 3 argumentos! Exemplo: 2 + 2";

    const [ number1str, operation, number2str ] = command;
    const calculation = this.operations[operation];
    if(!calculation) return "ERRO: O segundo argumento precisa ser uma operação"+example;

    const number1 = Number(number1str);
    if( isNaN(number1) ) return "ERRO: O primeiro argumento precisa ser um número"+example;
    
    const number2 = Number(number2str);
    if( isNaN(number2) ) return "ERRO: O terceiro argumento precisa ser um número"+example;

    const result = calculation(number1, number2);
    if( isNaN(result) || result == Infinity || result == -Infinity ) return "ERRO: Resultado indefinido!";

    return calculation(number1, number2)+"";
  }
}