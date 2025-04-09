describe("Home Page", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("should display the title", () => {
        cy.get("nav a").first().should("contain.text", "Omamori Finder");
    });

    describe("Screens larger than `md` 768px by 1024px", () => {
        beforeEach(() => {
            cy.viewport(768, 1024);
        });

        it("should open the filter menu when the filter icon is clicked", () => {
            cy.get("#filter").should("not.exist");
            cy.get("#filter-toggle-button").click();
            cy.get("#filter")
                .should("exist")
                .should("be.visible")
                .should("contain.text", "Area");
        });

        it("should close the md filter menu when screen gets resized smaller than md", () => {
            cy.get("#filter-toggle-button").click();
            cy.get("#filter").should("exist").should("be.visible");
            cy.viewport(767, 1024);
            cy.get("#filter").should("not.exist");
        });
    });

    describe("Screens smaller than `md` 768px by 1024px", () => {
        beforeEach(() => {
            cy.viewport(767, 1024);
        });

        it("should open the mobile menu when the mobile menu icon is clicked", () => {
            cy.get("#mobile-menu").should("not.exist");
            cy.get("#mobile-menu-toggle-button").click();
            cy.get("#mobile-menu").should("exist").should("be.visible");
        });

        it("should close the mobile menu when the screen gets resized larger than md", () => {
            cy.get("#mobile-menu-toggle-button").click();
            cy.get("#mobile-menu").should("exist").should("be.visible");
            cy.viewport(768, 1024);
            cy.get("#mobile-menu").should("not.exist");
        });
    });

    describe("Routing", () => {
        it("should route to about page", () => {
            cy.get("a[href='/about']").should("exist").click();
            cy.url().should("include", "/about");
        });

        it("should route to login page", () => {
            cy.get("a[href='/login']").should("exist").click();
            cy.url().should("include", "/login");
        });

        it("should route to home page", () => {
            cy.visit("/about");
            cy.get("a[href='/']").click();
        });
    });

    describe("Filtering", () => {
        beforeEach(() => {
            cy.get("#filter-toggle-button").click();
            cy.get("#filter").should("exist").should("be.visible");
        });

        it("should show filter category dropdowns", () => {
            cy.get("#area-toggle-button").click();
            cy.get("#area-dropdown").should("exist").should("be.visible");
            cy.get("#area-dropdown").find("input").should("have.length", 9);
            cy.get("#area-dropdown")
                .find("label")
                .first()
                .find("span")
                .should("contain", "All");
        });

        it("should close a dropdown when another is clicked", () => {
            cy.get("#area-toggle-button").click();
            cy.get("#area-dropdown").should("exist").should("be.visible");
            cy.get("#luck-toggle-button").click();
            cy.get("#luck-dropdown").should("exist").should("be.visible");
            cy.get("#area-dropdown").should("not.exist");
        });

        it("should keep selection when dropdown options are clicked", () => {
            cy.get("#area-toggle-button").click();
            cy.get("#area-dropdown").should("exist").should("be.visible");
            cy.get("#bAreaAll").should("exist").should("be.visible");
            cy.get("input#bAreaAll").should("be.checked");
            cy.get("#bHokkaido").should("exist").should("be.visible");
            cy.get("input#bHokkaido").should("not.be.checked");
            cy.get("#bHokkaido").click();
            cy.get("input#bHokkaido").should("be.checked");
            cy.get("#luck-toggle-button").click();
            cy.get("#luck-dropdown").should("exist").should("be.visible");
            cy.get("#area-toggle-button").click();
            cy.get("input#bHokkaido").should("be.checked");
        });
    });
});
