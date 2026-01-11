// let arr = [1,2,3,4,5,6,6,7,8,9,23];

// let sum = arr.reduce( (arr ,index ) => arr + index ,0 )
// console.log(sum);





// let arr = [1,2,3,4,5,6,6,7,8,9,23];

// let maxNum = arr.reduce( (arr,index) => index > arr ? index : arr ,0 )
// console.log(maxNum);




// let arr = ["mohit","rahulgi","one","orange","purple","two"]

// let totalChar = arr.reduce( (arr, index) => arr + index.length,0 )
// console.log(totalChar);




// let arr = ["a", "b"];

// let convert = arr.reduce( (arr, index) => {arr[index] =true; return arr},
// {}
// );

// console.log(convert);




let arr =[1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3]

let howMuchTime = arr.reduce( (arr, index) => {
    if (arr[index]) {
        arr[index] = arr[index] + 1;
    } else {
        arr[index] = 1;
    }   
    return arr;
},{} );
console.log(howMuchTime);
