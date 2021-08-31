import { assertEquals, division } from "../../../types.ts";

Deno.test("calculation division", () => {
  assertEquals(1,         division(1, 1));
  assertEquals(2,         division(4, 2));
  assertEquals(-2,        division(4, -2));
  assertEquals(1,         division(-2, -2));
  assertEquals(0.5,       division(1, 2));
  assertEquals(0,         division(0, 2));
  assertEquals(-0,        division(0, -2));
  assertEquals(Infinity,  division(2, 0));
  assertEquals(-Infinity, division(-2, 0));
  assertEquals(NaN,       division(0, 0));
});