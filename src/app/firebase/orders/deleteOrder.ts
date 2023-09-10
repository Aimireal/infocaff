import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export const deleteOrder = async (documentId: string) => {
  const _order = doc(db, `orders/${documentId}`);
  await deleteDoc(_order);
};
