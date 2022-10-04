import MainPage from "../e2e/pages/MainPage"
import {assertEqual, click, setText, openPage, setMobileResolution} from "../support/commands";
import ProductPage from "../e2e/pages/ProductPage";
import FavouritesPage from "../e2e/pages/FavouritesPage"
import CatalogPage from "./pages/CatalogPage";

describe('Избранное', () => {
    const main = new MainPage();
    const card = new ProductPage();
    const favour = new FavouritesPage();
    const catalog = new CatalogPage();

    let favouritesNumber;
    let message;
    let catalogPart;
    let productPrice;
    let catalogTitleArray = new Array()
    let productName;
    let randomNumber;
    
    localStorage.debug = 'cypress:*'

    /*it('проверка иконки избранного в хедере страницы', () => {
        openPage('matrasy/udachnyj-start/askona-basic/basic-easy.htm')
        main.closeCookie()

        cy.get(main.iconFavouritesNumber).then((number)=>{
            favouritesNumber = number.text().trim()
            cy.log(favouritesNumber)
            assert(favouritesNumber ==="0", "ошибка")
        })

        click(card.iconAddToFavourites)
        cy.wait(3000)

        cy.get(main.iconFavouritesNumber).then((number)=>{
            favouritesNumber = number.text().trim()
            cy.log(favouritesNumber)
            assertEqual(favouritesNumber, "1")
        })

        click(card.iconAddToFavourites)
        cy.wait(3000)
        cy.reload()

        cy.get(main.iconFavouritesNumber).then((number)=>{
            favouritesNumber = number.text().trim()
            cy.log(favouritesNumber)
            assertEqual(favouritesNumber, "0")
        })
    })

    it('проверка иконки избранного в карточке товара', () => {
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
        cy.get(card.messageAddToFavourites).then((textMess)=>{
            message = textMess.text().trim()
            cy.log(message)
            assertEqual(message, "Товар добавлен в избранное")
        })
        cy.get(card.messageAddToFavourites).should("not.exist")

        cy.wait(5500)
        click(card.iconAddToFavourites)

        cy.get(card.messageAddToFavourites).then((textMess)=>{
            message = textMess.text().trim()
            cy.log(message)
            assertEqual(message, "Товар удален из избранного")
        })

    })*/

    /*it('проверка списка добавленых в избранное', () => {
        cy.visit("/")
        main.closeCookie()

        click(main.iconFavourites)

        cy.get(favour.favouritesItem).should('not.exist');
        cy.get(favour.favouritesEmpty).should('exist');

        cy.get(favour.favouritesEmpty).then((textMess)=>{
            message = textMess.text().trim()
            assertEqual(message, "Список избранного пуст")
        })

        click(favour.buttonOnCatalog)

        cy.get(favour.item).then((cityList)=>{
            randomNumber = main.getRandomInt(list.length)
            productPrice = cy.get(main.productPrice).eq(randomNumber).text()
            productName1 = cy.get(main.productName1).eq(randomNumber).text()
            productName2 = cy.get(main.productName2).eq(randomNumber).text()
            click(productIconFavourites.eq(randomNumber))
        })


        cy.get(main.iconFavouritesNumber).then((number)=>{
            favouritesNumber = number.text().trim()
            cy.log(favouritesNumber)
            assert(favouritesNumber ==="0", "ошибка")
        })

        click(card.iconAddToFavourites)
        cy.wait(3000)

        cy.get(main.iconFavouritesNumber).then((number)=>{
            favouritesNumber = number.text().trim()
            cy.log(favouritesNumber)
            assertEqual(favouritesNumber, "1")
        })

        click(card.iconAddToFavourites)
        cy.wait(3000)
        cy.reload()

        cy.get(main.iconFavouritesNumber).then((number)=>{
            favouritesNumber = number.text().trim()
            cy.log(favouritesNumber)
            assertEqual(favouritesNumber, "0")
        })
    })*/

    it('проверка добавления в избранное из каталогов', () => {
        catalogTitleArray = ['matrasy/', 'krovati/', 'divany/', 'podushki/']

        catalogTitleArray.forEach(element => {
            openPage(element)
            main.closeCookie()

            cy.get(card.messageAddToFavourites).should('not.exist')

            main.checkStringInOject(main.iconFavouritesNumber, "0", favouritesNumber)
            cy.get(catalog.catalogIconFavouritesActive).should('not.exist');

            cy.get(catalog.catalogIconFavourites).then((productList)=>{
                randomNumber = main.getRandomInt(productList.length)
                click(productList.eq(randomNumber))
            })

            cy.get(card.messageAddToFavourites).should('exist');
            main.checkStringInOject(card.messageAddToFavourites, "Товар добавлен в избранное", message)
            main.checkStringInOject(main.iconFavouritesNumber, "1", favouritesNumber)
            cy.get(catalog.catalogIconFavouritesActive).should('exist');

            cy.reload()

            cy.get(card.messageAddToFavourites).should("not.exist")
            main.checkStringInOject(main.iconFavouritesNumber, "1", favouritesNumber)
            cy.get(catalog.catalogIconFavouritesActive).should('exist');

            cy.get(catalog.catalogIconFavourites).then((productList)=>{
                click(productList.eq(randomNumber))
            })

            cy.get(card.messageAddToFavourites).should('exist');
            main.checkStringInOject(card.messageAddToFavourites, "Товар удален из избранного", message)
            main.checkStringInOject(main.iconFavouritesNumber, "0", favouritesNumber)
            cy.get(catalog.catalogIconFavouritesActive).should('not.exist');

        });
    
    })

})