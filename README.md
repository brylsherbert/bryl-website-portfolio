# Bryl Website Portfolio

A personal portfolio website built with Angular, showcasing projects, experience, and contact information. It features a Home page, light/dark theme support, a small UI icon library, and Tailwind CSS styling.

## Tech Stack

- Angular 20
- Tailwind CSS 4 (via PostCSS)
- RxJS 7
- Custom UI icon library under `libs/ui/ui-icon-helm`

## Features

- Home page feature module (`src/app/feature/home-page`)
- Theme service for light/dark mode (`src/app/shared/services/theme.service.ts`)
- Custom Helm icon lib and DI token (`libs/ui/ui-icon-helm`)

## Getting Started

### Prerequisites

- Node.js LTS (recommended)
- npm (comes with Node)

### Installation

```bash
npm install
```

### Development Server

```bash
npm start
```

Then open `http://localhost:4200/`. The app reloads automatically on code changes.

## Available Scripts

```bash
# Start dev server
npm start

# Production build (outputs to dist/)
npm run build

# Rebuild on changes (development configuration)
npm run watch

# Run unit tests (Karma + Jasmine)
npm test
```

## Development Notes

### Theming
- The `ThemeService` provides a simple light/dark mode toggle and state. Use it within components to read or toggle the current theme.

### Icons
- The `ui-icon-helm` library contains an icon component and token. Import and provide it where needed to render Helm-based icons across the app.

### Styling
- Tailwind CSS 4 is configured via PostCSS. Global styles live in `src/styles.css`. Component styles are colocated with their components.

## Building

```bash
npm run build
```

The production build is emitted to the `dist/` directory.

## Testing

```bash
npm test
```

Runs unit tests via Karma and Jasmine.

## License

This is a personal portfolio project. All rights reserved.
