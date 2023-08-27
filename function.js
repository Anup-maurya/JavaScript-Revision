// function hello(){
//     console.log("Hello Anup!!");
// }
// hello();
// console.log(hello());


// username===undefined  => !username

// function loginUserMessage(username="sam"){
//     if(!username){
//         console.log("please enter a username");
//     }
//     return `${username} just logged In`;
// }

// console.log(loginUserMessage("AnupMaurya"));
// console.log(loginUserMessage());


function calculatePrice(...nums1){
    return nums1;
}

console.log(calculatePrice(134,454,453,234));  //nums1=[134,454,453,234]

function calculatePrice(val1, val2, ...nums1){
    return nums1;
}

console.log(calculatePrice(34,454,452,343));  //nums1=[452,343]



const User={
    username:"hitesh",
    price:199
}


function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(User)

handleObject({
    username:"Anup",
    price:399
})
