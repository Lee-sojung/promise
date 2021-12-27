function test(delay){

    return new Promise(function(resolve, reject){
        setTimeout(function(){
            //특정 문제가 없으면 resolve 실행해서 내보냄
            resolve();
            //특정 문제가 있으면 reject를 실행해서 내보냄
            //reject();
        },delay);
    })
}

test(2000)
.then(function(){
    console.log("callback1");

    return test(3000);
})
.then(function(){
    console.log("callback2");

    return test(2000);
})
.then (function(){
    console.log("callback3");
})



/*
promise 를 통해서 인스턴스 객체를 내보낼 수 있는데 해당 객체 안에는
동기화돼서 실행되는 콜백함수를 내보냄

특정 함수 안쪽에 비동기적으로 실행되는 코드가 있을때 해당코드를 promise를 new 연산자로 인스턴스를 내보냄 -- 이때 상황에 따라서 resolve, reject 객체를 내보냄

resolve - 해당 함수가 아무런 문제없이 동작될 때 내보내지는 객체
reject - 해당 함수가 실행될 때 특정 오류를 발생하면 내보내지는 객체

만약 promise의 리턴값으로 resolve객체가 내보내지게 되면 .then함수 호출 가능
만약 promise의 리턴값으로 reject객체가 내보내지게 되면 catch함수를 호출 가능

*/



