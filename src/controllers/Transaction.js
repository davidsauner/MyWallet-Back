import { collectionTransactions } from "../data/db.js"

export async function postTransaction(req,res){
    const transaction = res.locals.transaction;

    try {
      await collectionTransactions.insertOne(transaction);
      res.sendStatus(201);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }

}

export async function getTransaction(req, res){
  const user = res.locals.user;

  try{
    const transaction = await collectionTransactions.find({ user: user._id}).toArray()
    delete user.password
    res.send({transaction,user});

  }catch(err){
    console.log(err)
    res.sendStatus(500)
  }
}