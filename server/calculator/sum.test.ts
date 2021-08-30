import { assertEquals, Sum } from "../../types.ts";

Deno.test("calculation sum", () => {
  assertEquals(2, Sum.calc(1, 1));
  assertEquals(0, Sum.calc(1, -1));
  assertEquals(0, Sum.calc(-1, 1));
  assertEquals(-2, Sum.calc(-1, -1));
});