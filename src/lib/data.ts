import type { MenuItem } from "@/types";

export const RESTAURANT_INFO = {
  phone: "(11) 3456-7890",
  whatsapp: "551134567890",
  email: "reservas@irestaurant.com.br",
  address: "Rua das Flores, 123 — São Paulo, SP",
};

export const OPENING_HOURS = [
  { day: "Segunda a Quinta", hours: "12h – 15h · 19h – 23h" },
  { day: "Sexta e Sábado", hours: "12h – 00h" },
  { day: "Domingo", hours: "12h – 22h" },
];

export const CATEGORY_LABELS: Record<MenuItem["category"], string> = {
  entradas: "Entradas",
  principais: "Pratos principais",
  sobremesas: "Sobremesas",
  bebidas: "Bebidas",
};

export const DIET_LABELS: Record<NonNullable<MenuItem["diet"]>[number], string> = {
  vegetariano: "Vegetariano",
  vegano: "Vegano",
  "sem-gluten": "Sem glúten",
  "sem-lactose": "Sem lactose",
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "1",
    name: "Bruschetta de tomate",
    description: "Pão italiano crocante com tomate fresco, manjericão e azeite extra virgem.",
    price: 28,
    category: "entradas",
    diet: ["vegetariano", "vegano"],
  },
  {
    id: "2",
    name: "Carpaccio de filé mignon",
    description: "Lâminas finas de filé mignon com rúcula, parmesão e molho de mostarda.",
    price: 42,
    category: "entradas",
  },
  {
    id: "3",
    name: "Risoto de cogumelos",
    description: "Arroz arbóreo cremoso com mix de cogumelos frescos e parmesão.",
    price: 58,
    category: "principais",
    diet: ["vegetariano", "sem-gluten"],
  },
  {
    id: "4",
    name: "Salmão grelhado",
    description: "Filé de salmão com legumes salteados e molho de ervas.",
    price: 72,
    category: "principais",
    diet: ["sem-gluten", "sem-lactose"],
  },
  {
    id: "5",
    name: "Picanha na brasa",
    description: "Corte nobre grelhado ao ponto, acompanha arroz, farofa e vinagrete.",
    price: 89,
    category: "principais",
    diet: ["sem-gluten", "sem-lactose"],
  },
  {
    id: "6",
    name: "Penne ao molho pesto",
    description: "Massa al dente com pesto de manjericão, pinoli e parmesão.",
    price: 48,
    category: "principais",
    diet: ["vegetariano"],
  },
  {
    id: "7",
    name: "Pudim de leite",
    description: "Clássico pudim caseiro com calda de caramelo.",
    price: 18,
    category: "sobremesas",
  },
  {
    id: "8",
    name: "Mousse de chocolate",
    description: "Mousse aerada de chocolate belga 70% cacau.",
    price: 22,
    category: "sobremesas",
    diet: ["sem-gluten"],
  },
  {
    id: "9",
    name: "Suco natural de laranja",
    description: "Suco espremido na hora, 300 ml.",
    price: 12,
    category: "bebidas",
    diet: ["vegano", "sem-gluten", "sem-lactose"],
  },
  {
    id: "10",
    name: "Água com gás",
    description: "Garrafa 500 ml.",
    price: 8,
    category: "bebidas",
    diet: ["vegano", "sem-gluten", "sem-lactose"],
  },
  {
    id: "11",
    name: "Vinho tinto da casa",
    description: "Taça 150 ml — blend selecionado.",
    price: 24,
    category: "bebidas",
    diet: ["vegano", "sem-gluten", "sem-lactose"],
  },
];
