#Seguridad en la Web del Hospital

Este es un proyecto para la administración de un hospital. Implementa autenticación de usuarios con JWT, manejo de sesiones y un panel de control protegido. Se construyó utilizando tecnologías modernas tanto en el backend como en el frontend.

---

## Tecnologías Utilizadas

### Frontend (React + Vite)

- React.js
- React Router DOM (para navegación)
- Context API para gestión de estado
- Fetch API / Axios para consumo del backend
- Diseño con CSS y estilos personalizados

### Backend (Node.js + Express)

- Node.js y Express.js
- JWT (Json Web Token) para autenticación
- Bcrypt.js para encriptación de contraseñas
- Helmet y CORS para seguridad
- Dotenv para configuración de variables de entorno

### Base de Datos

- Simulación de usuarios en memoria (JSON)

---

## Funcionalidades Implementadas

- Autenticación de Usuarios: Se usa JWT para proteger rutas y verificar identidad.
- Rutas Protegidas: Solo los usuarios autenticados pueden acceder al dashboard.
- Interfaz Simple y Funcional: Permite iniciar sesión y ver el panel de control.
- Servidor Express: Maneja peticiones HTTP para login y acceso seguro.
- Conexión Frontend - Backend: Comunicación fluida entre cliente y servidor.

---

## Cómo Ejecutar el Proyecto

### Clonar el Repositorio

```bash
 git clone https://github.com/tu-repositorio/hospital-web.git
```

### Instalar Dependencias

```bash
 cd hospital-web
 npm install
```

### Iniciar el Backend

```bash
 cd backend
 node server.js
```

### Iniciar el Frontend

```bash
 cd frontend
 npm run dev
```

---
Carlos Farias Galdames
