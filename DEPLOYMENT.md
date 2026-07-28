# Despliegue de AYACX Photography

## Requisitos

- Node.js 22 (`.nvmrc` y `.node-version`)
- npm 10
- Repositorio GitHub: `Juliancpp/ayacxph`
- Rama principal: `main`
- Dominio canónico: `https://ayacxph.com`

## Instalación

```sh
npm ci
```

## Desarrollo local

```sh
npm run dev
```

## Validación local

```sh
npm run lint
npx tsc --noEmit
npm run build
npm run preview
```

No existe un script `test` configurado en `package.json`.

## Build de producción

`npm run build` ejecuta `vite build` y después `scripts/prepare-github-pages.mjs`.
El script copia `.output/public` a `dist/`, crea `dist/404.html` como fallback
para GitHub Pages, añade `.nojekyll` y verifica que existan:

- `dist/CNAME`
- `dist/robots.txt`
- `dist/sitemap.xml`
- `dist/favicon.ico`
- `dist/manifest.webmanifest`
- `dist/social/ayacx-og.jpg`

## Despliegue automático

El workflow `.github/workflows/deploy-pages.yml` se ejecuta en cada push a
`main` y también manualmente con `workflow_dispatch`.

Pasos del workflow:

1. Checkout.
2. Setup Node usando `.node-version`.
3. `npm ci`.
4. `npm run lint`.
5. `npx tsc --noEmit`.
6. `npm run build`.
7. Configure Pages.
8. Upload artifact desde `dist`.
9. Deploy Pages.

## Configuración manual de GitHub Pages

1. Abrir el repositorio en GitHub.
2. Entrar en `Settings`.
3. Abrir `Pages`.
4. En `Source`, elegir `GitHub Actions`.
5. Ejecutar o esperar el workflow.
6. En `Custom domain`, escribir `ayacxph.com`.
7. Guardar.
8. Esperar la comprobación DNS.
9. Activar `Enforce HTTPS` cuando esté disponible.

## DNS

Dominio raíz:

```text
Tipo: A
Nombre: @
Valores:
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Subdominio `www`:

```text
Tipo: CNAME
Nombre: www
Valor: Juliancpp.github.io
```

No elimines registros de correo, verificación o servicios no relacionados.

GitHub Pages también soporta IPv6. Si deseas añadir AAAA, utiliza los valores
oficiales actuales de GitHub Pages desde su documentación antes de configurarlos.

## Verificación de dominio en GitHub

1. GitHub -> Profile Settings.
2. Pages.
3. Add a domain.
4. Introducir `ayacxph.com`.
5. Copiar el TXT generado por GitHub.
6. Añadirlo al proveedor DNS.
7. Verificar.
8. Mantener el TXT.

No inventes el valor del TXT; GitHub lo genera por cuenta.

## Comandos de validación DNS

```sh
dig ayacxph.com A +short
dig www.ayacxph.com CNAME +short
dig ayacxph.com AAAA +short
curl -I https://ayacxph.com
curl -I https://www.ayacxph.com
```

Resultados esperados:

- `ayacxph.com A` debe devolver las cuatro IPs de GitHub Pages.
- `www.ayacxph.com CNAME` debe devolver `Juliancpp.github.io`.
- `https://ayacxph.com` debe responder correctamente con HTTPS.
- `https://www.ayacxph.com` debe redirigir al dominio raíz cuando GitHub Pages
  termine de aplicar el dominio personalizado.

## Rutas y fallback

GitHub Pages no tiene rewrites de servidor. El build copia `dist/index.html` a
`dist/404.html` para que rutas como `/portafolio/retratos`, `/servicios` o
`/contacto` carguen la aplicación al abrirse directamente o al recargar.

Las rutas inexistentes siguen mostrando la experiencia 404 de la app.

## SEO técnico

Archivos y metadatos incluidos:

- `public/CNAME` con `ayacxph.com`.
- `public/robots.txt`.
- `public/sitemap.xml`.
- Canonical por ruta.
- Open Graph y Twitter Card con `https://ayacxph.com/social/ayacx-og.jpg`.
- JSON-LD `ProfessionalService` con datos confirmados.
- Manifest web con iconos oficiales.

## Formulario de contacto

GitHub Pages es hosting estático. El formulario valida los campos y abre
WhatsApp con una solicitud estructurada. No simula envío a backend.

También existen accesos directos a:

- WhatsApp: `https://wa.me/593939666272`
- Correo: `mailto:nthnyaguana@gmail.com`
- Instagram: `https://www.instagram.com/ayacx_10/`

## Reversión de despliegue

Para revertir un despliegue:

1. Revertir el commit problemático en `main`.
2. Esperar el nuevo workflow de GitHub Pages.
3. Confirmar que el deployment anterior fue reemplazado en `Actions` y `Pages`.

No uses force push sobre commits ya publicados porque el proyecto está conectado
a Lovable.

## Solución de problemas

- Si `npm ci` falla, verifica que `package-lock.json` esté sincronizado.
- Si una ruta directa muestra 404 del navegador, confirma que `dist/404.html`
  exista en el artifact.
- Si el dominio no activa HTTPS, revisa DNS y espera la propagación.
- Si assets no cargan, confirma que `vite.config.ts` use `base: "/"`.
