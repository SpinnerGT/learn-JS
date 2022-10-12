// no repeat

const array = ['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']
const orderSets = new Set(array);

// string also iterate
const str_array = 'Jonas';
const str_set = new Set(str_array);

// method
orderSets.size
orderSets.has('Pasta');
orderSets.add('Chicken');
orderSets.delete('Chicken');

for (const set of orderSets) {

}

// 除去重复元素
const uniqueOrder = [...new Set(orderSets)];

