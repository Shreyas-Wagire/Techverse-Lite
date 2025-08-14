# TechVerse Club

A modern React-based website for TechVerse Club, featuring a beautiful UI with dark/light theme support, responsive design, and smooth animations.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 🌓 Dark/Light theme toggle
- ✨ Smooth animations with Framer Motion
- 📱 Mobile-first responsive design
- 🚀 Built with React 19, TypeScript, and Vite
- 🎯 Multiple pages: Home, Groups, Events, Gallery

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons
- **Routing**: React Router DOM

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd techverse-club
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the Vite configuration
4. Deploy with zero configuration

The project includes a `vercel.json` file for optimal deployment settings.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The `dist` folder contains your production-ready files
3. Upload the contents to your hosting provider

## Project Structure

```
src/
├── components/     # Reusable UI components
├── contexts/       # React contexts (Theme)
├── pages/          # Page components
├── assets/         # Static assets
├── App.tsx         # Main app component
└── main.tsx        # Entry point
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License.
