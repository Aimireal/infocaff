import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import IOrder from "../../interfaces/IOrder";

const createOrder = async (order: IOrder) => {
  try {
    order.id = Date.now().toString();
    await setDoc(doc(db, "orders", order.id), { ...order });
  } catch (error) {
    console.log("Error adding order");
  }
};

export default createOrder;
