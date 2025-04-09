import { defineConfig } from "cypress"
 
export default defineConfig({
    e2e: {
        baseUrl: "http://localhost:3000",
        specPattern: "cypress/e2e/*.cy.tsx",
        supportFile: "cypress/support/*.ts"
    },
    component: {
        devServer: {
            framework: "next",
            bundler: "webpack"
        },
        specPattern: "cypress/component/*.cy.tsx",
        supportFile: false
    }
})