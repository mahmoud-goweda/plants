// function getr(arr,num){
   
//  let hashMab = {};
//  for(let i=0;i<arr.length;i++){
//  hashMab[num-arr[i]] = i;
//  }
//  for(let i=0;  i<arr.length;i++){
//     if(hashMab[arr[i]])
//     {
//         console.log(arr[i],arr[hashMab[arr[i]]])
//     }
//     }




// }
// let ars = [1,2,3,4,5]
// getr( ars,9)
// function setArr (arr){

//     return new Set(arr).size ==arr.length 
// }
// console.log (setArr ([1,2,3,3]))
// let arr = [[1,2,4],[1,2,6],[1,2,7]]
// for(let i=0 ; i < arr.length ; i++){
//     if (
//     }
//     console.log(arr[i][i])

// }
// var m =[]
// var aar = m.intersection([1,2,4],[1,2,6])
// console.log(aar)


// let neR = [];
// let array1 = [1,2,3,4,3,5];
// let arrR2 = [1,2,,4];
// let aA = new Set(array1);
// let Ab = new Set(arrR2);
// for (let i  of aA ){
//     if(Ab.has(i)){
//         neR.push(i)

//     }

// }
// console.log(neR)
let arr1 = [1,2,3,4,5,6];
let arr2 = [1,2,3,7,8,6];
let newA = arr1.concat(arr2);
let res = new Set(newA)
console.log(res)
