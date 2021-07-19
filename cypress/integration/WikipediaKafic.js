/// <reference types="cypress" />

describe("Pretraga", function() {

it('Wikipedia Kafić', function() {

    cy.visit('https://hr.wikipedia.org/wiki/Glavna_stranica')

    cy.get('[title="O projektu, što možete učiniti, gdje se što nalazi"]').click()

    cy.get('#firstHeading').should('have.text', 'Wikipedija:Kafić')

    cy.get('.searchbox > .mw-ui-button').click()

    cy.get('#firstHeading').should('have.text', 'Traži')

    cy.get('#ooui-php-1').type('Dubrovnik')

    cy.get('.oo-ui-actionFieldLayout-button > .oo-ui-widget > .oo-ui-inputWidget-input').click()

    cy.get('b > a').should('have.text', 'Dubrovnik')

    cy.get('#ooui-php-1').clear()

    cy.get('#ooui-php-1').type('Zagreb')

    cy.get('[aria-controls="mw-advancedSearch-expandable-namespaces"]').click()

    cy.get('.oo-ui-multioptionWidget-selected > .oo-ui-inputWidget > .oo-ui-inputWidget-input').should('be.checked').uncheck()

    cy.get('.oo-ui-multiselectWidget-group > :nth-child(2) > .oo-ui-inputWidget > .oo-ui-inputWidget-input').should('not.be.checked').check()

   cy.get('.oo-ui-actionFieldLayout-button > .oo-ui-widget > .oo-ui-inputWidget-input').click()

   cy.get('#firstHeading').should('have.text', 'Rezultati pretraživanja')

   cy.get('b > a').should('have.text', 'Zagreb')
})

})
