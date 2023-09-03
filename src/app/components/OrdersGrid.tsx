"use client";

import OrderCard from "./OrderCard";
import { useEffect, useState } from "react";
import IOrder from "../types/IOrder";
import { getOrders } from "../api/getOrders";

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
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4" id="orders">
      {loading ? (
        <div>
          <h2>Loading</h2>
        </div>
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
