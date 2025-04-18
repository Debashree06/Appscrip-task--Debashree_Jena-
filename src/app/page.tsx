// app/page.tsx
import { fetchProducts } from "@/lib/api";
import ClientWrapper from "../components/ClientWrapper";

export default async function Home() {
  const products = await fetchProducts();

  return <ClientWrapper products={products} />;
}
