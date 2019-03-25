function totalDigitRekursif(angka) {
    // you can only write your code here!
    var strAngka = String(angka).split('');
    if (strAngka.length == 0 || angka == 0) {
      return 0;
    }
    else {
      jumlah = Number(strAngka[0]);
      strAngka.shift();
      angka = Number(strAngka.join(''));
    }
    jumlah += totalDigitRekursif(angka);
    return jumlah;
  }

console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
