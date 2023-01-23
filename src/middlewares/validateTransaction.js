import { authTransition } from "../Model/TransitionSchema.js";
// import dayjs from "dayjs";
// export async function transactionValidate(req, res, next) {
//     const {value, description,type} = req.body;
//     const user =  res.locals.user

//     const transaction = {
//         value,
//         description,
//         type,
//         user:user._id,
//     }

//     const {erro} = authTransition.validate(transaction , {abortEarly: false}) 

//     if (erro) {
//         const errorMessages = error.details.map(err => err.message)
//         return res.status(422).send(errorMessages)
//     }
  
//         res.locals.transaction = transaction;
//         next()







// }
export function transactionValidate(req, res, next) {
    const { value, description, type } = req.body;
    const user = res.locals.user;
  
    const transaction = {
      value,
      description,
      type,
      user: user._id,
    };
  
    const { error } = authTransition.validate(transaction, { abortEarly: false });
  
    if (error) {
      const errors = error.details.map((detail) => detail.message);
      return res.status(400).send(errors);
    }
  
    res.locals.transaction = transaction;
  
    next();
  }
  