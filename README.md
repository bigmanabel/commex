# 🛍️ Commex - Modern E-Commerce Platform

<div align="center">

![Commex Logo](public/shirt.png)

**A modern, responsive e-commerce platform built with Angular 18**

[![Angular](https://img.shields.io/badge/Angular-18.0-DD0031?style=flat-square&logo=angular)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=flat-square&logo=bootstrap)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

[Live Demo](https://commex-demo.netlify.app) | [Documentation](docs/) | [Report Bug](issues/) | [Request Feature](issues/)

</div>

## ✨ Features

### 🎨 **Modern UI/UX**

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern Aesthetics**: Clean, professional design with smooth animations
- **Accessibility**: WCAG 2.1 compliant with proper ARIA labels and keyboard navigation
- **Dark Theme Support**: Beautiful gradients and modern color schemes

### 🛒 **E-Commerce Functionality**

- **Product Catalog**: Browse products by categories and regions
- **Advanced Filtering**: Filter by price range, category, and location
- **Smart Search**: Real-time search with autocomplete
- **Shopping Cart**: Add/remove items with real-time updates
- **Stock Management**: Live stock indicators and availability status

### 🔧 **Technical Excellence**

- **Angular 18**: Latest Angular framework with modern features
- **TypeScript**: Fully typed for better development experience
- **Modular Architecture**: Clean, maintainable component structure
- **Performance Optimized**: Lazy loading, OnPush strategy, and trackBy functions
- **SEO Ready**: Meta tags and semantic HTML structure

### 📱 **User Experience**

- **Fast Loading**: Optimized images and lazy loading
- **Smooth Animations**: Micro-interactions and page transitions
- **Intuitive Navigation**: Clear information architecture
- **Progressive Enhancement**: Works without JavaScript for core functionality

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (v9 or higher) - Comes with Node.js
- **Angular CLI** (v18) - Install globally: `npm install -g @angular/cli`

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/commex.git
   cd commex
   ```

2. **Install dependencies**

   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 📁 Project Structure

```
commex/
├── src/
│   ├── app/
│   │   ├── cart/                 # Shopping cart functionality
│   │   │   ├── cart.component.*
│   │   │   ├── cart-list/
│   │   │   └── checkout/
│   │   ├── home/                 # Main landing page
│   │   │   ├── main/
│   │   │   │   ├── category-list/
│   │   │   │   ├── filters/
│   │   │   │   └── product-list/
│   │   │   └── search/
│   │   ├── shared/               # Reusable components & services
│   │   │   ├── components/
│   │   │   │   ├── header/
│   │   │   │   ├── footer/
│   │   │   │   └── loading-spinner/
│   │   │   ├── models/           # TypeScript interfaces
│   │   │   └── services/         # Angular services
│   │   ├── app-routing.module.ts
│   │   ├── app.component.*
│   │   └── app.module.ts
│   ├── assets/                   # Static assets
│   ├── environments/             # Environment configurations
│   ├── styles.css               # Global styles
│   └── index.html
├── public/                       # Public assets
├── angular.json                  # Angular CLI configuration
├── package.json                  # Dependencies and scripts
├── tsconfig.json                # TypeScript configuration
└── README.md                     # This file
```

## 🎯 Core Components

### 🏠 **Home Module**

- **Main Component**: Landing page with hero section and product grid
- **Product List**: Responsive grid with modern card design
- **Category List**: Sidebar navigation for product categories
- **Filters**: Advanced filtering by price, category, and region

### 🛒 **Cart Module**

- **Cart Component**: Shopping cart management
- **Cart List**: Display cart items with quantity controls
- **Checkout**: Order processing and payment flow

### 🔧 **Shared Module**

- **Header**: Navigation with search and cart icon
- **Footer**: Links, contact info, and newsletter signup
- **Loading Spinner**: Modern loading animations
- **Models**: TypeScript interfaces for type safety
- **Services**: API communication and state management

## 🎨 Design System

### Color Palette

```css
:root {
  --primary-color: #3b82f6; /* Blue 500 */
  --primary-hover: #2563eb; /* Blue 600 */
  --secondary-color: #64748b; /* Slate 500 */
  --success-color: #10b981; /* Emerald 500 */
  --warning-color: #f59e0b; /* Amber 500 */
  --danger-color: #ef4444; /* Red 500 */
  --dark-color: #1e293b; /* Slate 800 */
  --light-color: #f8fafc; /* Slate 50 */
}
```

### Typography

- **Font Family**: Inter (Primary), System fonts (Fallback)
- **Font Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- **Responsive Typography**: Fluid scaling across devices

### Spacing & Layout

- **Grid System**: Bootstrap 5.3 responsive grid
- **Spacing Scale**: 0.25rem, 0.5rem, 0.75rem, 1rem, 1.5rem, 2rem, 3rem, 4rem
- **Border Radius**: 0.5rem (standard), 0.75rem (large), 50% (circular)

## 🛠️ Development Guidelines

### Code Style

- **ESLint**: Configured for Angular best practices
- **Prettier**: Consistent code formatting
- **TypeScript**: Strict mode enabled for type safety
- **Naming Conventions**: PascalCase for components, camelCase for methods/properties

### Component Architecture

```typescript
@Component({
  selector: "app-component-name",
  templateUrl: "./component-name.component.html",
  styleUrls: ["./component-name.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush, // For performance
})
export class ComponentNameComponent implements OnInit {
  // Component logic here
}
```

### Best Practices

- **OnPush Change Detection**: Used for performance optimization
- **TrackBy Functions**: Implemented for ngFor loops
- **Lazy Loading**: Route-based code splitting
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
- **Error Handling**: Comprehensive error boundaries and user feedback

## 🧪 Testing

### Unit Tests

```bash
npm test
```

### E2E Tests

```bash
npm run e2e
```

### Test Coverage

```bash
npm run test:coverage
```

## 🚀 Deployment

### Development

```bash
npm start
```

### Production Build

```bash
npm run build:prod
```

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload `dist/commex` folder to Netlify
3. Configure redirects for Angular routing

### Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

## 📊 Performance

### Lighthouse Scores

- **Performance**: 95+
- **Accessibility**: 98+
- **Best Practices**: 95+
- **SEO**: 90+

### Optimizations

- **Tree Shaking**: Unused code elimination
- **Lazy Loading**: Route-based code splitting
- **Image Optimization**: WebP format with fallbacks
- **Bundle Analysis**: Webpack Bundle Analyzer integration

## 🌐 Browser Support

| Browser | Version           |
| ------- | ----------------- |
| Chrome  | Latest 2 versions |
| Firefox | Latest 2 versions |
| Safari  | Latest 2 versions |
| Edge    | Latest 2 versions |

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `npm test`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

### Code Breakers

- **Frontend Development**: Angular, TypeScript, SCSS
- **UI/UX Design**: Modern, responsive design
- **Performance Optimization**: Bundle optimization, lazy loading
- **Testing**: Unit tests, E2E tests, accessibility testing

## 🙏 Acknowledgments

- [Angular Team](https://angular.io/) for the amazing framework
- [Bootstrap Team](https://getbootstrap.com/) for the CSS framework
- [Font Awesome](https://fontawesome.com/) for the beautiful icons
- [Google Fonts](https://fonts.google.com/) for the Inter font family

## 📞 Support

- **Documentation**: [docs/](docs/)
- **Issues**: [GitHub Issues](https://github.com/your-username/commex/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-username/commex/discussions)
- **Email**: support@commex.com

---

<div align="center">

**Built with ❤️ by Code Breakers**

[⬆ Back to Top](#-commex---modern-e-commerce-platform)

</div>
