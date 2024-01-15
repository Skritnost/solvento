describe('CargoDetails Component', () => {
    it('should update cargo details', () => {
        cy.visit('http://localhost:8080/trips/create');

        cy.get('[data-cy=trip-component]').should('exist');

        cy.get('[data-cy=cargo-details-component]').as('cargoDetails');

        cy.get('@cargoDetails').find('[data-cy=cargoType]').type('Electronics');
        cy.get('@cargoDetails').find('[data-cy=cargoQuantity]').type('5');
        cy.get('@cargoDetails').find('[data-cy=cargoWeight]').type('10');
        cy.get('@cargoDetails').find('[data-cy=cargoDescription]').type('Sample description');

    });
});
