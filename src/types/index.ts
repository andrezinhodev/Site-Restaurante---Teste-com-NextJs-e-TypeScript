export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "entradas" | "principais" | "sobremesas" | "bebidas";
  diet?: ("vegetariano" | "vegano" | "sem-gluten" | "sem-lactose")[];
};
