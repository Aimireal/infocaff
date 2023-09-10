import { query, limit, getDocs, collection } from "firebase/firestore";
import IOrder from "@/app/interfaces/IOrder";
import { db } from "../firebase";

export const getOrders = async () => {
  const ordersCollection = collection(db, "orders");
  const ordersQuery = query(ordersCollection, limit(50));

  const querySnapshot = await getDocs(ordersQuery);

  return querySnapshot.docs.map((doc) => {
    const orderData = doc.data() as IOrder;
    return { ...orderData, id: doc.id };
  });
};
