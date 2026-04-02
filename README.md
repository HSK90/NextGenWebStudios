# NextGenWebStudios
Proyecto: Mission Start: Auditoría de Rendimiento y Estandarización del workspace en "NexGen Web Solutions
├── index.html          # Estructura (Esqueleto)
├── css/                
    └── styles.css      # Estilo (Piel)
├── js/
    ├── main.js         # Lógica pricipal (Cerebro)
    └── utils.js        # Funciones de ayuda
├── .gitignore          # Archivo que Git debe ignorar
└── package.json        # Gestión de dependencia (npm)

## Entorno de desarrollo

- Extensiones recomendadas: ESLint, Prettier, GitLens.
- Formateo automático al guardar ya está habilitado en `.vscode/settings.json`.
- Para validar el código usa `npm run lint`.
- Para formatear todo el proyecto usa `npm run format`.

## Microservicio local

- El microservicio está en `src/index.js`.
- Inicia el servicio con `npm start`.
- El servicio responde JSON en `http://localhost:3000`.
 