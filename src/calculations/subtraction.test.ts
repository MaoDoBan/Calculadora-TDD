import { assertEquals } from "https://deno.land/std@0.106.0/testing/asserts.ts";
import { Subtraction } from "./subtraction.ts";

Deno.test("calculation subtraction", () => {
  const x = 1 + 2;
  assertEquals(0, Subtraction.calc(1, 1));
  assertEquals(2, Subtraction.calc(1, -1));
  assertEquals(-2, Subtraction.calc(-1, 1));
  assertEquals(0, Subtraction.calc(-1, -1));
});