/**
 * BrazilIcon — silhueta do mapa do Brasil como icon (mask-image).
 *
 * Usa PNG silhueta (icon-brasil.png) como alpha mask + currentColor como
 * fill via backgroundColor. Permite controlar a cor da silhueta via
 * Tailwind text-* class (sem precisar variantes recoloridas do arquivo).
 *
 * Phase B6c (2026-05-13): substitui hand-traced SVG BrazilOutline por
 * silhueta real fornecida pelo owner (icon-brasil.png).
 */

import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BrazilIconProps extends Omit<HTMLAttributes<HTMLDivElement>, "role"> {
  size?: number;
}

export function BrazilIcon({
  size = 320,
  className,
  style,
  "aria-label": ariaLabel,
  ...rest
}: BrazilIconProps) {
  return (
    <div
      role="img"
      aria-label={ariaLabel ?? "Mapa do Brasil"}
      className={cn(className)}
      style={{
        width: size,
        height: size,
        backgroundColor: "currentColor",
        WebkitMaskImage: "url(/images/icon-brasil.png)",
        maskImage: "url(/images/icon-brasil.png)",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        ...style,
      }}
      {...rest}
    />
  );
}

export default BrazilIcon;
