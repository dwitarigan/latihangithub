var w = 'andi' ; 
console.log(typeof(w))
var z = '124';
console.log(typeof(z))

var x = 123 ;
console.log(typeof(x))
var kalimat = 'selamat datang!'
 console.log(kalimat.length)
console.log(kalimat.indexOf('selamat'))
 console.log(kalimat.charAt(8))
 console.log(kalimat.lastIndexOf('a'))
 console.log(kalimat.toUpperCase())
 console.log(kalimat.toLowerCase())


console.log(kalimat.slice(5))
console.log(kalimat.slice(5,11))

var teks = 'alvamart'
console.log(teks.length)
console.log(teks.replace('r','R'))
console.log(teks.length)
//menampilkan krakter ke2 uppercase
console.log(teks.slice(0,2)+teks.charAt(2).toUpperCase()+teks.slice(3,11))
console.log(teks.slice(0,9)+teks.charAt(9).toUpperCase()+teks.slice(10))
//menampilkan karakter ke2 uppercase
console.log(teks.slice(0,teks.length-1)+teks.charAt(teks.length-1).toUpperCase())

console.log(kalimat.substr(5,4))
console.log(kalimat.replace('se','ma'))
console.log(kalimat.replace(/a/g,'i'))
console.log(kalimat.repeat(5))
console.log(kalimat.split('a'))

// SOLVE #7
let tes = 'selamat sore guys'
let cari = tes.toLowerCase()
let cari1 = 's'
let cari2= new RegExp(cari1,'g') 
var jumlah= tes.length - cari.replace(cari2, '').length
console.log(jumlah)
// cari huruf s
let text = 'selamat sore gaes'
let cariS = 's'
let RegExpcari = new RegExp(cariS, 'g')
let jumlah1 = text.length - text.replace(RegExpcari, '').length
console.log(jumlah)

let ko = 'yesterday'
let cariE = 't'
let RegExpcariE = new RegExp(cariE, 'g')
let jumlahE = ko.length - ko.replace(RegExpcari, '').length
console.log(jumlah)



