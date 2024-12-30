import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import BasicButtonGroup from "./components/BasicButtonGroup";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/search">Search</Link>
      <ProductCard />
      <BasicButtonGroup />
    </div>
  );
}
