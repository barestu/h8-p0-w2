// 1. Menyusun Barisan Bintang

var rows1 = parseInt(prompt('Input the number of rows!'));

for(var i = 1; i <= rows1; i++) {
  console.log("*");
}

  
// 2. Menyusun Barisan Bintang Dengan Nested Looping
console.log('\n');

var rows2 = parseInt(prompt('Input the number of rows!'));

for(var i = 1; i <= rows2; i++) {
  var output = '';
  for(var j = 1; j <= rows2; j++) {
    output += '*';
  }
  console.log(output);
}


// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
console.log('\n');

var rows3 = parseInt(prompt('Input the number of rows!'));

for(var i = 1; i <= rows3; i++) {
  var output = '';
  for(var j = 1; j <= i; j++) {
    output += '*';
  }
  console.log(output);
}