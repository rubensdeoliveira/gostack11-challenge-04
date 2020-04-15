import { Router } from 'express'
import Transaction from '../models/Transaction'

// import TransactionsRepository from '../repositories/TransactionsRepository';
// import CreateTransactionService from '../services/CreateTransactionService';

const transactionRouter = Router()

// const transactionsRepository = new TransactionsRepository();

const transactions: Transaction[] = []

transactionRouter.get('/', (request, response) => {
  try {
    // TODO
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

transactionRouter.post('/', (request, response) => {
  try {
    const { title, value, type } = request.body

    const transaction = new Transaction({ title, value, type })

    transactions.push(transaction)

    return response.json(transaction)
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

export default transactionRouter
