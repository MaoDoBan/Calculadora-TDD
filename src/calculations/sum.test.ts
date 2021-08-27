import { assertEquals } from "https://deno.land/std@0.106.0/testing/asserts.ts";
import { Sum } from "./sum.ts";

Deno.test("calculation sum", () => {
  assertEquals(2, Sum.calc(1, 1));
  assertEquals(0, Sum.calc(1, -1));
  assertEquals(0, Sum.calc(-1, 1));
  assertEquals(-2, Sum.calc(-1, -1));
});