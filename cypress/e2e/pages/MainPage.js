import {click, getRandom} from "../../support/commands";

class MainPage {
    search = '#search-form-input'
    submit = '#search-form button.header-main__submit'
    productCard = 'a[data-const=product_link]'
    cookieBtn = 'button.js-cookie-data-warning__close'
    cityInHeader = 'div.header-main__location button'
    cityInHeader2 = 'div[class*=header__location]'
    cityListItem = 'div.cities__result a'
    cityInput = 'div.select-city__inner input[placeholder="Поиск"]'
    
    iconFavouritesNumber = 'a.header-main__tools-favorite[href="/cabinet/favorite/"] div.header-main__tools-sticker'
    iconFavourites = 'a.header-main__tools-item--favorite'
    iconComparation = 'a.header-main__tools-compare[href="/cabinet/compare/"] div.header-main__tools-sticker'
    iconAddToCart = 'button.header-main__tools-item--order'
    iconCart = 'button[title="Корзина"]'

    shops = 'a.kam-169694-header__shops'

    catalog = 'div.swiper-slide-duplicate'
    
    
    leftMenuMobile = 'div#root-header button[title="Меню"]'
    cityListMobile = '#root-header > header > div > div.header-mobile__wrapper.open > nav > div.header-mobile__nav-main > div:nth-child(1) > button'
    cityInHeaderMobile = 'div#root-header i.ico--map~span:nth-child(2)'
    cityListItemMobile = 'div.cities__result ul li a'

    leftMenuMobileClouse = 'button.header-mobile__burger svg'
    popupClose = 'div.popup__close'
    

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

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }



    checkStringInOject(selector, textExpect, textActual) {
        cy.get(selector).then((text)=>{
            textActual = text.text().trim()
            assert(textActual === textExpect, "ошибка")
        })
    }

    
}

export default MainPage