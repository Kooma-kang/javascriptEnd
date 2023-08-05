let time = 10
undefined
setInterval(function() {
    if(time >= 0){
    console.log(time)
    time = time - 1
},1000)
// VM570:5 Uncaught SyntaxError: Unexpected token ','
setInterval(function() {
    if(time >= 0){
    console.log(time)
    time = time - 1
}
},1000)

// 3분 타임아웃

let time = 180

setInterval(function(){
    
    if(time >= 0 ) {
        let min = Math.floor( time / 60 )
        let sec = String(time % 60).padStart(2, "0")
        console.log(min + ":" + sec)
        time = time - 1
    }
},1000)
    
},1000)