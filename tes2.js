// var x = 12
// var y = 13
// var z = '13'
// var jomblo = true

// console.log(x > y)
// console.log(z >= y)
// console.log(z <= y)
// console.log(z == y)
// console.log(z != y)
// console.log(!jomblo)
// console.log(x<y && x<z)
// console.log(x<y || x<z)
// console.log(x<y || x>z)
// console.log(x>y || x>z)

// var nilaiUN = 75;

// // if statement
// if(nilaiUN > 80){
//     console.log('dapat mobil')
// }else if (nilaiUN<=80 && nilaiUN>=60){
//     console.log('dapat tiket liburan')
// }else {
//     console.log('gak lulus')
// }

// var minbeli = 100000
// var beli = 100001

// if(beli > minbeli){
//     var diskon = 0.1 * beli
//     var bayar =parseInt(beli - diskon)
//     var bayar2 = bayar.toString()
// console.log('anda cukup bayar '  + bayar2)
// }else {
//      console.log('anda tidak dapat diskon')
// } 

// var a = 12000

// var b = a.toLocaleString(
//     undefined, {
//         style: 'currency',
//         currency: 'IDR',
//         minimumFractionDigits:2
//     }
// )

//  console.log(b)   
//  console.log(b.replace('IDR' , 'Rp'))   

// var jomblo = 'saya jomblo'

// if(jomblo){
//    console.log('anda jomblo')
// }else{
//     console.log('anda teken!')
// }

// console.log(jomblo)

// var mobil = 'avanza'
// var motor = 'cbr'
// var sepeda = 'wwww'
// switch(true){
//     case (mobil=='avanza' && motor=='cbr' && sepeda=='wwww'):
//     console.log('mantap')
//    break;
//     case 'avanza':
//     console.log('mantul')
//    break 
//     default:
//     console.log('biasa aja')
// }

// var angka = 123
// if(angka % 2 ==0){
//    console.log('angaka '+angka+' = genap') 

// }else {
//     console.log('angaka '+angka+' = ganjil')


//     var xx = new Date()
//     var thth = xx.getFullYear()
//     var bl = xx.getMonth()
//     var tg = xx.getDate()
//     var hr = xx.getDay()
//     var jj = xx.getHours()
//     var mm = xx.getMinutes() 
//     var dd = xx.getSeconds()
    
// if(hr==0){
//     var hr2 = 'minggu'
// }
// else if(hr==1){
//     var hr2 = 'senin'
// }
// else if(hr==2){
//     var hr2 = 'selasa'
// }
// else if(hr==3){
//     var hr2 = 'rabu'
// }
// else if(hr==4){
//     var hr2 = 'kamis'
// }
// else if(hr==5){
//     var hr2 = 'jumat'
// }
// else {
//     var hr2 = 'sabtu'
// }

   
// if(bl==0){
//     var bl2 = 'januari'
// }
 
// else if(bl==1){
//     var bl2 = 'februari'
// }

// else if(bl==2){
//     var bl2 = 'maret'
// }
// else if(bl==3){
//     var bl2 = 'april'
// }
// else if(bl==4){
//     var bl2 = 'mei'
// }
// else if(bl==5){
//     var bl2 = 'juni'
// }
// else if(bl==6){
//     var bl2 = 'juli'
// }
// else if(bl==7){
//     var bl2 = 'agustus'
// }
// else if(bl==8){
//     var bl2 = 'september'
// }

// else if(bl==9){
//     var bl2 = 'oktober'
// }
// else if(bl==10){
//     var bl2 = 'november'
// }
// else {
//     var bl2 = 'desember'
// }

// if(jj.length==1){
//     var jj2 = '0' + jj
// }
// else{
//     var jj2 = jj
// }

// if(mm.length==1){
//     var mm2 = '0' + mm
// }
// else{
//     var mm2 = mm
// }
// if(dd.length==1){
//     var dd2 = '0' + dd
// }
// else{
//     var dd2 = dd
// }

// console.log('Hari ini adalah hari ' + hr2 + '. Tanggal ' + tg + ' ' + bl2 + ' ' + thth + '. Pukul ' + 
// jj2 + ':' + mm2 + ':' + dd2) 


// let x = new Date()
// var bulan ;
// var hari ;
// var noljam ;
// var nolmenit ;
// var noldetik;

// if(x.getHours()<10){
//     noljam = '0'
// }else {
//     noljam= ''
// }

// if(x.getMinutes()<10){
//     nolmenit = '0'
// }else {
//     nolmenit= ''
// }
// if(x.getSeconds()<10){
//     noldetik = '0'
// }else {
//     noldetik=''
// }

// if(x.getDay()==0){
//     hari = 'ahad'
// }

// if(x.getDay()==1){
//     hari = 'senin'
// }

// if(x.getDay()==2){
//     hari = 'selasa'
// }

// if(x.getDay()==3){
//     hari = 'rabu'
// }

// if(x.getDay()==4){
//     hari = 'kamis'
// }

// if(x.getDay()==5){
//     hari = 'jumat'
// }

// if(x.getDay()==6){
//     hari = 'sabtu'
// }

// if(x.getDay()==7){
//     hari = 'minggu'
// }

// if(x.getMonth()==0){
//     bulan = 'januari'
// }

// if(x.getMonth()==1){
//     bulan = 'februari'
// }
 
// if(x.getMonth()==2){
//     bulan = 'maret'
// }
// if(x.getMonth()==3){
//     bulan = 'april'
// }
// if(x.getMonth()==4){
//     bulan = 'mei'
// }
// if(x.getMonth()==5){
//     bulan = 'juni'
// }
// if(x.getMonth()==6){
//     bulan = 'juli'
// }
// if(x.getMonth()==7){
//     bulan = 'agustus'
// }
// if(x.getMonth()==8){
//     bulan = 'september'
// }
// if(x.getMonth()==9){
//     bulan = 'oktober'
// }
// if(x.getMonth()==10){
//     bulan = 'november'
// }  
// if(x.getMonth()==11){
//     bulan = 'desember'
// }


// var t = x.getDate()
// var y = x.getFullYear()

// console.log('hari ini adalah hari ' + hari + '.' + 'tanggal ' + t + ' ' + bulan + ' ' + y + ' ' + 'pukul ' + 
// noljam + ':' + nolmenit + ':' + noldetik + '.') 