
const array=[1,3,6,-1,5,6];

let min = array[0];
for (let i = 0; i<=5; i++){
    if (min > array[i]){
        min = array[i]
    }
}
console.log(min)