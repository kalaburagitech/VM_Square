# VM_Square

A premium full-stack website and admin management system built for **VM SQUARE SECURITY & MANPOWER SERVICES PRIVATE LIMITED**.

## Tech Stack

*   **Frontend:** Next.js 16 (App Router with Turbopack), React 19, TypeScript, Tailwind CSS v4, Framer Motion, shadcn/ui, Lucide React icons.
*   **Backend:** Next.js Server Actions & API Routes.
*   **Database:** PostgreSQL with Prisma ORM.
*   **Authentication:** NextAuth.js (Auth.js) Credentials Provider.
*   **Forms:** React Hook Form & Zod for validation.

## Prerequisites

*   Node.js (v20+)
*   PostgreSQL database

## Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone <repo-url>
    cd vmsquare
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Variables:**
    Copy the sample environment file and update it with your actual database connection string and Auth.js secret.
    ```bash
    cp .env.example .env
    ```
    Generate a secret for NextAuth and add it to `.env`:
    ```bash
    npx auth secret
    ```
    Your `.env` should look something like:
    ```env
    DATABASE_URL="postgresql://user:password@localhost:5432/vmsquare?schema=public"
    AUTH_SECRET="your-generated-secret"
    ```

4.  **Database Migration:**
    Push the Prisma schema to your PostgreSQL database.
    ```bash
    npx prisma db push
    ```

5.  **Seed the Database:**
    Seed the database to create the default admin user.
    ```bash
    npx prisma db seed
    ```
    *Default Admin Credentials:*
    *   **Email:** admin@vmsquare.com
    *   **Password:** admin123

## Development Server

Start the Next.js development server:

```bash
npm run dev
```
Access the public site at `http://localhost:3000` and the admin dashboard at `http://localhost:3000/admin`.

## Building for Production

```bash
npm run build
npm run start
```

## Features Implemented

*   **Public Site:** Homepage, About Us, Services, Industries, Careers, Contact, Quote Requests.
*   **Dynamic Data Sources:** Content mapped to backend database tables (Services, Industries, Clients, Testimonials, FAQ).
*   **Admin Dashboard:** Comprehensive dashboard to view form submissions, lead generation data (Quotes & Enquiries), and career applications.
*   **Security:** Hashed passwords with bcrypt, robust API security with Zod, and middleware-protected admin routes.
