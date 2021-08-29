import { assertEquals, Exponentiation } from "../types.ts";

Deno.test("calculation potentiation", () => {
  assertEquals(8, Exponentiation.calc(2, 3));
  assertEquals(1, Exponentiation.calc(111, 0));
  assertEquals(1, Exponentiation.calc(0, 0));
  assertEquals(0, Exponentiation.calc(0, 11));
  assertEquals(0.5, Exponentiation.calc(2, -1));
  assertEquals(Infinity, Exponentiation.calc(0, -1));
});