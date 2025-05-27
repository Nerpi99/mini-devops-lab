# 🧪 Mini DevOps Lab

Este proyecto es un laboratorio práctico para ejercitar y demostrar habilidades DevOps usando una aplicación real desplegada con Docker y Docker Compose.

---

## 🚀 ¿Qué incluye?

- ✅ Aplicación Node.js con Express
- ✅ Conexión a MongoDB usando Mongoose
- ✅ Dockerfile para empaquetar la app
- ✅ `docker-compose` para levantar múltiples servicios
- ✅ API REST con endpoints de prueba
- ✅ Ideal como base para futuros ejercicios con Kubernetes, CI/CD, Terraform, etc.

---

## 📁 Estructura del proyecto

```
mini-devops-lab/
├── app/                  # Código fuente Node.js
│   ├── index.js
│   ├── Message.js
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yaml   # Orquestación de servicios
└── README.md             # Este archivo
```

---

## 📦 Requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## ⚙️ Cómo levantar el proyecto

1. Cloná el repositorio:

```bash
git clone https://github.com/Nerpi99/mini-devops-lab.git
cd mini-devops-lab
```

2. Levantá los servicios:

```bash
docker-compose up --build
```

3. Verificá que esté funcionando:

- `http://localhost:3000/hello` → "Hello from DevOps Lab with Mongo!"
- `http://localhost:3000/health` → `{ "status": "ok" }`
- `http://localhost:3000/messages` → lista los mensajes
- `POST http://localhost:3000/messages` → crea nuevos mensajes

---

## 🧪 Endpoints disponibles

| Método | Endpoint          | Descripción                   |
|--------|-------------------|-------------------------------|
| GET    | `/hello`          | Respuesta simple              |
| GET    | `/health`         | Health check JSON             |
| GET    | `/messages`       | Lista todos los mensajes      |
| POST   | `/messages`       | Crea un mensaje `{ text }`    |

---

## ✍️ Autor

**Bruno Nerpiti**  
💼 DevOps Engineer  
🔗 [linkedin.com/in/bruno-nerpiti](https://www.linkedin.com/in/bruno-nerpiti/)

---

## 📌 Próximos pasos

- CI/CD con GitHub Actions
- Despliegue en Kubernetes con Minikube o Kind
- Infraestructura como código con Terraform