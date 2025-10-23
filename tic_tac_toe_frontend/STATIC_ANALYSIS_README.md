# Tic Tac Toe Frontend - Static Analysis Setup

Current status:
- No React source code is present in this folder yet.
- Static analysis cannot be executed until the project is initialized and source files exist.

Once the React app is added here, follow these steps to enable static analysis:

1) Initialize Node project (if not already present)
   npm init -y

2) Install ESLint + React plugins and Prettier
   npm install -D eslint eslint-config-prettier eslint-plugin-prettier prettier \
      eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y \
      eslint-plugin-import

   Optional TypeScript (if using TS):
   npm install -D typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin

3) Add configuration files (.eslintrc.js, .prettierrc, .eslintignore) like provided in this folder.

4) Add scripts in package.json:
   {
     "scripts": {
       "lint": "eslint \"src/**/*.{js,jsx,ts,tsx}\"",
       "lint:fix": "eslint \"src/**/*.{js,jsx,ts,tsx}\" --fix",
       "format": "prettier --check .",
       "format:fix": "prettier --write .",
       "audit": "npm audit --audit-level=moderate"
     }
   }

5) Run analysis:
   - npm run lint
   - npm run format
   - npm run audit

Security scanning suggestions:
- Consider integrating `npm audit` in CI.
- Optionally add Snyk (snyk test) or retire.js for dependency vulnerability scanning.

Common issues the linters will help detect:
- Unused variables/imports
- Missing dependency arrays in useEffect
- Accessibility issues (aria labels, roles, contrast)
- Code smells like large components, inline functions in render loops
- Potential React anti-patterns (state mutation, keys in lists)
