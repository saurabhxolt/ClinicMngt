# Admin User Guide - Skin & Imaging Clinic

Welcome to the **Admin User Manual** for the Skin & Imaging Clinic Management System. This guide provides step-by-step instructions for managing patient appointments, doctor schedules, services, and educational medical articles.

---

## 1. Accessing the Admin Dashboard

### How to Log In
1. Navigate to the website in your web browser (e.g. `http://localhost:5174/admin` or click **Admin Login** in the top navigation bar or footer).
2. The **Admin Login** panel will appear.
3. Enter your administrator credentials:
   - **Username**: `admin`
   - **Password**: `admin123`
4. Click **Login to Dashboard**.

> [!NOTE]
> For security in production, default credentials should be updated in the system configuration file or Azure Key Vault.

---

## 2. Dashboard Metrics Overview

Once logged in, the top section of the Admin Dashboard displays live metrics:
- **Total Bookings**: Total number of appointment requests across all departments.
- **Active Doctors**: Total number of registered dermatologists and radiologists.
- **Clinic Services**: Total active treatments and radiology scan offerings.
- **Total Articles**: Published health and medical blog articles.

---

## 3. Managing Patient Appointments

Under the **Appointments Management** tab, you can view and control all patient bookings:

### Appointment Table Fields
- **Ref ID**: Unique booking reference code (e.g. `APT-8821`).
- **Patient Name & Phone**: Contact information for appointment reminders.
- **Department / Doctor**: Assigned specialist and specific treatment or scan.
- **Date & Slot**: Scheduled consultation date and time slot.
- **Status Badge**: Current appointment state (`Pending`, `Confirmed`, `Completed`, or `Cancelled`).

### Status Actions
- **Confirm**: Click to mark a `Pending` request as `Confirmed`.
- **Complete**: Click when the patient has attended OPD or completed their scan. (This enables PDF report download in the Patient Portal).
- **Cancel**: Click to cancel an appointment if requested by the patient.

### Status Filter Bar
Use the quick filter buttons (**All**, **Pending**, **Confirmed**, **Completed**, **Cancelled**) at the top right of the table to quickly locate specific appointment lists.

---

## 4. Managing Doctors Directory

Under the **Doctors Directory** tab, admins can view and verify specialist details:
- **Dr. Richa Rokade**: Senior Consultant Dermatologist (MD Dermatology).
- **Dr. Sagar Bijwe**: Chief Radiologist & Diagnostic Specialist (MD Radiodiagnosis).
- **Dr. Ananya Deshmukh**: Consultant Cosmetic Dermatologist & Trichologist (DDVL).

---

## 5. Managing Services & Diagnostic Scans

Under the **Services & Scans** tab:
- Review Dermatology treatments (Acne Scar Revision, Eczema, Psoriasis, Vitiligo, PRP Hair Therapy, Chemical Peels, Laser).
- Review Radiology scan modalities (Digital X-Ray, High-Resolution Ultrasound, Color Doppler).

---

## 6. Managing Medical Blogs

Under the **Health Blogs** tab:
- View published patient education articles.
- Click **Edit Post** to modify article titles, author tags, or content summaries.

---

## 7. Logging Out

When finished, click the red **Admin Logout** button in the top right corner of the dashboard banner to end your session safely.
