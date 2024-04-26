const chai = require("chai");
const expect = chai.expect;
const reverseString = require("../problems/reverse-string")

describe("reverseString(word)", () => {
	it("should reverse a simple string", () => {
		const word = "fun";
		expect(reverseString(word)).to.equal("nuf");
	});
	it("should throw an error when given a non-string", () => {
		expect(()=>reverseString(2)).to.throw(TypeError);
	})
});