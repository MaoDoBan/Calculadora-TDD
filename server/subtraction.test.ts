import { assertEquals, Subtraction } from "../types.ts";

Deno.test("calculation subtraction", () => {
  assertEquals(0, Subtraction.calc(1, 1));
  assertEquals(2, Subtraction.calc(1, -1));
  assertEquals(-2, Subtraction.calc(-1, 1));
  assertEquals(0, Subtraction.calc(-1, -1));
});