import Transaction from '../models/Transaction'

interface Balance {
  income: number
  outcome: number
  total: number
}

interface TransactionObject {
  transactions: Transaction[]
  balance: Balance
}

interface CreateTransactionDTO {
  title: string
  value: number
  type: 'income' | 'outcome'
}

class TransactionsRepository {
  private transactions: Transaction[]

  constructor() {
    this.transactions = []
  }

  public all(): TransactionObject {
    return {
      transactions: this.transactions,
      balance: this.getBalance(),
    }
  }

  public getBalance(): Balance {
    const income = this.transactions
      .filter(transaction => transaction.type === 'income')
      .reduce((total: number, { value }) => {
        return total + value
      }, 0)

    const outcome = this.transactions
      .filter(transaction => transaction.type === 'outcome')
      .reduce((total: number, { value }) => {
        return total + value
      }, 0)

    const balance = {
      income,
      outcome,
      total: income - outcome,
    }

    return balance
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    const transaction = new Transaction({ title, value, type })

    this.transactions.push(transaction)

    return transaction
  }
}

export default TransactionsRepository
