import { assertEquals, Multiplication } from "../types.ts";

Deno.test("calculation multiplication", () => {
  assertEquals(2, Multiplication.calc(1, 2));
  assertEquals(0, Multiplication.calc(1, 0));
  assertEquals(0, Multiplication.calc(0, 1));
  assertEquals(-0, Multiplication.calc(0, -3));
  assertEquals(4, Multiplication.calc(-2, -2));
  assertEquals(-4, Multiplication.calc(2, -2));
  assertEquals(-4, Multiplication.calc(-2, 2));
  assertEquals(6, Multiplication.calc(2, 3));
});