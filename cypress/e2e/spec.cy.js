describe(`My First Test`, () => {
  it(`Types a name and verifies game history`, () => {
    cy.visit(`/`); 

   
    cy.get(`#username`).should(`be.visible`).type(`Your Name`);

    
    cy.get(`#user-selection`).select(`Rock`);
    cy.get(`#go-button`).click();
    cy.get(`#game-history`).should(`contain`, `Your Name`);
  });
});
