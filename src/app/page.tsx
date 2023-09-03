import OrderCard from "./components/OrderCard";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-18">
      <div className="w-5/6 grid grid-cols-1 gap-4">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </main>
  );
}

