import OrderCard from "./components/OrderCard";
import OrderForm from "./components/OrderForm";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-18">
      <div className="w-5/6 grid grid-cols-1 gap-4">
        <OrderForm />
        <div className="grid grid-cols-1 gap-4" id="orders">
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
        </div>
      </div>
    </main>
  );
}

