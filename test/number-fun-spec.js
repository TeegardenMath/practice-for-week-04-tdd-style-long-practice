const chai = require("chai");
const expect = chai.expect;
const {returnsThree, reciprocal} = require("../problems/number-fun")

describe("returnsThree()", () => {
	it("should return three", () => {
		expect(returnsThree()).to.equal(3);
	});
});

describe("reciprocal(n)", () => {
	it ("should find terminating inverses of positive integers", () => {
		expect(reciprocal(2)).to.equal(0.5);
		expect(reciprocal(5)).to.equal(0.2);
	});
	it ("should find non-terminating inverses of positive integers", () => {
		expect(reciprocal(3)).to.equal(1/3);
	})

});