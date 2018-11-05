setInterval(
    ()=>{
        var x = new Date()
        var jam = x.getHours()
        var menit = x.getMinutes()
        var detik = x.getSeconds()
        var noljam = ''
        var nolmenit = ''
        var noldetik = ''
        if(jam<10){noljam='0'}
        if(nolmenit<10){nolmenit='0'}
        if(noldetik<10){noldetik='0'}

        console.log(noljam + jam + ':'+ nolmenit + menit + ':' + noldetik + detik )
    }
,1000)
  
