import { assertEquals } from "https://deno.land/std@0.106.0/testing/asserts.ts";
import { delay } from "https://deno.land/std@0.106.0/async/delay.ts";

// Simple name and function, compact form, but not configurable
Deno.test("hello world #1", () => {
  const x = 1 + 2;
  assertEquals(x, 3);
});

// Fully fledged test definition, longer form, but configurable (see below)
Deno.test({
  name: "hello world #2",
  fn: () => {
    const x = 1 + 2;
    assertEquals(x, 3);
  },
});


Deno.test("async hello world", async () => {
  const x = 1 + 2;

  // await some async task
  await delay(1000);

  if (x !== 3) {
    throw Error("x should be equal to 3");
  }
});


