const auth = () => {
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    document.getElementById("target").innerText = token
    document.getElementById("target").style.color = "#" + token

}
// 인증번호 발송 + 온클릭 색깔 변경 스크립트 
