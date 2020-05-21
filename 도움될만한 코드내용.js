const inputtag = document.getElementById("input") //->html에 있는 input 태그를 js로 가지고 옴
const wordtag = document.getElementById("word") //-> html에 있는 input 태그를 js로 가지고 옴

//1. html에 있는 word에 글자를 추가하고 싶다!! 어떻게 해야할까??

//1단계)
let plus = document.createElement('span')
//let이라는 임시변수를 만든다.
//plus에 새로운 element를 할당한다
//createElement('태그이름')의 의미 = 태그만들기

//2단계)
plus.textContent='내용'
//span태그를 가진 plus에 쓰일 내용을 넣기
//html로 따지자면 <span>내용</span>과 같은 기능
//변수.textContent=변수에 내용넣기

//3단계)
wordtag.appendChild(plus)
//html에 plus에 저장된 내용 반영하기(태그를 원하는 곳에 넣기)


//2.Input 태그의 값/커서 등을 관리하고 싶다!!
//1>html input 태그 안에 값을 내가 원하는 대로 바꾸고 싶다.
inputtag.value="내가 원하는 내용"
//2>엔터를 눌러도 커서가 input 태그 안에 있게 하고 싶다.
inputtag.focus



//Cf>const와 let의 차이는?
//const는 변수 재선언 불가능!! But let은 변수 재선언 가능!!