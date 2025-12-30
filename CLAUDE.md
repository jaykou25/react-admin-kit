# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a monorepo containing:
- `packages/react-admin-kit` - Main React component library for admin systems
- `packages/docusaurus-lib-dev` - Custom Docusaurus library components
- `website` - Docusaurus documentation site

## Commands

### Root Level
- `pnpm dev:website` - Start website development server
- `pnpm dev:website:en` - Start website in English locale

### React Admin Kit (`packages/react-admin-kit`)
- `npm run build` - Build library with father
- `npm run test` - Run tests without coverage
- `npm run test:coverage` - Run tests with coverage
- `npm run coverage:open` - Open coverage report

### Website (`website`)
- `npm run start` - Start development server on port 3600
- `npm run start:en` - Start in English locale
- `npm run build` - Build production site
- `npm run typecheck` - TypeScript type checking
- `npm run serve` - Serve built site

## Development Workflow

1. **Component Development**: Work in `packages/react-admin-kit/src`
2. **Testing**: Use Jest with React Testing Library, tests are in `cases/` directories
3. **Documentation**: Update MDX files in `website/blog/` and `website/docs/`
4. **Build**: Run `npm run build` in react-admin-kit before testing website

## Key Technologies
- React 18 + TypeScript
- Ant Design v5
- Docusaurus v3 for documentation
- Jest + React Testing Library for testing
- Father for library bundling
- pnpm workspaces for monorepo management

## Testing
- Tests use Jest with jsdom environment
- Test files are located in `cases/` directories alongside components
- Coverage thresholds: branches 80%, functions 85%, lines 90%, statements 90%
- Run `npm run test:coverage` to generate coverage reports

## Code Quality
- ESLint configured for TypeScript
- Prettier for code formatting
- Pre-commit hooks likely configured (check .git/hooks/)

## Documentation
- Documentation uses Docusaurus with MDX
- Components have demo files in `demos/` directories
- Internationalization support with English and Chinese locales

## Build Outputs
- `packages/react-admin-kit/es/` - ES modules
- `packages/react-admin-kit/lib/` - CommonJS modules
- `website/build/` - Static site output