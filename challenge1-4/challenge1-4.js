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
        user.balance += user.transactions[lastElement].value
    } else {
        user.balance -= user.transactions[lastElement].value
    }
}

function getHigherTransactionByType(transactionType) {
     let higherTransaction = 0
     let transactions = user.transactions

     for(let transaction of transactions) {
         if(transaction.type === transactionType) {
            console.log("aqui")
             if(transaction.value > higherTransaction) {
                higherTransaction = transaction.value
             }
         }
     }
}

function getAverageTransactionValue(transactions) {
    let sumTransactions = 0

    for(let transaction of transactions) {
        sumTransactions += transaction.value
    }

    let averageTransaction = sumTransactions / transactions.length
    console.log(averageTransaction)
}

function getTransactionsCount(transactions) {
    const transactionCount = { credit: 0, debit: 0 }

    for(let transaction of transactions) {
        if(transaction.type === "credit"){
            transactionCount.credit++
        } else {
            transactionCount.debit++
        }
    }
    
    console.log(transactionCount)
}

createTransaction({ type: "credit", value: 50.5 })
createTransaction({ type: "credit", value: 120 })
createTransaction({ type: "debit", value: 80 })
createTransaction({ type: "debit", value: 30 })

getHigherTransactionByType("debit")

getAverageTransactionValue(user.transactions)

getTransactionsCount(user.transactions)

