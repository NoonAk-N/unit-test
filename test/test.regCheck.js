import assert from "assert";
import regCheck from "../regCheck.js";
describe("the regCheck function",function() {
    it("should  return true for registration numbers like this", function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
   
    });
    it("The function should return false for registration numbers like this", function(){
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    });


}    );