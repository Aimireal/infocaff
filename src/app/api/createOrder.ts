import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../config/clientApp";
import IOrder from "../interfaces/IOrder";

const createOrder = async (order: IOrder) => {
  try {
    order.id = Date.now().toString();
    await setDoc(doc(firestore, "orders", order.id), { ...order });
  } catch (error) {
    console.log("Error adding order");
  }
};

export default createOrder;
