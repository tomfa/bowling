import { calculateScore } from "./bowling";

describe("calculateScore", () => {
  it("returns something", () => {
    const input = { throws: [5] };
    const result = calculateScore(input);
    expect(result).toBeTruthy();
  });
});

export {};
