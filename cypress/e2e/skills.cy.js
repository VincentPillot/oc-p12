describe('Test l affichage des skills', () => {
    it('Doit afficher tous les skills', () => {
        cy.readFile("./data/skills.json").then((skills) => {
          const skillsLength = skills.length;
  
          cy.visit(Cypress.env('baseUrl') + "/index.html");
  
          cy.getDataCy("skill").should("have.length", skillsLength);
        })
    })
  })