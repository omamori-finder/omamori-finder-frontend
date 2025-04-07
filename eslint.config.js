
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommended,
    {
        ignores: [".next/**"]
    },
    // Linting rules for .ts/js files
    {
        files: ["cypress", "**/*.{ts,js}"],
        rules: {
            // eslint-ts rules
            "@typescript-eslint/no-confusing-non-null-assertion": "error",
            // eslint rules
            // Turning it of so we can use this rule from eslint-ts
            'no-unused-vars': 'off',
            "arrow-body-style": ["error", "always"],
            "curly": "error",
            "dot-notation": "error",
            "no-array-constructor": "error",
            "no-console": ["error", { allow: ["warn", "error"] }],
            "no-throw-literal": "error",
            "no-var": "error",
            "prefer-arrow-callback": "error",
            "prefer-const": "error",
            "yoda": "error"
        }

    }
);