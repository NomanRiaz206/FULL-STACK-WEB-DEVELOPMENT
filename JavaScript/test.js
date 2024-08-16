//1. Empty array

let  emptyarray=[];
console.log(emptyarray);

//2. Acess first and last element of an array
// we can access 1 element of the array using index[0]

var firstarray=[1,2,3,4,5,6];
console.log(firstarray[0]); // 1

//we can acess last element of an array using size-1 

let index = firstarray.length-1
console.log(firstarray[index])// 6



//3. Add element to end of an array

firstarray.push(7);
console.log(firstarray)// [1,2,3,4,5,6,7]


//4. Remove last element of an array

firstarray.pop();
console.log(firstarray)//[ 1, 2, 3, 4, 5, 6 ]



//5. loop through array in javascript
  
for(let i=0; i<firstarray.length; i++){
    console.log(firstarray[i]); ///[1,2,3,4,5,6]

}

//6. check if element exists in an array

let e=3;
if (firstarray.includes(e)){
    console.log("Element exists");
}else{
    console.log("Element does not exists");
}    /// Element Exists


//7. Remove an element at specific index in an array

firstarray.splice(0,1);
console.log(firstarray)//[ 2, 3, 4, 5, 6 ]


//8. concatenate two arrays 

let secondarray=[8,9,10,11,12]
let finalarray=(firstarray).concat (secondarray);
console.log(finalarray);//[1,2,3,4,5,6,7,8,9,10,11,12]
 

//9. Difference between .map() and .foreach()

//.map() make a new copy of the array and then iterate that copy without disturbing original array
let array = [1, 2, 3];
array.forEach((element, index) => {
  console.log(`Element at index ${index} is ${element}`);
});

//.foreach() does not make copy of the array and it iterate in the original array.
let array1 = [1, 2, 3];
let doubled = array1.map(element => element * 2);
console.log(doubled);

//10. Remove element form an array in javascript
   
   firstarray.splice(0,7);
   console.log(firstarray);//[]


//11. diffrence between .filter() and .find()

  //.filter()

  let arr = [1, 2, 3, 4, 5];
let evenNumbers = arr.filter(num => num % 2 === 0);
console.log(evenNumbers);
  //.find()  

  let array3 = [1, 2, 3, 4, 5];
  let firstEvenNumber = array3.find(num => num % 2 === 0);
  console.log(firstEvenNumber); // 2
  //12. How do you sort an element from an array

  let thirdarray=[4,5,3,2,1]

  console.log(thirdarray.sort());//[ 1, 2, 3, 4, 5 ]


  //13.how to get 3 elements of array
  let newarray=[1,2,3,4,5,6,7,8]
  let n=3
  let result= newarray.slice(0,n);
   console.log(result)//[1,2,3]


   //14.  fetch Api
        fetch('https://dummyjson.com/products')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // converting into JSON
  }).then(data => {
    // Access and print the desired attributes
    const firstProduct = data.products[0];
    console.log('First Product warrenty:', firstProduct.warrantyInformation)
    console.log('First review', data.products[0].reviews[0].date )
    console.log('First Review name', data.products[0].reviews[0].reviewerName )
    console.log('secouond review', data.products[0].reviews[1].date )
    console.log('secouond review email', data.products[0].reviews[1].reviewerEmail )

  })
    