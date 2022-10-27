import {click} from "../../support/commands"

class CartPage {

    cartItemBlock = '//section[@class=\'cart-block order-list\']'
    cartItemBlockTitle = 'div.cart-block__title'
    cartPrice = 'span.cw-totals__amount'
    cartName = 'div.cart-item__main > a'
    cityInput = 'input#city'
    buttonPlaceOrder ='#root-header > header > div.cart-widget > div.cart-widget__widget > div > div > div.cart-widget__scroll-inner > div.cart-widget__actions.mb-32 > button.btn.btn-md.btn-lg.btn-primary.cart-widget__actions-btn'
    

    

    checkCartItem() {
        cy.xpath(this.cartItemBlock, {timeout: 10000}).should('be.visible')
        if (Cypress.config("viewportWidth") > 1000) {
            click(this.cartItemBlockTitle)
        }
    }

}

export default CartPage