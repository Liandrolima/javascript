let num = [5, 8, 2, 9, 3]
for(let pos = 0; pos<num.length; pos++) {
    console.log(num[pos])
}
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(num[0])
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`Nosso vetor é o ${num}`)
console.log(num)
let pos = num.indexOf(8)
if(pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}
num[3] = 6 // adiciona na posição que desejar
num.push(7) // adiciona na última posição
console.log(num)