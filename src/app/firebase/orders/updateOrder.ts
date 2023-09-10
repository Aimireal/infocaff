import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export const updateOrder = async (documentId: string) => {
  const _order = doc(db, `orders/${documentId}`);
  await updateDoc(_order, {
    orderFor: "Aim",
  });
};
