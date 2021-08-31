import { assertEquals, subtraction } from "../../../types.ts";

Deno.test("calculation subtraction", () => {
  assertEquals(0,  subtraction(1, 1));
  assertEquals(2,  subtraction(1, -1));
  assertEquals(-2, subtraction(-1, 1));
  assertEquals(0,  subtraction(-1, -1));
});