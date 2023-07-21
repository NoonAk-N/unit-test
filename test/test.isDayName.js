import assert from "assert";
import isDayName from "../isDayName.js";
describe("the isDayNamefunction",function() {
    it("should takes a string parameter and returns true if the string passed in is a day of the week", function(){
        assert.equal(isDayName('Saturday'), true);
   
    });
    it("should takes a string parameter and returns false if the string passed in is a day of the week", function(){
        assert.equal(isDayName('January'), false, 'January is not a day');
    });


}    );