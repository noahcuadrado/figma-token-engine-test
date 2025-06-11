# 🎨 Figma Token Integration Demo

This project demonstrates **how to integrate design tokens from Figma into a React application** using [Style Dictionary](https://styledictionary.com/) and CSS variables. It is designed as a demo for developers about how to seamlessly connect their design system in Figma with their codebase, ensuring consistent and easily maintainable styles.

---

## 🚀 What You'll Learn

- How to **export design tokens from Figma** using a plugin.
- How to **convert Figma tokens to Style Dictionary format**.
- How to **generate CSS variables** from design tokens.
- How to **use those variables in your React app** for colors, typography, and more.

---

## 🛠️ Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Style Dictionary](https://styledictionary.com/)
- [Figma-to-Style-Dictionary JSON Converter](https://www.figma.com/community/plugin/1362710514082324638/figma-to-style-dictionary-json-converter)

---

## 📦 Project Structure

├── design-tokens/ # 🎨 JSON tokens exported from Figma
├── src/
│ └── styles/
│ └── tokens/ # 🏗️ Auto-generated CSS variables
│ └── components/ # 🧩 Example components using tokens
├── style-dictionary.config.json # ⚙️ Style Dictionary configuration

---

## 📝 Step-by-Step Guide

### 1. **Prepare Your Design Tokens in Figma**

- Organize your colors, typography, and other tokens in Figma using [Styles](https://help.figma.com/hc/en-us/articles/360039957034-Create-and-apply-text-styles).
- Use clear, consistent naming for your tokens.

### 2. **Export Tokens from Figma**

- Install the [Figma-to-Style-Dictionary JSON Converter](https://www.figma.com/community/plugin/1362710514082324638/figma-to-style-dictionary-json-converter) plugin in Figma.
- Run the plugin and export your tokens as a JSON file.
- Save the exported file in the `design-tokens/` directory (e.g., `design-tokens/stylesToken.json`).

### 3. **Configure Style Dictionary**

- Edit [`style-dictionary.config.json`](style-dictionary.config.json) to point to your token files and define the output format (CSS variables):

  ```json
  {
    "source": ["design-tokens/**/*.json"],
    "platforms": {
      "css": {
        "transformGroup": "css",
        "buildPath": "src/styles/tokens/",
        "files": [
          {
            "destination": "variables.css",
            "format": "css/variables",
            "options": {
              "outputReferences": true
            }
          }
        ]
      }
    }
  }
  ```

  This is just a basic example, but the config could be more complex. If you want to learn more visit [configuration style dictionary](https://styledictionary.com/reference/config/)

### 4. **Generate CSS Variables**

Run the following command to generate CSS variables from your tokens:

This will create (or update) src/styles/tokens/variables.css with all your design tokens as CSS variables.

```sh
npm run tokens-build
```

### 5. **Use CSS Variables in Your App**

Import the generated CSS file in your app entry point or component:

Use the variables in your CSS or inline styles:

```sh
import "./styles/tokens/variables.css";
```

### 6. **Enjoy Consistent, Maintainable Styles!**

- Now, your app uses the same design tokens as your Figma files.
- To update styles, just update tokens in Figma, export, and rebuild!

### 💡 **Example Usage**

See src/App.tsx for examples of how to use color and typography tokens in components like ColorCard and Typography.

### 🤝 **Why Use This Approach?**

**Consistency:** Design and code always match.
**Scalability:** Update tokens in Figma, sync to code in seconds.
**Maintainability:** No more hardcoded values or manual updates.
**Collaboration:** Designers and developers speak the same language.

### 🧑‍💻 **Try It Yourself!**

1. Clone this repo.
2. Export your own tokens from Figma.
3. Replace the JSON in design-tokens/.
4. Run npm run tokens-build.
5. Use your tokens in your app!

### 📚 **Resources**

- [Style Dictionary Documentation](https://styledictionary.com/getting-started/installation/)
- [Figma-to-Style-Dictionary JSON Converter](https://www.figma.com/community/plugin/1362710514082324638/figma-to-style-dictionary-json-converter)

### ⭐️ **Get Inspired!**

Integrate design tokens into your workflow and supercharge your design system if you found this demo helpful
