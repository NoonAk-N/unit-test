import assert from "assert";
import yearsAgo from "../yearAgo.js";
describe("the yearAgo function",function() {
    it("should   takes in a year and return how many years ago that year is from the current year", function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
   
    });
    it("should  takes in a year and return how many years ago that year is from the current year", function(){
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    });


}    );