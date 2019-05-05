//M Romi Ario - Exercise 4 Week 5
function totalDigitRekursif(angka) {
    var angkaS = String(angka)
   
    if(angkaS.length === 1){
       return angka;
    } else{
        var currentAngka = angkaS[0];
        angkaS = angkaS.slice(1);
        return Number(currentAngka) + totalDigitRekursif(Number(angkaS));
    }
    
}

  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5