# Technology Stack (Updated)

This project will use a serverless architecture on Microsoft Azure with a cost-effective stack.

## Frontend
- React.js
- JavaScript (ES6+)
- React Router
- Tailwind CSS
- Axios

## Backend
- Azure Functions (JavaScript)
- HTTP Trigger Functions
- Timer Trigger (future)
- Blob Trigger (future)

## Database
- Azure SQL Database (Free Tier) or Azure Cosmos DB Free Tier
- Store:
  - Doctors
  - Appointments
  - Blogs
  - Services
  - Testimonials
  - FAQs
  - Contact Messages

## Image Storage
- Azure Blob Storage
- Organized containers:
  - doctors/
  - gallery/
  - blogs/
  - services/

## Local Development
- Azurite for Blob Storage emulation
- Azure Functions Core Tools
- Node.js LTS
- Visual Studio Code
- Azure Storage Explorer

## Authentication
- JWT Authentication
- Admin Login
- Role-based Access

## Deployment
- Azure Static Web Apps or Azure App Service (React)
- Azure Functions
- Azure Blob Storage
- GitHub Actions CI/CD

## Recommended Project Structure

```
clinic-website/
│
├── frontend/           # React App
├── api/                # Azure Functions
├── shared/
├── storage/
├── docs/
└── README.md
```

## Environment Variables

```
REACT_APP_API_URL=
AZURE_STORAGE_CONNECTION_STRING=
AZURE_BLOB_CONTAINER=
JWT_SECRET=
DB_CONNECTION_STRING=
```

## Cost Optimization
- Azure Functions Consumption Plan
- Azure SQL/Cosmos Free Tier
- Azure Blob Storage (Pay-as-you-go)
- Azurite for local blob development
- GitHub Actions for free CI/CD

This stack keeps the MVP inexpensive while allowing seamless scaling as patient traffic grows.
