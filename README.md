# My Portfolio

Personal portfolio site built with React and published on GitHub Pages.

## Overview

This portfolio presents selected work, background, and contact information in a one-page layout with a dedicated projects view.

The current version highlights `A'S RECORDS Rails Suite` as a featured case study. That project is shown as a connected three-app system with:

- a hub website
- a store app
- a community / events app

## Tech

- React
- React Router
- CSS
- Font Awesome

## Main Areas

- `Home`: personal introduction and overall tone
- `About`: background, craft, and perspective
- `Projects`: featured work plus additional project cards
- `A'S RECORDS detail page`: roles, flow, screenshots, and admin views
- `Contact`: email and social links

## Local Development

Install dependencies and start the dev server:

```bash
npm install
npm start
```

By default, Create React App serves the site at `http://localhost:3000`.

## Validation

```bash
npm test -- --watchAll=false
npm run build
```

## Notes

- Project process videos are provided through environment variables in `.env`
- Static screenshots used in the portfolio live under `src/assets/images`
- Design notes for the A'S RECORDS portfolio work are stored in `docs/`
