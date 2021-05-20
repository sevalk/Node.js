let yarıçap = process.argv.slice(2)

let alan = FindArea(yarıçap[0])

let alanNew = alan.toFixed(2)

console.log(`Yarıçap: ${alanNew}`);

function FindArea(r){
    return Math.PI * (r * r);
}
