// The flat() method creates a new array with all sub-array
//  elements concatenated into it recursively up to the specified depth.

let array = [1, 2, 5, ["A", "B", [14, 55], "C"], 'ABC'];
 let newArr = [];
function flat(arr, func){
 
  for (let i = 0; i < arr.length; ++i){
    if(!(func(arr[i]))){
      newArr.push(arr[i]);
    } else 
    flat(arr[i],func);
  }
  
  return newArr;
}
function check(arg){
  return Array.isArray(arg);
}
// console.log(check('123'));
console.log(flat(array,check));