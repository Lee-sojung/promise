function delay(time){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve();
        },time)
    })
}

async function test(){
    await delay(3000);
    console.log("wait");
}

test();

/*
async await는 동기화 시키고 싶은 코드들을 부모 함수를 정의할 때 앞쪽에 async라는 키워드를 붙임
그 안쪽에 동기화 될 필요가 있는 함수 호출부 앞쪽에 await 키워드를 붙어줌
-->해당 await키워드가 붙어있는 함수의 실행이 끝나야지 다음 코드가 실행됨
*/