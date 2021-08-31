import { assertEquals, sum } from "../../../types.ts";

Deno.test("calculation sum", () => {
  assertEquals(2,  sum(1, 1));
  assertEquals(0,  sum(1, -1));
  assertEquals(0,  sum(-1, 1));
  assertEquals(-2, sum(-1, -1));
});