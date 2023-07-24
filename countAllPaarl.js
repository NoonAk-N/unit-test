export default function countAllPaarl(num){
    var numbersList=num.split(",");
      var count=0;
      for(var i=0;i<numbersList.length;i++){
        var oldNum=numbersList[i].trim();
        if (oldNum.startsWith("CJ")){
          count++
         
        }
    
    }
      return count;
    }