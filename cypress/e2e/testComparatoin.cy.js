import MainPage from "../e2e/pages/MainPage"
import {assertEqual, click, setText, openPage, setMobileResolution} from "../support/commands";
import ProductPage from "../e2e/pages/ProductPage";
import CartPage from "../e2e/pages/CartPage";

describe('Стравнение товаров', () => {
    const main = new MainPage();
    const card = new ProductPage();
    const cart = new CartPage();
    let popupCityName;
    let popupCityName2;
    let cityNameInHeader;
    let randomCityNumber;
    let favouritesNumber1;
    let favouritesNumber2;
    let favouritesNumber3;
    let message1;
    localStorage.debug = 'cypress:*'

    it('проверка иконки избранного в хедере страницы', () => {
        openPage('matrasy/udachnyj-start/askona-basic/basic-easy.htm')
        main.closeCookie()

        cy.get(main.iconFavouritesNumber).then((number)=>{
            favouritesNumber1 = number.text().trim()
            cy.log(favouritesNumber1)
            assert(favouritesNumber1 ==="5", "ошибка")
        })

        click(card.iconAddToFavourites)
        cy.wait(3000)

        cy.get(main.iconFavouritesNumber).then((number)=>{
            favouritesNumber1 = number.text().trim()
            cy.log(favouritesNumber1)
            assertEqual(favouritesNumber1, "1")
        })

        click(card.iconAddToFavourites)
        cy.wait(3000)
        cy.reload()

        cy.get(main.iconFavouritesNumber).then((number)=>{
            favouritesNumber1 = number.text().trim()
            cy.log(favouritesNumber1)
            assertEqual(favouritesNumber1, "0")
        })
    })

    /*it('проверка иконки избранного в карточке товара', () => {
        openPage('matrasy/udachnyj-start/askona-basic/basic-easy.htm')
        main.closeCookie()
        
        cy.get(card.iconAddToFavouritesIsActive).should('not.exist');

        click(card.iconAddToFavourites)
        cy.wait(3000)

        cy.get(card.iconAddToFavouritesIsActive).should('exist');

        click(card.iconAddToFavourites)
        cy.wait(3000)

        cy.get(card.iconAddToFavouritesIsActive).should('not.exist');

    })
    
    it('проверка всплывающего сообщения при добавлении в избранное', () => {
        openPage('matrasy/udachnyj-start/askona-basic/basic-easy.htm')
        main.closeCookie()
        
        cy.get(card.messageAddToFavourites).should('not.exist');

        click(card.iconAddToFavourites)

        cy.get(card.messageAddToFavourites).should('exist');
        cy.get(card.messageAddToFavourites).then((message)=>{
            message1 = message.text().trim()
            cy.log(message1)
            assertEqual(message1, "Товар добавлен в избранное")
        })
        cy.get(card.messageAddToFavourites).should("not.exist")
        //cy.wait(5500)
        click(card.iconAddToFavourites)
        //cy.wait(3000)

        cy.get(card.messageAddToFavourites).then((message)=>{
            message1 = message.text().trim()
            cy.log(message1)
            assertEqual(message1, "Товар удален из избранного")
        })

    })*/



})