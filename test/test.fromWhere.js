import assert from "assert";
import fromWhere from "../fromWhere.js";
describe("the fromWhere function",function() {
    it("takes a car registration number as a parameter and returns the town the car is from'CY' ='''Bellville'", function(){
        assert.equal(fromWhere('CY 567489'), 'Bellville'); 
    
    });
    
    it("takes a car registration number as a parameter and returns the town the car is from'CJ' ='''Paarl'", function(){
        assert.equal(fromWhere('CJ 343502'), 'Paarl');
    });

    it("takes a car registration number as a parameter and returns the town the car is from'CA' ='''Cape Town'", function(){
        assert.equal(fromWhere('CA 987504'), 'Cape Town');
    });

    it("otherwise return Some other place", function(){
        assert.equal(fromWhere('ZN 568593'), 'Some other place!');
    });
    }
    );