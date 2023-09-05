import React from "react";
import IOrder from "../types/IOrder";
import { deleteOrder } from "../api/deleteOrder";

interface OrderCardProps {
  order: IOrder;
}

export default function OrderCard({ order }: OrderCardProps) {
  return (
    <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        <div>
          <h5 className="mb-1 text-l font-bold tracking-tight text-gray-900 dark:text-white">
            Order: {order.drinkType}
          </h5>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3">
            <p className="mb-2 text-sm text-gray-700 dark:text-gray-400">
              Size: {order.drinkSize}
            </p>
            <p className="mb-2 text-sm text-gray-700 dark:text-gray-400">
              Milk: {order.milkType}
            </p>
            <p className="mb-2 text-sm text-gray-700 dark:text-gray-400">
              Special: {order.specialInstructions}
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="w-2/5 grid grid-cols-1">
            <p className="mb-2 text-sm text-gray-700 dark:text-gray-400">
              Order for: {order.orderFor}
            </p>
            <button
              onClick={() => order.id && deleteOrder(order.id)}
              className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Remove Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
