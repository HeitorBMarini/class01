import Link from "next/link";

export default function Users() {
    return (

      <main className="flex items-center justify-center min-h-screen
      w-screen text-xl">
        <h1 > Users</h1>

        <Link href={"/dashboards/products"}>Produtos</Link>
      </main>
     
      
    );
  }
  