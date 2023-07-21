import assert from "assert";
import totalPhoneBill from "../totalPhoneBill.js";
describe("the totalPhoneBill function",function() {
    it(" takes in a string calls made and sms's sent. Calculate the total bill for the data provided.", function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
   
    });
    it("takes in a string calls made and sms's sent. Calculate the total bill for the data provided.", function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });
    it("takes in a string calls made and sms's sent. Calculate the total bill for the data provided.", function(){
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });

}    );