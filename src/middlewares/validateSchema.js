import { collectionUsers } from "../data/db.js";
import { authUser } from "../Model/AuthSchema.js";
import bcrypt from 'bcrypt'
export async function validationUser(req, res, next) {
	const user = req.body

  const {erro} = authUser.validate(user , {abortEarly: false}) 

    if (erro) {
        const errorMessages = error.details.map(err => err.message)
        return res.status(422).send(errorMessages)}
  
        res.locals.user = user;
        next()
}


export async function validationPasswordUser(req, res, next){

  const {email, password} = req.body;

try{
  const user = await collectionUsers.findOne({email})

  if(!user){ return res.sendStatus(401)}

  const passworcrypt = bcrypt.compareSync(password, user.password);

  if(!passworcrypt){ return res.sendStatus(401)}


  res.locals.user = user
 
}catch(error){
  res.status(500).send(error)
}

  next();
}