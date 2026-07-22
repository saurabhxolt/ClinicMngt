# Developer Guide - Skin & Imaging Clinic Management System

This technical guide provides architecture overviews, local setup steps, state management patterns, and build/deployment procedures for software engineers working on the Clinic Management System.

---

## 1. Technology Stack Overview

### Frontend
- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v3.4 + Vanilla CSS Design Tokens
- **Icons & Animations**: React Icons (`react-icons/fa`, `md`) + Framer Motion (`framer-motion`)
- **HTTP Client**: Axios (`axios`)
- **Routing**: React Router DOM v7 (`react-router-dom`)

### Backend (Azure Serverless Architecture)
- **API Runtime**: Azure Functions (Node.js LTS, JavaScript)
- **Triggers**: HTTP Triggers with CORS configuration
- **Local Storage Emulation**: Azurite (for Azure Blob Storage emulation)
- **Database Target**: Azure SQL Database / Azure Cosmos DB Free Tier
- **Authentication**: JWT-based role authentication

---

## 2. Directory Architecture

```
ClinicMngt/
├── frontend/                   # Vite + React Frontend Application
│   ├── src/
│   │   ├── components/         # Reusable UI, Layout, Home, Doctor & Admin components
│   │   ├── context/            # React Contexts (AppointmentContext, AuthContext)
│   │   ├── data/               # Structured Mock & Master Data (doctors, services, blogs, etc.)
│   │   ├── layouts/            # MainLayout wrapper
│   │   ├── pages/              # Page views (Home, About, Doctors, Dermatology, Radiology, Services, Appointment, Blogs, Gallery, FAQ, Contact, Admin)
│   │   ├── routes/             # Router.jsx configuration
│   │   ├── services/           # API Abstraction Layer (api.js, doctorService.js, appointmentService.js, etc.)
│   │   ├── styles/             # Global CSS and Tailwind definitions
│   │   └── utils/              # Constants, helpers, theme tokens
│   ├── package.json
│   └── vite.config.js
│
├── api/                        # Azure Functions Backend
│   ├── Appointment/            # Appointment HTTP triggers
│   ├── Doctors/                # Doctor listing HTTP triggers
│   ├── Blogs/                  # Blog post HTTP triggers
│   ├── Services/               # Service catalog HTTP triggers
│   ├── Contact/                # Contact inquiry HTTP triggers
│   ├── Login/                  # Admin auth HTTP trigger
│   ├── UploadImage/            # Image upload handler
│   ├── host.json
│   └── local.settings.json
│
├── database/                   # Database SQL Scripts
│   ├── schema.sql
│   ├── seed.sql
│   ├── procedures.sql
│   └── views.sql
│
├── docs/                       # Project Documentation
│   ├── ADMIN_USER_GUIDE.md     # Admin User Manual
│   └── DEVELOPER_GUIDE.md      # Technical Developer Manual
│
├── Dermatology_Radiology_Clinic_Website_MVP_Plan.md
└── Technology_Stack_Azure_MVP (1).md
```

---

## 3. Local Development Setup

### Prerequisites
1. **Node.js**: v18 LTS or later
2. **Package Manager**: `npm`
3. **Azure Functions Core Tools** (Optional for running Azure Functions locally): `npm install -g azure-functions-core-tools@4`
4. **Azurite** (Optional for local blob storage emulation): `npm install -g azurite`

### Step-by-Step Launch

#### 1. Launching the Frontend (React App)
```bash
cd frontend
npm install
npm run dev
```
- App will start at `http://localhost:5173/` or `http://localhost:5174/`.

#### 2. Running Frontend Code Quality Checks
```bash
# Production Bundle Build
npm run build

# ESLint Code Quality Verification
npm run lint
```

#### 3. Running Backend Azure Functions Locally
```bash
cd api
npm install
func start
```

#### 4. Running Azurite Local Storage Emulator
```bash
azurite
```

---

## 4. State Management & API Abstraction Layer

The system features an **API Abstraction Layer** with seamless mock data persistence:

- `frontend/src/context/AppointmentContext.jsx`: Manages patient bookings in React state and `localStorage`. Handles creation, status updates (`Pending` -> `Confirmed` -> `Completed` -> `Cancelled`), and search by phone / appointment ID.
- `frontend/src/context/AuthContext.jsx`: Manages local admin session authentication.
- `frontend/src/services/api.js`: Base Axios client pointing to `import.meta.env.VITE_API_BASE_URL` or `/api`.
- `frontend/src/services/doctorService.js`: Supports a `USE_MOCK_DATA` flag to switch between mock data and real Azure Function endpoints.

---

## 5. Deployment Instructions

### Deploying Frontend to Azure Static Web Apps
1. Connect your GitHub repository to **Azure Static Web Apps**.
2. Set Build Preset: **Vite**.
3. Set App location: `/frontend`.
4. Set Output location: `dist`.

### Environment Variables
Configure the following environment variables in Azure App Settings / `frontend/.env`:

```env
VITE_API_BASE_URL=https://<your-azure-function-app>.azurewebsites.net/api
AZURE_STORAGE_CONNECTION_STRING=<your-connection-string>
JWT_SECRET=<your-jwt-secret>
```

---

## 6. Coding Conventions & Best Practices
- **Components**: Functional components using hooks.
- **Icons**: Standardize on `react-icons/fa` and `react-icons/md`.
- **CSS**: Use Tailwind utility classes; avoid inline styles.
- **Path Aliases**: Use `@/` alias for `frontend/src/`.
