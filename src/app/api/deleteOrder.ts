import { deleteDoc, doc } from "firebase/firestore";
import { firestore } from "../config/clientApp";

export const deleteOrder = async (documentId: string) => {
  const _order = doc(firestore, `orders/${documentId}`);
  await deleteDoc(_order);
};
