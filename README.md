# 🧪 Mini DevOps Lab

Este proyecto es un laboratorio práctico para ejercitar y demostrar habilidades DevOps usando una aplicación real desplegada con Docker, Docker Compose y herramientas de CI/CD.

---

## 🚀 ¿Qué incluye?

- ✅ Aplicación Node.js con Express
- ✅ Conexión a MongoDB usando Mongoose
- ✅ Dockerfile para empaquetar la app
- ✅ `docker-compose` para levantar múltiples servicios
- ✅ API REST con endpoints de prueba
- ✅ Configuración ESLint para calidad de código
- ✅ GitHub Action que bloquea cambios no autorizados en archivos sensibles (`CODEOWNERS`, `.env`, workflows)
- ✅ GitHub Action de CI que corre ESLint automáticamente
- ✅ Protección de la rama `main` con revisión obligatoria por @Nerpi99
- ✅ Ideal como base para futuros ejercicios con Kubernetes, monitoreo y Terraform

---

## 📁 Estructura del proyecto

```
mini-devops-lab/
├── app/                        # Código fuente Node.js
│   ├── index.js
│   ├── Message.js
│   ├── package.json
│   ├── package-lock.json
│   ├── Dockerfile
│   └── eslint.config.mjs
├── docker-compose.yaml         # Orquestación de servicios
├── .github/
│   ├── CODEOWNERS              # Control de revisores
│   └── workflows/
│       ├── protect-sensitive-files.yml  # GitHub Action de protección
│       └── ci-node.yml                   # GitHub Action para CI (ESLint)
└── README.md
```

---

## 📦 Requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org/) (opcional para desarrollo local)
- [GitHub CLI](https://cli.github.com/) (opcional para manejar PRs desde terminal)

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

## 🔒 Seguridad y flujo de trabajo

- Todos los cambios a `main` requieren Pull Request
- Solo @Nerpi99 puede aprobar y mergear
- Cambios sensibles como `.env`, `CODEOWNERS`, y workflows están protegidos por GitHub Actions
- CI corre ESLint automáticamente en cada push o PR

---

## ✍️ Autor

**Bruno Nerpiti**  
💼 DevOps Engineer  
🔗 [linkedin.com/in/bruno-nerpiti](https://www.linkedin.com/in/bruno-nerpiti/)

---

## 📌 Próximos pasos

- Despliegue en Kubernetes con Minikube o Kind
- Monitoreo con Prometheus + Grafana
- Pipeline CI/CD completo con test y deploy automático
- Infraestructura como código con Terraform