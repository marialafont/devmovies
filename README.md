# DevMovies

A modern web application for movie search and exploration, built with React, Vite, and the OMDb API.

## 📋 Project Description

DevMovies is a Single Page Application (SPA) that allows users to search and explore detailed information about movies. The application offers a smooth experience with real-time search, infinite pagination, interactive modals, and a fully responsive design.

### Key Features

- 🔍 Real-time movie search
- 📱 Responsive and mobile-first design
- ♾️ Infinite pagination with lazy scroll loading
- 🎬 Detailed modal with complete movie information
- ⚡ Optimized loading with component lazy loading
- 🎨 Modern UI with Tailwind CSS, Shadcn UI, and Framer Motion
- 🔄 State management with React Query
- 🎯 Global state management with Context API


## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- pnpm (recommended) or npm/yarn
- OMDb API Key (free)

### Installation

1. **Clone the repository:**
   ```bash
   git clone [repository-url]
   cd devmovies
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   
   Edit the `.env` file and add your OMDb API key:
   ```env
   VITE_OMDB_API_KEY=your_api_key_here
   VITE_OMDB_BASE_URL=https://www.omdbapi.com
   ```
   
   Get your free API key at: http://www.omdbapi.com/apikey.aspx

4. **Start the development server:**
   ```bash
   pnpm dev
   ```

5. **Open your browser at:** http://localhost:5173

### Shadcn UI Components

This project uses Shadcn UI components for a consistent design system. The components are located in `src/components/ui/` and are built on top of Radix UI primitives with Tailwind CSS styling.

**Components included:**
- Button - Interactive buttons with multiple variants
- Dialog - Accessible modal dialogs
- Input - Styled form inputs
- And more as needed...

**Adding new Shadcn UI components:**
```bash
npx shadcn-ui@latest add [component-name]
```

### Available Scripts

- `pnpm dev` - Starts the development server
- `pnpm build` - Builds the app for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint to find issues
- `pnpm lint:fix` - Automatically fix ESLint issues
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting

## 🏗️ Architecture Considerations

### Project Structure

```
src/
├── components/          # Reusable components
│   ├── ui/             # Shadcn UI components (Button, Dialog, Input, etc.)
│   ├── common/         # Common components (Navbar, Footer, etc.)
│   └── movies/         # Movie-specific components
├── context/            # Context API for global state management
├── hooks/              # Custom hooks for reusable logic
├── services/           # API services and business logic
├── utils/              # Utilities and helpers (including cn utility)
├── lib/                # Library configurations and utilities
└── config/             # Application configuration
```

### Design Patterns Implemented

- **Component Composition**: Use of Compound Components for flexibility
- **Custom Hooks**: Logic separation from components for reusability
- **Provider Pattern**: Context API for global state
- **Render Props**: Flexible rendering patterns
- **Error Boundaries**: Robust error handling
- **Lazy Loading**: Deferred component loading

## 🔧 Technical Decisions

### Technology Stack

- **React 19**: Main framework with latest features
- **Vite**: Modern and fast build tool
- **React Query (TanStack Query)**: Smart caching and server synchronization
- **React Router Dom**: Declarative navigation
- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn UI**: Beautiful component library built on Radix UI
- **Framer Motion**: Smooth animations and transitions
- **Radix UI**: Accessible unstyled components (via Shadcn UI)
- **Lucide React**: Consistent iconography

### Architecture Decisions

1. **React Query for Data Fetching**:
   - Automatic caching and synchronization
   - Built-in infinite pagination
   - Loading and error states handled
   - Automatic refetch on window focus

2. **Context API + Custom Hooks**:
   - Lightweight global state without extra dependencies
   - Clear separation between logic and presentation
   - Facilitates testing and maintenance

3. **Compound Components Pattern**:
   - Flexible and reusable components
   - Declarative and intuitive API
   - Easy customization without prop drilling

4. **Shadcn UI + Tailwind CSS**:
   - Beautiful, accessible components out of the box
   - Consistent design system with customizable variants
   - Built on Radix UI primitives for accessibility
   - Rapid development with pre-built components
   - Full customization control with CSS variables

5. **Error Boundaries Strategy**:
   - Granular error handling
   - User-friendly fallbacks
   - Automatic recovery when possible

## 📊 Performance & Optimizations

- **Code Splitting**: Lazy loading of non-critical components
- **Infinite Queries**: Efficient pagination with React Query
- **Memoization**: Strategic useMemo and useCallback
- **Image Optimization**: Lazy loading and placeholders
- **Bundle Optimization**: Automatic tree shaking with Vite

## 🧪 Testing

```bash
# TODO: Implement testing suite
pnpm test
pnpm test:coverage
```

## 🚀 Deployment

```bash
pnpm build

pnpm preview
```

## 📝 TODOs & Future Improvements

### Pending Features
- [ ] Implement testing suite (Jest + Testing Library)
- [ ] Dark/light theme mode
- [ ] Recommendations engine
- [ ] Internationalization (i18n)

### Technical Improvements
- [ ] Migration to TypeScript
- [ ] Set up CI/CD pipeline
- [ ] Bundle analysis with Bundle Analyzer

### Performance Optimizations
- [ ] Implement virtual scrolling for large lists
- [ ] Service Workers for image caching
- [ ] Critical data preloading
- [ ] Image optimization with WebP

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## 🙏 Acknowledgments

- [OMDb API](http://www.omdbapi.com/) for providing movie data
- [Shadcn UI](https://ui.shadcn.com/) for the component library
- [Tailwind CSS](https://tailwindcss.com/) for the CSS framework
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Framer Motion](https://www.framer.com/motion/) for animations
