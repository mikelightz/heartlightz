# HeArt Lightz - Media Production Brand Website

## Overview
This is a modern, responsive single-page website for HeArt Lightz, a bold and heart-centered media production brand. The application is built as a full-stack web application with a React frontend and Express.js backend, featuring a clean architecture that separates client, server, and shared components.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Tailwind CSS with shadcn/ui components for consistent design
- **State Management**: TanStack React Query for server state management
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Custom CSS variables for brand theming (cream, red, grey color palette)

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Validation**: Zod schemas for runtime type validation
- **Session Management**: PostgreSQL-based session storage

### Database Design
The application uses three main tables:
- **users**: Basic user authentication (id, username, password)
- **contacts**: Contact form submissions (id, name, email, message, timestamp)
- **newsletter_subscribers**: Email newsletter signups (id, email, timestamp)

## Key Components

### Data Storage Layer
- **Primary Storage**: PostgreSQL via Neon Database connection
- **Fallback Storage**: In-memory storage class for development/testing
- **Schema Management**: Drizzle Kit for migrations and schema updates
- **Type Safety**: Drizzle-Zod integration for runtime validation

### API Endpoints
- `POST /api/contact` - Handle contact form submissions with validation
- `POST /api/newsletter` - Manage newsletter subscriptions with duplicate handling

### UI Components
- **Form Handling**: React Hook Form with Zod resolvers
- **Animations**: Framer Motion for smooth scroll animations and transitions
- **Icons**: Lucide React icons with React Icons for social media
- **Toast Notifications**: Custom toast system for user feedback

## Data Flow

1. **User Interaction**: Users interact with forms (contact, newsletter) on the frontend
2. **Form Validation**: Client-side validation using Zod schemas
3. **API Request**: Validated data sent to Express.js API endpoints
4. **Database Operations**: Drizzle ORM handles database insertions with error handling
5. **Response Handling**: Success/error responses with appropriate user feedback
6. **UI Updates**: Toast notifications and form reset on successful submissions

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm**: Type-safe ORM with PostgreSQL dialect
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library for enhanced UX
- **@radix-ui/***: Headless UI components for accessibility

### Development Tools
- **TypeScript**: Static type checking across the entire stack
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Modern build tool with hot module replacement
- **ESBuild**: Fast JavaScript bundler for production builds

## Deployment Strategy

### Production Build
- **Frontend**: Vite builds optimized React application to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Asset Serving**: Express serves static files in production mode

### Environment Configuration
- **Database URL**: Required environment variable for PostgreSQL connection
- **Development**: Hot reloading with Vite middleware integration
- **Production**: Optimized bundle serving with Express static middleware

### Replit Configuration
- **Autoscale Deployment**: Configured for automatic scaling
- **Port Configuration**: Server runs on port 5000, exposed on port 80
- **Module Support**: Node.js 20, web, and PostgreSQL 16 modules enabled

## Changelog
- June 17, 2025. Initial setup

## User Preferences
Preferred communication style: Simple, everyday language.