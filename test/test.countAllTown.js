import assert from "assert";
import countAllFromTown from "../countAllTown.js";

describe("the countAllTown function", function () {
    it("should takes a string parameter with registration numbers separated with commas and the registration number start string", function () {
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL');

        assert.equal(fromStellies, 3)

    });
    it("should takes a string parameter with registration numbers separated with commas and the registration number start string", function () {

        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341', 'CF');

        assert.equal(fromKuilsriver, 1)
    });


});