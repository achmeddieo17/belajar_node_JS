const { expect } = require('chai')
const hitungNilai = require('./Hasil.js');

describe('Konversi Nilai Mata Kuliah', function(){
    
    describe('TESTCASE-ID-1 - Memasukan Nilai <= 100 dan >=90 ', function () {

        it('Mendapatkan nilai A', function () {
            const test = hitungNilai(100)
            expect(test).to.be.equal('A')  
        })
        it('Mendapatkan nilai A', function () {
            const test = hitungNilai(90)      
            expect(test).to.be.equal('A')  
        })
    }) 
    describe('TESTCASE-ID-2 - Memasukan Nilai < 90 dan >= 80', function () {

        it('Mendapatkan nilai B', function () {
            const test = hitungNilai(89)       
            expect(test).to.be.equal('B')  
        })
        it('Mendapatkan nilai B', function () {
            const test = hitungNilai(80)      
            expect(test).to.be.equal('B')  
        })
    })
    describe('TESTCASE-ID-3 - Memasukan Nilai < 80 dan >= 70', function () {

        it('Mendapatkan nilai C', function () {
            const test = hitungNilai(79)     
            expect(test).to.be.equal('C')  
        })
        it('Mendapatkan nilai C', function () {
            const test = hitungNilai(70)     
            expect(test).to.be.equal('C')  
        })
    })
    describe('TESTCASE-ID-4 - Memasukan Nilai < 70 dan >= 60', function () {

        it('Mendapatkan nilai D', function () {
            const test = hitungNilai(69)     
            expect(test).to.be.equal('D')  
        })
        it('Mendapatkan nilai D', function () {
            const test = hitungNilai(60)     
            expect(test).to.be.equal('D')  
        })
    }) 
    describe('TESTCASE-ID-5 - Memasukan Nilai < 60 dan >= 40', function () {

        it('Mendapatkan nilai E', function () {
            const test = hitungNilai(59)     
            expect(test).to.be.equal('E')  
        })
        it('Mendapatkan nilai E', function () {
            const test = hitungNilai(40)     
            expect(test).to.be.equal('E')  
        })
    }) 
    describe('TESTCASE-ID-6 - Memasukan Nilai < 40', function () {

        it('Mendapatkan nilai F', function () {
            const test = hitungNilai(30)     
            expect(test).to.be.equal('F')  
        })
        it('Mendapatkan nilai F', function () {
            const test = hitungNilai(10)     
            expect(test).to.be.equal('F')  
        })
    })
})

describe ('Konversi Nilai Mata Kuliah Dengan Inputan Yang Salah', function () {
    describe('TESTCASE-ID-7 - Memasukan Nilai "halo semuanya"', function () {

        it('Masukkan nilai Anda (0-100)', function () {
            const test = hitungNilai("halo semuanya")       
            expect(test).to.be.equal('Invalid')  
        })
    }) 
    describe('TESTCASE-ID-8 - Memasukan Nilai 101', function () {

        it('Masukkan nilai Anda (0-100)', function () {
            const test = hitungNilai("101")      
            expect(test).to.be.equal('Invalid')  
        })
    })
    describe('TESTCASE-ID-9 - Memasukan Nilai -1', function () {

        it('Masukkan nilai Anda (0-100)', function () {
            const test = hitungNilai("-1")      
            expect(test).to.be.equal('Invalid')  
        })
    })
})