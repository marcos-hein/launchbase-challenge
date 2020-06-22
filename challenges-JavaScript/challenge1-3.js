/**
 * Desafios para fortalecer alguns conceitos, entre eles:
    Funções e métodos;
    Estruturas de repetição;
    Escopos.
  Usuários e tecnologias
 */


/**
 * Busca e imprime o usuário que trabalha com CSS 
 */

/*


const usuarios = [
    {
        nome: "Carlos",
        tecnologias: ["HTML", "CSS"]
    },
    {
        nome: "Jasmine",
        tecnologias: ["JavaScript", "CSS"]
    },
    {
        nome: "Tuane",
        tecnologias: ["HTML", " NodeJs"]
    }
];

// function imprimeUsuario(usuario) {
//     for(let i = 0; i < usuario.length; i++) {
//         let nome = usuario[i].nome
//         let tecnologias = usuario[i].tecnologias
//         console.log(`${nome} trabalha com ${tecnologias}`)
//     }
// }

// imprimeUsuario(usuarios)




function checaSeUsuarioUsaCSS(usuario) {
    let usaCSS = false;
    for(let i = 0; i < usuario.tecnologias.length; i++) {
        if(usuario.tecnologias[i] == "CSS"){
            usaCSS = true
        }
    }
    return usaCSS
}


for(let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);
    if (usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
}

*/

/**
 * Soma receitas, despesas e saldo de cada usuário
 * análisa se o saldo é positivo ou negativo e imprime
 */


const usuarios = [
    {
        nome: "Salvio",
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: "Marcio",
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: "Lucia",
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
];

function somaNumeros(numeros) {
    let soma = 0;
    
    for(let i = 0; i < numeros.length; i++) {
        soma = soma + numeros[i]
    }
    return soma
}


function calculaSaldo(receitas, despesas) {
    const somaReceitas = somaNumeros(receitas)
    const somaDespesas = somaNumeros(despesas)

    const saldo = somaReceitas - somaDespesas

    return saldo
}


for(let i = 0; i < usuarios.length; i++) {
    const saldo = calculaSaldo(usuarios[i].receitas, usuarios[i].despesas)

    if(saldo > 0) {
        console.log(`${usuarios[i].nome} possui saldo POSITIVO de ${saldo}`)
    } else {
        console.log(`${usuarios[i].nome} possui saldo NEGATIVO de ${saldo}`)
    }
}