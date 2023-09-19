const { expect } = require('chai')
const hitungNilai = require('./Hasil.js');

describe('Konversi Nilai Mata Kuliah', function(){
    
    describe('TESTCASE-ID-1 - Memasukan Nilai 100', function () {

        it('Mendapatkan nilai A', function () {
            const test = hitungNilai(100)
            expect(test).to.be.equal('A')  
        })
    }) 
    describe('TESTCASE-ID-2 - Memasukan Nilai 90', function () {

        it('Mendapatkan nilai A', function () {
            const test = hitungNilai(90)      
            expect(test).to.be.equal('A')  
        })
    })
    describe('TESTCASE-ID-3 - Memasukan Nilai 89', function () {

        it('Mendapatkan nilai B', function () {
            const test = hitungNilai(89)       
            expect(test).to.be.equal('B')  
        })
    })
    describe('TESTCASE-ID-4 - Memasukan Nilai 80', function () {

        it('Mendapatkan nilai B', function () {
            const test = hitungNilai(80)      
            expect(test).to.be.equal('B')  
        })
    }) 
    describe('TESTCASE-ID-5 - Memasukan Nilai 79', function () {

        it('Mendapatkan nilai C', function () {
            const test = hitungNilai(79)     
            expect(test).to.be.equal('C')  
        })
    }) 
    describe('TESTCASE-ID-6 - Memasukan Nilai 70', function () {

        it('Mendapatkan nilai C', function () {
            const test = hitungNilai(70)     
            expect(test).to.be.equal('C')  
        })
    })    
    describe('TESTCASE-ID-7 - Memasukan Nilai 69', function () {

        it('Mendapatkan nilai D', function () {
            const test = hitungNilai(69)     
            expect(test).to.be.equal('D')  
        })
    })  
    describe('TESTCASE-ID-8 - Memasukan Nilai 60', function () {

        it('Mendapatkan nilai D', function () {
            const test = hitungNilai(60)     
            expect(test).to.be.equal('D')  
        })
    })   
    describe('TESTCASE-ID-9 - Memasukan Nilai 59', function () {

        it('Mendapatkan nilai E', function () {
            const test = hitungNilai(59)     
            expect(test).to.be.equal('E')  
        })
    })  
    describe('TESTCASE-ID-10 - Memasukan Nilai 40', function () {

        it('Mendapatkan nilai E', function () {
            const test = hitungNilai(40)     
            expect(test).to.be.equal('E')  
        })
    })  
    describe('TESTCASE-ID-11 - Memasukan Nilai 30', function () {

        it('Mendapatkan nilai F', function () {
            const test = hitungNilai(30)     
            expect(test).to.be.equal('F')  
        })
    })  
})

describe ('Konversi Nilai Mata Kuliah Dengan Inputan Yang Salah', function () {
    describe('TESTCASE-ID-12 - Memasukan Nilai "halo semuanya"', function () {

        it('Masukkan nilai Anda (0-100)', function () {
            const test = hitungNilai("halo semuanya")       
            expect(test).to.be.equal('Invalid')  
        })
    }) 
    describe('TESTCASE-ID-13 - Memasukan Nilai 101', function () {

        it('Masukkan nilai Anda (0-100)', function () {
            const test = hitungNilai("101")      
            expect(test).to.be.equal('Invalid')  
        })
    })
    describe('TESTCASE-ID-14 - Memasukan Nilai -1', function () {

        it('Masukkan nilai Anda (0-100)', function () {
            const test = hitungNilai("-1")      
            expect(test).to.be.equal('Invalid')  
        })
    })
})