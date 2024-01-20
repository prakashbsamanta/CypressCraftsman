describe("Testing Forms", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/forms");
  });

  it("Test subscribe form", () => {
    cy.url().should("equal", "http://localhost:3000/forms");
    cy.getDataTest("forms-header").should("have.text", "Testing Forms");
  });
});
