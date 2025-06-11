interface TypographyProps {
  size: string;
  name: string;
}

export default function Typography({ size, name }: TypographyProps) {
  return <p style={{ fontSize: size }}>{name}</p>;
}
