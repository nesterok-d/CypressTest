import MainPage from "./pages/MainPage"
import ProductPage from "./pages/ProductPage";
import {getRandom} from "../support/commands";

require("cypress-xpath");
describe('empty spec', () => {
    const main = new MainPage();
    const product = new ProductPage();
    let count
    it("открытие сайта", () => {
        cy.visit("/")





    })



});