# ArtCulture Hub

**Connecting African Artists with Global Audiences**

ArtCulture Hub is a global digital marketplace dedicated to connecting African artists, designers, and cultural enthusiasts with consumers worldwide. Our platform allows artists to showcase, sell, and promote their culturally inspired interior design pieces, bridging traditional craftsmanship with modern e-commerce.

---

## Table of Contents

- [Mission Statement](#mission-statement)
- [Problem Statement](#problem-statement)
- [Software Development Model](#software-development-model)
- [Hypothesis of the Solution](#hypothesis-of-the-solution)
- [Market Research & Competitor Analysis](#market-research--competitor-analysis)
- [Financial Model & Sustainability](#financial-model--sustainability)
- [Software Requirements Specification](#software-requirements-specification)
- [Risk Management](#risk-management)
- [Impact Metrics](#impact-metrics)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Setup & Installation Guide](#setup--installation-guide)
- [Running the Project](#running-the-project)
- [Running Tests](#running-tests)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Mission Statement

Our mission is to empower African artists by providing a global digital platform that:
- Showcases authentic African art and cultural heritage.
- Bridges traditional craftsmanship with modern e-commerce.
- Creates financial opportunities and sustainable growth for local artists.

---

## Problem Statement

African artists often face challenges in gaining global visibility and accessing markets due to the lack of dedicated digital platforms tailored to their needs. This project aims to address these challenges by offering a streamlined, user-friendly, and secure online marketplace.

---

## Software Development Model

We adopt the Agile approach using the Scrum methodology:
- **Planning & Requirements Gathering:** Understand user needs and define functionalities.
- **Design & Prototyping:** Develop UI/UX wireframes and mockups.
- **Sprint-Based Development:** Iterative cycles focusing on key features like authentication, product management, and payment processing.
- **Testing & Iteration:** Conduct comprehensive tests and refine features based on user feedback.
- **Deployment & Maintenance:** Gradually roll out the platform and ensure continuous monitoring and updates.

---

## Hypothesis of the Solution

ArtCulture Hub will:
- Increase artist visibility and sales.
- Enable secure, direct transactions without intermediaries.
- Foster global appreciation of African cultural heritage.
- Encourage collaboration among artists and designers.
- Support Africa's digital transformation and economic growth.

---

## Market Research & Competitor Analysis

While existing platforms like Etsy and Saatchi Art offer online marketplaces, they do not focus on the unique needs of African artists. ArtCulture Hub offers niche features such as AR customization, community tools, and targeted analytics to better serve this market.

---

## Financial Model & Sustainability

**Revenue Streams:**
- **Commission-Based Fees:** 10-15% on each transaction.
- **Premium Subscriptions:** For enhanced visibility and advanced analytics.
- **Advertising:** Revenue from targeted ads.

**Sustainability Strategy:** Expected to break even within two years with strategic investments and continuous growth in digital commerce.

---

## Software Requirements Specification

The SRS includes:
- User authentication and role management.
- A fully featured marketplace.
- Artist profile management.
- Product customization (including AR visualization).
- A community forum for interaction.
- Admin functionalities for monitoring and reporting.

Refer to the `/docs` folder for complete SRS and detailed design documents.

---

## Risk Management

Risks include:
- Technical challenges and scalability.
- Potential security breaches.
- Competitive market dynamics.

Mitigation strategies involve rigorous testing, regular security audits, and continuous improvement processes.

---

## Impact Metrics

We will track:
- Growth in the number of artists and products.
- Revenue generated for artists.
- Global market reach.
- Platform performance and uptime.
- User satisfaction through ratings and feedback.

---

## Project Structure

ArtCulture-Hub/
├── docs/                # Detailed documentation (SRS, design diagrams, etc.)
├── frontend/            # React.js application for the user interface
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── assets/
├── backend/             # Flask API and backend services
│   ├── app/
│   │   ├── models/
│   │   ├── routes/
│   │   └── controllers/
│   ├── tests/
│   └── config/
├── database/            # Database setup scripts and configurations
├── .gitignore
├── README.md            # This file
└── LICENSE

---

## Technologies Used

- **Frontend:** React.js, HTML5, CSS3, JavaScript
- **Backend:** Python (Flask or Django)
- **Databases:** MySQL, MongoDB, PostgreSQL
- **Cloud Hosting:** AWS or DigitalOcean
- **Payment Integration:** Stripe, PayPal
- **Version Control & CI/CD:** Git, Docker

---

## Setup & Installation Guide

### Prerequisites

Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v14 or higher) and npm
- [Python 3.x](https://www.python.org/downloads/)
- [Git](https://git-scm.com/)
- A relational database such as [MySQL](https://www.mysql.com/), [PostgreSQL](https://www.postgresql.org/), or [MongoDB](https://www.mongodb.com/) (depending on your configuration)
- (Optional) [Docker](https://www.docker.com/) for containerized setup

### Step 1: Clone the Repository

Open your terminal and run:
```bash
git clone https://github.com/carine-ahishakiye/ArtCulture-Hub.git
cd ArtCulture-Hub


