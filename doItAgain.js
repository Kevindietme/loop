function newArrayLoop() {
    const prime = [2,3,5,7,11,13,17];
    for (let i = 0; i<prime.length;i++) {
        const result = prime[i];
        console.log(result);
    }
}

newArrayLoop()

function arrayCounter(array) {
    for(let i=0; i<array.length; i++) {
        const result = array[i];
        console.log(result);
    }
}

const myShirt=["cotton", "silk", "polyester", "linen",];
arrayCounter(myShirt);