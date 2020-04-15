import { Router } from 'express'
import { uuid } from 'uuidv4'

// import TransactionsRepository from '../repositories/TransactionsRepository';
// import CreateTransactionService from '../services/CreateTransactionService';

const transactionRouter = Router()

// const transactionsRepository = new TransactionsRepository();

const transactions = []

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

    const transaction = {
      id: uuid(),
      title,
      value,
      type,
    }

    transactions.push(transaction)

    return response.json(transaction)
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

export default transactionRouter
