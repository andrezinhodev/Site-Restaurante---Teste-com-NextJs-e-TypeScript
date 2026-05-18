import "./globals.css";
import { ChefHat } from "lucide-react";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Cardápio", href: "/cardapio" },
  { name: "Reserva", href: "/reserva" },
  { name: "Contato", href: "/contato" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="bg-white">
      <body className="flex min-h-screen flex-col bg-white text-gray-900">
        {/* HEADER */}
        <header className="bg-white shadow">
          <nav
            className="
              mx-auto flex max-w-7xl
              items-center justify-between
              p-6 lg:px-8
            "
          >
            {/* LOGO */}
            <Link
              href="/"
              className="
                text-2xl font-bold
                text-gray-900
              "
            >
            </Link>
            <div className="flex lg:flex-1">
              <a href="/" className="flex items-center gap-2">
                <ChefHat className="h-8 w-8 text-orange-500" />
                <span className="text-xl font-bold text-gray-900">
                  IRestaurant
                </span>
              </a>
            </div>

            {/* NAVIGATION */}
            <div className="flex items-center gap-8 ">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="
                    text-sm font-semibold
                    text-gray-700 transition
                    hover:text-orange-500
                  "
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </header>

        <main className="flex flex-1 flex-col">{children}</main>
      </body>
    </html>
  );
}
