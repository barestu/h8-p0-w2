var tanggal = 1; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 12; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 2200; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
var hasil;

if (tanggal < 1 || tanggal > 31) {
  console.log('Tanggal tidak valid!');
} else if (bulan < 1 || bulan > 12){
  console.log('Bulan tidak valid!');
} else if (tahun < 1900 || tahun > 2200){
  console.log('Tahun tidak valid!');
} else {
  switch (bulan) {
    case 1: { bulan = ' Januari '; break;}
    case 2: { bulan = ' Februari '; break;}
    case 3: { bulan = ' Maret '; break;}
    case 4: { bulan = ' April '; break;}
    case 5: { bulan = ' Mei '; break;}
    case 6: { bulan = ' Juni '; break;}
    case 7: { bulan = ' Juli '; break;}
    case 8: { bulan = ' Agustus '; break;}
    case 9: { bulan = ' September '; break;}
    case 10: { bulan = ' Oktober '; break;}
    case 11: { bulan = ' November '; break;}
    default: { bulan = ' Desember '; break;}
  }

  hasil = tanggal + bulan + tahun;
  console.log(hasil);
}
