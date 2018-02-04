// ----------------------------------------------------
// 1. Melakukan Looping Menggunakan While
// ----------------------------------------------------
var i = 2;

console.log('LOOPING PERTAMA');
while(i <= 20) {
  console.log(i + " - I love coding");
  i+=2;
}

console.log('\nLOOPING KEDUA');
i-=2;
while(i >= 2) {
  console.log(i + " - I love coding");
  i-=2;
}

// ----------------------------------------------------
// 2. Melakukan Looping Menggunakan For
// ----------------------------------------------------

console.log('\nLOOPING PERTAMA');
for(var i = 1; i <= 20; i++) {
  console.log(i + " - I love coding");
}

console.log('\nLOOPING KEDUA');
for(var i = 20; i >= 1; i--) {
  console.log(i + " - I love coding");
}

// ----------------------------------------------------
// 3. Angka Ganjil dan Genap
// ----------------------------------------------------
console.log('\n');
for(var j = 1; j <= 100; j++) {
  if(j % 2 === 0) {
    console.log('Counter sekarang: ' + j);
    console.log('GENAP');
  } else if(j % 2 == 1) {
    console.log('Counter sekarang: ' + j);
    console.log('GANJIL');
  }
}

console.log('\n');
for(var a = 1; a <= 100; a+=2) {
  if(a % 3 === 0) {
    console.log('Counter sekarang: ' + a);
    console.log(a + ' kelipatan 3');
  }
}

console.log('\n');
for(var b = 1; b <= 100; b+=5) {
  if(b % 6 === 0) {
    console.log('Counter sekarang: ' + b);
    console.log(b + ' kelipatan 6');
  }
}

console.log('\n');
for(var c = 1; c <= 100; c+=9) {
  if(c % 10 === 0) {
    console.log('Counter sekarang: ' + c);
    console.log(c + ' kelipatan 10');
  }
}

