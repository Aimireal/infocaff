import OrderForm from "./components/OrderForm";
import OrdersGrid from "./components/OrdersGrid";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-18">
      <div className="w-5/6 grid grid-cols-1 gap-4">
        <OrderForm />
        <OrdersGrid />
      </div>
    </main>
  );
}

