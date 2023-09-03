'use client'

import OrderCard from "./OrderCard";

export default function OrdersGrid() {
  return (
    <div className="grid grid-cols-1 gap-4" id="orders">
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
    </div>
  );
}
