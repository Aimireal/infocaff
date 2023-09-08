"use client";

import React from "react";
import { useModal } from "../context/ModalProvider";
import { FullscreenModalProps } from "../interfaces/IFullscreenModalProps";

export default function FullscreenModal({ children }: FullscreenModalProps) {
  const { isOpen, closeModal } = useModal();
  
  return (
    <>
      {isOpen && (
        <div
          id="defaultModal"
          tabIndex={-1}
          aria-hidden="true"
          className="w-full p-2 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full"
        >
          <div className="relative w-full max-h-full">
            <div className="relative rounded-lg dark:bg-gray-700">
              <div className="flex p-1.5 dark:border-gray-600">
                <div className="flex-none w-1/3"></div>
                <div className="flex-grow w-1/3 text-l font-semibold text-center text-gray-900 dark:text-white">
                  Place Order
                </div>
                <div className="flex items-center flex-none w-1/3 justify-end">
                  <button
                    onClick={closeModal}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
