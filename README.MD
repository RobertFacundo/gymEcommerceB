===========================
# 🏋️ Gym Ecommerce — Backend

📖 Description
--------------

The Gym Ecommerce backend is a modular and scalable REST API designed to support a full-featured fitness ecommerce platform.

It handles authentication, product and cart management, membership purchases, Stripe checkout integration, and guest vs authenticated user flows. The backend uses TypeScript and modern Node.js practices to ensure maintainable, testable, and secure code.

It follows a feature-based architecture with **controllers**, **services**, **models**, and **middlewares**, providing a clean separation of concerns.

🌐 Live API
-----------

*   👉 [https://gymecommerceb.onrender.com/](https://gymecommerceb.onrender.com/)
    
*   Health Check: GET /health
    

✨ Features
----------

*   🔐 JWT Authentication & protected routes
    
*   🛒 Dual cart system for guest and authenticated users
    
*   💳 Stripe integration for checkout and memberships
    
*   ⚡ Webhooks for payment events (orders & membership)
    
*   📦 Product and category management endpoints
    
*   📄 Persistent MongoDB database with Mongoose models
    
*   🎛 CORS configured for frontend domain
    
*   📁 Static file serving (images)
    
*   🧩 Modular architecture (routes, controllers, services, models, middlewares)
    
*   🧪 Tested with TypeScript for strong typing and maintainability
    

🧰 Tech Stack
-------------

**Core Framework**

*   Node.js
    
*   Express
    
*   TypeScript
    

**Database**

*   MongoDB
    
*   Mongoose ODM
    

**Authentication & Security**

*   JWT (JSON Web Tokens)
    
*   Password hashing with bcryptjs
    

**Payments**

*   Stripe SDK
    
*   Webhook handling
    

**Dev & Tooling**

*   ts-node-dev (hot reload for development)
    
*   TypeScript compiler (tsc)
    
*   ESLint (recommended)
    
*   Data seeding scripts (seed.ts)
    

🏗 Architecture & Folder Structure
----------------------------------

The backend follows a **feature-based and modular architecture**, promoting maintainability and scalability.

`   src/│├── modules/│   ├── auth/│   │   ├── controller/│   │   ├── model/│   │   └── routes/│   ├── products/│   │   ├── controller/│   │   ├── model/│   │   └── routes/│   ├── cart/│   │   ├── controller/│   │   └── routes/│   ├── orders/│   │   ├── controller/│   │   └── routes/│   └── membership/│       ├── controller/│       └── routes/│├── shared/│   └── middlewares/├── services/         # Business logic layer / service classes├── utils/            # Helper functions└── index.ts          # Entry point / express app   `

**Architecture goals:**

*   Separation of concerns
    
*   Reusable service layers
    
*   Feature isolation
    
*   Scalable growth for full-stack expansion
    

🚀 Implementation Highlights
----------------------------

*   **Modular feature-based architecture** with routes, controllers, services, and models
    
*   **JWT authentication** with protected and optional routes
    
*   **Dual cart system** for guest and authenticated users, including merge functionality
    
*   **Stripe integration**:
    
    *   Checkout sessions
        
    *   Membership payments
        
    *   Webhook handling for secure payment events
        
*   **REST endpoints** for products, categories, carts, memberships, and orders
    
*   **MongoDB database** integration with Mongoose models and data seeding
    
*   **TypeScript throughout** for strong typing and maintainable code
    
*   **CORS configured** for frontend domain
    
*   **Static file serving** for images
    
*   **Health check endpoint** for monitoring API status
    

⚙️ Core Dependencies
--------------------

*   express
    
*   mongoose
    
*   bcryptjs
    
*   jsonwebtoken
    
*   stripe
    
*   cors
    
*   dotenv
    

🧪 Dev & Tooling
----------------

*   TypeScript (strict typing across controllers, services, and models)
    
*   ts-node-dev (development with hot reload)
    
*   Node.js + Express
    
*   MongoDB + Mongoose ODM
    
*   ESLint recommended

👨‍💻 Developer Experience & Best Practices
-------------------------------------------

*   Strong typing across the backend for safer code
    
*   Clear separation between routes, controllers, and services
    
*   Modular and feature-based architecture for maintainability
    
*   Proper error handling and middleware usage
    
*   Webhook verification for secure Stripe events
    
*   Guest and authenticated flows handled cleanly
    
*   Seed scripts for consistent test data
    
*   Health endpoint for monitoring API availability
    

### ⏲️ Time Tracking

- Total tracked development time: **39h 33m**
- Sessions logged individually across architecture, frontend, backend, and integrations


📬 Contact
----------

**Facundo Robert**Full Stack Developer

*   💼 LinkedIn: [Facundo Robert](https://www.linkedin.com/in/robertfacundodev/)
    
*   💻 Portfolio: [My Portfolio](https://facundorobert.vercel.app/)
    
*   📧 Email: robertf.coder@gmail.com
    

⭐ If you find this backend useful or interesting, feel free to star the repo!