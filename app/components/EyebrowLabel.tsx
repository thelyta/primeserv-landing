interface EyebrowLabelProps {
  text: string;
  className?: string;
}

export function EyebrowLabel({ text, className = "" }: EyebrowLabelProps) {
  return (
    <span
      className={`inline-block text-xs font-medium uppercase tracking-[0.15em] text-accent mb-4 ${className}`}
    >
      {text}
    </span>
  );
}
