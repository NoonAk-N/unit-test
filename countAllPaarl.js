<<<<<<< HEAD
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
=======
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
>>>>>>> 227300b287c71ad30963110d32032f1bd39c81c2
    }