import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase.js";
/**
 * Graba un mensaje de chat global.
 *
 * @param {{name: string, email: string, message: string}} data
 * @returns Promise
 */

export async function saveData(data) {
  await addDoc(collection(db, "Formulario"), data);
  return data;
}
