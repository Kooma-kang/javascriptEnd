let auth = () => {
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    document.getElementById("send").innerText = token

// } 이미 auth라는 함수를 지정해 놓았기 때문에 이괄호를 없애면 함께 구현됨.
let time = 180

setInterval(function(){

    if(time >= 0 ) {
        let min = Math.floor( time / 60 )
        let sec = String(time % 60).padStart(2, "0")
        document.getElementById("timer").innerText = min + ":" + sec
        time = time - 1
    } else {
        document.getElementById("finish").disabled = true
    }
},1000)
}