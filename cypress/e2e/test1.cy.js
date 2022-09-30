import MainPage from "./pages/MainPage"
import ProductPage from "./pages/ProductPage";
import {assertContain, assertEqual, click} from "../support/commands";
import CartPage from "./pages/CartPage";

require("cypress-xpath");
// describe('Матрасы', () => {
//     const main = new MainPage();
//     const product = new ProductPage();
//     let cardPrice;
//     let cartPrice;
//     let cardName;
//     let cartName;
//
//     it("Добавление матраса в корзину", () => {
//         main.openMattressPage()
//         main.openRandomCard()
//
//         cy.get(product.mattressPrice).then((element) => {
//             cardPrice = element.text().replaceAll(/[^+\d]/g, '');
//         })
//
//         cy.get(product.mattressName).then((element) => {
//             cardName = element.text()
//         })
//
//         product.addToBasket()
//         product.goToCart()
//
//         cy.get(product.cartPrice).then((element) => {
//             cartPrice = element.text().replaceAll(/[^+\d]/g, '');
//             assertEqual(cardPrice, cartPrice)
//         })
//
//         cy.get(product.cartName).then((element) => {
//             cartName = element.text()
//             assertContain(cartName, cardName)
//         })
//     });
// });

describe('Кровати', () => {
    const main = new MainPage();
    const product = new ProductPage();
    const  cart = new CartPage();
    let cardPrice;
    let cardColor;
    let cardSize;
    let cardBase;
    let cartPrice;
    let cardName;
    let cartName;

    it("Добавление кровати в корзину", () => {
        // main.openBedsPage()
        // main.openRandomCard()
        cy.visit('krovati/orlando.htm')
        product.selectRandomColor()
        product.selectRandomSize()
        product.selectRandomBase()

        cy.get(product.bedsName).then((element) => {
            cardName = element.text()
        })

        cy.get(product.bedsColor).then((element) => {
            cardColor = element.text()
        })
        cy.get(product.bedsSize).then((element) => {
            cardSize = element.text()
        })

        cy.get(product.bedsPrice).then((element) => {
            cardPrice = element.text().replaceAll(/[^+\d]/g, '');
        })

        cy.get(product.bedsBaseBtn).invoke('attr', 'data-selected-base').then((value) => {
            if (value === 0) {
                    cy.get(product.bedsBase).then((element) => {
                        cardBase = element.text()
                        cy.log(cardBase)
                    })
            } else {
                    cy.get(product.bedsBaseBtn).then((element) => {
                        cardBase = element.text()
                        cy.log(cardBase)
                    })
            }
        })
        product.addToBasketBeds()
        product.goToCart()
        cart.checkCartItem()

        cy.get(cart.cartPrice).then((element) => {
            cartPrice = element.text().replaceAll(/[^+\d]/g, '');
            assertEqual(cardPrice, cartPrice)
        })

        cy.get(cart.cartName).then((element) => {
            cartName = element.text()
            assertContain(cartName, cardName)
        })

    });
});
