"use client";

import React, { useState } from "react";
import createOrder from "../api/createOrder";
import { DrinkTypes } from "../data/DrinkTypes";
import { MilkTypes } from "../data/MilkTypes";
import { SizeTypes } from "../data/SizeTypes";
import { OrderFormSelectInput } from "./OrderFormSelectInput";
import { OrderFormTextInput } from "./OrderFormTextInput";

export default function OrderForm() {
  const [addingOrder, setAddingOrder] = useState(false);

  const [drinkType, setDrinkType] = useState("");
  const [milkType, setMilkType] = useState("");
  const [size, setSize] = useState("");
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [orderFor, setOrderFor] = useState("");

  const handleDrinkTypeChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => setDrinkType(e.target.value);

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
      drinkType: drinkType,
      milkType: milkType,
      drinkSize: size,
      specialInstructions:
        specialInstructions.trim() === "" ? "None" : specialInstructions,
      orderFor: orderFor,
    };
  };

  const handleCreateOrderClick = async () => {
    if (
      drinkType === "" ||
      milkType === "" ||
      size === "" ||
      orderFor === ""
    ) {
      return;
    }

    const order = createIOrderObject();

    setAddingOrder(true);
    await createOrder(order);

    setAddingOrder(false);
    resetForm();
  };

  const resetForm = () => {
    setDrinkType("");
    setMilkType("");
    setSize("");
    setSpecialInstructions("");
    setOrderFor("");
  };

  return (
    <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 m-2 justify-items-center">
          <OrderFormSelectInput
            label="Drink Type"
            options={DrinkTypes}
            onChange={handleDrinkTypeChange}
          />
          <OrderFormSelectInput
            label="Milk Type"
            options={MilkTypes}
            onChange={handleMilkTypeChange}
          />
          <OrderFormSelectInput
            label="Size"
            options={SizeTypes}
            onChange={handleSizeChange}
          />
          <OrderFormTextInput
            label="Special Instructions"
            required={false}
            onChange={handleSpecialInstructionsChange}
          />
          <OrderFormTextInput
            label="Order For"
            onChange={handleOrderForChange}
          />
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
