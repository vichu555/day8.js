//array and its methods
const number=[1,4,6,8,9,10,9];
const num=[21,22,23,24,25];
console.log(number)
number.push(11);
number.push(12,14);
console.log(number)
number.unshift(0)
console.log(number)
number.shift();
console.log(number);
console.log(number.concat(num))
console.log(num.concat(26,27,28))
console.log(number.indexOf(9))
console.log(number.lastIndexOf(9))
console.log(number.toString())
console.log(number.slice(2,4))
console.log(number.splice(2,4))
console.log(number)
console.log(number.reverse())
console.log(number.map((val)=>val*2))
console.log(number.filter((val)=>val < 14))
console.log(number.reduce((acc,total)=>acc+=total))
console.log(number)
console.log(number.includes(9))
console.log(number.find(val=>val < 12))
console.log(number.findIndex(val=>val <9))
console.log(number.every(val=>val >= 14))
console.log(number.some(val=>val >= 14))
number.forEach(val=>{
console.log(val)
})
console.log(number.join('-'))
for(let x of number){
console.log(x)
}
const arr1=[[1,2,3],[8,9]];
console.log(arr1.flat())
//convert array to object
const arrr=[[1,"apple"],[2,"orange"],[3,"grapes"]];
const obj={};
for(let [key,value] of arrr){
obj[key]=value;
}
console.log(obj)