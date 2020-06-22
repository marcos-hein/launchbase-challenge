/**
 * Desafios para fortalecer alguns conceitos, entre eles:
    Booleanos;
    Organização;
    Padronização;
    Escrita.
 */

 const user = {
     name: "Mariana",
     transactions: [],
     balance: 0
 }


 function createTransaction(transaction) {
    user.transactions.push(transaction)
    const lastElement = user.transactions.length - 1

    if(user.transactions[lastElement].type == "credit") {
        user.balance = user.balance + user.transactions[lastElement].value
    } else {
        user.balance = user.balance - user.transactions[lastElement].value
    }

    console.log(user.balance)
 }

createTransaction({ type: "credit", value: 50.5 })
createTransaction({ type: "credit", value: 120 })
createTransaction({ type: "debit", value: 80 })
createTransaction({ type: "debit", value: 30 })

/**
 * Criar as funções
 * [x] createTransaction()
 * [] getHigherTransactionByType()
 * [] getAverageTransactionValue()
 * [] getTransactionsCount()
 */
