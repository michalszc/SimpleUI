# SimpleUI ⚡️

[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)[![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)](https://styled-components.com/)[![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)[![Lodash](https://img.shields.io/badge/Lodash-fff?style=for-the-badge&logo=Lodash)](https://lodash.com/)[![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/)[![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)](https://testing-library.com/docs/react-testing-library/intro/)[![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://storybook.js.org/)[![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)](https://yarnpkg.com/)

SimpleUI is a library that provides a set of accessible, reusable and composable React components that make web development a pleasure. 😎

## Looking for the documentation? 📝

It's available [here](michalszc.github.io/SimpleUI/). 👈

## Development 💻

```bash
yarn build           # Build library
yarn storybook       # Run storybook
yarn storybook:build # Build storybook
yarn eslint          # Analyze code with ESLint
yarn eslint:fix      # Try to fix ESLint errors
yarn test            # Run all tests with jest
yarn test:watch      # Run all tests and watch for changes
yarn test:coverage   # Run all tests and report coverage information
yarn test:update     # Run all tests and update every snapshot that fails
yarn validate        # Run eslint and tests
```

## Project structure 💾

```bash
├── .github                       # Github metadata for repository
│   └── workflows                 # The CI pipeline for Github Actions
├── .storybook                    # Storybook configuration
├── dist                          # Built library
├── docs                          # Documentation site
├── node_modules
├── src                           # Contains source files
│   ├── components                # Contains great components
│   ├── constants                 # Contains constants
│   └── utils                     # Contains custom utilities
├── stories                       # Storybook stories
│   ├── components                # Contains components stories
│   └── Introduction.stories.mdx  # Introduction for storybook 
├── tests                         # Unit tests for the project
│   ├── components                # Contains testing files for components
│   └── utils                     # Contains testing files for custom utilities
├── .eslintignore                 # A list of files to ignore by ESLint
├── .eslintrc                     # ESLint configuration
├── .gitignore                    # A list of files to ignore when pushing to Github
├── .npmrc                        # Npm configuration
├── babel.config.json             # Babel configuration
├── jest.config.json              # Jest configuration
├── LICENSE                       # The license for the project
├── package.json
├── README.md                     # The main readme for the project
├── rollup.config.mjs             # Rollup configuration
├── tsconfig.json                 # TypeScript configuration
└── yarn.lock

```

## License
[![Licence](https://img.shields.io/github/license/michalszc/SimpleUI?style=for-the-badge)](./LICENSE)