# Plataforma de Chat en Tiempo Real

## 📌 Descripción General
Este proyecto es una plataforma de chat en tiempo real diseñada para permitir la comunicación instantánea entre usuarios. Utiliza **NestJS** en el backend con **DrizzleORM** para la gestión de la base de datos y **WebSockets** para la transmisión de mensajes en tiempo real. En el frontend, emplea **Next.js** con **React** y **Zustand**, proporcionando una interfaz rápida y dinámica.

El sistema permite a los usuarios registrarse, autenticarse mediante **JWT** y enviar mensajes individuales o en grupos. Además, almacena los mensajes en una base de datos **PostgreSQL**, asegurando que la conversación persista incluso si los usuarios cierran sesión o se desconectan temporalmente.

## 🔹 Características Clave
- **Autenticación Segura** → JWT protege las sesiones de usuario.
- **Mensajes en Tiempo Real** → WebSockets con socket.io para comunicación instantánea.
- **Base de Datos Eficiente** → PostgreSQL con DrizzleORM, optimizando consultas SQL.
- **Arquitectura Escalable** → Clean Architecture separando lógica de negocio, infraestructura y presentación.
- **Historial de Mensajes** → Todos los mensajes se almacenan y pueden recuperarse.
- **Estado Global en el Frontend** → Zustand facilita la gestión del chat sin recargas innecesarias.
- **Sistema de Notificaciones** → Opción para recibir alertas de nuevos mensajes.

## 📌 Flujo de Funcionamiento
### 1️⃣ Registro y Autenticación
- Un usuario se registra con su email y contraseña.
- Se genera un token JWT para manejar su sesión.

### 2️⃣ Conexión al Chat
- Al iniciar sesión, el usuario se conecta automáticamente a WebSockets.
- Se une a una sala específica según su ID para recibir mensajes dirigidos a él.

### 3️⃣ Envío y Recepción de Mensajes
- Un usuario escribe un mensaje y lo envía mediante WebSockets.
- El mensaje se almacena en PostgreSQL utilizando DrizzleORM.
- El destinatario recibe automáticamente el mensaje en tiempo real.

### 4️⃣ Historial de Conversaciones
- Cuando un usuario abre el chat, el sistema carga los mensajes almacenados en la base de datos.

## 📌 Tecnologías Utilizadas
### 🖥️ Frontend (Next.js + Zustand)
- **Next.js** (React)
- **Zustand** para gestión de estado
- **Tailwind CSS** para diseño rápido y responsivo
- **Socket.io-client** para conectarse al WebSocket

### 🖥️ Backend (NestJS + DrizzleORM)
- **NestJS** con Clean Architecture
- **WebSockets** con socket.io
- **DrizzleORM + PostgreSQL** para la persistencia de datos
- **Autenticación con JWT**
- **CORS** configurado para permitir conexiones seguras

