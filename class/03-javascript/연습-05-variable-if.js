// 데이터타입, 연산자 실습
1 + 1
// 2
1 + "만원"
// '1만원'
1 + "1"
// '11'
1 - "1"
// 0
"코드" + "캠프"
// '코드캠프'
"123" == 123
// true
"123" === 123
// false
true && true
// true
true && false
// false
false || true
// true
!false
// true
!true
// false

// 조건문 실습 1

// if(조건) {
//     명령문1
// }else if()

if(1+1 === 2) {
    console.log("정답입니다")
} else {
    // cconsole.log("틀렸습니다")
}
// VM874:2 정답입니다
undefined
if(true
  ) {
    console.log("정답입니다")
} else {
    // cconsole.log("틀렸습니다")
}
// VM889:3 정답입니다

if(0)  {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM1128:4 틀렸습니다
undefined
if(1)  {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM1132:2 정답입니다
undefined
if(3)  {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM1136:2 정답입니다
undefined


const profile = {
    name: "철수",
    age: 12,
    school: "다람쥐초등학교"
}
undefined
age
// VM1443:1 Uncaught ReferenceError: age is not defined
//     at <anonymous>:1:1
// (익명) @ VM1443:1
profile
// {name: '철수', age: 12, school: '다람쥐초등학교'}
profie[age]
// VM1498:1 Uncaught ReferenceError: profie is not defined
//     at <anonymous>:1:1
// (익명) @ VM1498:1
profile
// {name: '철수', age: 12, school: '다람쥐초등학교'}
profile[0]
// undefined
profile[0].name
// VM1621:1 Uncaught TypeError: Cannot read properties of undefined (reading 'name')
//     at <anonymous>:1:12
// (익명) @ VM1621:1
profile.name
// '철수'
// if(profile.age>==20) {console.log("성인입니다")
    
// }else if(19 >== profile.age >== 8)
// VM1987:1 Uncaught SyntaxError: Unexpected token '='
// if(profile.age>==20) {
//     console.log("성인입니다")
// }else if(19 >== profile.age >== 8) {
//     console.log("학생입니다") 
// }else if(7>==profile.age) {
//     consdole.log("어린이입니다")
// }
        
// VM2199:1 Uncaught SyntaxError: Unexpected token '='
// if(profile.age>==20) {
//     console.log("성인입니다")
// }
        
// VM2204:1 Uncaught SyntaxError: Unexpected token '='
// if(profile.age>=20) {
//     console.log("성인입니다")
// }else if(19 >= profile.age >= 8) {
//     console.log("학생입니다") 
// }else if(7 >= profile.age) {
//     consdole.log("어린이입니다")
// }
        
undefined
if(profile.age >= 20) {
    console.log("성인입니다")
}else if(profile.age >= 8) {
    console.log("학생입니다") 
}else if(7 >= profile.age) {
    consdole.log("어린이입니다")
}
        
// VM2260:4 학생입니다
undefined