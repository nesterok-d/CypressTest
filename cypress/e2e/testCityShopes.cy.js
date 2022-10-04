import ShopsPage from "../e2e/pages/ShopsPage";
import MainPage from "../e2e/pages/MainPage"
import {assertEqual, click, setText, openPage, setMobileResolution} from "../support/commands";

describe('Салоны', () => {
    const main = new MainPage();
    const shop = new ShopsPage();
    let randomCityNumber;
    let popupCityName2;
    let cityName;
    let cityNameInTitle;

    it('Смена города и проверка города на странице салонов', () => {
        openPage('matrasy/udachnyj-start/askona-basic/basic-easy.htm')
        main.closeCookie()
        cy.wait(3000)

        click(main.cityInHeader2)

        cy.get(main.cityListItem).then((cityList)=>{
            randomCityNumber = main.getRandomInt(cityList.length)
            cityName = cityList.eq(randomCityNumber).text()
            click(cityList.eq(randomCityNumber))
        })

        cy.wait(3000)
        cy.reload()

        click(main.shops)

        cy.get(shop.cityInTitle).then((city) => {
            cityNameInTitle = city.text().trim()
            assert(cityNameInTitle.includes(cityName))
        })

    })

    
})