import { db } from "fire/firebase";

export const createUser = (dataUser) =>
  db.ref(`users/${dataUser.id}`).set(dataUser);
