import {click, getRandom} from "../../support/commands";

class MainPage {
    search = '#search-form-input'
    submit = '#search-form button.header-main__submit'
    productCard = 'a[data-const=product_link'
    cookieBtn = 'button.js-cookie-data-warning__close'
    cityInHeader = 'div.header-main__location button'
    cityInHeader2 = 'div[class*=header__location]'
    cityListItem = 'div.cities__result a'

    open(){
        cy.visit('/')
    }

    closeCookie(){
        click(this.cookieBtn)
    }

    openMattressPage(){
        cy.visit('/matrasy')
    }

    openBedsPage(){
        cy.visit('/krovati')
    }

    openRandomCard(){
        cy.get(this.productCard).then((element) => {
            cy.get(this.productCard).eq(getRandom(element.length)).click()
        })
    }

    getCount(){
        return cy.get(this.productCard).then(($el) => {
            const itemCount = $el.length;
        })
    }

    getCityCount(){
        return cy.get(this.cityListItem).then(($el) => {
            const cityCount = $el.length;
        })
    }

    openRandomCity(){
        var cityName = '';
        var cityNumber;

        click(this.cityInHeader2)

        let number = this.getCityCount()
        cy.log("NUMBER " + number)

        cy.get(this.cityListItem).then(($textCity)=> {
            const cityT = $textCity.eq(number).text
            cy.log("!!!!!!!!!!!CityIn " + cityT)
        })

        cy.get(this.cityListItem).then((element) => {
            click(element.eq(number))
        })
    }
}

export default MainPage