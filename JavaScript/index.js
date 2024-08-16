// // let result = document.querySelector('.pk')
// // result.innerHTML="Welcome to DOM Class";
// // result.style.color="skyblue";
// // result.style.fontSize="30px";
// // result.style.backgroundColor="black";

// // let btn= document.querySelector(".btn")
// // let image= document.querySelector("#myImage")
// // let isStyle= false;
// // btn.addEventListener("click",function(){
// //     if(!isStyle){
// // //        result.innerHTML="Welcome to DOM Class";
// // // result.style.color="skyblue";
// // // result.style.fontSize="30px";
// // // result.style.backgroundColor="black"; 
// // image.src.match="./pics/imgoff.gif";
// //     }else{
// // //         result.innerHTML="Please Enter a Valid Name";
// // //         result.style.color="yellow";
// // // result.style.fontSize="30px";
// // // result.style.backgroundColor="black";
// //  image.src.match="./pics/imgon.gif";
// //     }

// //     isStyle=!isStyle; 
// // })

// function changeButton()  {
//     let image = document.getElementById('myImage');
//     let button = document.getElementById('myButton');
//     if (image.src.match("bulb-on")) {
//         image.src = "bulb-off.gif";
//         button.textContent = "Turn On";
//     } else {
//         image.src = "bulb-on.gif";
//         button.textContent = "Turn Off";
//     }
// }




// const person1= {
//  name:"Jhon Doe",
//  age:30,
//  education:"BSC",

//  fun:function(country){
//     console.log(`Hello, my name is ${this.name}! and the education is ${this.education}! and the country is ${\ucountry}` );

//  }
// }

// let person2={
//     name:"umair",
//     education:"BS",
// }

// person1.fun("Pakistan");
// person1.fun.call(person2,"Pakistan")


const findVowels = str => {
    let count = 0
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for(let char of str.toLowerCase()) {
    if(vowels.includes(char)) {
    count++
    }
    }
    return count
    }
    