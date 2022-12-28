
//this is callback hell example
setTimeout(()=>{
    console.log(1);
    setTimeout(()=>{
        console.log(2);
        setTimeout(()=>{
            console.log(3);
        },3000);
    },2000);
},1000);

// <----------------------------------------->

//this is IIFE example
(function self(){
    console.log('this is IIFE function')
})()

// <----------------------------------------->

//this is setTimeout() function example
setTimeout(()=>{
    console.log('this is setTimeout function')
},5000)