import { GLOSSARY_TERMS } from "@/lib/glossary/terms";

interface AbbrProps {
  term: string;
  className?: string;
  children?: string;
}

/**
 * Wraps a sigla in HTML <abbr> with title from glossary.
 * Falls back to plain text if term not in glossary.
 *
 * Usage:
 *   <Abbr term="ETE" />          // renders <abbr title="Estação...">ETE</abbr>
 *   <Abbr term="CONAMA 430" />   // renders <abbr title="...">CONAMA 430</abbr>
 *   <Abbr term="ETE">ETEs</Abbr> // override display text
 */
export function Abbr({ term, className, children }: AbbrProps) {
  const title = GLOSSARY_TERMS[term];
  if (!title) {
    return <span className={className}>{children ?? term}</span>;
  }
  return (
    <abbr title={title} className={className}>
      {children ?? term}
    </abbr>
  );
}
