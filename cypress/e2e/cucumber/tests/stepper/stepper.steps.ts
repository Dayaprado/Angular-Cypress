import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps"

Given(/^Acessa a pg princial$/, () => {
	cy.visit(`http://localhost:4200/`);
});

And(/^e verifica se o contatdor começa com zero$/, () => {
	cy.get('[data-cy=counter]').should('have.text', '0');
});

When(/^incremento um numero$/, () => {
	cy.get('[data-cy=increment]').click();
});

Then(/^contador precisa ser igual a 1$/, () => {
	cy.get('[data-cy=counter]').should('have.text', '1');
});
