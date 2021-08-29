import {
  assertEquals,
  App
} from "./types.ts";

Deno.test("app.run() operations with normal conditions", () => {
  assertEquals("4",  App.run(["2",  "+", "2"]));
  assertEquals("0",  App.run(["-2", "+", "2"]));
  assertEquals("0",  App.run(["2",  "-", "2"]));
  assertEquals("-4", App.run(["-2", "-", "2"]));
  assertEquals("9",  App.run(["3",  "*", "3"]));
  assertEquals("-9", App.run(["-3", "*", "3"]));
  assertEquals("4",  App.run(["8",  "/", "2"]));
  assertEquals("0",  App.run(["0",  "/", "2"]));
  assertEquals("512",App.run(["2",  "^", "9"]));
  assertEquals("81", App.run(["3",  "^", "4"]));
  assertEquals("9",  App.run(["2",  "log", "512"]));
  assertEquals("4",  App.run(["10", "log", "10000"]));
});

Deno.test("app.run() unexpected inputs", () => {
  const ex = "! Exemplo: 2 + 2";

  const errorNumberOfArgs = "Só aceito 3 argumentos"+ex;
  assertEquals(errorNumberOfArgs, App.run([]));
  assertEquals(errorNumberOfArgs, App.run(["+", "+"]));
  assertEquals(errorNumberOfArgs, App.run(["+", "+", "2", "3"]));

  const errorSecondArg = "O segundo argumento precisa ser uma operação"+ex;
  assertEquals(errorSecondArg, App.run(["2", "2", "2"]));
  assertEquals(errorSecondArg, App.run(["+", "2", "+"]));
  const errorFirstArg = "O primeiro argumento precisa ser um número"+ex;
  assertEquals(errorFirstArg, App.run(["+", "+", "2"]));
  assertEquals(errorFirstArg, App.run(["+", "+", "+"]));
  assertEquals("O terceiro argumento precisa ser um número"+ex, App.run(["2", "+", "+"]));
  
  assertEquals("Resultado indefinido!", App.run(["0",  "/", "0"]));
  assertEquals("Resultado indefinido!", App.run(["2",  "/", "0"]));
  assertEquals("Resultado indefinido!", App.run(["-2", "/", "0"]));
  
  assertEquals("Resultado indefinido!", App.run(["0", "^", "-2"]));
  
  assertEquals("Resultado indefinido!", App.run(["0", "log", "0"]));
  assertEquals("Resultado indefinido!", App.run(["1", "log", "1"]));
  assertEquals("Resultado indefinido!", App.run(["1", "log", "5"]));
  assertEquals("Resultado indefinido!", App.run(["1", "log", "0"]));
});