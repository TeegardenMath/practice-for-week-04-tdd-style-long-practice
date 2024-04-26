const chai = require("chai");
const expect = chai.expect;
const {returnsThree, reciprocal} = require("../problems/number-fun")

describe("returnsThree()", () => {
	it("should return three", () => {
		expect(returnsThree()).to.equal(3);
	});
});

describe("reciprocal(n)", () => {

});