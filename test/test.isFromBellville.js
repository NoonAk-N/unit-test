import assert from "assert";
import isFromBellville from "../isFromBellville.js";
describe("the isFromBellville function",function() {
    it("should returns true if a registration number is for Bellville otherwise returns true", function(){
        assert.equal(isFromBellville('CY 123'), true);
   
    });
    it("should returns true if a registration number is for Bellville otherwise returns false", function(){
        assert.equal(isFromBellville('CJ 123'), false);
    });


}    );