# AI Agent Prompt for One-Pager Spinoffs

You are an expert web developer tasked with creating a new "one-pager" tool using the `one-pagers-multi-language-template`. Your goal is to adapt this existing template for a new domain and tool functionality while maintaining the multi-language support, SEO structure, and AdSense integration.

## Project Overview
The project is a static site generated with Astro. It uses a JSON file for translations to generate pages for ~20 languages. The design is simple, fast, and SEO-focused.

## Template Structure
- **`src/site.config.ts`**: Central configuration for site name, domain, GA4 ID, AdSense ID, and contact email.
- **`src/components/Tool.astro`**: Contains the specific HTML, CSS, and JavaScript for the tool (e.g., Password Generator, BMI Calculator). **This is the main file you will replace.**
- **`src/data/translations.json`**: Contains all text content for all languages. You must update this to reflect the new tool's text.
- **`src/components/Logo.astro`**: Generates a text-based logo from the config.
- **`src/layouts/Layout.astro`**: Main layout with SEO meta tags, GA4, and AdSense code.
- **`public/`**: Static assets like `ads.txt`, `llm.txt`, `favicon.svg`.

## Your Task Checklist
1.  **Analyze the Request**: Understand the new tool requirements (e.g., "Create a BMI Calculator for calculate-bmi.online").
2.  **Update Configuration (`src/site.config.ts`)**:
    -   Update `name` (e.g., "Calculate BMI Online").
    -   Update `domain` and `url`.
    -   Update `analyticsId` and `adsenseId` if provided.
3.  **Implement Tool Logic (`src/components/Tool.astro`)**:
    -   Rewrite this component completely.
    -   Implement the tool's logic using client-side JavaScript within the `<script>` tag.
    -   **Crucial**: Do not hardcode text in the UI. Use `langData` props (e.g., `{langData.bmiCalculator.weightLabel}`).
    -   Ensure the design matches the dark/yellow theme or fits the new brand.
4.  **Update Translations (`src/data/translations.json`)**:
    -   Rewrite the JSON structure.
    -   Keep the language keys (`en`, `pl`, `es`, etc.).
    -   **SEO Section**: Update `heroTitle`, `heroText`, `featuresList`, etc., to be highly relevant to the new topic.
    -   **Tool Section**: Replace the old tool's keys (e.g., `passwordGenerator`) with new ones (e.g., `bmiCalculator`) and provide translations for all UI elements.
5.  **Update Static Files**:
    -   **`public/llm.txt`**: Update the description to explain what the new tool does for AI scrapers.
    -   **`public/ads.txt`**: Verify if it needs updates (usually static for the same publisher).
6.  **Verify**:
    -   Run `npm run build` to ensure no errors.
    -   Check `dist/` to see if pages are generated.

## Constraints & Best Practices
-   **No Backend**: All logic must be client-side JavaScript.
-   **Static Generation**: The site uses `getStaticPaths` in `index.astro` based on the keys in `translations.json`.
-   **SEO**: The `seo` object in translations is critical. Ensure rich, keyword-heavy content for the Hero, Features, and FAQ sections.
-   **AdSense**: The layout has placeholders for AdSense. Ensure they are preserved or updated if the user requests specific placements.
-   **Text-Based Logo**: The `Logo.astro` component handles the logo automatically based on `siteConfig.name`. Do not create image logos unless explicitly asked.
