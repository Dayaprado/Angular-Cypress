import { StepperComponent } from './stepper.component';
import { createOutputSpy } from 'cypress/angular';

describe('StepperComponent', () => {
  it('carregar componente', () => {
    cy.mount(StepperComponent);
  });

  it('Component inicializa a contagem no zero', () => {
    cy.mount(StepperComponent);
    cy.get('[data-cy=counter]').should('have.text', '0');
  });

  it('Componente pode ser inicializado com qualquer valor', () => {
    cy.mount(StepperComponent, {
      componentProperties: {
        count: 100,
      },
    });
    cy.get('[data-cy=counter]').should('have.text', '100');
  });

  it('quando clicamos no botão de incrementar, soma-se 1 no contador', () => {
    cy.mount(StepperComponent);
    cy.get('[data-cy=increment]').click();
    cy.get('[data-cy=counter]').should('have.text', '1');
  });

  it('quando clicamos no botão de decrementar, subtrai 1 no contador', () => {
    cy.mount(StepperComponent);
    cy.get('[data-cy=decrement]').click();
    cy.get('[data-cy=counter]').should('have.text', '-1');
  });
});
