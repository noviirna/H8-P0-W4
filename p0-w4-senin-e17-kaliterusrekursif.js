function kaliTerusRekursif(angka) {
  // you can only write your code here!
  var arrAngka = angka.toString().split('');
  if (arrAngka.length == 0 || angka == 0) {
    return 0;
  }
  else {
    var kali = 1
    for(var i = 0; i < arrAngka.length; i++){
        kali *= Number(arrAngka[i]);
    }
  }
  if(kali.toString().length === 1){
      return kali;
  }
  else{
    angka = kali
    return kaliTerusRekursif(angka);
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
console.log(kaliTerusRekursif(14)); // 4
console.log(kaliTerusRekursif(1030)); // 0
console.log(kaliTerusRekursif(11222)); // 8