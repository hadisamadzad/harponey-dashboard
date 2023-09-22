module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
          },
    },
    "plugins": [
        "@typescript-eslint",
        "react"
    ],
    "settings": {
        "react": {
          "version": "detect"
        }
      },
    "rules": {
        "react/react-in-jsx-scope": 0,
        '@typescript-eslint/no-var-requires': 0,
    }
}
