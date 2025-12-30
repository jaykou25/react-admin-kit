# Technology Stack

## Package Manager
- **pnpm** (v10.11.1) - Used for monorepo workspace management
- Workspaces defined in `pnpm-workspace.yaml`

## Build System
- **Father** - Modern React library build tool
- Outputs both ESM (`es/`) and CommonJS (`lib/`) formats
- Uses Babel transformer for better browser compatibility
- Custom Babel plugins for styled-components and import path replacement

## Core Dependencies
- **React** 18+ (peer dependency)
- **Ant Design** v5+ (peer dependency) 
- **ProComponents**: ProForm (~2.31.9), ProTable (~3.20.1), ProUtils (~2.17.2)
- **TypeScript** for type safety
- **Styled Components** v6 for styling
- **Day.js** and **Moment.js** for date handling
- **Lodash**, **Immer**, **ClassNames** for utilities

## Development Tools
- **ESLint** for code linting
- **Prettier** for code formatting (single quotes, trailing commas, 80 char width)
- **Jest** with Testing Library for unit tests
- **Father** for library building and bundling

## Documentation
- **Docusaurus** v3 for documentation website
- Supports internationalization (Chinese default, English available)
- Custom plugins for component demos and live code examples
- Rehype plugins for enhanced MDX processing

## Common Commands

### Development
```bash
# Start documentation website
pnpm dev:website

# Start English documentation
pnpm dev:website:en
```

### Library Development (in packages/react-admin-kit/)
```bash
# Build library
pnpm build

# Run tests
pnpm test

# Run tests with coverage
pnpm test:coverage

# Check build health
pnpm doctor
```

### Documentation (in website/)
```bash
# Start local development
pnpm start

# Build for production
pnpm build

# Serve built site
pnpm serve

# Type checking
pnpm typecheck
```

## Code Style
- 2-space indentation
- Single quotes for strings
- Trailing commas required
- 80 character line width
- LF line endings
- Unused TypeScript variables trigger errors
- Prettier plugin for package.json formatting