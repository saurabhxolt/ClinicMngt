# Skin & Imaging Clinic Management System

An advanced, responsive Dermatology & Radiology Clinic website, patient appointment booking portal, and management system built with React, Vite, Tailwind CSS, and Azure Functions.

---

## 📖 Documentation

- 📄 **[Admin User Guide](docs/ADMIN_USER_GUIDE.md)**: Detailed user manual for clinic administrators to manage patient appointments, doctor schedules, diagnostic services, and medical blogs.
- 💻 **[Developer Guide](docs/DEVELOPER_GUIDE.md)**: Technical architecture manual, repository directory structure, state management patterns, local dev setup, and deployment guides for software engineers.

---

## 🚀 Quick Start (Local Development)

### 1. Frontend (React + Vite App)

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173/` or `http://localhost:5174/` in your browser.

### 2. Code Quality & Build Checks

```bash
# Build production bundle
npm run build

# Run ESLint quality checks
npm run lint
```

### 3. Backend (Azure Functions API)

```bash
cd api
npm install
func start
```

### 4. Azurite (Local Storage Emulator)

```bash
azurite
```

---

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite 8, Tailwind CSS v3.4, Framer Motion, React Icons, React Router v7, Axios
- **Backend**: Azure Functions (Serverless Node.js), HTTP Triggers
- **Database Target**: Azure SQL Database / Azure Cosmos DB
- **Image Storage**: Azure Blob Storage (Azurite for local emulation)
- **Authentication**: Role-based JWT Auth & Local Admin Session Context