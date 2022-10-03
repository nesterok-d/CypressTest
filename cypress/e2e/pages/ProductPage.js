import {click, clickSpecificElement, getRandom, setText, waitVisibilityElement} from "../../support/commands"

class ProductPage {
    base = "div[data-c-modal-id='#modal-size']"
    baseItem = 'a.modal-size__item'
    addToBasketElement = 'button#product-info__btn-buy'
    addToBasketBtnBeds = 'div.product-card__add-to-card button[data-type=to-cart]'
    popupAddToCart = 'div#added-to-cart'
    mattressPrice = 'p.product-card-2022-meta__price-new'
    bedsPrice = 'p.product-card-2022-meta__price-new'
    mattressName = 'h1 strong'
    bedsName = 'h1 strong'
    popupPrice = 'span.price_new'
    checkout = 'a.added-checkout'
    bedsColorBtn = 'button[data-select=color-material]'
    bedsColor = 'div.product-card__material-title'
    bedsSize = 'button[data-select=size] span'
    bedsBase = 'button[data-select=base]/span'
    bedsSizeBtn = 'button[data-select=size]'
    bedsBaseBtn = 'button[data-select=base]'
    colorList = 'li[data-code=SELECTED_FABRIC_ID][data-in-select-size=true]'
    sizeList = 'li[data-code=SELECTED_HASH_SIZE][data-in-select-color=true]'
    baseList = 'li[data-code=SELECTED_GRID]'
    installmentBtn = 'button[data-test-card-installment]'
    buyOneClickBtn = 'button[data-test-card-click]'
    installmentCity = 'div.col1 a'
    installmentClose = 'div#credit > div.popup__close'
    placeOrderBtn = 'button.cart-widget__actions-btn.btn-primary'

    iconAddToFavourites = 'button[data-test-card-favorites]'
    iconAddToFavouritesIsActive = 'button.is-active[data-test-card-favorites]'
    messageAddToFavourites ='div.toast-message[kam-handled-172802="true"]'
    messageAddToFavourites2 = 'div.toast-message[kam-handled-172802="true"] span'
    
    selectRandomSize() {
        click(this.bedsSizeBtn)
        cy.get(this.sizeList).then((element)=>{
            cy.get(this.sizeList).eq(getRandom(element.length)).click()
        })
    }

    selectRandomColor() {
        click(this.bedsColorBtn)
        cy.get(this.colorList).then((element)=>{
            cy.get(this.colorList).eq(getRandom(element.length)).click()
        })
    }

    selectRandomBase(){
        click(this.bedsBaseBtn)
        cy.get(this.baseList).then((element)=>{
            cy.get(this.baseList).eq(getRandom(element.length)).click()
        })
    }

    addToBasket() {
        click(this.addToBasketElement)
        waitVisibilityElement(this.popupAddToCart)
    }

    addToBasketBeds() {
        click(this.addToBasketBtnBeds)
        waitVisibilityElement(this.popupAddToCart)
    }

    goToCart() {
        click(this.checkout)
    }


}

export default ProductPage