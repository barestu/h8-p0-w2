var nama = prompt('Siapa namamu?');
var peran = prompt('Apa peranmu? (Ksatria/Tabib/Penyihir)');

// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir

if (nama === '') {
  console.log('Nama harus diisi!');
} else if (peran == 'Ksatria') {
  console.log('Selamat datang di Dunia Proxytia, ' + nama + 
              '\nHalo ' + peran + ' ' +  nama + ', kamu dapat menyerang dengan senjatamu!');
} else if (peran == 'Tabib') {
  console.log('Selamat datang di Dunia Proxytia, ' + nama + 
              '\nHalo ' + peran + ' ' +  nama + ', kamu akan membantu temanmu yang terluka.');
} else if (peran == 'Penyihir') {
  console.log('Selamat datang di Dunia Proxytia, ' + nama + 
              '\nHalo ' + peran + ' ' +  nama + ', ciptakan keajaiban yang membantu kemenanganmu!');
} else {
  console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!');
}
