//for (let i =0; i <= 7; i++) {
//  i = 0 // starting point
//  i = <= 7 // ending point 
//  i++ // increments of 1 
//}

// const total = 10;

//for (let i =0; i <= total ; i++ ) {
//    console.log(i);
//}

// const total = 20; 

// for (let i =0; i < total; i++) {
//    console.log(i);
//}

//const totalFinger = 10

//for(let i = 0; i < totalFinger; i++) {
//    let sentence = 'I have '+ (i+1) +' fingers';
//    console.log(sentence);
//}

// starting at i =0 means "0" fingers, but starting at i =1 is bad practice
// instead start at "1" by '+ (i+1) +' the () are required 

//function firstLoop(total) {
//    const total = 20;
//
//    for (let i =0; i < total; i++) {
//    console.log(i);
//    }
//}

function arrayLoop() {
    const prime = [2,3,5,7,11,13,17];
    for (let i = 0; i<prime.length; i++) {
        const result = prime[i];

        console.log(result);
    } 
}

arrayLoop();