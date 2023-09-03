import { query, limit, getDocs, collection } from "firebase/firestore";
import IOrder from "../types/IOrder";
import { firestore } from "../config/clientApp";

export const getOrders = async () => {
  const ordersCollection = collection(firestore, "orders");
  const ordersQuery = query(ordersCollection, limit(50));

  const querySnapshot = await getDocs(ordersQuery);
  const result: IOrder[] = [];
  querySnapshot.forEach((snapshot) => {
    const orderData = snapshot.data() as IOrder;
    result.push(orderData);
  });

  return result;
};
