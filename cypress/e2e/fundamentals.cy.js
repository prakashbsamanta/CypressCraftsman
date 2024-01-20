describe("Testing fundamentals", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/fundamentals");
    // baseUrl: "http://localhost:3000",
  });
  it("Contains correct header text", () => {
    cy.getDataTest("fundamentals-header").should(
      "contain.text",
      "Testing Fundamentals"
    );
  });
  it("Accordian works correctly", () => {
    cy.contains(
      /Your tests will exist in a describe block. This block takes two arguments. The first is a description of what you are testing./i
    ).should("not.be.visible");

    cy.getDataTest("accordion-item-1")
      .find("p")
      .should("contain.text", "Fundamental 1) Describe blocks");
    cy.get('[data-testid="accordion-item-1"] div[role="button"]').click();
    cy.contains(
      /Your tests will exist in a describe block. This block takes two arguments. The first is a description of what you are testing./i
    ).should("be.visible");
    cy.get('[data-testid="accordion-item-1"] div[role="button"]').click();
    cy.contains(
      /Your tests will exist in a describe block. This block takes two arguments. The first is a description of what you are testing./i
    ).should("not.be.visible");
  });
});
