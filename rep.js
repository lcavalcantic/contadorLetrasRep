//toLowerCase = td minusculo
// replace = substitui
const palavra = "Tubarão Ratão".toLowerCase().replaceAll(" ", "");
//obj q armazena todas as letras
let letras = {};

for (let i = 0; i < palavra.length; i++) {
    //se encontrar uma letra mais de uma vez ele add +1
    if (letras[palavra[i]]) {
        letras[palavra[i]]++;
    //se nao, cria a letra 1 vez     
    }else{
        letras[palavra[i]] = 1;
    }
}

console.log(letras);