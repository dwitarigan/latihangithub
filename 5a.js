//var d


//for(x=1; x<=10; x+=2){
    //console.log(x)
//}

//for(x=1; x<=10; x+=2){
    //console.log('antian ' +=2 )
//}

/*
var x = [1,2,3,4,5,6]

for(var i=0; i<=x.length; i++){
    console.log(x[i])
}
*/

/*
var x = ['andy','bubi','ani','budi']

for(var i=0; i<=x.length; i++){
    console.log(x[i])
}
*/
/*
var x = [8,1,12,14,26,4,100]

for(var i=0; i<=x.length; i++){
    console.log(x[i])
}
*/

/*
var x = [8,1,12,14,26,4,100]

for(var i=0 ; i<=x.length ; i++){
    if(x[i] % 2==0){
     console.log(x[i])   
    }
}
*/
/*
var x = [8,1,12,14,26,4,100]
var genap = []
var ganjil = []
for(var i=0 ; i<=x.length ; i++){
    if(x[i] % 2==0 ){
        genap.push(x[i])
    } else {
        ganjil.push(x[i])
    }
         console.log(genap)
         console.log(ganjil)
         }
*/

/*
         var x = [8,1,12,14,26,4,100]
         var genap = []
         var ganjil = []
         for(var i=0 ; i<=x.length ; i++){
             if(x[i] % 2 == 0 ){
                 genap.push(x[i])
             } else {
                 ganjil.push(x[i])
             }
                  console.log(genap)
                  console.log(ganjil)
                  }
  */

/*
 var img=''

for(var i=0;i<5; i++){
    img+= ' @ '
}
console.log(img)
*/

/*
var img1=''

for(var i=0;i<5; i++){
    img1+= ' * ' + '\n'
}
console.log(img1)
*/
// membuat drawing persegi
// var img1=''
// for(var i=0;i<5; i++){
//     for(var j=0;j<5; j++){
//         img1 += ' * '
//     }
//     img1 += '\n'
// }
    
// console.log(img1)



//  var img1=''
// for(var i=1;i<=5; i++){
//     for(j=i; j<=5; j++){
//         img1+='\n'
//     }
//      for(k=1; k<=i; k++){
//      img1+=' * ';
// }
// for(m=1; m<=i; m++){
//     console.log(' * ');
// }
//      console.log('\n')
// }


// var r='';
// for(a=1; a<=5; a++){
//     for(b=a; b<=5; b++){
//         r+='\n'
//     }
//     for(c=1; c<=a; c++){
//         r+='*';
//         console.log(r)
//     }
//     for(d=1; d<=a-1; d++){
//         console.log('*')
//     }
//     console.log(r)
// }


// var r='';
// for(a=1; a<=5; a++){
//     for(b=a; b<=5; b++){
//         r+='\n'
//     }
//     for(c=1; c<=a; c++){
//         r+='*';
//     }
//     for(d=1; d<=a-1; d++){
//     }
//     console.log(r)
// }



// var r='';
// for(a=1; a<=5; a++){
//     for(b=a; b<=5; b++){
//         r+='\n'
//     }
//     for(c=1; c<=a; c++){
//         r+='*';
//     }
//     for(d=1; d<=a-1; d++){
//     }
//     console.log(r)
// }

// var a,b 
// var c = 3;
// var r = '';
// for(a=1; a<=c; a++){
//     for(b=1; b<=c; b++)
//     r+='  ';
// }
// for(b=1; b<=c; b++){

// }

// membuat segitiga
//  var img= ''

//   for(let b=0; b<10; b++){
//       for(let k=0; k<b; k++){
//          img += ' * '
//      }
//      img += '\n'
//   }
//   console.log(img)


// var img = ''

// for(let b=10; b>=0; b--){
//     for(let k=0; k<b; k++){
//         img += ' * '
//     }
//     img += '\n'
// }
// console.log(img)

var baris, i;
var banyak = 7;
var z = ''
for(baris=banyak; baris>0; baris--){
    z+='\n'
    for(i=1; i<=banyak-baris; i++){
        z+=' * '
    }
}
     
