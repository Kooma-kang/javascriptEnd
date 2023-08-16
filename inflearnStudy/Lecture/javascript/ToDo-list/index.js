const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-List");

const savedWeatherData = JSON.parse(localStorage.getItem("saved-weather"));
const savedTodoList = JSON.parse(localStorage.getItem("saved-items"));

// todoInput, todoList는 전역 스코프 global scope라 지역 스코프 local scope 에 참조될 수 있다.
// 아래 newLi, newSpan 등은 local scope이기 때문에 global 에 서 참조 불가.
// var로 선언하는 경우 local scope도 global에서 참조 가능.(var 금지)

const createTodo = (storageData) => {
  let todoContents = todoInput.value;
  if (storageData) {
    todoContents = storageData.contents;
  }
  // storageData가 있으면 그 storageData에 컨텐츠들을 todoContents에 재할당 아니면 지나감.
  const newLi = document.createElement("li");
  const newSpan = document.createElement("span");
  const newBtn = document.createElement("button");

  newBtn.addEventListener("click", () => {
    newLi.classList.toggle("complete");
    // 버튼을 클릭할때 컴플리트라는 클래스를 li태그에 추가함.
    saveItemsFn();
  });

  newLi.addEventListener("dblclick", () => {
    newLi.remove();
    saveItemsFn();
  });

  if (storageData?.complete) {
    newLi.classList.add("complete");
  }

  // ?를 붙이면 있는 경우에만 찾음(옵셔널 체이닝) undefined 이거나 null인경우 지나감.

  newSpan.textContent = todoContents;
  // todoContents === todoInput.value 값을 newSpan에 textContent로 가져온다.
  newLi.appendChild(newBtn);
  newLi.appendChild(newSpan);
  // newLi에 newSpan을 포함시킨다.(자손으로만든다.)
  todoList.appendChild(newLi);
  // todoList에 newLi를 포함시킨다.(자손으로만든다.)
  todoInput.value = "";
  saveItemsFn();
};

const keyCodeCheck = () => {
  if (event.keyCode === 13 && todoInput.value.trim() !== "") {
    // todoInput.value.length > 0 , todoInput.value = "" 도 가능
    createTodo();
  }
};

const deleteAll = () => {
  const liList = document.querySelectorAll("li");
  for (let i = 0; i < liList.length; i++) {
    liList[i].remove();
    saveItemsFn();
  }
};

const saveItemsFn = () => {
  const saveItems = [];
  for (let i = 0; i < todoList.children.length; i++) {
    const todoObj = {
      contents: todoList.children[i].querySelector("span").textContent,
      complete: todoList.children[i].classList.contains("complete"),
      // 포함하고 있으면 true, 포함하지 않으면 false
    };
    saveItems.push(todoObj);
  }
  saveItems.length === 0
    ? localStorage.removeItem("saved-items")
    : localStorage.setItem("saved-items", JSON.stringify(saveItems));
};

// 삼항 연산자

if (savedTodoList) {
  for (let i = 0; i < savedTodoList.length; i++) {
    createTodo(savedTodoList[i]);
  }
}

const accessToGeo = ({ coords }) => {
  const { latitude, longitude } = coords;
  // shorthand property
  const positionObj = {
    latitude,
    longitude,
  };
  weatherSearch(positionObj);
};

const weatherDataActive = ({ location, weather }) => {
  const weatherMainList = [
    "Clear",
    "Clouds",
    "Drizzle",
    "Rain",
    "Snow",
    "Thunderstorm",
  ];
  location = "Guri-si" ? "Jungrang" : location;
  weather = weatherMainList.includes(weather) ? weather : "Fog";
  // 삼항 연산자 기억하기 A = B ? A : C , A가 B이면 A, 아니면 C
  const locationNameTag = document.querySelector("#location-name-tag");
  locationNameTag.textContent = location;
  document.body.style.backgroundImage = `url('./images/${weather}.jpg')`;

  if (
    !savedWeatherData ||
    savedWeatherData.location !== location ||
    savedWeatherData.weather !== weather
  ) {
    localStorage.setItem(
      "saved-weather",
      JSON.stringify({ location, weather })
    );
  }
};

const weatherSearch = ({ latitude, longitude }) => {
  const openWeatherRes = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=2d55e8ea3521b968cc256ed131f624c4`
  )
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      const weatherData = {
        location: json.name,
        weather: json.weather[0].main,
      };
      weatherDataActive(weatherData);
    })
    .catch((err) => {
      console.log(err);
    });
};

// https(프로토콜)
// api.openweathermap.org(도메인)
// data/3.0/onecall(path경로)
// lat={lat}&lon={lon}&exclude={part}&appid={2d55e8ea3521b968cc256ed131f624c4}(파라미터)

const askForLocation = () => {
  navigator.geolocation.getCurrentPosition(accessToGeo, (err) => {
    console.log(err);
  });
};
askForLocation();

if (savedWeatherData) {
  weatherDataActive(savedWeatherData);
}

// let arr = [1, 2]
// let [a, b] = arr 단순 배열에서만 가능하고 객체로 배열되어있는 경우는 할 수 없음.
// let obj = {name: "kooma", gender: "male"}
// let {키값, 키값} = obj 순서는 상관없고 key에 value이 할당됨
