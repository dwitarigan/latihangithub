// setTimeout(
//     ()=>{console.log('halo!')},
//     3000)

//   setInterval(
//     ()=>{console.log('halo!')},
//   1000)  



// objek pada javascrip
// var x = [1,2,3,,4,5]

// var y = {
//     nama: 'Andi',  //nama adalah properti dan 'y' adalah value
//     nikah: true,
//     job: ['staff IT', 'kasir'],
//     usia: function(){
//         var x = new Date()
//         return(
//             x.getFullYear() - 1990
//         )
//     }
// }

// var z = {
//     nama:'budi',
//     usia: 22,
//     nikah: false,
//     job: ['staff IT'],
//     rumah: {
//         luas: 60,
//         kota: 'jakarta'
//     }
// }
// console.log(y)
// console.log(y.nama)
// console.log(y.usia)
// console.log(y.nikah)
// console.log(y.job)
// console.log(y.job[1])
// console.log(z)
// console.log(z.rumah.kota)

//cara 1 objek literal
// var andi = {
//     nama: 'andi',
//     usia: 21
// }
// console.log(andi)

// //new objek()
// var budi = new object()
// budi.nama = 'budi'
// budi.usia = 21
// console.log(budi)

// objek builder atau class
function x(name,age){
    this.nama = name
    this.usia = age
}
var andi = new x('andi', 21)
var budi = new x('budi', 22)

console.log(andi)
console.log(budi)


andi.phone = '+33333333'
delete budi.nama

console.log(andi)
console.log(budi)

 function kendaraan(name,merk,seat){
     this.name = name
     this.merk = merk
    this.seat = seat
}
function mobil1(name,merk,seat,pintu){
    kendaraan.call(this,name,merk,seat)
    this.pintu = pintu
}
function motor1(name,merk,seat,size){
    kendaraan.call(this,name,merk,seat)
    this.bagasi = size
}

var mio = new motor1('mio', 'yamaha',2,'large')
console.log(mio)
var avanza = new mobil1('avanza','yamaha',7,'large')
console.log(avanza)


function kendaraan(){
    this.nama = 'vixion'
    this.merk = 'yamaha'
}
var vixion = new kendaraan()
var mio = new kendaraan()
console.log(vixion)
console.log(mio)

function lingkaran(r){
    this.rad = r
    this.luas = function(){
        return Math.PI*(r**2)
    }
    this.keliling = function(){
        return 2*Math.PI*r
    }

}

var L1 = new lingkaran(10)
console.log(L1.luas())
console.log(L1.keliling())

var L2 =  new lingkaran(20)
console.log(L2.luas())
console.log(L2.keliling()) 

