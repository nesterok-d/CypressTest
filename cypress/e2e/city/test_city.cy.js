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

    /*it('Смена города в КТ', () => {
        openPage('matrasy/udachnyj-start/askona-basic/basic-easy.htm')
        main.closeCookie()
        click(main.cityInHeader2)

        cy.get(main.cityListItem).then((cityList)=>{
            randomCityNumber = main.getRandomInt(cityList.length)
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
            cy.log(cityNameInHeader)
            assertEqual(cityNameInHeader, city.text())
        })
    })*/

    it('Смена города в КТ', () => {
        setMobileResolution()
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

    /*it('Смена города в поп-ап рассрочки', () => {
        openPage('matrasy/udachnyj-start/askona-classic/classic-start.htm')
        main.closeCookie()
        cy.once('uncaught:exception', () => false);
        click(card.installmentBtn)
        cy.wait(2000)
        click(card.installmentCity)

        cy.get(main.cityListItem).then((cityList)=>{
            randomCityNumber = getRandom(cityList.length)
            popupCityName = cityList.eq(randomCityNumber).text()
            click(cityList.eq(randomCityNumber))
        })
        cy.wait(3000)
        cy.get(card.installmentCity).then((city) => {
            popupCityName2 = city.text().trim()
            assertEqual(popupCityName, popupCityName)
        })
        
        click(card.installmentClose)
        cy.wait(2000)

        cy.get(main.cityInHeader2).then((cityInHeader) => {
            cityNameInHeader = cityInHeader.text().trim()
            assertEqual(popupCityName, cityNameInHeader)
        })

    })*/

    /*it('Проверка города в чекауте', () => {
        openPage('matrasy/askona/plush/matras-plush.htm')
        main.closeCookie()
        click(main.cityInHeader2)

        cy.get(main.cityListItem).then((cityList)=>{
            randomCityNumber = getRandom(cityList.length)
            popupCityName = cityList.eq(randomCityNumber).text()
            click(cityList.eq(randomCityNumber))
        })

        cy.wait(3000)
        click(card.addToBasketElement)
        cy.wait(3000)
        openPage('cabinet/order')
        cy.get(cart.cityInput).invoke('attr', 'value').then((city) => {
            assertEqual(popupCityName, city)
        })
    })*/

    /*it('Смена города в чекауте и проверка в шапке', () => {
        openPage('podushki/alpha-technology.htm')
        click(card.addToBasketElement)
        cy.wait(3000)
        openPage('cabinet/order')
        cy.get(cart.cityInput).clear()
        setText(cart.cityInput, 'Екатеринбург')
        cy.wait(3000)
        cy.reload()
        cy.get(cart.cityInput).invoke('attr', 'value').then((city) => {
            assertEqual('Екатеринбург', city)
        })
        openPage('/')
        cy.get(main.cityInHeader2).then((cityInHeader) => {
            cityNameInHeader = cityInHeader.text().trim()
            assertEqual('Екатеринбург', cityNameInHeader)
        })
    })*/
})