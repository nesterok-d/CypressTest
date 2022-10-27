import {click} from "../../support/commands"

class OrderPage {

    radioToStore = 'input[id="delivery12"]'
    inputCity ='input[name="city"]'
    deliveryPlace = 'div.pickup div button'
    placeListActive = 'a.active[href="#list"]'
    placeList = 'a[href="#list"]'
    placeMapActive = 'a.active[href="#map"]'
    placeMap = 'a[href="#map"]'
    map ='ymaps.ymaps-2-1-79-events-pane'
    buttonChoicePlace = "ul.modal-shops__list button"
    adressChoicePlace = "#list > ul > li > div > div:nth-child(1)"
    modalShops = 'div.modal-shops[aria-modal="true"]'
    adress = 'div.pickup__info div'
    deliveryPrice = '#app > div > form > div > div.cart__sidebar > div > section.cart-block.order-cost.cart-cost > div.cart-cell > ul > li:nth-child(2) > span:nth-child(1)'
    checkServiceDisposal ='input[id="service1293642"]'
    priceServiceDisposal = 'label[for="service1293642"] div'
    priceOrder = '#app > div > form > div > div.cart__sidebar > div > section.cart-block.order-cost.cart-cost > div.cart-cell > ul > li.total-list__total > span:nth-child(2)'
    



}

export default OrderPage