/// <reference types="cypress" />

describe('Testing a submitting select box', () => {
    // This fails in Chrome >= 83, but succeeds in Chrome 80 and in Firefox
    it('no explicit wait, this will fail but shouldn\'t', () => {
        cy.visit('')
        cy.get("select").select("Second")
        //cy.wait(0)
        cy.get("input").type("Hallo")
    })
    it('explicit wait after submit, this will succeed', () => {
        cy.visit('')
        cy.get("select").select("Second")
        cy.wait(1000)
        cy.get("input").type("Hallo")
    })

    it('even a wait(0) will do', () => {
        cy.visit('')
        cy.get("select").select("Second")
        cy.wait(1000)
        cy.get("input").type("Hallo")
    })
})
