"use client";

import React, { useState } from "react";
import createOrder from "../api/createOrder";

export default function OrderForm() {
  const [addingOrder, setAddingOrder] = useState(false);

  const [coffeeType, setCoffeeType] = useState("");
  const [milkType, setMilkType] = useState("");
  const [size, setSize] = useState("");
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [orderFor, setOrderFor] = useState("");

  const handleCoffeeTypeChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => setCoffeeType(e.target.value);

  const handleMilkTypeChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => setMilkType(e.target.value);

  const handleSizeChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => setSize(e.target.value);

  const handleSpecialInstructionsChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => setSpecialInstructions(e.target.value);

  const handleOrderForChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => setOrderFor(e.target.value);

  const createIOrderObject = () => {
    return {
      drinkType: coffeeType,
      milkType: milkType,
      drinkSize: size,
      specialInstructions: specialInstructions,
      orderFor: orderFor,
    };
  };

  const handleCreateOrderClick = async () => {
    const order = createIOrderObject();
    setAddingOrder(true);
    await createOrder(order);
    setAddingOrder(false);
  };

  return (
    <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div>
        <div className="grid grid-cols-3 gap-2 m-2 justify-items-center">
          <div>
            <label className="block text-sm mb-2">Coffee Type</label>
            <input
              id="coffeeType"
              className="text-sm rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              onChange={handleCoffeeTypeChange}
            />
          </div>
          <div>
            <label className="block text-sm mb-2">Milk Type</label>
            <input
              id="milkType"
              className="text-sm rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              onChange={handleMilkTypeChange}
            />
          </div>
          <div>
            <label className="block text-sm mb-2">Size</label>
            <input
              id="size"
              className="text-sm rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              onChange={handleSizeChange}
            />
          </div>
          <div>
            <label className="block text-sm mb-2">Special Instructions</label>
            <input
              id="specialInstructions"
              className="text-sm rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              onChange={handleSpecialInstructionsChange}
            />
          </div>
          <div>
            <label className="block text-sm mb-2">Order For</label>
            <input
              id="orderFor"
              className="text-sm rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              onChange={handleOrderForChange}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <button
          onClick={handleCreateOrderClick}
          disabled={addingOrder}
          className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create Order
        </button>
      </div>
    </div>
  );
}
