
/**
 * Desafios para fortalecer alguns conceitos, entre eles:
    Objetos;
    Vetores.
 */

// Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa

// const empresa = {
//     nome: "Rocketseat",
//     cor: "Roxo",
//     foco: "Programação",
//     endereco: {
//         rua: "Rua Guilherme Gembala",
//         num: 260
//     }
// }

// console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, nº ${empresa.endereco.num}`)


// ARRAYS E OBJETOS

// Crie um programa com um objeto para armazenar dados de umm programador como
// nome, idade, e tecnologias que trabalha.
// Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array
// As tecnologias também devem ser objetos contendo nome e especialidade.

const programador = {
    nome: "Vinicius",
    idade: 26,
    tecnologias: [
        { nome: 'C++', especialidade: 'Desktop' },
        { nome: 'Python', especialidade: 'Data Science' },
        { nome: 'JavaScript', especialidade: 'Web/Mobile' }
    ]
};

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos
 e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)