import { assertEquals, Division } from "../types.ts";

Deno.test("calculation division", () => {
  assertEquals(1, Division.calc(1, 1));
  assertEquals(2, Division.calc(4, 2));
  assertEquals(-2, Division.calc(4, -2));
  assertEquals(1, Division.calc(-2, -2));
  assertEquals(0.5, Division.calc(1, 2));
  assertEquals(0, Division.calc(0, 2));
  assertEquals(-0, Division.calc(0, -2));
  assertEquals(Infinity, Division.calc(2, 0));
  assertEquals(-Infinity, Division.calc(-2, 0));
  assertEquals(NaN, Division.calc(0, 0));
});