import MainPage from "../e2e/pages/MainPage"
import {assertEqual, click, setText, openPage, setMobileResolution} from "../support/commands";
import ProductPage from "../e2e/pages/ProductPage";

describe('Стравнение товаров', () => {
    const main = new MainPage();
    const card = new ProductPage();

    let comparedNumber;
    let message;

    localStorage.debug = 'cypress:*'

    it('проверка иконки сравниваемого в хедере страницы', () => {
        openPage('matrasy/udachnyj-start/askona-basic/basic-easy.htm')
        main.closeCookie()

        cy.get(main.iconComparation).then((number)=>{
            comparedNumber = number.text().trim()
            cy.log(comparedNumber)
            assert(comparedNumber === "0", "ошибка")
        })

        click(card.iconAddForCompare)
        cy.wait(3000)
        cy.reload()

        cy.get(main.iconComparation).then((number)=>{
            comparedNumber = number.text().trim()
            cy.log(comparedNumber)
            assert(comparedNumber === "1", "ошибка")
        })

        click(card.iconAddForCompare)
        cy.wait(3000)
        cy.reload()

        cy.get(main.iconComparation).then((number)=>{
            comparedNumber = number.text().trim()
            cy.log(comparedNumber)
            assert(comparedNumber === "0", "ошибка")
        })
    })

    it('проверка иконки сравниваемого в карточке товара', () => {
        openPage('matrasy/udachnyj-start/askona-basic/basic-easy.htm')
        main.closeCookie()
        
        cy.get(card.iconAddForCompareIsActive).should('not.exist');

        click(card.iconAddForCompare)
        cy.wait(3000)

        cy.get(card.iconAddForCompareIsActive).should('exist');

        click(card.iconAddForCompare)
        cy.wait(3000)

        cy.get(card.iconAddForCompareIsActive).should('not.exist');

    })
    
    it('проверка всплывающего сообщения при добавлении в сравниваемое', () => {
        openPage('matrasy/udachnyj-start/askona-basic/basic-easy.htm')
        main.closeCookie()
        
        cy.get(card.messageAddToFavourites).should('not.exist');

        click(card.iconAddForCompare)

        cy.get(card.messageAddToFavourites).should('exist');

        cy.get(card.messageAddToFavourites).then((textMess)=>{
            message = textMess.text().trim()
            cy.log(message)
            assertEqual(message, "Товар добавлен в сравнение")
        })

        cy.wait(5500)
        cy.get(card.messageAddToFavourites).should("not.exist")
        
        click(card.iconAddForCompare)

        cy.get(card.messageAddToFavourites).then((textMess)=>{
            message = textMess.text().trim()
            cy.log(message)
            assertEqual(message, "Товар удален из сравнения")
        })

    })



})