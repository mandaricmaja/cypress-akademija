/// <reference types="cypress" />

describe("Pretraga", function() {

it('Pretraga Nogomet', function() {

    cy.visit('https://hr.wikipedia.org/wiki/Glavna_stranica')

    cy.get('[title="Portal:Šport"]').click()

    cy.get('#firstHeading').should('have.text', 'Portal:Šport')

    cy.contains('Nogomet').click()

    cy.contains('PORTAL O NOGOMETU').should('be.visible')

    cy.get(':nth-child(6) > :nth-child(1) > a > img').click()

    cy.get('#firstHeading').should('have.text', 'Portugalska nogometna reprezentacija')

    cy.get('#searchInput').type('Hrvatska nogometna reprezentacija{enter}')

    cy.get('#firstHeading').should('have.text', 'Hrvatska nogometna reprezentacija')
})

it('Glazba', function(){

    cy.get('.mw-wiki-logo').click()

    cy.get('[title="Portal:Glazba"]').click()

    cy.get('#firstHeading').should('have.text', 'portal: Glazba')

    cy.get('#searchInput').type('The Rolling Stones{enter}')

    cy.get('#firstHeading').should('have.text', 'The Rolling Stones')
})


})