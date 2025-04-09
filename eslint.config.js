import eslint from "@eslint/js"
import tseslint from "typescript-eslint"
import stylistic from "@stylistic/eslint-plugin"
import stylisticJsx from "@stylistic/eslint-plugin-jsx"

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommended,
    {
        plugins: {
            "@stylistic": stylistic,
            "@stylistic/jsx": stylisticJsx
        }
    },
    {
        ignores: [".next/**", "next-env.d.ts"]
    },
    // Linting rules for .ts/js files
    {
        files: ["cypress", "**/*.{ts,js}"],
        rules: {
            // eslint-ts rules
            "@typescript-eslint/no-confusing-non-null-assertion": "error",
            // eslint rules
            // Turning it of so we can use this rule from eslint-ts
            "no-unused-vars": "off",
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

    },
    // Style rules for .ts/js files
    {
        files: ["cypress", "**/*.{ts,js,tsx}"],
        rules: {
            "@stylistic/semi": ["error", "never"],
            "@stylistic/array-bracket-spacing": ["error", "never"],
            "@stylistic/arrow-parens": ["error", "always"],
            "@stylistic/arrow-spacing": "error",
            "@stylistic/brace-style": "error",
            "@stylistic/comma-dangle": ["error", "never"],
            "@stylistic/comma-spacing": [
                "error", 
                { "before": false, "after": true }
            ],
            "@stylistic/comma-style": ["error", "last"],
            "@stylistic/curly-newline": ["error", "always"],
            "@stylistic/function-call-spacing": ["error", "never"],
            "@stylistic/function-paren-newline": ["error", "consistent"],
            "@stylistic/implicit-arrow-linebreak": ["error", "beside"],
            "@stylistic/indent": ["error", 4],
            "@stylistic/key-spacing": ["error", { "beforeColon": false }],
            "@stylistic/keyword-spacing": ["error", { "before": true }],
            "@stylistic/max-len": ["error", { "code": 130,
                "ignoreRegExpLiterals": true,
                "ignorePattern": "^\\s*className\\s*[:=]\\s*`?.*"
            }],
            "@stylistic/multiline-comment-style": ["error", "starred-block"],
            "@stylistic/no-multi-spaces": "error",
            "@stylistic/quotes": ["error", "double"],
            // jsx styling rules
            "@stylistic/jsx/jsx-closing-bracket-location": [1, "tag-aligned"],
            "@stylistic/jsx/jsx-curly-newline": ["error", {multiline: "consistent", singleline: "consistent"}],
            "@stylistic/jsx/jsx-equals-spacing": ["error", "never"],
            "@stylistic/jsx/jsx-first-prop-new-line": ["error", "multiline"],
            "@stylistic/jsx/jsx-pascal-case": ["error"]
        }

    }
)
