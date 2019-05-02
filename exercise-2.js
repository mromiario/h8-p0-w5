//M Romi Ario - Exercise 2 - Week 5
function changeVocals (str) {
    var splitStr =str.split('');
    var vocal = ['a','i','u','e','o','A','I','U','E','O'];
    var nextVocal = ['b','j','v','f','p','B','J','V','F','P'];
    for(var i=0;i<splitStr.length;i++){
        for(var j=0;j<vocal.length;j++){
            if(splitStr[i]===vocal[j]){
                splitStr[i] = nextVocal[j];
            }
        }
    }
    return splitStr.join('');
}

function reverseWord (str) {
  var rev = [];
  for(var i =str.length-1;i>=0;i--){
      rev.push(str[i]);
  }
  return rev.join('');
}

function setLowerUpperCase (str) {
  var splitStr = str.split('');
  for(var i=0;i<splitStr.length;i++){
    if(splitStr[i] == splitStr[i].toLowerCase()){
        splitStr[i]=splitStr[i].toUpperCase();
    } else{
        splitStr[i]=splitStr[i].toLowerCase();
    }
}
    return splitStr.join('');

}

function removeSpaces (str) {
    var noSpace = [];
    for(var i=0;i<str.length;i++){
        if(str[i] !== ' '){
            noSpace.push(str[i]);
        }
    }
    return noSpace.join('');
}

function passwordGenerator (name) {
    if(name.length>=5){
        return reverseWord(changeVocals(setLowerUpperCase(removeSpaces(name))));
    } else{
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
   
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'