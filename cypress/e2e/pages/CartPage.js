import {click} from "../../support/commands"

class CartPage {

    cartItemBlock = '//section[@class=\'cart-block order-list\']'
    cartItemBlockTitle = 'div.cart-block__title'
    cartPrice = 'ul > li:nth-child(1) > span:nth-child(2)'
    cartName = 'div.cart-item__main > a'
    cityInput = 'input#city'

    

    checkCartItem() {
        cy.xpath(this.cartItemBlock, {timeout: 10000}).should('be.visible')
        if (Cypress.config("viewportWidth") > 1000) {
            click(this.cartItemBlockTitle)
        }
    }

}

export default CartPage