import assert from "assert";
import greet from "../greet.js";
describe("the greet function",function() {
    it("should greet Ayla with 'Hello, Ayla'", function(){
    assert.equal("Hello, Ayla", greet("Ayla"))
    
    });
    
    it("should greet Zola with 'Hello, Zola'", function(){
        assert.equal("Hello, Zola", greet("Zola"));
    });
    }
    );