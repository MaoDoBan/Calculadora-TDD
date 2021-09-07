import { assertEquals, squareRoot } from "../../../types.ts";

Deno.test("calculation square root", () => {
  assertEquals(2,   squareRoot(4,   2));
  assertEquals(2,   squareRoot(4,  -2));
  assertEquals(2,   squareRoot(4,   0));
  assertEquals(3,   squareRoot(9,   2));
  assertEquals(12,  squareRoot(144, 2));
  assertEquals(0,   squareRoot(0,   2));
  assertEquals(NaN, squareRoot(-4,  2));
});