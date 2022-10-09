"use strict"

const rst1 = {
    name: "Capri",
    numGuests: 0
}

const rst2 = {
    name: "La Pizza",
    owner: "WYJ"
}

// ||=
rst1.numGuests ??= 10;
rst2.numGuests ??= 10;

rst1.owner ??= '<ANONYMOUS>';
rst2.owner &&= '<ANONYMOUS>';
console.log(rst2.owner)
