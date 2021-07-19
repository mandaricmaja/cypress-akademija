/// <reference types="cypress" />

describe('Prijava', function() {

it('Prijavi se', function() {

    cy.visit('https://hr.wikipedia.org/wiki/Glavna_stranica')

    cy.get('#pt-login').click()

    cy.get('#wpName1').clear().type('Mariotester')

    cy.get('#wpPassword1').clear().type('tester1234')

    cy.get('input[name="wpRemember"]').should('not.be.checked').check()

    cy.get('#wpLoginAttempt').click()

    cy.get('#pt-userpage').should('have.text', 'Mariotester')



})



})