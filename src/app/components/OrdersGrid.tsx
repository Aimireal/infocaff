"use client";

import { useEffect, useState } from "react";
import IOrder from "../types/IOrder";
import { getOrders } from "../api/getOrders";
import { onSnapshot, collection } from "firebase/firestore";
import { firestore } from "../config/clientApp";
import OrderCard from "./OrderCard";
import LoadingDisplay from "./LoadingDisplay";

export default function OrdersGrid() {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchOrders = async () => {
      const ordersData = await getOrders();
      setOrders(ordersData);
      setLoading(false);
    };

    fetchOrders();

    const ordersCollection = collection(firestore, "orders");
    const unsubscribe = onSnapshot(ordersCollection, (snapshot) => {
      const newOrders = snapshot.docs.map((doc) => {
        const orderData = doc.data() as IOrder;
        return { ...orderData, id: doc.id };
      });
      setOrders(newOrders);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4" id="orders">
      {loading ? (
        <LoadingDisplay />
      ) : orders.length === 0 ? (
        <div>
          <h2>No Orders Found</h2>
        </div>
      ) : (
        orders.map((order, index) => {
          return <OrderCard key={index} order={order} />;
        })
      )}
    </div>
  );
}
