/// <reference types="cypress"/>

describe('MSite', () =>{

    it('Acessei o site e pesquisar uma tarifa para 1 ADT', ()=>{

    cy.visit('https://hom-m-t1.voegol.com.br')

    cy.get(`[onclick="ComprarPassagem('pt-BR');"] > .menu__lista_item--texto`)
    .click()    

    cy.get('#search-origin').click()

    cy.get('#inputPopups_departureSearchStations').type('CGH')
    
    cy.get('[data-name="São Paulo - Congonhas"] > .fl').click()

    cy.get('#search-arrival').click()

    cy.get('#inputPopups_arrivalSearchStations').type('SDU')

    cy.get('#arrivalStationsList > [data-name="Rio de Janeiro - Santos Dumont"]').click()

    cy.get('#search-date-departure').click()

    cy.get('tbody > :nth-child(2) > :nth-child(6)').click()

    cy.get('#checkedOneWay >input').click()
    
    cy.get('#smilesInfoBoxWrapper > :nth-child(1) > .smilesInfoBoxWrapperOkSpan').click()

    cy.get('#form-purchase-submit > a').click().wait(2000)

    cy.get('.menuPhase > ul > :nth-child(1)')
        .should('have.text','1. Escolha do voo')

})
})