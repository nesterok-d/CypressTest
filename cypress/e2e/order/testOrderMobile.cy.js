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
    let popupCityName;
    let deliveryPrice;
    let adress1;
    let adress2;
    let arrayCitys = new Array();
    let textCartPrice;
    let textDisposalPrice;
    let textPriceOrder
    let summ
    let textPriceOrder2 = new Array();
    let textPriceOrder3
    let textCartPrice2
    let textDisposalPrice2
    let textCartPrice3
    let textDisposalPrice3
    let deliveryPriceArr = new Array();

    it('Выбор пункта самовывоза - наличие/кликабельность кнопки Изменить пункт', () => {

        setMobileResolution()
        openPage('podushki/askona1-i-bedgear/')
        main.closeCookie()

        click(main.leftMenuMobile)
        click(main.cityListMobile)
        cy.wait(2000)

        cy.get(main.cityListItemMobile).then((cityList)=>{
            popupCityName = cityList.eq(0).text()
            click(cityList.eq(0))
        })
        cy.wait(2000)
        cy.get(catalog.catalogItemsAvailable).then((productList)=>{
            randomNumber = main.getRandomInt(productList.length)
            cy.log(randomNumber)
            cy.get(productList.eq(0)).click({ force: true })
        })

        cy.wait(2000)

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
            
            deliveryPriceArr = price.text().split("\u00A0")
            deliveryPrice = deliveryPriceArr[0]
            cy.log(deliveryPrice)
            assertEqual(deliveryPrice, 'Самовывоз из магазина Аскона')

        })

    })

    it('Выбор услуги  (в регионе)', () => {
        setMobileResolution()
        openPage('matrasy/dostupnye-tehnologii/serta/sanders.htm')
        main.closeCookie()


        arrayCitys = ['Новосибирск', 'Екатеринбург', 'Архангельск', 'Петрозаводск', 'Нижневартовск'];

        click(main.leftMenuMobile)
        click(main.cityListMobile)
        cy.wait(2000)

        click(main.cityInput)
        cy.get(main.cityInput).type(arrayCitys[main.getRandomInt(arrayCitys.length)]);
        cy.wait(2000)

        cy.get(main.cityListItem).then((cityList)=>{
            popupCityName = cityList.eq(0).text()
            click(cityList.eq(0))
        })

        cy.get(prod.addToBasketElement).click({ force: true })
        cy.wait(2000)
        cy.get(main.iconCart).click({ force: true })
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

        cy.get(order.priceOrderMobile).then((price)=>{
            textPriceOrder = price.text()
            textPriceOrder2 = (textPriceOrder.slice(0, -2)).split("\u00A0")
            textPriceOrder3 = textPriceOrder2[0]+textPriceOrder2[1]

            textCartPrice2 = (textCartPrice.slice(0, -2)).split("\u00A0")
            textDisposalPrice2 = (textDisposalPrice.slice(0, -2)).split("\u00A0")
            textCartPrice3 = textCartPrice2[0]+textCartPrice2[1]
            textDisposalPrice3 = textDisposalPrice2[0]+textDisposalPrice2[1]
            summ = Number(textCartPrice3)+Number(textDisposalPrice3)
            assertEqual(textPriceOrder3, String(summ))

        })


    })

    it('оформление заказа, проверка товаров в заказе', () => {
        setMobileResolution()
        openPage('matrasy/dostupnye-tehnologii/serta/sanders.htm')
        main.closeCookie()


        arrayCitys = ['Новосибирск', 'Екатеринбург', 'Архангельск', 'Петрозаводск', 'Нижневартовск'];

        click(main.leftMenuMobile)
        click(main.cityListMobile)
        cy.wait(2000)
        click(main.cityInput)
        cy.get(main.cityInput).type(arrayCitys[main.getRandomInt(arrayCitys.length)]);
        cy.wait(2000)

        cy.get(main.cityListItem).then((cityList)=>{
            popupCityName = cityList.eq(0).text()
            click(cityList.eq(0))
        })

        cy.get(prod.addToBasketElement).click({ force: true })
        cy.wait(2000)
        cy.get(main.iconCart).click({ force: true })
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

        cy.get(order.priceOrderMobile).then((price)=>{
            cy.wait(5000)
            textPriceOrder = price.text()
            textPriceOrder2 = (textPriceOrder.slice(0, -2)).split("\u00A0")
            textPriceOrder3 = textPriceOrder2[0]+textPriceOrder2[1]

            textCartPrice2 = (textCartPrice.slice(0, -2)).split("\u00A0")
            textDisposalPrice2 = (textDisposalPrice.slice(0, -2)).split("\u00A0")
            textCartPrice3 = textCartPrice2[0]+textCartPrice2[1]
            textDisposalPrice3 = textDisposalPrice2[0]+textDisposalPrice2[1]
            summ = Number(textCartPrice3)+Number(textDisposalPrice3)
            assertEqual(textPriceOrder3, String(summ))

        })


    })


})