import { assertEquals, exponentiation } from "../../../types.ts";

Deno.test("calculation potentiation", () => {
  assertEquals(8,        exponentiation(2, 3));
  assertEquals(1,        exponentiation(111, 0));
  assertEquals(1,        exponentiation(0, 0));
  assertEquals(0,        exponentiation(0, 11));
  assertEquals(0.5,      exponentiation(2, -1));
  assertEquals(Infinity, exponentiation(0, -1));
});