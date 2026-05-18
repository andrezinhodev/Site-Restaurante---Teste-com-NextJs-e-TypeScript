import { Metadata } from "next";
import { LegalPage } from "../legal/LegalPage";
import { RESTAURANT_INFO } from "@/lib/data";

export const metadata: Metadata = { title: "LGPD e Cookies" };

export default function LgpdPage() {
  return (
    <LegalPage title="LGPD e Cookies" subtitle="Transparência e seus direitos">
      <p>Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), informamos como tratamos seus dados.</p>
      <h2 className="heading-md mt-8">Encarregado de Dados (DPO)</h2>
      <p>Para exercer seus direitos como titular de dados, entre em contato:</p>
      <p>
      </p>
      <h2 className="heading-md mt-8">Cookies</h2>
      <p>Utilizamos cookies essenciais, analíticos e de marketing. Você pode gerenciar suas preferências pelo banner exibido na primeira visita.</p>
      <h2 className="heading-md mt-8">Direitos do Titular</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Confirmação da existência de tratamento</li>
        <li>Acesso, correção e exclusão dos dados</li>
        <li>Portabilidade e revogação do consentimento</li>
        <li>Informação sobre compartilhamento</li>
      </ul>
    </LegalPage>
  );
}
