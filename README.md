# Evolution Stables - Digital Horse Racing Syndication Platform

A modern web application enabling digital ownership and syndication of racehorses through blockchain technology.

## Project Overview

Evolution Stables is a digital platform that bridges traditional horse racing with Web3 technology, allowing users to participate in racehorse ownership through tokenized syndication. The platform provides seamless onboarding for both Web2 users new to digital assets and existing Web3 participants.

## Key Features

- Digital horse syndication and ownership
- Blockchain-based ownership tracking
- User-friendly onboarding with custodial wallet creation
- Integration with Tokinvest for regulated financial products
- Professional racing stable partnerships

## Development Approach

This project uses a phased development strategy to ensure stability and professional delivery:

### Phase 1: Static Build (Current)

- Complete UI/UX implementation without blockchain complexity
- Static components with placeholder functionality
- Focus on visual design, user flows, and content
- Professional foundation ready for SDK integration
- Authentication infrastructure prepared but dormant

### Phase 2: SDK Integration (Future)

- Activate Futureverse authentication and Web3 features
- Enable wallet connections and blockchain transactions
- Implement digital asset ownership and transfers
- Full syndication functionality

This approach allows for:

- Faster iteration on design and user experience
- Reduced technical complexity during initial development
- Clear separation of concerns between UI and blockchain logic
- Professional handoff capability to development teams

## Technology Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite 7.0+
- **Styling:** Tailwind CSS
- **Package Manager:** pnpm
- **Authentication:** Futureverse Auth (prepared for Phase 2)
- **Web3:** Wagmi + Viem (prepared for Phase 2)
- **State Management:** TanStack React Query
- **Icons:** Lucide React

## Error Handling

This project includes professional-grade error handling utilities for stability:

- **ErrorBoundary**: Wraps components to catch runtime errors and prevent crashes
- **ErrorFallback**: User-friendly error UI with development details and recovery options
- **PageLoader** and **LoadingSpinner**: Consistent loading states during async operations
- **ImageWithFallback**: Prevents broken image display with graceful fallbacks
- **ContentFallback**: Placeholder components for unfinished sections or missing content

## Performance Considerations

- **Image Optimization**: All images use WebP format with fallbacks
- **Code Splitting**: Vite handles automatic code splitting for optimal loading
- **Bundle Analysis**: Use `pnpm build --mode analyze` to inspect bundle sizes
- **Lazy Loading**: Components are loaded on-demand to reduce initial bundle size

## Development Setup

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Badders80/2.0-no-SDKs.git
cd 2.0-no-SDKs

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Environment Configuration

Create a `.env` file in the root directory:

```env
# Futureverse Configuration (Phase 2)
VITE_FUTUREVERSE_CLIENT_ID=your_client_id
VITE_FUTUREVERSE_ENVIRONMENT=staging
VITE_REDIRECT_URI=http://localhost:5173/
VITE_POST_LOGOUT_REDIRECT_URI=http://localhost:5173/

# Phase Control
VITE_USE_AUTH=false  # Set to 'true' to enable Phase 2 features
```

**Environment Variables:**

- `VITE_USE_AUTH`: Controls authentication system activation
- `VITE_FUTUREVERSE_CLIENT_ID`: Futureverse authentication client ID
- `VITE_FUTUREVERSE_ENVIRONMENT`: API environment (staging/production)
- `VITE_REDIRECT_URI`: OAuth redirect URL for development
- `VITE_POST_LOGOUT_REDIRECT_URI`: Post-logout redirect URL

### Available Scripts

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Type checking
pnpm type-check

# Bundle analysis
pnpm build --mode analyze
```

## Quality & Dev Flow

- **Lint:** `pnpm lint` (ESLint v9 flat config)
- **Format:** `pnpm format` / check: `pnpm format:check`
- **Pre-commit:** Husky + lint-staged runs Prettier/ESLint on staged files
- **CI:** GitHub Actions runs install → lint → format check → build on PRs and pushes to `main`

### Setup

```bash
cp .env.example .env.local
pnpm install
pnpm dev
```

## Quick Start for Developers

1. **Clone and Install**

   ```bash
   git clone https://github.com/Badders80/2.0-no-SDKs.git
   cd 2.0-no-SDKs
   pnpm install
   ```

2. **Environment Setup**

   ```bash
   cp .env.example .env  # If example exists
   # Edit .env with your configuration
   ```

3. **Development**

   ```bash
   pnpm dev              # Start dev server
   pnpm type-check       # Check TypeScript
   ```

4. **Testing**
   - Test error boundaries by triggering errors
   - Verify images load with fallbacks
   - Check responsive design on different screen sizes
   - Test loading states and content fallbacks

5. **Build & Deploy**
   ```bash
   pnpm build           # Production build
   pnpm preview         # Test production build
   ```

## Project Structure

```
src/
├── assets/          # Images, logos, and static assets
├── auth/           # Authentication utilities and hooks
├── components/     # Reusable UI components
├── layout/         # Layout components (header, footer, etc.)
├── pages/          # Page components and routing
├── sections/       # Major page sections and content blocks
├── App.tsx         # Main application component
├── main.tsx        # Application entry point
└── polyfills.ts    # Browser compatibility polyfills
```

## Key Components

- **MyStable:** User portfolio and digital asset management
- **DigitalSyndication:** Core syndication functionality
- **OwnershipSection:** Digital ownership features
- **LoginButton:** Authentication interface (placeholder in Phase 1)
- **HorseCard:** Individual horse asset display

## Phase Transition

### Moving from Phase 1 to Phase 2

1. Update environment configuration:
   ```env
   VITE_USE_AUTH=true
   VITE_FUTUREVERSE_ENVIRONMENT=production
   ```
2. Configure production URLs and client credentials
3. Test authentication flows and wallet integrations
4. Deploy with full Web3 functionality

## Business Context

Evolution Stables operates in the regulated space of racehorse ownership syndication:

- **Compliance:** KYC/AML handled by Tokinvest partnership
- **Target Market:** 490,000+ race-goers in New Zealand annually
- **Value Proposition:** Bridge Web2 users to Web3 engagement
- **Partnerships:** Multiple professional racing stables and industry partners

## Development Guidelines

### Code Standards

- TypeScript for all components
- Tailwind CSS for styling
- Component-based architecture
- Environment-driven configuration

### Phase 1 Development

- Focus on static functionality and visual polish
- Use placeholder components for Web3 features
- Maintain clean separation from blockchain logic
- Ensure professional code quality for handoff

### Contributing

- Maintain the phased development approach
- Keep authentication systems dormant in Phase 1
- Follow established component patterns
- Test both development and production builds
- Use error handling components for new features

## Testing Strategy

### Phase 1 Testing Focus

- **Visual Regression**: Component appearance and responsiveness
- **Error Handling**: Verify error boundaries and fallbacks work correctly
- **Loading States**: Test loading spinners and page loaders
- **Image Handling**: Confirm ImageWithFallback works with missing/broken images
- **Content Fallbacks**: Ensure placeholder components display properly

### Phase 2 Testing (Future)

- **Web3 Integration**: Wallet connection and transaction flows
- **Authentication**: OAuth flows and token management
- **Network Handling**: Offline/online state management
- **Security**: XSS protection and data sanitization

### Testing Commands

```bash
# Run type checking
pnpm type-check

# Build and test production bundle
pnpm build && pnpm preview

# Manual testing checklist
- [ ] All images load with fallbacks
- [ ] Error boundaries catch errors gracefully
- [ ] Loading states display correctly
- [ ] Content fallbacks show appropriate messages
- [ ] Responsive design works on mobile/desktop
```

## Deployment

### Phase 1 Deployment

Standard static site deployment to any hosting platform:

- Vercel, Netlify, or similar
- Build artifacts in `dist/` directory
- No blockchain infrastructure required

### Phase 2 Deployment

Additional requirements for Web3 functionality:

- HTTPS required for wallet connections
- Environment-specific configuration
- Blockchain network connectivity

## Security Considerations (Phase 2)

- OAuth token storage and expiration handling
- Secure wallet signature flow (Futureverse Auth)
- HTTPS enforcement for production
- User data sanitization and XSS protection

## Troubleshooting

### Common Issues

**Images not loading?**

- Check that image files exist in `src/assets/`
- Verify import statements use correct relative paths
- Use `ImageWithFallback` component for automatic fallback handling

**Error boundaries not catching errors?**

- Ensure `ErrorBoundary` wraps the component tree
- Check browser console for uncaught errors
- Verify error boundary is imported correctly

**Build failing?**

- Run `pnpm type-check` to identify TypeScript errors
- Clear node_modules: `rm -rf node_modules && pnpm install`
- Check Vite configuration for asset handling

**Environment variables not working?**

- Ensure variables start with `VITE_` prefix
- Restart development server after adding new variables
- Check `.env` file is in project root

**Styling issues?**

- Verify Tailwind CSS classes are correct
- Check for CSS conflicts or missing imports
- Use browser dev tools to inspect elements

### Debug Mode

Set `NODE_ENV=development` to see detailed error information and component stack traces.

## Support and Resources

- **Futureverse Documentation:** https://docs.futureverse.com/
- **Tokinvest Integration:** Contact for tokenization requirements
- **Racing Industry Compliance:** Consult legal team for regulatory requirements
- **Vite Documentation:** https://vitejs.dev/
- **React Documentation:** https://react.dev/
- **Tailwind CSS:** https://tailwindcss.com/docs

## Contact & Development

- **Project Lead:** Alex Baddeley
- **Development Team:** Evolution Stables Ltd.
- **Support:** Contact through GitHub issues or team channels
- **Business Inquiries:** info@evolutionstables.com

## Changelog

### Phase 1 - Static Build (Current)

- ✅ Complete UI/UX implementation
- ✅ Professional error handling system
- ✅ Responsive design with Tailwind CSS
- ✅ Component architecture with TypeScript
- ✅ Asset optimization and fallbacks
- ✅ Development environment setup

### Upcoming - Phase 2

- 🔄 Futureverse Auth integration
- 🔄 Web3 wallet connections
- 🔄 Blockchain transaction handling
- 🔄 Digital asset ownership features

## License

**Private Repository**  
© Evolution Stables Ltd. — All rights reserved.

---

**Current Status:** Phase 1 Active Development  
**Next Milestone:** Complete static build and content  
**Future:** SDK integration and Web3 activation

CI smoke: 2025-08-29T15:19:39
