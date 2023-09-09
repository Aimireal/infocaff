"use client";

import React, { useState, useEffect } from "react";
import { useModal } from "../context/ModalProvider";
import AvatarIcon from "./AvatarIcon";

export function NavigationBar() {
  const { openModal } = useModal();
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
    <nav className="flex justify-between items-center p-4">
      <div className="flex-none w-1/3"></div>
      <div className="flex-grow text-2xl font-semibold text-center">
        InfoCaff
      </div>
      <div className="flex items-center flex-none w-1/3 justify-end">
        {isMobile && (
          <button onClick={openModal} className="mr-4">
            Place Order
          </button>
        )}
        <AvatarIcon />
      </div>
    </nav>
  );
}
