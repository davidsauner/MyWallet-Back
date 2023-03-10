import { collectionSessions, collectionUsers } from "../data/db.js";
import { authUser } from "../Model/AuthSchema.js";
import bcrypt from "bcrypt";

export async function validationUser(req, res, next) {
  const user = req.body;

  const { error } = authUser.validate(user, { abortEarly: false });

  if (error) {
    const errorMessages = error.details.map((err) => err.message);
    return res.status(422).send(errorMessages);
  }

  res.locals.user = user;
  next();
}

export async function validationPasswordUser(req, res, next) {
  const { email, password } = req.body;

  try {
    const user = await collectionUsers.findOne({ email });

    if (!user) {
      return res.sendStatus(401);
    }

    const passworcrypt = bcrypt.compareSync(password, user.password);

    if (!passworcrypt) {
      return res.sendStatus(401);
    }

    res.locals.user = user;

  } catch (error) {
    res.status(500).send(error);
  }

  next();
}

export async function authToken(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) {
    return res.sendStatus(401);
  }

  try {
    const checkSession = await collectionSessions.findOne({ token });
    if (!checkSession) return res.status(401).send("Você não tem autorização");

    const user = await collectionUsers.findOne({ _id: checkSession?.userId });
    if (!user) return res.sendStatus(401), console.log("travou no token");

    res.locals.user = user;
  } catch (error) {
    res.status(500).send(error);
  }

  next();
}
// export function validationUser(req, res, next) {
//   const user = req.body;

//   const { error } = authUser.validate(user, { abortEarly: false });

//   if (error) {
//     const errors = error.details.map((detail) => detail.message);
//     return res.status(400).send(errors);
//   }

//   res.locals.user = user;

//   next();
// }

// export async function validationPasswordUser(req, res, next) {
//   const { email, password } = req.body;

//   try {
//     const user = await collectionUsers.findOne({ email });
//     if (!user) {
//       return res.sendStatus(401);
//     }
//     const passwordOk = bcrypt.compareSync(password, user.password);
//     if (!passwordOk) {
//       return res.sendStatus(401);
//     }
//     res.locals.user = user;
//   } catch (err) {
//     console.log(err);
//     res.sendStatus(500);
//   }

//   next();
// }

// export async function authToken(req, res, next) {
//   const { authorization } = req.headers;
//   const token = authorization?.replace("Bearer ", "");

//   if (!token) {
//     return res.sendStatus(401);
//   }

//   try {
//     const session = await collectionSessions.findOne({ token });
//     if (!session) {
//       return res.sendStatus(401);
//     }
//     const user = await collectionUsers.findOne({ _id: session?.userId });
//     if (!user) {
//       console.log(use)
//       console.log("pqppppppppppp")
//       return res.sendStatus(401);
//     }

//     res.locals.user = user;
//   } catch (err) {
//     console.log(err);
//     res.sendStatus(500);
//   }

//   next();
// }
