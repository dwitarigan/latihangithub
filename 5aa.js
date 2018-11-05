var manusia = {
    kepala: 1,
    tangan: 2,
    kaki: 2,
    mulut: 1,
    mata: 2,
    hidung: 1
    
};
var namaprom;
for (namaprom in manusia){
    console.log(namaprom + ':' + manusia[namaprom])
}
console.log('........................')
function orang(nama,usia,job){
    this.namadpn= nama,
    this.usia= usia,
    this.job= job
}
function atlet(nama,usia,job,cab,pres){
orang.call(this,nama,usia,job)
this.cabor= cab,
this,prestasi= pres
}
var andi= new atlet('andi',24,'pns','rt','juara 1')
console.log(andi)

console.log('..................................')

// 
function persegi(sisi) {
    this.sisi= sisi,
    this.luas= function (){
       return Math.pow(this.sisi,2)
    }
    this.keliling= function(){
        return 4 * this.sisi
    }
}
var x = new persegi(8)
console.log('luas '+ x.luas())
console.log('keliling '+ x.keliling())

