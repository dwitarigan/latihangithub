// let x = 'andi'
// const y = 3.14
// var z = 12
// var arr = [1,2,3,4,5]
// var obj = {
//     nama: 'andi', usia:21

// }
//  console.log('halo ' + arr)  //typecoersion,apapun di tambah '' akan berubah jadi string
// console.log('\nhalo ' + obj.nama + '!')
// console.log(`o: ${obj.nama} (${obj.usia} th)`)


// console.log(`list = ${arr}`)
// console.log('halo' + x)
// console.log(`halo ${x}`)
// console.log(`halo ${y+z}`)
// console.log(`halo halo

// tes 1 2 

//   3`)

// var x = 2    // (;)(cintetik sugar )
// var y = 3

// var kali = (a=2,b=3) => {
//     console.log(a * b)
//     console.log(x * y)

// }

// kali()
// kali(4,5)


// var kali = (a=2,b=3) => {
//     return a * b
  
// }
// console.log(kali())
// console.log(kali(4,5))

// console.log('..............................')

// // khusus untuk return funtion
// var printA = (a) => {
//     return a
// }
// var printB = (b,c) => b * c

// console.log(printA(4.98))
// console.log(printB(2,3))


// var w = 'andi'
// var x = w.split('')
// console.log(x)

// var y = 'budi'
// console.log([...y])    //split digantiin dengan ... 
// console.log(...y)
// console.log([...y][3])
// console.log(...y[3])
// console.log(y[3])

//var c = [1,2,3,4,5,6]
// console.log([...c])
// console.log(...c)

// for(var i=0; i<c.length; i++){
//     console.log(c[i] * 2)
// }
// var c = [1,2,3,4,5,6,8]
// var s = c.map(  // map memanggil semua elemen yang kita cari
//     (val,i)=> {
//        return val + i
//     }
// )
// console.log(s)

// var z = c.filter(    //filter untuk menyaring elemen yang ingin kita cari
//     (val,i)=> i%2===0 && val%2===0// untuk menampilkan indeks genap bilangan genap
// )
// console.log(z)

// function orang(x,y){
//     this.nama = x
//     this.usia = y
// } 

class orang{
    constructor(x,y){
    this.nama = x
    this.usia = y
    }
}

var andi = new orang('andi', 21)
console.log(andi)

// // array => set
// let siswa = [1,2,3,1,2,3,8]
// let setSiswa = new Set(siswa)

// console.log(siswa)
// console.log(siswa.length)
// console.log(setSiswa)
// console.log(setSiswa.size)

// // array => set => array
// var murid = [...setSiswa]
// console.log(murid)
// console.log(murid[0])