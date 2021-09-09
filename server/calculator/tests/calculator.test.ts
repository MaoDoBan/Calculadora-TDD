import { assertEquals, Calculator } from "../../../types.ts";

Deno.test("Calculator.calc() operations with normal conditions", () => {
  assertEquals("4",  Calculator.calc(["2",  "+", "2"]));
  assertEquals("0",  Calculator.calc(["-2", "+", "2"]));
  assertEquals("0",  Calculator.calc(["2",  "-", "2"]));
  assertEquals("-4", Calculator.calc(["-2", "-", "2"]));
  assertEquals("9",  Calculator.calc(["3",  "*", "3"]));
  assertEquals("-9", Calculator.calc(["-3", "*", "3"]));
  assertEquals("4",  Calculator.calc(["8",  "/", "2"]));
  assertEquals("0",  Calculator.calc(["0",  "/", "2"]));
  assertEquals("512",Calculator.calc(["2",  "^", "9"]));
  assertEquals("81", Calculator.calc(["3",  "^", "4"]));
  assertEquals("9",  Calculator.calc(["2",  "log", "512"]));
  assertEquals("4",  Calculator.calc(["10", "log", "10000"]));
});

Deno.test("Calculator.calc() unexpected inputs", () => {
  const ex = "! Exemplo: 2 + 2";

  const errorNumberOfArgs = "ERRO: Só aceito 3 argumentos"+ex;
  assertEquals(errorNumberOfArgs, Calculator.calc([]));
  assertEquals(errorNumberOfArgs, Calculator.calc(["+", "+"]));
  assertEquals(errorNumberOfArgs, Calculator.calc(["+", "+", "2", "3"]));

  const errorSecondArg = "ERRO: O segundo argumento precisa ser uma operação"+ex;
  assertEquals(errorSecondArg, Calculator.calc(["2", "2", "2"]));
  assertEquals(errorSecondArg, Calculator.calc(["+", "2", "+"]));
  const errorFirstArg = "ERRO: O primeiro argumento precisa ser um número"+ex;
  assertEquals(errorFirstArg, Calculator.calc(["+", "+", "2"]));
  assertEquals(errorFirstArg, Calculator.calc(["+", "+", "+"]));
  assertEquals("ERRO: O terceiro argumento precisa ser um número"+ex, Calculator.calc(["2", "+", "+"]));
  
  const errorUndefined = "ERRO: Resultado indefinido!";
  assertEquals(errorUndefined, Calculator.calc(["0",  "/", "0"]));
  assertEquals(errorUndefined, Calculator.calc(["2",  "/", "0"]));
  assertEquals(errorUndefined, Calculator.calc(["-2", "/", "0"]));
  
  assertEquals(errorUndefined, Calculator.calc(["0", "^", "-2"]));
  
  assertEquals(errorUndefined, Calculator.calc(["0", "log", "0"]));
  assertEquals(errorUndefined, Calculator.calc(["1", "log", "1"]));
  assertEquals(errorUndefined, Calculator.calc(["1", "log", "5"]));
  assertEquals(errorUndefined, Calculator.calc(["1", "log", "0"]));
});