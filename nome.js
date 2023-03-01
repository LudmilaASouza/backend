const nome = process.argv[2]
const idade = Number(process.argv[3])

console.log(`Olá ${nome}! Você tem ${idade} anos.`)
const novaIdade = idade+7
console.log(`Em sete anos você terá ${novaIdade} anos.`)