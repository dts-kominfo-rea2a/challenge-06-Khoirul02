// TODO: import module bila dibutuhkan di sini
const fs = require('fs');
// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = () => {
  var hasil = [];
  fs.readFile('./data1.json', 'utf8', (err, data1) => {
    if (err) {
      console.error(err);
      return;
    }
    let Data1 = JSON.parse(data1)
    let ambilKataBelakang1 = Data1.message.split(' ').slice(-1).join(' ');
    hasil.push(ambilKataBelakang1);
    fs.readFile('./data2.json', 'utf8', (err, data2) => {
      if (err) {
        console.error(err);
        return;
      }
      let Data2 = JSON.parse(data2)
      let ambilKataBelakang2 = Data2[0].message.split(' ').slice(-1).join(' ');
      hasil.push(ambilKataBelakang2);
      fs.readFile('./data3.json', 'utf8', (err, data3) => {
        if (err) {
          console.error(err);
          return;
        }
        let Data3 = JSON.parse(data3)
        let ambilKataBelakang3 = Data3[0].data.message.split(' ').slice(-1).join(' ');
        hasil.push(ambilKataBelakang3);
        console.log(hasil);
      });
    });
  });
}

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
