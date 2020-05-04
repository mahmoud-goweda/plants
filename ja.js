// function  palindrome(str) {

//     let len = str.length;
//     let mid = (len/2);

//     for ( let i = 0; i < mid; i++ ) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }

//     return true;
// }
// console.log(palindrome("ehabnafea"))
// function Stack(str){
//     this.arr =  [];
//     this.arr2 = [];
//     for(let i= 0 ; i<str.length ; i++){
//         this.arr.push(str[i]);

//     }
//     this.mid = str.length/2;
//     for(let i = 0 ; i < this.mid.length; i++){
//         let x =arr.pop()
//         arr2.push(x)
//     }

// }
// let srt = new Stack("mhaahm")
// console.log(srt.arr2)


function Stack(str)
{
 this.stac=new Array();

  this.pop=function(){
  return this.stac.pop();
 }
 this.push=function(item){
  this.stac.push(item);
 }
 
}
let x = new Stack("ahmemha")
for(i = 0 ; i<(str.length-1)/2;i++){
    
}


// function eslam (string){
//     let x = [];
//     for(i=0;i<string.length/2-1;i++){

//     }
// }