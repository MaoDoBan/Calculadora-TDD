import { assertEquals, Logarithm } from "../types.ts";

Deno.test("calculation logarithm", () => {
  assertEquals(3, Logarithm.calc(2, 8));
  assertEquals(4, Logarithm.calc(5, 625));
  assertEquals(2, Logarithm.calc(10, 100));
  assertEquals(NaN, Logarithm.calc(1, 1));
  assertEquals(Infinity, Logarithm.calc(1, 2));
  assertEquals(-Infinity, Logarithm.calc(1, 0));
  assertEquals(NaN, Logarithm.calc(0, 0));
});