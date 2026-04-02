# Auditoría DevTools

## Objetivo

Detectar recursos pesados y errores silenciosos que impactan experiencia de usuario.

## Checklist rápido

1. Abrir el sitio en Chrome o Edge.
2. Ir a DevTools:
   - `F12` o `Ctrl+Shift+I`.
3. Revisar la pestaña `Network`:
   - ordenar por `Size` y `Waterfall`.
   - buscar imágenes, fuentes y scripts grandes (> 200 KB).
   - identificar peticiones con `Status` 4xx/5xx.
   - comprobar `Time` para recursos que tardan mucho en cargar.
4. Revisar la pestaña `Console`:
   - buscar errores (`Error`, `Unhandled Promise Rejection`).
   - buscar warnings de `Deprecation` o `Source Map`.
   - verificar si hay errores de scripts que paralicen la carga.
5. Revisar `Performance` / `Lighthouse` si es posible:
   - ejecutar un `Lighthouse` para detectar `Largest Contentful Paint`, `Total Blocking Time` y `Cumulative Layout Shift`.

## Puntos de atención clave

- recursos estáticos sin compresión o con cache headers débiles
- cargas de JavaScript excesivas en la página de inicio
- errores silenciosos provenientes de scripts dinámicos
- uso de imágenes no optimizadas o formatos antiguos
- requests de terceros que bloquean el renderizado

## Siguiente paso técnico

- preparar un entorno local con `npm install` y `npm start`.
- aplicar linting y formateo automático antes de subir cambios.
