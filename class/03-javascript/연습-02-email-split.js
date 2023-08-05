// const email = "bywade@naver.com"
undefined
email.includes("@")
true
email.split("@")
(2) ['bywade', 'naver.com']
email.split("@")[0]
'bywade'
email.split("@")[1]
'naver.com'
// let userMail = email.split("@")[0]
undefined
// let company = email.split("@")[1]
undefined
company
'naver.com'
// let maskingMail = []
undefined
makingMail.push(userMail[0])
// VM579:1 Uncaught ReferenceError: makingMail is not defined
//     at <anonymous>:1:1
// (익명) @ VM579:1
makingMail.push(userMail[0])
// VM583:1 Uncaught ReferenceError: makingMail is not defined
//     at <anonymous>:1:1
// (익명) @ VM583:1
maskingMail.push(company[0])
1
maskingMail.push(company[1])
2
maskingMail.push(company[2])
3
maskingMail.push(company[3])
4
maskingMail.push(company[4])
5
maskingMail.push(company[5])
6
maskingMail.push(company[6])
7
maskingMail.push(company[7])
8
maskingMail.push(company[8])
9
maskingMail.push(userMail[0])
10

const email = 'bywade@naver.com'
undefined
email.includes("@")
true
email.split("@")
(2) ['bywade', 'naver.com']
email.split("@")[0]
'bywade'
email.split("@")[1]
'naver.com'
let userMail = email.split("@")[0] 
undefined
let company = email.split("@")[1]
undefined
let maskingMail = []
undefined
maskingMail.push(userMail[0])
1
maskingMail.push(userMail[1])
2
maskingMail.push(userMail[2])
3
maskingMail.push(userMail[3])
4
maskingMail
(4) ['b', 'y', 'w', 'a']
maskingMail.push("*")
5
maskingMail.push("*")
6
maskingMail
(6) ['b', 'y', 'w', 'a', '*', '*']
maskingMail.join("-")
'b-y-w-a-*-*'
maskingMail.join("/")
'b/y/w/a/*/*'
maskingMail.join("")
'bywa**'
maskingMail.join("") + "@" + company
'bywa**@naver.com'
maskingMail.join("") + "@" + company
'bywa**@naver.com'
let result = maskingMail.join("") + "@" + company
undefined
result
'bywa**@naver.com'