"use client";

import { useState, type FormEvent } from "react";
import {
  User,
  Mail,
  Phone,
  CalendarDays,
  Clock,
  Users,
  MessageSquare,
  CheckCircle2,
  Loader2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  occasion: string;
  notes: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  guests: 2,
  occasion: "",
  notes: "",
};

const TIME_SLOTS = [
  { value: "12:00", label: "12:00" },
  { value: "12:30", label: "12:30" },
  { value: "13:00", label: "13:00" },
  { value: "19:00", label: "19:00" },
  { value: "19:30", label: "19:30" },
  { value: "20:00", label: "20:00" },
  { value: "20:30", label: "20:30" },
  { value: "21:00", label: "21:00" },
];

const OCCASIONS = [
  { value: "", label: "Nenhuma" },
  { value: "aniversario", label: "Aniversário" },
  { value: "romantico", label: "Jantar romântico" },
  { value: "negocios", label: "Negócios" },
  { value: "familia", label: "Família" },
];

export function ReservationForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function setGuests(delta: number) {
    setForm((prev) => ({
      ...prev,
      guests: Math.min(10, Math.max(1, prev.guests + delta)),
    }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.time) return;
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-emerald-100 bg-gradient-to-b from-emerald-50 to-white px-8 py-14 text-center">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
          <CheckCircle2 className="h-8 w-8 text-emerald-600" strokeWidth={1.75} />
        </div>
        <h3 className="text-xl font-semibold text-zinc-950">Reserva enviada!</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-zinc-500">
          Recebemos sua solicitação. Entraremos em contato em até{" "}
          <span className="font-medium text-zinc-700">24 horas</span> para confirmar sua mesa.
        </p>
        <div className="mt-6 w-full max-w-xs rounded-xl bg-zinc-50 px-4 py-3 text-left text-sm">
          <p className="text-zinc-400">Resumo</p>
          <p className="mt-1 font-medium text-zinc-900">{form.name}</p>
          <p className="text-zinc-600">
            {formatDate(form.date)} · {form.time} · {form.guests}{" "}
            {form.guests === 1 ? "pessoa" : "pessoas"}
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setForm(initialForm);
          }}
          className="mt-8 text-sm font-medium text-orange-600 transition hover:text-orange-500"
        >
          Fazer nova reserva
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <FormSection
        step={1}
        title="Seus dados"
        description="Como podemos entrar em contato com você?"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <InputField
            label="Nome completo"
            htmlFor="name"
            icon={User}
            required
            value={form.name}
            onChange={handleChange}
            name="name"
            placeholder="João Silva"
          />
          <InputField
            label="E-mail"
            htmlFor="email"
            icon={Mail}
            required
            type="email"
            value={form.email}
            onChange={handleChange}
            name="email"
            placeholder="joao@email.com"
          />
        </div>
        <InputField
          label="Telefone"
          htmlFor="phone"
          icon={Phone}
          required
          type="tel"
          value={form.phone}
          onChange={handleChange}
          name="phone"
          placeholder="(11) 99999-9999"
          className="sm:max-w-md"
        />
      </FormSection>

      <div className="flex flex-col gap-3 border-t border-zinc-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-start gap-2">

  <input
    type="checkbox"
    id="terms"
    className="
      mt-1 h-4 w-4 rounded
      border-zinc-300
      text-orange-500
      focus:ring-orange-500
    "
  />

  <label
    htmlFor="terms"
    className="text-xs text-zinc-400"
  >
    Ao enviar, você concorda com nossa{" "}

    <a
      href="/termos"
      className="
        font-medium text-zinc-600
        underline-offset-2
        hover:underline
      "
    >
      política de reservas e com a lei de LGPD
    </a>

    .

  </label>

</div>
        <button
          type="submit"
          disabled={loading || !form.time}
          className="btn-primary group shrink-0"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              Enviar Solicitação 
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

function FormSection({
  step,
  title,
  description,
  children,
}: {
  step: number;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-5">
      <div className="flex items-start gap-4">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-semibold text-white">
          {step}
        </span>
        <div>
          <h3 className="text-base font-semibold text-zinc-950">{title}</h3>
          <p className="mt-0.5 text-sm text-zinc-500">{description}</p>
        </div>
      </div>
      <div className="space-y-4 pl-0 sm:pl-12">{children}</div>
    </section>
  );
}

function InputField({
  label,
  htmlFor,
  icon: Icon,
  required,
  className,
  ...props
}: {
  label: string;
  htmlFor: string;
  icon: React.ComponentType<{ className?: string }>;
  required?: boolean;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="label">
        {label}
        {required && <span className="text-orange-500"> *</span>}
      </label>
      <div className="relative mt-1.5">
        <Icon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
        <input
          id={htmlFor}
          required={required}
          className="input-modern pl-10"
          {...props}
        />
      </div>
    </div>
  );
}

function formatDate(iso: string) {
  if (!iso) return "";
  return new Date(iso + "T12:00:00").toLocaleDateString("pt-BR", {
    weekday: "short",
    day: "numeric",
    month: "long",
  });
}
