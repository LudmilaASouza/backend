import { countries } from "./countries.js";

const nomeDoPais = process.argv[2]
const sigla = process.argv[3]


if(!nomeDoPais && !sigla){
    console.log("Insira os valores")
} else {
    const novoPais = {
        name: nomeDoPais,
        code: sigla
    }
    countries.push(novoPais)
    console.table(countries)
}
