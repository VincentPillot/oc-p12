describe('Test l affichage des projets', () => {
  it('Doit afficher tous les projets du portfolio', () => {
      cy.readFile("./data/portfolio.json").then((projects) => {
        const projectsLength = projects.length;

        cy.visit(Cypress.env('baseUrl') + "/index.html");

        cy.getDataCy("portfolio-project").should("have.length", projectsLength);
      })
  })
})