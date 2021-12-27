// function test (){
//     setTimeout(function(){
//         console.log("타이머 끝!!");
//     },0);

//     for (let i=0; i<4; i++){
//         console.log(i);
//     }
//     console.log("for문 끝!!");
// }

// test();
// console.log("메인끝");

/*
실제 자바스크립트 엔진에서의 실행흐름
1. callstack에서 먼저 test()함수 호출
2. test()함수 안쪽의 setTimeout을 wep_api에 전달하고 바로 다음 업무 실행
3. 바로 그 다음 for문 실행
4. for문이 완료되면 console.log("for문 끝!!")실행
5. test함수 안쪽의 코드를 모두 실행한 뒤 마지막으로 "main끝!!" 실행
6. wep_api가 setTimeout을 실행하고 다시 안쪽의 "타이머끝!!"을 callbach queue에 전달
7. 최종적으로 "타이머 끝"이 제일 마지막에 callstack에 전달돼서 실행
*/

function test(delay, callback){
    setTimeout(function(){
        callback();
    },delay);
}

console.log("start");

test(1000, function(){
    console.log("callback1 !!");
});

test(1000, function(){
    console.log("callback2 !!");
})

test(1000, function(){
    console.log("callback3 !!");
})

console.log("end");

/*
1. "start" 실행 (JS)
2. 첫번째 test()실행 (JS)
3. test함수 안쪽의 setTimeout --> web_api전달
4. 두번째 test() 실행 (JS)
5. test함수 안쪽의 setTimeout -->web_api전달
6. 세번째 test() 실행 (JS)
7. test함수 안쪽의 setTimeout -->web_api전달
8. console.log("end")실행 (JS)
9. web_api가 1초 뒤에 setTimeout 실행하고 "callback1" --> callstack 전달 (web)
10. web_api가 1초뒤에 setTimeout 실행하고 "callback2" --> callstack 전달 (web) 
11. web_api가 1초뒤에 setTimeout 실행하고 "callback3" --> callstack 전달 (web) 
*/