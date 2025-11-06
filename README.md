# 🧪 Mini DevOps Lab

Este proyecto es un laboratorio práctico para ejercitar y demostrar habilidades DevOps usando una aplicación real desplegada con Docker, Kubernetes y herramientas de CI/CD.

---

## 🚀 ¿Qué incluye?

- ✅ Aplicación Node.js con Express
- ✅ Conexión a MongoDB usando Mongoose
- ✅ Dockerfile para empaquetar la app
- ✅ `docker-compose` para levantar múltiples servicios
- ✅ Archivos YAML para desplegar en Kubernetes (Minikube)
- ✅ API REST con endpoints de prueba
- ✅ Configuración ESLint para calidad de código
- ✅ GitHub Action que bloquea cambios no autorizados en archivos sensibles (`CODEOWNERS`, `.env`, workflows)
- ✅ GitHub Action de CI que corre ESLint automáticamente
- ✅ Protección de la rama `main` con revisión obligatoria por @Nerpi99
- ✅ Ideal como base para ejercicios con CI/CD, monitoreo, seguridad y Terraform

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
├── k8s/                        # Manifiestos de Kubernetes
│   ├── mongo-deployment.yaml
│   ├── mongo-service.yaml
│   ├── api-deployment.yaml
│   └── api-service.yaml
├── docker-compose.yaml         # Orquestación de servicios
├── .github/
│   ├── CODEOWNERS              # Control de revisores
│   └── workflows/
│       ├── protect-sensitive-files.yml
│       └── ci-node.yml
└── README.md
```

---

## 📦 Requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Minikube](https://minikube.sigs.k8s.io/) o [Kind](https://kind.sigs.k8s.io/)
- [Kubectl](https://kubernetes.io/docs/tasks/tools/)
- [Node.js](https://nodejs.org/) (opcional para desarrollo local)
- [GitHub CLI](https://cli.github.com/) (opcional para manejar PRs desde terminal)

---

## ⚙️ Cómo levantar el proyecto

### 🐳 Con Docker Compose

```bash
docker-compose up --build
```

### ☸️ Con Kubernetes + Minikube

1. Iniciá Minikube:
```bash
minikube start
```

2. Configurá tu terminal para usar Docker dentro de Minikube:
```powershell
& minikube -p minikube docker-env | Invoke-Expression
```

3. Construí la imagen local:
```bash
docker build -t mini-api:v1 .
```

4. Aplicá los manifiestos:
```bash
kubectl apply -f k8s/
```

5. Accedé a la API desde tu navegador:
```bash
minikube service mini-api
```

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

## 📌 Próximos pasos

- 🔧 Variables de entorno con ConfigMaps y Secrets en Kubernetes
- 📈 Monitoreo con Prometheus y Grafana
- 🚀 Pipeline CI/CD completo con test y deploy a K8s
- ☁️ Despliegue en un clúster remoto (GKE, AKS, EKS)
- 🧱 Infraestructura como código con Terraform
- 🔐 Integración de escaneo de seguridad en CI (Trivy, Snyk)

---

## ✍️ Autor

**Bruno Nerpiti**  
💼 DevOps Engineer  
🔗 [linkedin.com/in/bruno-nerpiti](https://www.linkedin.com/in/bruno-nerpiti/)
