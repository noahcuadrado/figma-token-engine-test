interface TypographyProps {
  text: string;
  size?: "small" | "medium" | "large";
  weight?: "light" | "normal" | "bold";
}

export default function Typography({ text, size, weight }: TypographyProps) {
  return <h3 style={{ fontSize: size, fontWeight: weight }}>{text}</h3>;
}
