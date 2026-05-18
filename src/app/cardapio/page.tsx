"use client";

import { useState } from "react";
import { MENU_ITEMS, CATEGORY_LABELS, DIET_LABELS } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import { PageHero } from "@/components/ui/PageHero";
import { Badge } from "@/components/ui/Badge";
import type { MenuItem } from "@/types";

type Category = MenuItem["category"] | "todos";

export default function CardapioPage() {
  const [category, setCategory] = useState<Category>("todos");
  const [diet, setDiet] = useState<string>("todos");

  const filtered = MENU_ITEMS.filter((item) => {
    const matchCategory = category === "todos" || item.category === category;
    const matchDiet = diet === "todos" || (item.diet?.some((d) => d === diet) ?? false);
    return matchCategory && matchDiet;
  });

  return (
    <div className="flex flex-1 flex-col">
      <PageHero
        label="Cardápio"
        title="Sabores da casa"
        description="Explore nossa seleção de pratos com filtros por categoria e restrição alimentar."
      />

      <section className="section-muted">
        <div className="container-page">
          <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filtrar por categoria">
            <FilterBtn active={category === "todos"} onClick={() => setCategory("todos")}>Todos</FilterBtn>
            {(Object.keys(CATEGORY_LABELS) as MenuItem["category"][]).map((cat) => (
              <FilterBtn key={cat} active={category === cat} onClick={() => setCategory(cat)}>
                {CATEGORY_LABELS[cat]}
              </FilterBtn>
            ))}
          </div>

          <div className="mb-8 flex items-center gap-3">
            <label htmlFor="diet-filter" className="text-sm font-medium text-zinc-700">
              Dieta
            </label>
            <select id="diet-filter" value={diet} onChange={(e) => setDiet(e.target.value)} className="input max-w-xs">
              <option value="todos">Todas</option>
              {Object.entries(DIET_LABELS).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((item) => (
              <article key={item.id} className="card-hover p-6">
                <div className="flex justify-between items-start gap-2 mb-2">
                  <h2 className="text-sm font-semibold text-zinc-950">{item.name}</h2>
                  <span className="text-sm font-medium text-zinc-950 tabular-nums">{formatCurrency(item.price)}</span>
                </div>
                <p className="text-sm text-zinc-500 mb-3 leading-relaxed">{item.description}</p>
                {item.diet && (
                  <div className="flex flex-wrap gap-1.5">
                    {item.diet.map((d) => (
                      <Badge key={d} variant="diet">{DIET_LABELS[d]}</Badge>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-zinc-500 py-16 text-sm">
              Nenhum item encontrado com os filtros selecionados.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

function FilterBtn({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={active ? "filter-pill-active" : "filter-pill-inactive"}
    >
      {children}
    </button>
  );
}
