# Bridge of Sinners Website

This is the official website for Bridge of Sinners, built with Next.js, React, and Tailwind CSS. The site includes a public-facing website with Home, Music, About, Services, and Contact sections, as well as an admin panel for managing contact messages.

This project is built with [Next.js](https://nextjs.org) and bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Features

- **Public Website**: Home, Music, About, Services, and Contact sections
- **Admin Panel**: Secure admin panel for managing contact messages
- **PostgreSQL Database**: Stores contact messages and admin users
- **JWT Authentication**: Secure authentication for admin users
- **Responsive Design**: Built with Tailwind CSS for a responsive experience

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database

### Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
DATABASE_URL="postgresql://username@localhost:5432/bridgeofsinners?schema=public"
JWT_SECRET="your-secret-key"
```

### Database Setup

```bash
npx prisma migrate dev
npx prisma db seed
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Admin Access

Access the admin panel at [http://localhost:3000/admin](http://localhost:3000/admin)

- Username: admin
- Password: admin

## Project Structure

- `/src/app`: Main application code
  - `/admin`: Admin panel
  - `/api`: API routes for authentication and contact messages
  - `/components`: Reusable UI components
  - `/about`, `/music`, `/services`, `/contact`: Page components
- `/prisma`: Database schema and migrations
- `/public`: Static assets

## Technologies Used

- **Frontend**: React, Next.js, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT (JSON Web Tokens)

## Deployment

This application can be deployed on Vercel or any other platform that supports Next.js applications. Make sure to set up the required environment variables and PostgreSQL database connection.
