import {Router} from 'express';
import { singIn, singUp } from '../controllers/Auth.js';
import { validationPasswordUser, validationUser } from '../middlewares/validateSchema.js';

const router =  Router()


router.post("/sing-up",  validationUser, singUp)
router.post("/sing-in",validationPasswordUser , singIn)






export default router;