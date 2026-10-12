# Madeira Mosaic — Madeira Guide

Source code for the Madeira Mosaic multilingual tour website deployed to the
Cloudflare Worker `icy-term-0486` and served at
`https://guide.orthodoxmadeira.com`.

## Local development

```bash
npm install
npm run dev
```

## Cloudflare deployment

Build command:

```bash
npm run build
```

Deploy command:

```bash
npx nitro deploy --prebuilt
```

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
