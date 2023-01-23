import { collectionSessions, collectionUsers } from "../data/db.js"
import bcrypt from "bcrypt"
import { v4 as uuidV4 } from 'uuid'




export async function singUp(req, res) {
  const user = res.locals.user;
  const passwordHash = bcrypt.hashSync(user.password, 10);

  try {
    await collectionUsers.insertOne({ ...user, password: passwordHash });
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
  }
  




  
  export async function singIn(req, res, ) {
  const user = res.locals.user
  const token = uuidV4()

    try{
      await collectionSessions.insertOne({token, userId: user._id})
      res.send({token})
    }catch(err){
      res.status(500).send(err)
    }


}