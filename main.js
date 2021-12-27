function test(delay, callback){
    setTimeout(function(){
        callback();
    },delay);
}

console.log("start");

test(2000,function(){
    console.log("callback1");

    test(2000,function(){
        console.log("callback2");

        test(2000, function(){
            console.log("callback3");

            test(2000, function(){
                console.log("end");
            })
        })
    })
})

/*
1. start 콘솔문 실행
2. test() 함수 실행
3. web_api가 1초 뒤에 setTimeout실행
4. console.log("callback1"), 두번째 test()함수를 callstack에 전달
5. callstack이 console.log("callback1")실행. 두번째 test()함수 실행
6. 두번째 test함수 안쪽의 setTimeout을 다시 web_api에게 전달
7. 위의 단계 반복

콜백을 통한 동기화 방식의 원리는
순차적으로 실행하라 모든 함수들을 하나의 callback함수에 넣어서
콜스택이 다음에 실행할 함수가 없도록 만듦

단점- 코드의 뎁스가 깊어지면서 지저분해짐 (callback hell)

*/



