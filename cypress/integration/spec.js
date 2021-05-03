describe("Sapper template app", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("has the correct <h1>", () => {
    cy.contains("h1", "My Blog");
  });

  it("navigates to /about", () => {
    cy.get("#posts a").as("posts");
    cy.get("@posts").should("be.visible");
    cy.get("@posts").click({ force: true, multiple: true });
    cy.url().should("include", "/posts");
  });
});
