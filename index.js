import { countries } from "./countries.js";

const pais = process.argv[2]

if (!pais){ //a mesma coisa que === undefined
    console.log("Insira um valor conforme a tabela abaixo")
    console.table(countries)
} else {
    const listaFiltrada = countries.filter((item) => {
        return item.name.toLowerCase().includes(pais.toLowerCase())
    })
    console.table(listaFiltrada)
}
    
//console.table(countries)