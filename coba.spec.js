const { expect } = require('chai')
const hitungNilai = require('./Hasil.js');

describe('Konversi Nilai Mata Kuliah', function(){
    
    describe('TESTCASE-ID-1 - Memasukan Niai 95', function () {

        it('Mendapatkan nilai A', function () {
            const test = hitungNilai(95)
            expect(test).to.be.equal('A')  
        })
    }) 
    describe('TESTCASE-ID-2 - Memasukan Niai 80', function () {

        it('Mendapatkan nilai B', function () {
            const test = hitungNilai(80)      
            expect(test).to.be.equal('B')  
        })
    })
    describe('TESTCASE-ID-3 - Memasukan Niai 70', function () {

        it('Mendapatkan nilai C', function () {
            const test = hitungNilai(70)       
            expect(test).to.be.equal('C')  
        })
    })
    describe('TESTCASE-ID-4 - Memasukan Niai 60', function () {

        it('Mendapatkan nilai D', function () {
            const test = hitungNilai(60)      
            expect(test).to.be.equal('D')  
        })
    }) 
    describe('TESTCASE-ID-5 - Memasukan Niai 50', function () {

        it('Mendapatkan nilai E', function () {
            const test = hitungNilai(50)     
            expect(test).to.be.equal('E')  
        })
    }) 
    describe('TESTCASE-ID-6 - Memasukan Niai 30', function () {

        it('Mendapatkan nilai F', function () {
            const test = hitungNilai(30)     
            expect(test).to.be.equal('F')  
        })
    })     
})

describe ('Konversi Nilai Mata Kuliah Dengan Inputan Yang Salah', function () {
    describe('TESTCASE-ID-7 - Memasukan Niai "halo semuanya"', function () {

        it('Masukkan nilai Anda (0-100)', function () {
            const test = hitungNilai("halo semuanya")       
            expect(test).to.be.equal('Invalid')  
        })
    }) 
    describe('TESTCASE-ID-8 - Memasukan Niai 101', function () {

        it('Masukkan nilai Anda (0-100)', function () {
            const test = hitungNilai("101")      
            expect(test).to.be.equal('Invalid')  
        })
    })
    describe('TESTCASE-ID-9 - Memasukan Niai -1', function () {

        it('Masukkan nilai Anda (0-100)', function () {
            const test = hitungNilai("-1")      
            expect(test).to.be.equal('Invalid')  
        })
    })
})