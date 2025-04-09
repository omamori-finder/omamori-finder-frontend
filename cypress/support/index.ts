import { mount } from "@cypress/react18";

declare global {
    // eslint-disable-next-line
    namespace Cypress {
        interface Chainable {
            mount: typeof mount;
        }
    }
}

Cypress.Commands.add("mount", mount);