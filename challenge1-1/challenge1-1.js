/**
 * Desafios para fortalecer alguns conceitos, entre eles:
    Variáveis;
    Condicionais;
    Operadores.
 */

// Cálculo de IMC

// const nome = 'Carlos';
// const peso = 88;
// const altura = 1.88;

// const imc = peso / (altura * altura);


// if ( imc >= 30) {
//     console.log("Carlos, você está acima do peso");
// } else {
//     console.log("Carlos, você não está acima do peso");
// }


// Cálculo de aposentadoria
// Crie um program para calcular aposentadoria de uma pessoa

const nome = "Silvana";
const sexo = "F";
const idade = 65;
const contribuicao = 23;

// se for mulher
if (sexo === "F" || sexo === "f") {
    if((contribuicao >= 30) || ((idade + contribuicao) >= 85)) {
        console.log(`${nome}, você pode se aposentar!`);
    } else {
        console.log(`${nome}, você não pode se aposentar!`);
    }
}

// se for homem
if (sexo === "M" || sexo === "m") {
    if((contribuicao >= 35) || ((idade + contribuicao) >= 95)) {
        console.log(`${nome}, você pode se aposentar!`);
    } else {
        console.log(`${nome}, você não pode se aposentar!`);
    }
}