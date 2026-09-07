import logoColor from "@/assets/logo-color.png";
import logoWhite from "@/assets/logo-white.png";

interface LogoMarkProps {
  size?: number;
  variant?: "color" | "white";
  className?: string;
}

/** Marca real do Estúdio 2 — "2" + seta laranja, em versão colorida ou branca (fundos escuros). */
export function LogoMark({ size = 36, variant = "color", className = "" }: LogoMarkProps) {
  return (
    <img
      src={variant === "white" ? logoWhite : logoColor}
      alt=""
      width={size}
      height={size}
      className={className}
      style={{ width: size, height: size, objectFit: "contain" }}
    />
  );
}

interface LogoFullProps {
  /** Cor do texto — use "white" no hero/footer escuro, "dark" no header claro */
  textColor?: "white" | "dark";
  size?: "sm" | "md" | "lg";
}

/** Logo completo: marca + nome. */
export function LogoFull({ textColor = "dark", size = "md" }: LogoFullProps) {
  const markSize = size === "sm" ? 28 : size === "lg" ? 44 : 36;
  const textClass =
    textColor === "white"
      ? "text-white"
      : "text-foreground";
  const fontSize =
    size === "sm"
      ? "text-sm"
      : size === "lg"
      ? "text-xl"
      : "text-base md:text-lg";

  return (
    <span className="flex items-center gap-2">
      <LogoMark size={markSize} variant={textColor === "white" ? "white" : "color"} />
      <span className={`font-display font-bold ${fontSize} ${textClass} transition-colors`}>
        Estúdio 2 Marketing
      </span>
    </span>
  );
}
