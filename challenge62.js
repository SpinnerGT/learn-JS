// data
temperatures = [17,21,23,34];
let str=[];
const printForecast = (temperatures) => {

    for (let i=0; i<= temperatures.length-1; i++){
        const tmp = temperatures[i];
        const s = `... ${tmp}°C in ${i+1} days `;
        str[i]=s;
    }
}
printForecast(temperatures)
console.log(str.join('')); // 字符串数组合并

