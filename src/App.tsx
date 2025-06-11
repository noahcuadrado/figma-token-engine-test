import { ColorCard } from "./components/ColorCard";
import { colorCards } from "./data/colorCards";
import { typography } from "./data/typography";
import Typography from "./components/Typography";
import "./styles/tokens/variables.css";
import "./App.css";
import { ExampleComponent } from "./components/ExampleComponent";

function App() {
  return (
    <>
      <h1 className="main-title">Figma Token Integration Demo</h1>
      <p className="main-description">
        This application demonstrates how to integrate design tokens from Figma
        into a React application. It showcases the use of colors and typography
        defined in Figma, ensuring consistency in design across the application.
        The design tokens are applied using CSS variables, which allows for easy
        updates and maintenance of the design system.
      </p>
      <section>
        <h2 className="section-title">Colors</h2>
        <p>
          The following color cards are generated from design tokens defined in
          Figma. Each card represents a color used in the application.
        </p>
        <div className="color-cards">
          {colorCards.map((card) => (
            <ColorCard
              key={card.name}
              color={card.name}
              hex={card.hex}
              description={card.description}
            />
          ))}
        </div>
      </section>
      <section>
        <h2 className="section-title">Typography</h2>
        <p>
          Typography styles are applied using CSS variables defined in the
          design tokens. This ensures consistency across the application.
        </p>
        <div className="typography-example">
          {typography.map((type) => (
            <Typography size={type.size} name={type.name} />
          ))}
        </div>
      </section>
      <section>
        <h2 className="section-title">Example Component</h2>
        <p>
          The following component demonstrate how design tokens are applied in
          practice. This component uses some of the defined colors and
          typography styles.
        </p>
        <ExampleComponent />
      </section>
    </>
  );
}

export default App;
