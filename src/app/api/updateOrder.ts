import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../config/clientApp";

export const updateOrder = async (documentId: string) => {
  const _order = doc(firestore, `orders/${documentId}`);
  await updateDoc(_order, {
    orderFor: "Aim",
  });
};
