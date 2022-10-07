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
    let catalogTitleArray = new Array()
    let randomNumber;
    
    localStorage.debug = 'cypress:*'

    it('проверка добавления в избранное не странице товара', () => {
        openPage('matrasy/udachnyj-start/askona-basic/basic-easy.htm')
        main.closeCookie()

        main.checkStringInOject(main.iconFavouritesNumber, "0", favouritesNumber)
        cy.get(card.iconAddToFavouritesIsActive).should('not.exist');

        click(card.iconAddToFavourites)
        
        main.checkStringInOject(card.messageAddToFavourites, "Товар добавлен в избранное", message)
        main.checkStringInOject(main.iconFavouritesNumber, "1", favouritesNumber)
        cy.get(card.iconAddToFavouritesIsActive).should('exist');
        
        cy.reload()

        main.checkStringInOject(main.iconFavouritesNumber, "1", favouritesNumber)
        cy.get(card.iconAddToFavouritesIsActive).should('exist');

        click(card.iconAddToFavourites)

        main.checkStringInOject(card.messageAddToFavourites, "Товар удален из избранного", message)
        main.checkStringInOject(main.iconFavouritesNumber, "0", favouritesNumber)
        cy.get(card.iconAddToFavouritesIsActive).should('not.exist');

    })

    

    it('проверка добавления в избранное из каталогов', () => {
        catalogTitleArray = ['matrasy/', 'krovati/', 'divany/', 'podushki/']

        catalogTitleArray.forEach(element => {
            openPage(element)
            main.closeCookie()

            main.checkStringInOject(main.iconFavouritesNumber, "0", favouritesNumber)
            cy.get(catalog.catalogIconFavouritesActive).should('not.exist');

            cy.get(catalog.catalogIconFavourites).then((productList)=>{
                randomNumber = main.getRandomInt(productList.length)
                click(productList.eq(randomNumber))
            })

            main.checkStringInOject(card.messageAddToFavourites, "Товар добавлен в избранное", message)
            main.checkStringInOject(main.iconFavouritesNumber, "1", favouritesNumber)
            cy.get(catalog.catalogIconFavouritesActive).should('exist');

            cy.reload()

            main.checkStringInOject(main.iconFavouritesNumber, "1", favouritesNumber)
            cy.get(catalog.catalogIconFavouritesActive).should('exist');

            cy.get(catalog.catalogIconFavourites).then((productList)=>{
                click(productList.eq(randomNumber))
            })

            main.checkStringInOject(card.messageAddToFavourites, "Товар удален из избранного", message)
            main.checkStringInOject(main.iconFavouritesNumber, "0", favouritesNumber)
            cy.get(catalog.catalogIconFavouritesActive).should('not.exist');

            cy.reload()
            main.checkStringInOject(main.iconFavouritesNumber, "0", favouritesNumber)
            cy.get(catalog.catalogIconFavouritesActive).should('not.exist');

        });
    
    })
    

})