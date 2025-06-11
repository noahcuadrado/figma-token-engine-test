import "./ColorCard.css";

interface ColorCardProps {
  color: string;
  hex: string;
  description?: string;
}

export const ColorCard = ({ color, hex, description }: ColorCardProps) => {
  return (
    <div className="color-card">
      <div
        className="color-card__background"
        style={{ backgroundColor: `${hex}` }}
      ></div>
      <div className="color-card__content">
        <h3>{color}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
