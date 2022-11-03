import ProductPage from "../pages/ProductPage";
import MainPage from "../pages/MainPage";
import CartPage from "../pages/CartPage"
import CatalogPage from "../pages/CatalogPage";
import OrderPage from "../pages/OrderPage";
import {assertEqual, click, openPage, setMobileResolution} from "../../support/commands";

describe('выбор доставки', () => {
    const main = new MainPage();
    const prod = new ProductPage();
    const cart = new CartPage();
    const catalog = new CatalogPage();
    const order = new OrderPage();
    let randomNumber;
    let deliveryPrice;
    let adress1;
    let adress2;
    let arrayCitys = new Array();
    let textCartPrice;
    let textDisposalPrice;
    let textPriceOrder

    /**/it('Выбор пункта самовывоза - наличие/кликабельность кнопки Изменить пункт', () => {

        setMobileResolution()
        openPage('podushki/askona1-i-bedgear/')
        main.closeCookie()

        main.cityList()
        main.choiceCity(["Москва"])
        
        catalog.coiceCatalogItems()

        cy.get(prod.addToBasketElement).click({ force: true })
        cy.wait(4000)

        cy.get(main.iconCart).click({ force: true })
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

        cy.get(order.deliveryPriceMobile).then((price)=>{
            deliveryPrice = price.text().split("\u00A0")[0]
            cy.log(deliveryPrice)
            assertEqual(deliveryPrice, 'Самовывоз из магазина Аскона')
        })

    })

    it('Выбор услуги  (в регионе)', () => {
        setMobileResolution()
        openPage('matrasy/dostupnye-tehnologii/serta/sanders.htm')
        main.closeCookie()

        arrayCitys = ['Новосибирск', 'Екатеринбург', 'Архангельск', 'Петрозаводск', 'Нижневартовск'];
        main.cityList()
        main.choiceCity(arrayCitys)

        cy.get(prod.addToBasketElement).click({ force: true })
        cy.wait(2000)
        cy.get(main.iconCart).click({ force: true })
        cy.wait(2000)    
        
        cy.get(cart.cartPrice).then((price)=>{
            textCartPrice = price.text().slice(0, -2).split("\u00A0")
        })

        cy.get(cart.buttonPlaceOrder).click({ force: true })
        cy.wait(2000)

        cy.get(order.priceServiceDisposal).then((price)=>{
            textDisposalPrice = price.text().slice(0, -2).split("\u00A0")
        })

        click(order.priceServiceDisposal)
        cy.get(order.checkServiceDisposal).should('exist').should('be.checked')

        cy.get(order.priceOrderMobile).then((price)=>{
            textPriceOrder = price.text().slice(0, -2).split("\u00A0")
        })
        cy.get(order.priceOrderMobile).then((price)=>{
            order.checkOrderPrice(textPriceOrder, textCartPrice, textDisposalPrice)
        })
    })

    it('оформление заказа, проверка товаров в заказе', () => {
        setMobileResolution()
        openPage('matrasy/dostupnye-tehnologii/serta/sanders.htm')
        main.closeCookie()

        arrayCitys = ['Новосибирск', 'Екатеринбург', 'Архангельск', 'Петрозаводск', 'Нижневартовск'];
        main.cityList()
        main.choiceCity(arrayCitys)

        cy.get(prod.addToBasketElement).click({ force: true })
        cy.wait(2000)
        cy.get(main.iconCart).click({ force: true })
        cy.wait(2000)    
        
        cy.get(cart.cartPrice).then((price)=>{
            textCartPrice = price.text().slice(0, -2).split("\u00A0")
        })

        cy.get(cart.buttonPlaceOrder).click({ force: true })
        cy.wait(2000)

        cy.get(order.priceServiceDisposal).then((price)=>{
            textDisposalPrice = price.text().slice(0, -2).split("\u00A0")
        })

        click(order.priceServiceDisposal)
        cy.get(order.checkServiceDisposal).should('exist').should('be.checked')

        cy.get(order.priceOrderMobile).then((price)=>{
            textPriceOrder = price.text().slice(0, -2).split("\u00A0")
        })
        cy.get(order.priceOrderMobile).then(()=>{
            order.checkOrderPrice(textPriceOrder, textCartPrice, textDisposalPrice)
        })
    })/**/


})