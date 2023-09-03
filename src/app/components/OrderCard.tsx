export default function OrderCard() {
  return (
    <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="grid grid-cols-2">
        <div>
          <h5 className="mb-1 text-l font-bold tracking-tight text-gray-900 dark:text-white">
            Order: Latte
          </h5>
          <p className="mb-2 text-sm text-gray-700 dark:text-gray-400">
            Milk Type
          </p>
          <p className="mb-2 text-sm text-gray-700 dark:text-gray-400">
            Syrup ~ Special Instruction
          </p>
        </div>
        <div>
          <button className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
