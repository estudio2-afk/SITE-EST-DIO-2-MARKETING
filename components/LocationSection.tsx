import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/contact";

const horarios = [
  { dia: "Segunda a Sexta", horario: "09:00 – 12:00 e 14:00 – 19:00", aberto: true },
  { dia: "Sábado", horario: "09:00 – 12:00 e 13:00 – 14:00", aberto: true },
  { dia: "Domingo", horario: "Fechado", aberto: false },
];

const cidades = [
  "São Mateus",
  "Guriri",
  "Jaguaré",
  "Pedro Canário",
  "Conceição da Barra",
];

export default function LocationSection() {
  return (
    <section
      id="localizacao"
      aria-labelledby="location-heading"
      className="section-padding bg-white"
    >
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4">
            Localização
          </Badge>
          <h2
            id="location-heading"
            className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4 leading-tight"
          >
            Agência local —{" "}
            <span className="text-primary">somos da sua região</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Atendemos presencialmente em toda a região de São Mateus. Não é uma
            agência de outra cidade — somos seus vizinhos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Mapa embed */}
          <div className="rounded-2xl overflow-hidden border border-border shadow-sm h-72 md:h-96 bg-muted">
            <iframe
              title="Localização — São Mateus, Espírito Santo"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60028.9!2d-39.8639!3d-18.7165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb836e5891e2261%3A0x2f1a9f71d7c64c32!2sS%C3%A3o%20Mateus%2C%20ES!5e0!3m2!1spt-BR!2sbr!4v1000000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Mapa mostrando São Mateus, Espírito Santo"
            />
          </div>

          {/* Info */}
          <div className="space-y-8">
            {/* Endereço */}
            <div>
              <div className="flex items-center gap-2 text-primary font-display font-semibold text-sm uppercase tracking-wide mb-3">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Endereço
              </div>
              <address className="not-italic text-foreground">
                <strong>Estúdio 2 Marketing</strong>
                <br />
                São Mateus / Guriri — Espírito Santo
                <br />
                CEP: 29945-390
              </address>
            </div>

            {/* Horários */}
            <div>
              <div className="flex items-center gap-2 text-primary font-display font-semibold text-sm uppercase tracking-wide mb-3">
                <Clock className="h-4 w-4" aria-hidden="true" />
                Horário de atendimento
              </div>
              <ul className="space-y-2">
                {horarios.map((h) => (
                  <li
                    key={h.dia}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-muted-foreground">{h.dia}</span>
                    <time
                      dateTime={h.aberto ? h.horario : "closed"}
                      className={`font-medium ${
                        h.aberto ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {h.horario}
                    </time>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cidades */}
            <div>
              <div className="flex items-center gap-2 text-primary font-display font-semibold text-sm uppercase tracking-wide mb-3">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Cidades com atendimento presencial
              </div>
              <ul className="flex flex-wrap gap-2" aria-label="Cidades atendidas">
                {cidades.map((cidade) => (
                  <li key={cidade}>
                    <Badge variant="secondary" className="font-medium">
                      {cidade}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contato rápido */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild>
                <a
                  href={waLink("localizacao", "saber mais sobre o atendimento presencial")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  (27) 99714-3078
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="mailto:contato@estudio2marketing.com.br" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  E-mail
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
