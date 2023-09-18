// main.js

function hitungNilai(inputNilai) {
  
    if (!isNaN(inputNilai) && inputNilai >= 0 && inputNilai <= 100) {
      if (inputNilai >= 90 && inputNilai <= 100) {
        return 'A';
      } else if (inputNilai >= 80 && inputNilai < 90) {
        return 'B';
      } else if (inputNilai >= 70 && inputNilai < 80) {
        return 'C';
      } else if (inputNilai >= 60 && inputNilai < 70) {
        return 'D';
      } else {
        return 'F';
      }
    } else {
      return 'Invalid';
    }
  }
  
  module.exports = {
    hitungNilai: hitungNilai
  };
  