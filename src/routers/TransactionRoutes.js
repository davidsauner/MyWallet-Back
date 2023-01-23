import {Router} from 'express';
import { getTransaction, postTransaction } from '../controllers/Transaction.js';
import { transactionValidate } from '../middlewares/validateTransaction.js';
import { authToken } from '../middlewares/validateSchema.js';


const router =  Router()


router.post("/transaction", authToken,transactionValidate ,postTransaction)
router.get("/transaction", authToken,getTransaction)






export default router;