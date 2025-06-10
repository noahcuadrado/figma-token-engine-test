import "./ColorCard.css";

interface ColorCardProps {
  color: string;
  hex: string;
}

export const ColorCard = ({ color, hex }: ColorCardProps) => {
  return (
    <div className="color-card">
      <div
        className="color-card__background"
        style={{ backgroundColor: `${hex}` }}
      ></div>
      <div className="color-card__content">
        <h3>{color}</h3>
        <p>{hex}</p>
      </div>
    </div>
  );
};
