import assert from "assert";
import transportFee from "../transprortFee.js";
describe("the transportFee function",function() {
    it("should returns the right price based on the shift you are working", function(){
        assert.equal(transportFee('morning'), 'R20');
   
    });
    it("should returns the right price based on the shift you are working", function(){
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    });


}    );