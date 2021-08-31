import { assertEquals, logarithm } from "../../../types.ts";

Deno.test("calculation logarithm", () => {
  assertEquals(3,         logarithm(2, 8));
  assertEquals(4,         logarithm(5, 625));
  assertEquals(2,         logarithm(10, 100));
  assertEquals(NaN,       logarithm(1, 1));
  assertEquals(Infinity,  logarithm(1, 2));
  assertEquals(-Infinity, logarithm(1, 0));
  assertEquals(NaN,       logarithm(0, 0));
});