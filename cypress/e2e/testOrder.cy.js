import ProductPage from "../pages/ProductPage";
import MainPage from "../pages/MainPage";
import CartPage from "../pages/CartPage";
import CatalogPage from "../pages/CatalogPage";
import OrderPage from "../pages/OrderPage";
import {assertEqual, click, setText, openPage, setMobileResolution} from "../support/commands";
import { Assertion } from "chai";

describe('выбор доставки', () => {
    const main = new MainPage();
    const prod = new ProductPage();
    const cart = new CartPage();
    const catalog = new CatalogPage();
    const order = new OrderPage();
    let randomNumber;
    let randomNumber2;
    let popupCityName;
    let popupCityName2;
    let cityName;
    let deliveryPrice;
    let adress1;
    let adress2;
    let arrayCitys = new Array();
    let textCartPrice;
    let textDisposalPrice;
    let textPriceOrder

    it('Выбор пункта самовывоза - наличие/кликабельность кнопки Изменить пункт', () => {

        openPage('podushki/askona1-i-bedgear/')
        main.closeCookie()

        click(main.cityInHeader2)
        cy.wait(2000)

        cy.get(main.cityListItem).then((cityList)=>{
            popupCityName = cityList.eq(0).text()
            click(cityList.eq(0))
        })

        cy.get(catalog.catalogItemsAvailable).then((productList)=>{
            randomNumber = main.getRandomInt(productList.length)
            cy.log(randomNumber)
            click(productList.eq(randomNumber))
        })

        cy.get(catalog.catalogItemsAvailable).then((productList)=>{
            click(productList.eq(main.getRandomInt(productList.length)))
        })

        cy.wait(2000)

        click(prod.addToBasketElement)
        cy.wait(2000)
        cy.get(main.iconAddToCart).click({ force: true })
        cy.wait(2000)

        cy.get(cart.buttonPlaceOrder).click({ force: true })
        cy.wait(2000)

        cy.get(order.radioToStore).click({ force: true })
        cy.get(order.radioToStore).should('exist').should('be.checked')
        click(order.deliveryPlace)
        cy.wait(2000)
        cy.get(order.placeListActive).should('exist')
        click(order.placeMap)
        cy.get(order.placeMapActive).should('exist')
        cy.get(order.map).should('exist')
        cy.wait(2000)
        click(order.placeList)
        cy.wait(2000)
        cy.get(order.adressChoicePlace).then((adressList)=>{
            randomNumber = main.getRandomInt(adressList.length)
            adress1 = adressList.eq(randomNumber).text()
            cy.log(adress1)
            cy.log(randomNumber)

        })

        cy.get(order.buttonChoicePlace).then((placeList)=>{
            click(placeList.eq(randomNumber))
            cy.log(randomNumber)

        })

        cy.get(order.modalShops).should('not.exist')


        cy.get(order.adress).then((adressList)=>{
            adress2 = adressList.eq(1).text()
            cy.log(adress2)
            assertEqual(adress1, adress2)

        })

        cy.get(order.deliveryPrice).then((price)=>{
            deliveryPrice = price.text()
            cy.log(deliveryPrice)
            assertEqual(deliveryPrice, 'Самовывоз из магазина Аскона')

        })

    })

    /*it('Выбор услуги  (в регионе)', () => {

        openPage('matrasy/dostupnye-tehnologii/serta/sanders.htm')
        main.closeCookie()


        arrayCitys = ['Новосибирск', 'Екатеринбург', 'Архангельск', 'Петрозаводск', 'Нижневартовск'];

        click(main.cityInHeader2)
        click(main.cityInput)
        cy.get(main.cityInput).type(arrayCitys[main.getRandomInt(arrayCitys.length)]);
        cy.wait(2000)

        cy.get(main.cityListItem).then((cityList)=>{
            popupCityName = cityList.eq(0).text()
            click(cityList.eq(0))
        })

        click(prod.addToBasketElement)
        cy.wait(2000)
        cy.get(main.iconAddToCart).click({ force: true })
        cy.wait(2000)    
        
        cy.get(cart.cartPrice).then((price)=>{
            textCartPrice = price.text()
        })

        cy.get(cart.buttonPlaceOrder).click({ force: true })
        cy.wait(2000)

        cy.get(order.priceServiceDisposal).then((price)=>{
            textDisposalPrice = price.text()
        })

        click(order.priceServiceDisposal)
        cy.get(order.checkServiceDisposal).should('exist').should('be.checked')

        cy.get(order.priceOrder).then((price)=>{
            textPriceOrder = price.text()
            cy.log(textPriceOrder)
            Assertion(textPriceOrder == (Number(textCartPrice)+Number(textDisposalPrice)))
            cy.log(String(Number(textCartPrice)+Number(textDisposalPrice)))

        })


    })*/
})