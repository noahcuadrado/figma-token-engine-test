import { ColorCard } from "./components/ColorCard";
import { colorCards } from "./data/colorCards";
import "./App.css";

function App() {
  return (
    <>
      <h1>Figma Token Integration Demo</h1>
      <p>
        This demo uses Figma Tokens Engine to generate design tokens, which are
        injected into CSS variables and applied across the UI. It's a living
        example of design-to-dev collaboration.
      </p>
      <section>
        <h2>Colors</h2>
        <p>
          The following color cards are generated from design tokens defined in
          Figma. Each card represents a color used in the application.
        </p>
        <div className="color-cards">
          {colorCards.map((card) => (
            <ColorCard key={card.name} color={card.name} hex={card.hex} />
          ))}
        </div>
      </section>
      <section>
        <h2>Typography</h2>
        <p>
          Typography styles are applied using CSS variables defined in the
          design tokens. This ensures consistency across the application.
        </p>
        <div className="typography-example">
          <p>Heading lg</p>
          <p>Heading M</p>
          <p>Body L</p>
          <p>Body M</p>
          <p>Body S</p>
          <p>Caption</p>
          <p>Label</p>
        </div>
      </section>
      <section>
        <h2>Example Components</h2>
        <p>
          The following components demonstrate how design tokens are applied in
          practice. Each component uses the defined colors and typography
          styles.
        </p>
      </section>
    </>
  );
}

export default App;
