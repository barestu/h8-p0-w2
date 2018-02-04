function konversiMenit(menit) {
  // you can only write your code here!
  var jam = Math.floor(menit / 60);
  var menit2 = menit % 60;
  
  if(String(menit2).length === 1) {
    menit2 = '0' + menit2;
  }
  
  var hasil = jam + ':' + menit2;
  
  return hasil;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00