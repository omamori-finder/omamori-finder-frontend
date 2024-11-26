# Omamori Finder

## Table of Contents

- [Features](#tbd-features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Commit Style](#commit-style)

### TBD Features

- **Admin access**: stc.
- **Photo uploads**
- **Responsive design**

### Prerequisites

- node v18

### Installation

1. Clone the repository.

2. Navigate to the repository.

3. Install all dependencies:
   ```
   npm install
   ```

### Usage

To test, run the following command:

```
npm run e2e
```

<br/>

To start the development server, run the following command:

```
npm run dev
```

- Please note that _some elements may not work properly on first load_ after starting a dev server.
- Reload the page to ensure all elements work as intended. Otherwise, please run a production build.

<br/>

To run a production build:

```
npm build
npm run start
```

### Contributing

Please follow these steps to contribute:

1. Identify which feature you'd like to contribute to and navigate to the issue tab in the repository, or create the issue accordingly.

2. Checkout to the new branch:

   ```
   git checkout -b feature-branch
   ```

3. Make your changes then commit them (please see commit style guide).

4. Push to the branch.

### Commit Style

Please follow Conventional Commits to ensure consistency in our commit history.

```
Example Commit Messages:

feat: implement image upload feature

fix: bug fix issue

fix!: exclamation marks used for BREAKING CHANGE

```

For more details on commit message format, please read more [here](https://www.conventionalcommits.org/en/v1.0.0/#summary).
