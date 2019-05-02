//M Romi Ario - Exercise 1-Week 1
function sorting(arrNumber) {
    var i = 0;
    while(i<arrNumber.length-1){
        if(arrNumber[i]>arrNumber[i+1]){
            var temp = arrNumber[i+1]
            arrNumber[i+1] = arrNumber[i]
            arrNumber[i] = temp;
            i = -1;
        }
        i++;
    }
    return arrNumber;
  }
  
  function getTotal(arrNumber) {
    var maxNumber = arrNumber[arrNumber.length-1];
    var count = 0;
    for(var i = 0;i<arrNumber.length;i++){
        if(arrNumber[i]=== maxNumber){
            count+=1;
        }
    }
    if(arrNumber[0]!== undefined){
        return 'angka paling besar adalah '+maxNumber+' dan jumlah kemunculan sebanyak '+count+' kali'
    } else{
        return ''
    }
    
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''