import { Metadata } from "next";
import { ReservationForm } from "@/components/sections/ReservationForm";
import { RESTAURANT_INFO, OPENING_HOURS } from "@/lib/data";
import { PageHero } from "@/components/ui/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reservas",
  description: "Reserve sua mesa online no IRestaurant.",
};

export default function ReservasPage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHero
        label="Contato"
        title="Entre em contato"
        description="Preencha o formulário e confirmaremos sua solicitação em até 24 horas."
      />

      <section className="section-muted">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 card overflow-hidden p-0">
              <div className="border-b border-zinc-100 bg-gradient-to-r from-orange-50/80 to-white px-6 py-5 md:px-8">
                <h2 className="heading-md">Entre em contato conosco!</h2>
                <p className="mt-1 text-sm text-zinc-500">
                  Preencha em poucos passos — leva menos de 2 minutos.
                </p>
              </div>
              <div className="p-6 md:p-8">
                <ReservationForm />
              </div>
            </div>

            <aside className="space-y-4" aria-label="Informações adicionais">
              <InfoCard title="Telefone">
                <a
                  href={`tel:${RESTAURANT_INFO.phone.replace(/\D/g, "")}`}
                  className="text-zinc-950 font-medium hover:underline"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </InfoCard>

              <InfoCard title="WhatsApp">
                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-950 font-medium hover:underline"
                >
                  Enviar mensagem
                </a>
              </InfoCard>

              <InfoCard title="Horários">
                <ul className="space-y-1.5">
                  {OPENING_HOURS.map(({ day, hours }) => (
                    <li key={day} className="flex justify-between text-zinc-500 gap-2">
                      <span>{day}</span>
                      <span>{hours}</span>
                    </li>
                  ))}
                </ul>
              </InfoCard>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="card p-5">
      <h3 className="text-sm font-semibold text-zinc-950 mb-2">{title}</h3>
      <div className="text-sm text-zinc-500">{children}</div>
    </div>
  );
}
