# Picture-Ink Frontend

This project is the user interface for Picture-Ink, an AI-powered platform that transforms text into visually stunning illustrations. Built with React and styled using Tailwind CSS, this application provides a seamless and intuitive storytelling experience.

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Setup and Installation](#setup-and-installation)
3. [Folder Structure](#folder-structure)

## Tech Stack

- **Frontend Framework**: [React](https://reactjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **API Communication**: GraphQL

## Setup and Installation

Follow these steps to get started:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/kuhuisien/picture-ink-frontend.git
   cd picture-ink-frontend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

4. **Open the application**:
   Navigate to `http://localhost:5173` in your browser.

## Folder Structure

```
.
├── public             # Public assets
├── src
│   ├── pages          # Application pages
│   ├── common
│   │   ├── components # Reusable UI components
│   │   ├── utils      # Utility functions
│   │   └── hooks      # Custom React hooks
│   └── App.tsx        # Main React component
├── package.json       # Project metadata and dependencies
└── tailwind.config.js # Tailwind CSS configuration
```
