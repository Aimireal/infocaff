"use client";

import FullscreenModal from "../components/FullscreenModal";
import OrderForm from "../components/orderForm/OrderForm";
import OrdersGrid from "../components/OrdersGrid";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);
  return (
    <main className="flex flex-col items-center p-18">
      {isMobile ? (
        <FullscreenModal>{<OrderForm />}</FullscreenModal>
      ) : (
        <OrderForm />
      )}
      <OrdersGrid />
      <div className="w-5/6 grid grid-cols-1 gap-4"></div>
    </main>
  );
}
