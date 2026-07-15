/**
 * FAQ — accordion + Schema.org FAQPage JSON-LD inline.
 *
 * Server Component. Wrapper sobre primitives Accordion (Radix). single
 * collapsible default, multiple opcional via prop.
 */

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export interface FAQItem {
  q: string;
  a: string;
}

export interface FAQProps {
  title?: string;
  eyebrow?: string;
  items: FAQItem[];
  multiple?: boolean;
  className?: string;
  /** Renderizar JSON-LD FAQPage inline (default true). */
  jsonLd?: boolean;
}

function faqJsonLd(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

export function FAQ({
  title = "Perguntas frequentes",
  eyebrow,
  items,
  multiple = false,
  className,
  jsonLd = true,
}: FAQProps) {
  if (items.length === 0) return null;

  const renderItems = items.map((it, idx) => (
    <AccordionItem key={idx} value={`item-${idx}`}>
      <AccordionTrigger>{it.q}</AccordionTrigger>
      <AccordionContent>
        <p className="whitespace-pre-line">{it.a}</p>
      </AccordionContent>
    </AccordionItem>
  ));

  return (
    <section className={cn("py-16 lg:py-20", className)}>
      <div className="container-site max-w-[800px]">
        {eyebrow && (
          <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)] mb-3">
            {eyebrow}
          </p>
        )}
        <h2 className="text-[clamp(1.5rem,1.5vw+1rem,2rem)] font-display font-semibold text-foreground tracking-[-0.015em] text-balance">
          {title}
        </h2>

        <div className="mt-8">
          {multiple ? (
            <Accordion type="multiple">{renderItems}</Accordion>
          ) : (
            <Accordion type="single" collapsible>
              {renderItems}
            </Accordion>
          )}
        </div>

        {jsonLd && (
          <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(faqJsonLd(items)),
            }}
          />
        )}
      </div>
    </section>
  );
}

export default FAQ;
