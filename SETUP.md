# Webadish Website Setup

## Prerequisites
- Node.js 18+
- npm or pnpm

## Installation
1. Install dependencies:
   ```bash
   npm install
   ```

## Development
Run the development server:
```bash
npm run dev
```
Open [http://localhost:3003](http://localhost:3003) to view the site.

## Build
Build for production:
```bash
npm run build
```

## Structure
- `src/app`: Page routes
- `src/components`: Reusable UI components
- `src/styles`: Global SCSS and mixins

## Notes
- Ensure `src/public/brand/logo.webp` exists for the logo to display.
- Forms are currently simulated (`ContactForm.tsx`). Connect to an API route or service (like Formspree) for real functionality.
