import React from "react";
import IOrder from "../types/IOrder";
import { deleteOrder } from "../api/deleteOrder";

interface OrderCardProps {
  order: IOrder;
}

export default function OrderCard({ order }: OrderCardProps) {
  return (
    <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="grid grid-cols-2">
        <div>
          <h5 className="mb-1 text-l font-bold tracking-tight text-gray-900 dark:text-white">
            Order: {order.drinkType}
          </h5>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
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
          <div className="w-3/5 grid grid-cols-1">
            <p className="mb-2 text-sm text-gray-700 dark:text-gray-400">
              Order for: {order.orderFor}
            </p>
            <button
              onClick={() => order.id && deleteOrder(order.id)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center justify-self-end dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-12 h-12"
            >
              <svg
                className="w-8 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
