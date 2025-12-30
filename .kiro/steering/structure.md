# Project Structure

## Monorepo Organization
This is a pnpm workspace monorepo with the following structure:

```
├── packages/
│   ├── react-admin-kit/          # Main component library
│   └── docusaurus-lib-dev/       # Custom Docusaurus plugin
├── website/                      # Documentation site (Docusaurus)
└── [root configuration files]
```

## Main Library (`packages/react-admin-kit/`)
- **Source**: `src/` - TypeScript source code
- **Build outputs**: 
  - `es/` - ESM modules for modern bundlers
  - `lib/` - CommonJS modules for Node.js compatibility
  - `dist/` - UMD bundles (if needed)
- **Configuration**: `.fatherrc.ts` for build settings
- **Tests**: Jest configuration with Testing Library

## Documentation (`website/`)
- **Docusaurus v3** with custom configuration
- **Content structure**:
  - `docs/` - Main documentation pages
  - `blog/` - Component documentation (routed to `/components`)
  - `case/` - Usage examples and case studies
  - `i18n/` - Internationalization files
- **Custom plugins**: 
  - `plugins/alias.ts` - Path aliasing
  - `docusaurus-lib-dev` - Live component demos
- **Static assets**: `static/` folder

## Configuration Files (Root)
- **Package management**: `package.json`, `pnpm-workspace.yaml`, `pnpm-lock.yaml`
- **TypeScript**: `tsconfig.json` with path mapping for local development
- **Code quality**: `.eslintrc.js`, `.prettierrc.js`, `.editorconfig`
- **Git**: `.gitignore`, `.git/`
- **Environment**: `.env` for local development variables

## Key Conventions
- **Workspace references**: Use `workspace:*` for internal package dependencies
- **Path aliases**: `@@/*` maps to build temp files, `react-admin-kit` maps to src
- **Build artifacts**: All build outputs are gitignored
- **Documentation**: Component docs live in website/blog/ and route to /components
- **Internationalization**: Chinese (zh-Hans) is default, English (en) available

## Development Workflow
1. **Library development**: Work in `packages/react-admin-kit/src/`
2. **Documentation**: Add/edit files in `website/docs/` or `website/blog/`
3. **Testing**: Run tests from library package directory
4. **Building**: Use Father to build library, Docusaurus to build docs
5. **Local development**: Use `pnpm dev:website` to run docs with live library linking

## File Naming
- **Components**: PascalCase for component files
- **Utilities**: camelCase for utility functions
- **Documentation**: kebab-case for doc file names
- **Configuration**: Standard names (`.eslintrc.js`, `tsconfig.json`, etc.)