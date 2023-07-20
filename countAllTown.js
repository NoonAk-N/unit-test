export default function countAllFromTown(num,town){
    var numbersList=num.split(",");
      var count=0;
      for(var i=0;i<numbersList.length;i++){
        //var oldNum=numbersList[i].trim();
        if (numbersList[i].trim().startsWith(town)){
          count++
         
        }
    
    }
      return count;
    }