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
    let numberOfProductArray1 = new Array();
    let numberOfProductArray2 = new Array();
    let numberOfProductArray3 = new Array();
    let numberOfProductArray4 = new Array();
    let numberOfProductArray5 = new Array();
    let numberOfProduct1;
    let numberOfProduct2;
    let numberOfProduct3;
    let numberOfProduct4;
    let numberOfProduct5;
    let textActual1;
    let textActual2;
    let textActual3;
    let textActual4;
    let textActual5;
    
    localStorage.debug = 'cypress:*'

    //cy.get("#username").type("tomsmith");

    it('проверка фильтров в каталоге', () => {
        
        openPage('matrasy/')
        main.closeCookie()

        cy.get(catalog.info).then((text1)=>{
            textActual1 = text1.text()
            numberOfProductArray1 = textActual1.split(' ');
            numberOfProduct1 = numberOfProductArray1[4]
            cy.log(`numberOfProduct1 ${numberOfProductArray1[4]}`)
        })

        cy.get(catalog.filterWidthMin).type("160");
        cy.wait(2000)

        cy.get(catalog.info).then((text2)=>{
            textActual2 = text2.text()
            numberOfProductArray2 = textActual2.split(' ');
            numberOfProduct2 = numberOfProductArray2[4]
            cy.log(numberOfProductArray2[4])
        })

        cy.get(catalog.filterWidthMin).clear();
        cy.get(catalog.filterWidthMin).type("140");
        cy.wait(2000)

        cy.get(catalog.info).then((text3)=>{
            textActual3 = text3.text()
            numberOfProductArray3 = textActual3.split(' ');
            numberOfProduct3 = numberOfProductArray3[4]
            cy.log(numberOfProduct3)
        })

        cy.get(catalog.filterWidthMax).type("160");
        cy.wait(2000)

        cy.get(catalog.info).then((text4)=>{
            textActual4 = text4.text()
            numberOfProductArray4 = textActual4.split(' ');
            numberOfProduct4 = numberOfProductArray4[4]
            cy.log(numberOfProduct4)
        })


        let resalts = numberOfProduct3 - numberOfProduct2
        cy.log(resalts)
        //assertEqual(String(numberOfProduct4), String(resalts))

        /*click(catalog.buttonClearFilters)

        cy.get(catalog.info).then((text)=>{
            textActual = text.text()
            numberOfProductArray5 = textActual.split(' ');
            numberOfProduct5 = numberOfProductArray5[4]
            cy.log(numberOfProduct5)
        })

        assert(numberOfProduct1 == numberOfProduct5, "ошибка")*/
    
    })

})