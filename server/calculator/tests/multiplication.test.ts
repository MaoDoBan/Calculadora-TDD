import { assertEquals, multiplication } from "../../../types.ts";

Deno.test("calculation multiplication", () => {
  assertEquals(2,  multiplication(1, 2));
  assertEquals(0,  multiplication(1, 0));
  assertEquals(0,  multiplication(0, 1));
  assertEquals(-0, multiplication(0, -3));
  assertEquals(4,  multiplication(-2, -2));
  assertEquals(-4, multiplication(2, -2));
  assertEquals(-4, multiplication(-2, 2));
  assertEquals(6,  multiplication(2, 3));
});