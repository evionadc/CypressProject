/// <reference types="cypress"/>

describe('MSite', () =>{

    it('Declinar o pagamento para 1 ADT', ()=>{

    cy.clearCookies()
    cy.clearLocalStorage()

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

    cy.get('#form-purchase-submit > a').click()

    cy.get('.menuPhase > ul > :nth-child(1)')
        .should('have.text','1. Escolha do voo')

    cy.get("#purchase-content > div.flight-segment-result.segmento.flight-segment-result-ida > div.voos > section:nth-child(1) > div > div > div.resultBoxDuration > div.result-box-body > div > div.boxTarifas.light > div > label > div > table > tbody > tr > td:nth-child(1) > span")
        .click()

    cy.get("#purchase-content > div.flight-segment-result.segmento.flight-segment-result-ida > div.voos > section:nth-child(1) > div > div > div.resultBoxDuration > div.result-box-body > div > div.changeRate.upsell-PL > div.boxnumberOfStops > p.linkChange.continuarTarifa-LT > a")
    .click()

    cy.get("#checkContinuar").click()

    cy.get("#resumoVoo > a > button").click()

    cy.get("body > div.container > div > div.nav.col-md-12.login > nav > ul > li.fazerLogin > a").click()

    cy.get("#Email").type("eklima@voegol.com.br")

    cy.get("#Senha").type("golgol2020")

    cy.get("#sign-in-button").click()

    cy.get("#tratamento_Adulto_0").select("Sra.")

    cy.get("#formPassenger_Adulto_0 > div.margin-top-15px > input[type=radio]").click()

    cy.get('#formPassenger_Adulto_0 > a > button').click()

    cy.get('body > div.container > div > div.paddingBox > a > div > p').click()

    cy.get('body > div.container > div.wapConteudo > div > div.paddingBox > a > div > p').click()

    cy.get('#cancelButton > a').click()

    cy.get('#chk_divVisa').click()

    cy.get('#NumeroCartao').type('4012001038443335')

    cy.wait(3000)

    cy.get('#CodigoSeguranca').type('666')

    cy.get('#NomeTitular').type('DIEGO F LIMA')

    cy.get('#buttonSubmitPay').click()



})
})