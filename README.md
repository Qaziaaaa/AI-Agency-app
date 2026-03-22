# xTRAI - AI Automation & Optimization Platform

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.19-yellow.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC.svg)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.35.1-purple.svg)](https://www.framer.com/motion/)

Welcome to **xTRAI**, a cutting-edge web application designed to empower businesses with intelligent AI automation, helping them scale faster, reduce operational costs, and streamline workflows. Built with modern web technologies, xTRAI offers a sleek, responsive interface with advanced animations and a unified metallic purple aesthetic.

![xTRAI Preview](https://via.placeholder.com/800x400/8B5CF6/FFFFFF?text=xTRAI+AI+Automation+Platform)

## 🌟 Features

### Core Functionality
- **Intelligent Automation**: Automate repetitive tasks with AI-powered workflows that save time and reduce errors
- **AI-Powered Insights**: Leverage machine learning to gain actionable real-time data insights
- **Predictive Analytics**: Make data-driven decisions with advanced predictive models and forecasting tools
- **Data Integration**: Seamlessly connect all your data sources for unified analytics and reporting
- **Scalable AI Solutions**: Built around 150+ businesses globally, delivering scalable AI solutions

### User Experience
- **Modern & Responsive UI**: Built with Tailwind CSS, Radix UI, and Framer Motion for a stunning, accessible user experience
- **Sleek Metallic Theme**: A unified and professional "metallic purple" aesthetic across all pages and interactions
- **Advanced Animations**: Smooth scroll-triggered animations, hover effects, and micro-interactions
- **Glass Morphism Design**: Modern glass-card components with backdrop blur effects
- **Mobile-First Design**: Fully responsive design that works perfectly on all devices

### Technical Features
- **Type-Safe Development**: Full TypeScript support for robust, maintainable code
- **Component Library**: Extensive use of shadcn/ui components for consistent design
- **Form Management**: React Hook Form with Zod validation for reliable form handling
- **State Management**: TanStack Query for efficient server state management
- **Routing**: React Router DOM for client-side navigation
- **Testing**: Vitest and Testing Library for comprehensive test coverage

## 🛠️ Tech Stack

### Frontend Framework
- **React 18.3.1** - Modern React with concurrent features
- **TypeScript 5.8.3** - Type-safe JavaScript for better developer experience
- **Vite 5.4.19** - Fast build tool and development server

### UI & Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **shadcn/ui** - Beautifully designed components built on Radix UI
- **Framer Motion 12.35.1** - Production-ready motion library for React
- **Lucide React** - Beautiful & consistent icon toolkit
- **Radix UI** - Unstyled, accessible UI primitives

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing
- **Vitest** - Fast unit testing framework
- **Testing Library** - Simple and complete testing utilities

### Package Management
- **npm** - Node package manager
- **Bun** - Fast JavaScript runtime and package manager (alternative)

## 📁 Project Structure

```
AI-Agency-app/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── layout/         # Layout components (Navbar, Footer)
│   │   └── ui/            # shadcn/ui components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions and configurations
│   ├── pages/             # Page components
│   │   ├── Index.tsx      # Homepage
│   │   ├── About.tsx      # About page
│   │   ├── Blog.tsx       # Blog page
│   │   ├── Contact.tsx    # Contact page
│   │   └── NotFound.tsx   # 404 page
│   ├── test/              # Test files
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # App entry point
│   └── vite-env.d.ts      # Vite type definitions
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── vite.config.ts         # Vite configuration
├── eslint.config.js       # ESLint configuration
└── README.md             # Project documentation
```

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- **Node.js** (version 18.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **Bun** (optional, faster alternative)

You can check your versions by running:
```bash
node --version
npm --version
```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/xtrai-ai-agency.git
   cd xtrai-ai-agency
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install

   # Or using Bun (faster)
   bun install
   ```

3. **Start the development server**
   ```bash
   # Using npm
   npm run dev

   # Or using Bun
   bun run dev
   ```

4. **Open your browser**

   The application will be running at `http://localhost:5173/` (default Vite port).

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run build:dev` - Build the project in development mode
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code linting
- `npm run test` - Run tests with Vitest
- `npm run test:watch` - Run tests in watch mode

## 🎨 Design System

### Color Palette
- **Primary**: Metallic Purple (`#8B5CF6`)
- **Secondary**: Background variations with opacity
- **Accent**: Violet and Fuchsia gradients
- **Text**: High contrast for accessibility

### Typography
- **Font Family**: System fonts for optimal performance
- **Headings**: Bold, large text for impact
- **Body**: Clean, readable text with proper line heights

### Components
- **Glass Cards**: Backdrop blur with subtle borders
- **Animated Buttons**: Hover effects with scale transforms
- **Scroll Animations**: Framer Motion powered entrance animations

## 🧪 Testing

The project includes comprehensive testing setup:

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:run -- --coverage
```

Tests are located in the `src/test/` directory and use Vitest with React Testing Library.

## 🚢 Deployment

### Build for Production

1. **Create production build**
   ```bash
   npm run build
   ```

2. **Preview production build**
   ```bash
   npm run preview
   ```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service like:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

### Environment Variables

Create a `.env` file in the root directory for environment-specific configurations:

```env
VITE_API_URL=https://api.xtrai.com
VITE_APP_NAME=xTRAI
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Run tests and linting**
   ```bash
   npm run lint
   npm run test
   ```
5. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Code Style
- Follow the existing ESLint configuration
- Use TypeScript for all new code
- Maintain consistent naming conventions
- Add tests for new features

## 📄 Pages Overview

### Homepage (`/`)
- Hero section with animated background
- Company statistics and achievements
- Values and mission statement
- Manual vs AI automation comparison
- Team member profiles
- Frequently asked questions
- Call-to-action section

### About Page (`/about`)
- Company story and mission
- AI solutions offered
- Implementation process
- Benefits and ROI
- Client testimonials

### Blog Page (`/blog`)
- Latest articles and insights
- AI automation trends
- Case studies and success stories

### Contact Page (`/contact`)
- Contact form with validation
- Company information
- Social media links

## 🔒 Security

xTRAI prioritizes security:
- Enterprise-grade encryption for data handling
- Secure API integrations
- Regular security audits
- Compliance with industry standards

## 📈 Performance

Optimized for performance:
- Lazy loading of components
- Image optimization
- Minimal bundle size
- Fast loading times
- SEO optimized

## 📞 Support

For support, email support@xtrai.com or join our Discord community.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the amazing component library
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first approach
- [Radix UI](https://www.radix-ui.com/) for accessible primitives

---

**Built with ❤️ by the xTRAI team**

*Empowering businesses with AI automation since 2024*

This project is licensed under the MIT License.
