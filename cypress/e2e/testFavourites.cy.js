import MainPage from "../pages/MainPage"
import {assertEqual, click, setText, openPage, setMobileResolution} from "../../support/commands";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";

describe('Города', () => {
    const main = new MainPage();
    const card = new ProductPage();
    const cart = new CartPage();
    let popupCityName;
    let popupCityName2;
    let cityNameInHeader;
    let randomCityNumber;

    it('Смена города в КТ', () => {
        openPage('matrasy/udachnyj-start/askona-basic/basic-easy.htm')
        main.closeCookie()
        click(main.cityInHeader2)

        cy.get(main.cityListItem).then((cityList)=>{
            randomCityNumber = getRandom(cityList.length)
            popupCityName = cityList.eq(randomCityNumber).text()
            click(cityList.eq(randomCityNumber))
        })

        cy.wait(3000)
        cy.reload()

        cy.get(main.cityInHeader2).then((cityInHeader) => {
            cityNameInHeader = cityInHeader.text().trim()
            assertEqual(popupCityName, cityNameInHeader)
        })

        cy.once('uncaught:exception', () => false);
        click(card.installmentBtn)
        
        cy.get(card.installmentCity).then((city) => {
            assertEqual(cityNameInHeader, city.text())
        })
    })


})