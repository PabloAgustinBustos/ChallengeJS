import { firstSolution, secondSolution } from "../src/code"
import { describe, it, expect } from "vitest"

describe("firstSolution", () => {
  it("should return false when function cannot make the result", () => {
    expect(firstSolution([1,4,3,9], 8)).toBe(false)
  })
})