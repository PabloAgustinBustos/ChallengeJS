import { firstSolution, secondSolution } from "../src/code"
import { describe, it, expect } from "vitest"

describe("firstSolution", () => {
  it("should return false when function cannot make the result", () => {
    expect(firstSolution([1,4,3,9], 8)).toBe(false)
    expect(firstSolution([1,2,3,4], 18)).toBe(false)
    expect(firstSolution([24,79,3,1], 24)).toBe(false)
    expect(firstSolution([-5,3,-3,-15], 7)).toBe(false)
  })

  it("should return true when function can make the result", () => {
    expect(firstSolution([1,4,3,9], 4)).toBe(true)
    expect(firstSolution([27,2,-86, 40], -59)).toBe(true)
    expect(firstSolution([1, 2, 4, 4], 8)).toBe(true)
    expect(firstSolution([-5,3,-3,-15], 0)).toBe(true)
  })
})