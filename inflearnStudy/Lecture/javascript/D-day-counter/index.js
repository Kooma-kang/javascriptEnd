const messageContainer = document.getElementById("message");
const container = document.getElementById("d-day-container");
const savedDate = localStorage.getItem("saved-date");

container.style.display = "none";
messageContainer.innerHTML = "<h3>D-Day를 입력하세요.</h3>";
messageContainer.style.color = "red";

// 에러발생 이유 : html은 위에서부터 한줄한줄 해석(parcing) script 태그를 만나면 js먼저
// 해석 모두 해석된 이후에 html을 읽어옴.
// 1) 스크립트태그 상 id값이 없기때문이고 js링크는 헤드태그에 있을 필요는 없으므로 바디태그 최하단으로 이동.
// 2) defer 속성 이용

const dateFormMaker = () => {
  const inputYear = document.getElementById("target-year-input").value;
  const inputMonth = document.getElementById("target-month-input").value;
  const inputDate = document.getElementById("target-date-input").value;

  // const dateFormat = inputYear + '-' + inputMonth + '-' + inputDate;
  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;
  //  템플릿 리터럴

  return dateFormat;
};

// 함수 안에서 선언된 변수들은 함수 내에서 참조 불가
// return result; 로 함수종료 및 결과를 밖으로 전달가능

const counterMaker = (data) => {
  if (data !== savedDate) {
    localStorage.setItem("saved-date", data);
  }
  const nowDate = new Date();
  const targetDate = new Date(data).setHours(0, 0, 0, 0);
  const remaining = (nowDate - targetDate) / 1000;

  // '만약, remaining = 0이라면, 타이머가 종료되었습니다. 출력
  //수도코드
  if (remaining >= 0) {
    messageContainer.innerHTML = "<h3>D-Day가 확인되었습니다.</h3>";
    // messageContainer.style.display = "flex"; 이거는 없는게 더 UI가 좋다.
    // setClearInterval();
    // return;
  } else if (isNaN(remaining) || remaining < 0) {
    // 결과가 NaN인지 판단
    container.style.display = "none";
    messageContainer.innerHTML = "<h3>유효한 시간대가 아닙니다.</h3>";
    //   console.log("유효한 시간대가 아닙니다.");
    messageContainer.style.display = "flex";
    // 최초 onclick 함수 실행을 하단부 starter로 변경함에 따라 잘못입력하거나 완료된 경우 <h3>태그가 보이지않음.
    // setClearInterval();
    return;
    // return으로 함수종료 해줄 것.
  }

  //만약, 잘못된 날짜가 들어왔다면, 유효한 날짜가 아닙니다. 출력

  // 1분은 60초 1시간은 3600초 하루는 24시간 나누면 날짜가 나오고
  // 소수점을 날려주는 매소드 Math.floor() 사용

  // sol1)
  // const remainingDate = Math.floor(remaining / 3600 / 24);
  // const remainingHours = Math.floor(remaining / 3600) % 24;
  // const remainingMin = Math.floor(remaining / 60) % 60;
  // const remainingSec = Math.floor(remaining) % 60;
  // % 나머지를 구하는 산술연산자 나머지 값을 이용하여 시간 분 초를 구함

  // sol2)객체를 사용하여 적용하는 방법
  const remainingObj = {
    remainingDate: Math.floor(remaining / 3600 / 24),
    remainingHours: Math.floor(remaining / 3600) % 24,
    remainingMin: Math.floor(remaining / 60) % 60,
    remainingSec: Math.floor(remaining) % 60,
  };

  const documentArr = ["days", "hours", "mins", "secs"];
  const timeKeys = Object.keys(remainingObj);

  const format = function (time) {
    if (time < 10) {
      return "0" + time;
    } else {
      return time;
    }
  };

  let i = 0;
  for (let tag of documentArr) {
    const remainingTime = format(remainingObj[timeKeys[i]]);
    document.getElementById(tag).textContent = remainingTime;
    i++;
  }
};

// const starter = () => {
//   container.style.display = "flex";
//   messageContainer.style.display = "none";
//   counterMaker();
// };
const intervalIdArr = [];
const starter = (targetDateInput) => {
  if (!targetDateInput) {
    targetDateInput = dateFormMaker();
  }
  container.style.display = "flex";
  messageContainer.style.display = "none";
  counterMaker(targetDateInput);
  const intervalId = setInterval(() => {
    counterMaker(targetDateInput);
  }, 1000);
  intervalIdArr.push(intervalId);
};
const setClearInterval = () => {
  // container.style.display = "none";
  localStorage.removeItem("saved-date");
  messageContainer.innerHTML = "<h3>D-Day를 입력하세요.</h3>";
  messageContainer.style.display = "flex";
  for (let i = 0; i < intervalIdArr.length; i++) {
    clearInterval(intervalIdArr[i]);
  }
  for (let i = 0; i < 100; i++) {
    setTimeout =
      (() => {
        starter();
      },
      1000 * i);
  }
};

if (savedDate) {
  starter(savedDate);
} else {
  container.style.display = "none";
  messageContainer.innerHTML = "<h3>D-Day를 입력하세요.</h3>";
}
// setInterval(() => {test()}, 1000) 1초마다 test함수 실행
// 나는 D+Day이기 때문에 setTimeout은 해당 없음.
// 기존 onclick 실행함수를 stater로 변경
// 코드 양 줄이기.

// 주어진 변수명의 배열태그를 가져옴

// const documentObj = {
//   days: document.getElementById("days"),
//   hours: document.getElementById("hours"),
//   mins: document.getElementById("mins"),
//   secs: document.getElementById("secs"),
// };

// let i = 0;
//   for (let key in documentObj) {
//     documentObj[key].textContent = remainingObj[timeKeys[i]]
//     //
//     // i = i + 1 === i++
//     i++
//   }
// for (let 변수 in 객체) { 실행 } 객체의 키를 가져옴

// alt1)
// alert(
//   `${remainingDate}일${remainingHours}시간${remainingMin}분${remainingSec}초`
// );

//  alert 창 까지 띄움!

// const days = document.getElementById("days");
// const hours = document.getElementById("hours");
// const mins = document.getElementById("mins");
// const secs = document.getElementById("secs");

// days.textContent = remainingDate;
// hours.textContent = remainingHours;
// mins.textContent = remainingMin;
// secs.textContent = remainingSec;
// textContent를 이용하여 해당 id의 값을 바꾸어 줄 수 있으나
// 개인적으로 아래와 같이 innerHTML로 디데이를 입력하세요를 없애고
// 그자리에 계산된 시간이 나오도록 하는게 깔끔하다.

// result1)
// messageContainer.innerHTML = `${remainingDate}일${remainingHours}시간${remainingMin}분${remainingSec}초`;
// result2)
//   messageContainer.innerHTML = `${remainingObj["remainingDate"]}일 ${remainingObj["remainingHours"]}시간 ${remainingObj["remainingMin"]}분 ${remainingObj["remainingSec"]}초`;
