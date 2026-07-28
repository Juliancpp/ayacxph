# Importación de Fotografías del Portafolio

Comando principal:

```bash
npm run import:portfolio
```

Fuentes locales por defecto:

- Retratos: `/home/julian/Descargas/Retratos`
- Eventos: `/home/julian/Descargas/Eventos`
- Fotografía para marcas: `/home/julian/Descargas/Fotos-20260728T032021Z-1-001/Fotos`

Salidas generadas:

- `public/images/portfolio/retratos/originals`
- `public/images/portfolio/retratos/high`
- `public/images/portfolio/retratos/medium`
- `public/images/portfolio/retratos/thumbnails`
- `public/images/portfolio/eventos/originals`
- `public/images/portfolio/eventos/high`
- `public/images/portfolio/eventos/medium`
- `public/images/portfolio/eventos/thumbnails`
- `public/images/portfolio/marcas/originals`
- `public/images/portfolio/marcas/high`
- `public/images/portfolio/marcas/medium`
- `public/images/portfolio/marcas/thumbnails`
- `src/data/portfolio.generated.ts`
- `portfolio-import-report.json`

Formatos soportados directamente: `jpg`, `jpeg`, `png`, `webp`, `avif`.

Formatos detectados pero no publicados automáticamente sin revisión: `heic`, `heif`, `tiff`, `tif` y RAW de cámara.

El script conserva una copia intacta del archivo usado en `originals` y genera derivados sin metadatos sensibles con ImageMagick. La interfaz usa miniaturas para la cuadrícula, `medium` para tarjetas y hero, y `high` para el lightbox.

Para cambiar hero o portada sin tocar el manifiesto generado:

```bash
RETRATOS_HERO="DSC02546.jpg" RETRATOS_COVER="DSC02546.jpg" npm run import:portfolio
EVENTOS_HERO="DSC02516.jpg" EVENTOS_COVER="DSC02516.jpg" npm run import:portfolio
MARCAS_HERO="Cerveza 2.jpg" MARCAS_COVER="Cerveza 3.jpg" IMPORT_CATEGORIES=marcas npm run import:portfolio
```

Para importar desde otra carpeta:

```bash
RETRATOS_SRC="/ruta/a/retratos" EVENTOS_SRC="/ruta/a/eventos" npm run import:portfolio
MARCAS_SRC="/ruta/a/marcas" IMPORT_CATEGORIES=marcas npm run import:portfolio
```

Para regenerar solo una categoría sin reprocesar las demás:

```bash
IMPORT_CATEGORIES=marcas npm run import:portfolio
```

Los textos alternativos provisionales se definen en `scripts/import-portfolio-images.mjs`. Cuando existan descripciones humanas revisadas, deben actualizarse allí y regenerarse el manifiesto.

El orden de pilares y los CTAs viven en `src/data/portfolio.ts`. Retratos debe mantenerse primero mientras sea la especialidad principal.
