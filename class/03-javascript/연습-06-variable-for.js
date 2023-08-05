let persons = [
    {name: "철수", age: 17},
    {name: "영희", age: 22},
    {name: "훈이", age: 12},
    {name: "쿠로미", age: 40},
    {name: "마이멜로디", age: 3}
]
undefined
for(let count = 0; count < persons.length; count++) {
    if(persons[count].age >= 19) {
        console.log("성인입니다")
    } else {
        console.log("미성년자입니다")
    }
}
// VM4031:2 Uncaught SyntaxError: Unexpected token ')'
for(let count = 0; count < persons.length; count++) {
    if(persons[count].age >= 19) {
        console.log("성인입니다")
    } else {
        console.log("미성년자입니다")
    }
}
// VM4037:5 미성년자입니다
// VM4037:3 성인입니다
// VM4037:5 미성년자입니다
// VM4037:3 성인입니다
// VM4037:5 미성년자입니다
// undefined
for(let count = 0; count < persons.length; count++) {
    if(persons[count].age >= 19) {
        console.log(persons[count].name + "성인입니다")
    } else {
        console.log("미성년자입니다")
    }
}
// VM4135:5 미성년자입니다
// VM4135:3 영희성인입니다
// VM4135:5 미성년자입니다
// VM4135:3 쿠로미성인입니다
// VM4135:5 미성년자입니다
// undefined

for(let count = 0; count < persons.length; count++) {
    if(persons[count].age >= 19) {
        console.log(persons[count].name + "님은 성인입니다")
    } else {
        console.log(persons[count].name + "님은 미성년자입니다")
    }
}
// VM4269:5 철수님은 미성년자입니다
// VM4269:3 영희님은 성인입니다
// VM4269:5 훈이님은 미성년자입니다
// VM4269:3 쿠로미님은 성인입니다
// VM4269:5 마이멜로디님은 미성년자입니다
// undefined


const fruits = [
    {number: 1, title: "레드향"},
    {number: 2, title: "샤인머스켓"},
    {number: 3, title: "산청딸기"},
    {number: 4, title: "한라봉"},
    {number: 5, title: "사과"},
    {number: 6, title: "애플망고"},
    {number: 7, title: "딸기"},
    {number: 8, title: "천혜향"},
    {number: 9, title: "과일선물세트"},
    {number: 10, title: "귤"},  
]
undefined
// for(let i = 0; i < fruits.length; i++) {
//     if(fruits[i].number = fruits.length) {
//         console.log(fruis[i].number + fruits[i].title)
//     }
// }
// VM4985:3 Uncaught ReferenceError: fruis is not defined
//     at <anonymous>:3:21
// (익명) @ VM4985:3
// fruits
// (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// for(let i = 0; i < fruits.length; i++) {
//     if(fruits[i].number = fruits.length) {
//         console.log(fruis[i].number + fruits[i].title)
//     }
// }
// VM5022:3 Uncaught ReferenceError: fruis is not defined
//     at <anonymous>:3:21
// (익명) @ VM5022:3
// for(let i = 0; i < fruits.length; i++) {
//     if(fruits[i].number = fruits.length) {
//         console.log(fruits[i].number + fruits[i].title)
//     }
// }
// VM5027:3 10레드향
// VM5027:3 10샤인머스켓
// VM5027:3 10산청딸기
// VM5027:3 10한라봉
// VM5027:3 10사과
// VM5027:3 10애플망고
// VM5027:3 10딸기
// VM5027:3 10천혜향
// VM5027:3 10과일선물세트
// VM5027:3 10귤
// undefined
for(let i = 0; i < fruits.length; i++) {
    if(fruits[i].number = i+1) {
        console.log(fruits[i].number + fruits[i].title)
    }
}
// VM5045:3 1레드향
// VM5045:3 2샤인머스켓
// VM5045:3 3산청딸기
// VM5045:3 4한라봉
// VM5045:3 5사과
// VM5045:3 6애플망고
// VM5045:3 7딸기
// VM5045:3 8천혜향
// VM5045:3 9과일선물세트
// VM5045:3 10귤
// undefined
for(let i = 0; i < fruits.length; i++) {
    if(fruits[i].number = i+1) {
        console.log(fruits[i].number + "" + fruits[i].title)
    }
}
// VM5054:3 1레드향
// VM5054:3 2샤인머스켓
// VM5054:3 3산청딸기
// VM5054:3 4한라봉
// VM5054:3 5사과
// VM5054:3 6애플망고
// VM5054:3 7딸기
// VM5054:3 8천혜향
// VM5054:3 9과일선물세트
// VM5054:3 10귤
// undefined
for(let i = 0; i < fruits.length; i++) {
    if(fruits[i].number = i+1) {
        console.log(fruits[i].number + " " + fruits[i].title)
    }
}
// VM5057:3 1 레드향
// VM5057:3 2 샤인머스켓
// VM5057:3 3 산청딸기
// VM5057:3 4 한라봉
// VM5057:3 5 사과
// VM5057:3 6 애플망고
// VM5057:3 7 딸기
// VM5057:3 8 천혜향
// VM5057:3 9 과일선물세트
// VM5057:3 10 귤
undefined

for(let i = 0; i < fruits.length; i++) {
    console.log(`${fruits[i].number} ${fruits[i].title}`)
    }
// VM5106:2 1 레드향
// VM5106:2 2 샤인머스켓
// VM5106:2 3 산청딸기
// VM5106:2 4 한라봉
// VM5106:2 5 사과
// VM5106:2 6 애플망고
// VM5106:2 7 딸기
// VM5106:2 8 천혜향
// VM5106:2 9 과일선물세트
// VM5106:2 10 귤
// undefined
for(let i = 0; i < fruits.length; i++) {
    console.log(`과일 차트의 ${fruits[i].number}위는 ${fruits[i].title}입니다`)
    }
// VM5126:2 과일 차트의 1위는 레드향입니다
// VM5126:2 과일 차트의 2위는 샤인머스켓입니다
// VM5126:2 과일 차트의 3위는 산청딸기입니다
// VM5126:2 과일 차트의 4위는 한라봉입니다
// VM5126:2 과일 차트의 5위는 사과입니다
// VM5126:2 과일 차트의 6위는 애플망고입니다
// VM5126:2 과일 차트의 7위는 딸기입니다
// VM5126:2 과일 차트의 8위는 천혜향입니다
// VM5126:2 과일 차트의 9위는 과일선물세트입니다
// VM5126:2 과일 차트의 10위는 귤입니다
// undefined