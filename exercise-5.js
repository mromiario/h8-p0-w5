function kaliTerusRekursif(angka) {
    var angkaS = String(angka);
    if(angkaS.length==1){
        return angka;
    } else{
        var currentAngka = angkaS[0];
        angkaS = angkaS.slice(1);
        return kaliTerusRekursif(Number(currentAngka) * kaliTerusRekursif(Number(angkaS)));
    } 
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6