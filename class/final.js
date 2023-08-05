const changeFocus1 = () => {

    let phone1 = document.getElementById("p1").value
    if(phone1.length === 3) {
        document.getElementById("p2").focus()
    }
}

const changeFocus2 = () => {

    let phone2 = document.getElementById("p2").value
    if(phone2.length === 4) {
        document.getElementById("p3").focus()
    }
}

// if 조건문 사용시 ( , . 헷갈리지 않기 .length)
//객체 등을 담은 변수() 잊지 않기

// let auth = () = > {

//     let phone3 = document.getElementById("p3").value
//     if(phone1.length === 3 && phone2.length === 4 && phone3.length === 4) {
//         document.getElementById("send").disabled() = "false"
//     }



// }

const changeFocus3 = () => {
    let phone1 = document.getElementById("p1").value
    let phone2 = document.getElementById("p2").value
    let phone3 = document.getElementById("p3").value
    if(phone1.length === 3 && phone2.length === 4 && phone3.length === 4) {
        document.getElementById("send").removeAttribute("disabled")
        }
}




let isStarted = false;

let auth = () => {

    if(isStarted === false) {
        //타이머가 작동중이 아닐때
        isStarted = true;
        document.getElementById("finish").disabled = false
        const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
        document.getElementById("target").innerText = token
    
        // } 이미 auth라는 함수를 지정해 놓았기 때문에 이괄호를 없애면 함께 구현됨.

        let time = 180
        let timer

        timer = setInterval(function(){
    
            if(time >= 0 ) {
                let min = Math.floor( time / 60 )
                let sec = String(time % 60).padStart(2, "0")
                document.getElementById("timer").innerText = min + ":" + sec
                time = time - 1
            } else {
                document.getElementById("finish").disabled = true
                isStarted = false;
                clearInterval(timer)
            }
        },1000)
    } else {
        //타이머가 작동중일때
    }
}

const finish = () => {
    let check = document.getElementById("finish")

    if (check.onclick) {
        alert("인증이 완료되었습니다.")
        check.disabled = true;
        return true;
    }
}




const validation = () => {

    let email = document.getElementById("email")
    let username = document.getElementById("name")
    let pw1 = document.getElementById("pw1")
    let pw2 = document.getElementById("pw2")
    let p1 = document.getElementById("p1")
    let p2 = document.getElementById("p2")
    let p3 = document.getElementById("p3")
    let sl = document.getElementById("select")



    if(!email.value.includes("@")) {
        alert("이메일 주소를 다시 확인하세요.")
        email.focus();
        return false;
    } else if(username.value === "") {
        alert("이름을 입력하세요.")
        username.focus();
        return false;
    } else if(8>pw1.value.length || pw1.value.length>16) {
        alert("비밀번호는 8자리 이상 16자리 이하로 작성하세요.")
        pw1.focus();
        return false;
    } else if(pw1.value !== pw2.value) {
        alert("동일한 비밀번호를 입력하세요.")
        pw2.focus();
        return false;
    } else if(3 > p1.value.length || 4 > p2.value.length || 4 > p3.value.length) {
        alert("휴대폰 번호를 입력하세요.")
        p1.focus();
        return false;
    } else if(sl.value == "none") {
        alert("지역을 선택하세요.")
        return false;
    } else {
        alert("오드캠프 가입을 축하합니다!")
        return true;
    }
}