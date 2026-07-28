# AYACX Photography

Sitio web de AYACX Photography, construido con TanStack Start, React,
TypeScript, Vite y Tailwind CSS.

## Desarrollo local

Requisitos:

- Node.js 22
- npm 10

```sh
npm ci
npm run dev
```

## Validación

```sh
npm run lint
npx tsc --noEmit
npm run build
```

El proyecto no define actualmente un script de tests automatizados.

## Producción

El build genera una salida estática en `dist/` preparada para GitHub Pages:

```sh
npm run build
npm run preview
```

El dominio de producción es `https://ayacxph.com`.

Consulta [DEPLOYMENT.md](./DEPLOYMENT.md) para los pasos de GitHub Pages, DNS,
HTTPS y solución de problemas.

## Lovable

Este proyecto está conectado a Lovable. Evita reescribir historial publicado con
force push, rebase o amend de commits ya subidos.
