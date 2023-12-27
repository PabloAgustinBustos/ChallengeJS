import { firstSolution, secondSolution } from "../src/code"
import { describe, it, expect } from "vitest"

describe("firstSolution", () => {
  it("should return false when function cannot make the result", () => {
    expect(firstSolution([1,4,3,9], 8)).toBe(false)
    expect(firstSolution([1,2,3,4], 18)).toBe(false)
    expect(firstSolution([24,79,3,1], 24)).toBe(false)
    expect(firstSolution([-5,3,-3,-15], 7)).toBe(false)
  })
})