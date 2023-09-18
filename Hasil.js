const prompt = require('prompt-sync')();
const hitungNilai = require('./main.js');

function getInput() {
  const inputNilai = prompt('Masukkan nilai Anda (0-100): ');
  const nilai = hitungNilai(inputNilai);

  if (nilai === 'Invalid') {
    console.log('Masukkan nilai antara 0 - 100.');
    getInput(); 
  } else {
    console.log(`Nilai Anda : ${nilai}!`);
  }
}

getInput(); 
