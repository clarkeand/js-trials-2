'use strict';

// 1. printIndices
function printIndices(items) {
  let index = 0;
  for (let item of items){
    console.log(item);
    console.log(index);
    index += 1;
    

  }
  // Replace this with your code
}
const new_array = ['apple', 'berry', 'cherry']
printIndices(new_array)

// 2. everyOtherItem
function everyOtherItem(items) {
  for (let i=0;i<items.length;i += 2){
    console.log(items[i])
  }
}
everyOtherItem(new_array)
// 3. smallestNItems
function smallestNItems(items, n) {
  items.sort((a, b) => a - b);
  const control = n-1;
  let index = 0;
  const boolean = 0;
  while (index<n){
    if(index <= control){
      console.log(items[index]);
      index += 1;
    }
    
  }

}

const numArray = [10, 11, 9, 8 ,7]
smallestNItems(numArray, 2)
//[7,8]
